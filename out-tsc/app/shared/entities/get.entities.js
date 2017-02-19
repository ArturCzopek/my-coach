var Cycle = (function () {
    function Cycle(cycleId, sets, startDate, endDate) {
        this.cycleId = cycleId;
        this.sets = sets;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    return Cycle;
}());
export { Cycle };
var Exercise = (function () {
    function Exercise(exerciseId, exerciseName, exerciseSessions) {
        this.exerciseId = exerciseId;
        this.exerciseName = exerciseName;
        this.exerciseSessions = exerciseSessions;
    }
    return Exercise;
}());
export { Exercise };
var ExerciseSession = (function () {
    function ExerciseSession(exereciseSessionId, series) {
        this.exereciseSessionId = exereciseSessionId;
        this.series = series;
    }
    return ExerciseSession;
}());
export { ExerciseSession };
var Price = (function () {
    function Price(priceId, priceDate, place, quantity, value) {
        this.priceId = priceId;
        this.priceDate = priceDate;
        this.place = place;
        this.quantity = quantity;
        this.value = value;
    }
    return Price;
}());
export { Price };
var Report = (function () {
    function Report(reportId, content, startDate, endDate) {
        this.reportId = reportId;
        this.content = content;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    return Report;
}());
export { Report };
var Series = (function () {
    function Series(seriesId, repeats, weight, comment) {
        this.seriesId = seriesId;
        this.repeats = repeats;
        this.weight = weight;
        this.comment = comment;
    }
    return Series;
}());
export { Series };
var Set = (function () {
    function Set(setId, setName, exercises, trainings) {
        this.setId = setId;
        this.setName = setName;
        this.exercises = exercises;
        this.trainings = trainings;
    }
    return Set;
}());
export { Set };
var Training = (function () {
    function Training(trainingId, trainingDate) {
        this.trainingId = trainingId;
        this.trainingDate = trainingDate;
    }
    return Training;
}());
export { Training };
var Weight = (function () {
    function Weight(weightId, value, measurementDate) {
        this.weightId = weightId;
        this.value = value;
        this.measurementDate = measurementDate;
    }
    return Weight;
}());
export { Weight };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/shared/entities/get.entities.js.map