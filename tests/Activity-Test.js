const chai = require("chai");
const expect = chai.expect;

let Activity = require("../classes/Activity");

let activityData = [
    {
    "userID": 1,
    "date": "2019/09/20",
    "numSteps": 2,
    "minutesActive": 2,
    "flightsOfStairs": 19
    },
    {
    "userID": 1,
    "date": "2019/09/21",
    "numSteps": 2,
    "minutesActive": 2,
    "flightsOfStairs": 19
    },
    {
    "userID": 1,
    "date": "2019/09/22",
    "numSteps": 2,
    "minutesActive": 2,
    "flightsOfStairs": 19
    },
    {
    "userID": 1,
    "date": "2019/09/23",
    "numSteps": 2040,
    "minutesActive": 289,
    "flightsOfStairs": 46
    },
    {
    "userID": 1,
    "date": "2019/09/24",
    "numSteps": 11105,
    "minutesActive": 118,
    "flightsOfStairs": 25
    },
    {
    "userID": 1,
    "date": "2019/09/25",
    "numSteps": 11105,
    "minutesActive": 118,
    "flightsOfStairs": 25
    },
    {
    "userID": 1,
    "date": "2019/09/26",
    "numSteps": 11105,
    "minutesActive": 118,
    "flightsOfStairs": 25
    },
    {
    "userID": 1,
    "date": "2019/09/27",
    "numSteps": 11105,
    "minutesActive": 118,
    "flightsOfStairs": 25
    },
    {
    "userID": 1,
    "date": "2019/09/28",
    "numSteps": 11105,
    "minutesActive": 118,
    "flightsOfStairs": 25
    },
    {
    "userID": 1,
    "date": "2019/09/29",
    "numSteps": 11105,
    "minutesActive": 118,
    "flightsOfStairs": 25
    },
    {
    "userID": 1,
    "date": "2019/09/30",
    "numSteps": 11105,
    "minutesActive": 118,
    "flightsOfStairs": 25
    }
];
let userData = [
    {
        "id": 1,
        "name": "Luisa Hane",
        "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        "email": "Diana.Hayes1@hotmail.com",
        "strideLength": 4.3,
        "dailyStepGoal": 10000,
        "friends": [
          16,
          4,
          8
        ]
    },
]

describe('Activity', () => {

    it('1. should be a function', function() {
        const a = new Activity(activityData);
        expect(Activity).to.be.a('function');
    });

    it('2. should be an instance of Activity', function() {
        const a = new Activity(activityData);
        expect(a).to.be.an.instanceof(Activity);
    });

    // it("3. should average all user/'s amount of stairs climbed on a given date", () => {
        
    //     const a = new Activity(activityData);

    //     console.loga.data

    //     expect(a.stairsClimbedOnAGivenDate("2019/09/22")).to.equal(20);
    // });

    it("4. should average a user/'s amount of minutes active for a given week", () => {
        
        const a = new Activity(activityData);
        expect(a.averageMinutesActiveForAGivenWeek("2019/09/24", "2019/09/30")).to.equal(118);
    });

    it("5. should average a user/'s amount of minutes active for the last week", () => {
        
        const a = new Activity(activityData);
        expect(a.averageMinutesActiveForTheLastWeek()).to.equal(118);
    });

    // it("6. should average a user/'s amount of minutes active for the last week", () => {
        
    //     const a = new Activity(activityData);
    //     expect(a.averageMinutesActiveForTheLastWeek()).to.equal(118);
    // });

    // it("7. should return the days where the user exceeded their step goal", () => {
        
    //     const a = new Activity(activityData);
    //     expect(a.daysWhereTheyBeatStepGoal()).to.equal(118);
    // });

    it("8. should return a user/'s all time stair climbing record", () => {
        
        const a = new Activity(activityData);
        expect(a.stairRecord()).to.equal(46);
    });
});