const chai = require("chai");
const expect = chai.expect;

let SleepRepository = require("../classes/SleepRepository");
let sleepData = [
    {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 2,
        "date": "2019/06/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 1,
        "date": "2019/07/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 2,
        "date": "2019/07/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 1,
        "date": "2019/07/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 2,
        "date": "2019/07/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 1,
        "date": "2019/08/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 2,
        "date": "2019/08/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 1,
        "date": "2019/09/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 2,
        "date": "2019/09/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 1,
        "date": "2019/10/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 2,
        "date": "2019/10/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 1,
        "date": "2019/11/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 2,
        "date": "2019/11/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 1,
        "date": "2019/12/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 2,
        "date": "2019/12/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 1,
        "date": "2019/13/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 2,
        "date": "2019/13/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 1,
        "date": "2019/14/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 2,
        "date": "2019/14/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
];

describe('SleepRepository', () => {
    it('should be a function', function() {
        const a = new SleepRepository(sleepData);

        expect(SleepRepository).to.be.a('function');
    });
    it('should be an instance of SleepRepository', function() {
        const a = new SleepRepository(sleepData);

        expect(a).to.be.an.instanceof(SleepRepository);
    });
    it('should return the average sleep quality for all users', () => {
        const a = new SleepRepository(sleepData);

        expect(a.getTotalSleepQuality()).to.equal(2);
    });
    it('should return all users with an average sleep quality greater than 3 for a given week', function() {
        const a = new SleepRepository(sleepData);

        expect(a).to.equal();
    });
    it('should return the users who had the most sleep for a given day', function() {
        const a = new SleepRepository(sleepData);
        
        expect(a).to.equal();
    });
});