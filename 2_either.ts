import {Either, left, right, map, tryCatch} from 'fp-ts/lib/Either'
import {cons} from 'fp-ts/lib/Array';

interface User {
  username: string;
  firstName: string;
  lastName: string;
}

enum AuthenticationError {
  InvalidUsername,
  InvalidPassword,
  BannedUser,
  EmailAddressNotConfirmed
}

export const authenticate = (username: string, password: string): Either<AuthenticationError, User> => {
  if (password === 'toto') return right({
    username,
    firstName: 'John',
    lastName: 'Doe'
  })

  return left(AuthenticationError.InvalidPassword)
}

const validResult = authenticate('jdoe', 'toto')   // => right(User ...)
const invalidResult = authenticate('jdoe', 'tata') // => left(AuthenticationError.InvalidPassword)

/*
 * Transforming Either works almost like Option
 */

export const getFullName = (user: User) => `${user.firstName} ${user.lastName}`

map(getFullName)(validResult) // => right('John  Doe')
map(getFullName)(invalidResult) // => left(AuthenticationError.InvalidPassword)

/*
 * You can build Eithers from impure code
 */

export const unsafeAuthenticate = (username: string, password: string): User => {
  throw new Error("Invalid Password")
}

tryCatch(() => unsafeAuthenticate('jdoe', '1234'), reason => String(reason)) // => left('Error : Invalid Password')

