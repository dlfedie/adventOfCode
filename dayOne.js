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

// input listed at the bottom 


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

// tests go here:
// console.log(fuelCounterUpper(12));
// console.log(fuelCounterUpper(14));
// console.log(fuelCounterUpper(1969));
// console.log(fuelCounterUpper(100756));

// all successful
console.log(fuelCounterUpper(
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
    142447,
));



// input: 
// 73365
// 84016
// 98122
// 114871
// 111575
// 130294
// 59341
// 102810
// 92986
// 81275
// 83155
// 74530
// 67858
// 54107
// 62099
// 82535
// 122085
// 139127
// 131939
// 130125
// 96285
// 70572
// 129325
// 132261
// 69597
// 93574
// 70089
// 130711
// 109220
// 50155
// 98250
// 51054
// 100028
// 86985
// 106638
// 116993
// 95130
// 115571
// 56707
// 105988
// 123358
// 95470
// 71094
// 126310
// 66153
// 128788
// 51605
// 70044
// 70180
// 141905
// 96494
// 89332
// 96688
// 131936
// 83782
// 108218
// 60650
// 91289
// 126406
// 112939
// 76303
// 115774
// 135382
// 116478
// 77898
// 98611
// 89155
// 114878
// 110085
// 114482
// 61585
// 103480
// 99198
// 81082
// 113501
// 100167
// 100085
// 128747
// 79731
// 93289
// 121516
// 116380
// 56592
// 146611
// 132595
// 60483
// 105828
// 118923
// 141972
// 126450
// 77214
// 97406
// 77745
// 101982
// 120919
// 71085
// 118300
// 92440
// 115184
// 142447

