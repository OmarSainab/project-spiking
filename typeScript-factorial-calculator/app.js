function calculateRepetitionsForGoal(goal, frequency, durationInMonths) {
    var durationInWeeks = durationInMonths * '4';
    var repetitionsNeeded = frequency * durationInWeeks;
    return repetitionsNeeded;
}
var goal = "Exercise 3 times a week for 6 months";
var frequency = 3;
var durationInMonths = 6;
var repetitionsNeeded = calculateRepetitionsForGoal(goal, frequency, durationInMonths);
console.log("To achieve the goal \"".concat(goal, ",\" you need to do ").concat(repetitionsNeeded, " repetitions."));
