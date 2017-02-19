var NewCycle = (function () {
    function NewCycle(startDate, sets) {
        this.startDate = startDate;
        this.sets = sets;
    }
    return NewCycle;
}());
export { NewCycle };
var NewExerciseSession = (function () {
    function NewExerciseSession(exerciseId, series) {
        this.exerciseId = exerciseId;
        this.series = series;
    }
    return NewExerciseSession;
}());
export { NewExerciseSession };
var NewPrice = (function () {
    function NewPrice(productId, value, quantity, place, priceDate) {
        this.productId = productId;
        this.value = value;
        this.quantity = quantity;
        this.place = place;
        this.priceDate = priceDate;
    }
    return NewPrice;
}());
export { NewPrice };
var NewProduct = (function () {
    function NewProduct(productName, screenUrl) {
        this.productName = productName;
        this.screenUrl = screenUrl;
    }
    return NewProduct;
}());
export { NewProduct };
var NewReport = (function () {
    function NewReport(content, startDate, endDate) {
        this.content = content;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    return NewReport;
}());
export { NewReport };
var NewSeries = (function () {
    function NewSeries(weight, repeats, comment) {
        this.weight = weight;
        this.repeats = repeats;
        this.comment = comment;
    }
    return NewSeries;
}());
export { NewSeries };
var NewSet = (function () {
    function NewSet(setName, exercises) {
        this.setName = setName;
        this.exercises = exercises;
    }
    return NewSet;
}());
export { NewSet };
var NewTraining = (function () {
    function NewTraining(setId, exerciseSessions, date) {
        this.setId = setId;
        this.exerciseSessions = exerciseSessions;
        this.date = date;
    }
    return NewTraining;
}());
export { NewTraining };
var NewWeight = (function () {
    function NewWeight(value, measurementDate) {
        this.value = value;
        this.measurementDate = measurementDate;
    }
    return NewWeight;
}());
export { NewWeight };
var ShoppingList = (function () {
    function ShoppingList(place, prices, shoppingDate) {
        this.place = place;
        this.prices = prices;
    }
    return ShoppingList;
}());
export { ShoppingList };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/shared/entities/add.entities.js.map