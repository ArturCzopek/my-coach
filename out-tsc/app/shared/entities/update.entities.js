var UpdateCycle = (function () {
    function UpdateCycle(cycleId, startDate, endDate) {
        this.cycleId = cycleId;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    return UpdateCycle;
}());
export { UpdateCycle };
var UpdatePrice = (function () {
    function UpdatePrice(priceId, priceDate, quantity, value, place) {
        this.priceId = priceId;
        this.priceDate = priceDate;
        this.quantity = quantity;
        this.value = value;
        this.place = place;
    }
    return UpdatePrice;
}());
export { UpdatePrice };
var UpdateProduct = (function () {
    function UpdateProduct(productId, productName, screenUrl) {
        this.productId = productId;
        this.productName = productName;
        this.screenUrl = screenUrl;
    }
    return UpdateProduct;
}());
export { UpdateProduct };
var UpdateSet = (function () {
    function UpdateSet(setId, setName) {
        this.setId = setId;
        this.setName = setName;
    }
    return UpdateSet;
}());
export { UpdateSet };
var UpdateWeight = (function () {
    function UpdateWeight(weightId, value, measurementDate) {
        this.weightId = weightId;
        this.value = value;
        this.measurementDate = measurementDate;
    }
    return UpdateWeight;
}());
export { UpdateWeight };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/shared/entities/update.entities.js.map