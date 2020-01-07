//The Elves quickly load you into a spacecraft and prepare to launch.

// At the first Go / No Go poll, every Elf is Go until the Fuel Counter - Upper.They haven't determined the amount of fuel required yet.

// Fuel required to launch a given module is based on its mass.Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

// For example:

// For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
// For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
// For a mass of 1969, the fuel required is 654.
// For a mass of 100756, the fuel required is 33583.
// The Fuel Counter - Upper needs to know the total fuel requirement.To find it, individually calculate the fuel needed for the mass of each module(your puzzle input), then add together all the fuel values.

// What is the sum of the fuel requirements for all of the modules on your spacecraft ?

// input listed here
let inputNumbers = [
    73365,
    84016,
    98122,
    114871,
    111575,
    130294,
    59341,
    102810,
    92986,
    81275,
    83155,
    74530,
    67858,
    54107,
    62099,
    82535,
    122085,
    139127,
    131939,
    130125,
    96285,
    70572,
    129325,
    132261,
    69597,
    93574,
    70089,
    130711,
    109220,
    50155,
    98250,
    51054,
    100028,
    86985,
    106638,
    116993,
    95130,
    115571,
    56707,
    105988,
    123358,
    95470,
    71094,
    126310,
    66153,
    128788,
    51605,
    70044,
    70180,
    141905,
    96494,
    89332,
    96688,
    131936,
    83782,
    108218,
    60650,
    91289,
    126406,
    112939,
    76303,
    115774,
    135382,
    116478,
    77898,
    98611,
    89155,
    114878,
    110085,
    114482,
    61585,
    103480,
    99198,
    81082,
    113501,
    100167,
    100085,
    128747,
    79731,
    93289,
    121516,
    116380,
    56592,
    146611,
    132595,
    60483,
    105828,
    118923,
    141972,
    126450,
    77214,
    97406,
    77745,
    101982,
    120919,
    71085,
    118300,
    92440,
    115184,
    142447];

function fuelCounterUpper(mass) {

    // first divide by 3
    let dividedMass = mass / 3;
    // round down
    let roundDown = Math.floor(dividedMass);
    // then subtract 2
    let fuelNeededForEachModule = roundDown - 2;
    // console.log('fuel needed: ', fuelNeededForEachModule);
    return fuelNeededForEachModule;

}

function fuelCounterWholeShip(arrayOfModuleMasses) {
    // try and get our input as an array
    let inputArray = Array.from(arrayOfModuleMasses);
    // declare a total count of fuel
    let totalFuel = 0;
    for (let number of inputArray) {
        let moduleFuel = fuelCounterUpper(number);
        totalFuel += moduleFuel;
    }

    console.log('totalFuel needed: ', totalFuel);
    return totalFuel;
}
// tests go here:
// console.log(fuelCounterUpper(12));
// console.log(fuelCounterUpper(14));
// console.log(fuelCounterUpper(1969));
// console.log(fuelCounterUpper(100756));

// all successful

console.log(fuelCounterWholeShip(inputNumbers));

// part 2
// During the second Go / No Go poll, the Elf in charge of the Rocket Equation Double - Checker stops the launch sequence.Apparently, you forgot to include additional fuel for the fuel you just added.

// Fuel itself requires fuel just like a module - take its mass, divide by three, round down, and subtract 2. However, that fuel also requires fuel, and that fuel requires fuel, and so on.Any mass that would require negative fuel should instead be treated as if it requires zero fuel; the remaining mass, if any, is instead handled by wishing really hard, which has no mass and is outside the scope of this calculation.

//     So, for each module mass, calculate its fuel and add it to the total.Then, treat the fuel amount you just calculated as the input mass and repeat the process, continuing until a fuel requirement is zero or negative.For example:

// A module of mass 14 requires 2 fuel.This fuel requires no further fuel(2 divided by 3 and rounded down is 0, which would call for a negative fuel), so the total fuel required is still just 2.
// At first, a module of mass 1969 requires 654 fuel.Then, this fuel requires 216 more fuel(654 / 3 - 2). 216 then requires 70 more fuel, which requires 21 fuel, which requires 5 fuel, which requires no further fuel.So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.
// The fuel required by a module of mass 100756 and its fuel is: 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.
// What is the sum of the fuel requirements for all of the modules on your spacecraft when also taking into account the mass of the added fuel ? (Calculate the fuel requirements for each module separately, then add them all up at the end.)

function fuelCounterUpperNowCountingFuel(mass) {

    // first divide by 3
    let dividedMass = mass / 3;
    // round down
    let roundDown = Math.floor(dividedMass);
    // then subtract 2
    let baseFuelNeededForModule = roundDown - 2;
    console.log('base fuel needed: ', baseFuelNeededForModule);
    let countdownFuel = baseFuelNeededForModule;
    console.log('countdown fuel before loop: ', countdownFuel);
    // get a running total for fuel's fuel
    let fuelForFuel = 0;

    while ((Math.floor(countdownFuel / 3) - 2) > 0) {
        let recursiveFuel = Math.floor(countdownFuel / 3) - 2;
        console.log('recursive fuel: ', recursiveFuel);
        fuelForFuel += recursiveFuel;
        console.log('fuel for fuel total now: ', fuelForFuel);
        
        countdownFuel = Math.floor(countdownFuel / 3) - 2;
    }

    console.log('fuel for fuel after loop: ', fuelForFuel);

    let totalFuelForModule = baseFuelNeededForModule + fuelForFuel;

    console.log('total fuel needed: ', totalFuelForModule);

    return totalFuelForModule;

}

console.log('test counting fuel, should be 2: ', fuelCounterUpperNowCountingFuel(14));
console.log('test counting fuel, should be 966: ', fuelCounterUpperNowCountingFuel(1969));

