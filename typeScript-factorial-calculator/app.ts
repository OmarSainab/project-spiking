function calculateRepetitionsForGoal(goal: string, frequency: number, durationInMonths: number): number {

        var durationInWeeks = durationInMonths * '4'
    var repetitionsNeeded = frequency * durationInWeeks;
  
    return repetitionsNeeded;
  }
  
  var goal = "Exercise 3 times a week for 6 months";
  var frequency = 3;
  var durationInMonths = 6;
  
  var repetitionsNeeded = calculateRepetitionsForGoal(goal, frequency, durationInMonths);
  
  console.log(`To achieve the goal "${goal}," you need to do ${repetitionsNeeded} repetitions.`);
  