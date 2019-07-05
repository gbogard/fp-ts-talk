/**
 * Making a function pure by reducing the input
 */

interface Appliance {
  power: number;
}

class Cup<A> {}

class Kettle implements Appliance {
  power = 100
}
class CoffeeMaker implements Appiance {
  power = 100
}
class Microwave implements Appliance {
  power = 200
}

const unsafePour = (appliance: Appliance): Cup<any> => {
  if (appliance instanceof CoffeeMaker) {
    return new Cup()
  }
  if (appliance instanceof Kettle) {
    return new Cup()
  }
  throw new Error("This appliance doesn't support pourring")
}

/**
 * First approach : using discriminated unions
 */


/**
 * Second approach : using a typeclass
 */
