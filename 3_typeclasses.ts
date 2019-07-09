/**
 * Making a function pure by reducing the input
 */
interface Coffee {}
interface Water {}

interface Appliance {
  power: number;
}

class Cup<A> {}

class Kettle implements Appliance {
  power = 100
}
class CoffeeMaker implements Appliance {
  power = 100
}
class Microwave implements Appliance {
  power = 200
}

const unsafePour = (appliance: Appliance): Cup<any> => {
  if (appliance instanceof CoffeeMaker) {
    return new Cup<Coffee>()
  }
  if (appliance instanceof Kettle) {
    return new Cup<Water>()
  }
  throw new Error("This appliance doesn't support pourring")
}

/**
 * First approach : using discriminated unions
 */

type AppliancesThatCanPour = Kettle | CoffeeMaker

const pour = (appliance: AppliancesThatCanPour): Cup<any> => {
  if (appliance instanceof CoffeeMaker) {
    return new Cup<Coffee>()
  }
  if (appliance instanceof Kettle) {
    return new Cup<Water>()
  }
}

/**
 * Second approach : using a typeclass
 */

interface CanPour<A, B> {
  pour(appliance: A): Cup<B>
}

const coffeeMakerCanPour = {
  pour: (_appliance: CoffeeMaker): Cup<Coffee> => new Cup<Coffee>()
}

const kettleCanPour = {
  pour: (_appliance: Kettle): Cup<Water> => new Cup<Water>()
}

const pour2 = <A, B>(appliance: A, canPour: CanPour<A, B>): Cup<B> => canPour.pour(appliance)

const kettle = new Kettle()
const coffeeMaker = new CoffeeMaker()

const cupOfCoffee = coffeeMakerCanPour.pour(coffeeMaker)
const cupOfWater = pour2(kettle, kettleCanPour)
