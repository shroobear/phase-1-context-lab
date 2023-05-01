/* Your Code Here */
function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    };
};

let createEmployeeRecords= function(arr) {
    return arr.map(createEmployeeRecord);
};

let createTimeInEvent = function(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return this
};

let createTimeOutEvent = function(dateStamp) {
    const [date, hour] = dateStamp.split(" ")
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

let hoursWorkedOnDate = function(soughtDate) {
    let inEvent = this.timeInEvents.find(function(e) {
        return e.date === soughtDate
    })
    let outEvent = this.timeOutEvents.find(function(e) {
        return e.date === soughtDate
    })
    return (outEvent.hour - inEvent.hour) / 100
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const wagesEarnedOnDate = function (soughtDate) {
    let payOwed = hoursWorkedOnDate.call(this, soughtDate) * this.payPerHour
    return parseFloat(payOwed.toString())
}

const findEmployeeByFirstName = function (srcArray, firstName) {
    return srcArray.find(function(rec) {
        return rec.firstName === firstName
    })
}

let calculatePayroll = function(arrayofEmployeeRecords) {
    return arrayofEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}