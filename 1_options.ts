import {Option, map, chain, none, some, getOrElse, option} from 'fp-ts/lib/Option'
import { array } from 'fp-ts/lib/Array'


/**
 * Making a function pure by expanding the output
 */
const unsafeDivide = (a: number, b: number): number => a / b

unsafeDivide(12, 0) // => Infinity since division is undefined for 0

const divide = (a: number, b: number): Option<number> =>
  b === 0 ? none : some(a /b)

const optionA = divide(6, 2)  // => some(3)
const optionB = divide(42, 0) // => none

/**
 * Getting the value of an option
 */

getOrElse(() => 0)(optionA) // => 3
getOrElse(() => 0)(optionA) // => 0

/**
 * Transforming options
 */

const multiplyBy4 = (n: number) => n * 4

map(multiplyBy4)(optionA)  // => some(12)
map(multiplyBy4)(optionB)  // => none

chain((n: number) => divide(n, 10))(optionA) // => some(1.2)
chain((n: number) => divide(n, 10))(optionB) // => none
chain((n: number) => divide(n, 0))(optionA)  // => none

/**
 * Working with arrays of options
 */

const listOfOptions = [some("John"), some("Mary"), some("Greg")]

array.sequence(option)(listOfOptions) // => some(["John", "Mary", "Greg"])
