# Conference FP TS (45 minutes + questions)

## Making the compiler work for you

### The promise of Typescript

- Leverage the type system to model your domain
- Catch errors at compile time to avoid surprises at runtime.
- Refactor with confidence

#### Where Typescript falls short

- Working with impure code
- Managing errors
- Manipulating runtime data

### The promise of functional programming

- Make the code predictable at all times
  - Emphsizing pure functions
  - Encapsulating side effects
- Reusing code through function composition and categories

### How can we benefit from statically typed FP ?

Statically typed FP allows us to write more declarative code, focusing on the *what*
rather than the *how*.

The type allows us to purify function using algebraic data types rather than exceptions, and
model truly total functions. Side effects are clearly identified through the use of IO monads.

This idea, combining functional programming with a strong type system isn't new. It is the fundation of languages like Haskell and ML, and nowadays, it is
gaining popularity in the javascript community through compiled languages like ReasonML, Scala.js, PureScript ...

#### The characteristics of a statically-typed, FP language

- It has support for firt-class functions
- It emphasizes on referentially transparent expressions
- It has ways of handling effectful computations
- It has support for algrebaraic data types (discriminated unions, Either ...)

## The characteristics of a pure function

### Pure functions should be total

## Working with option values

### Interoperate with impure code

https://dev.to/gcanti/interoperability-with-non-functional-code-using-fp-ts-432e

## Refining the domain

### Exceptions break the flow at runtime

### Using Either

## Should I use Option or Either, the cheatsheet ?

## Composing pure functions

### Conclusion : how does fp-ts fit in the initial definition ?

#### What is left to explore

## Questions
