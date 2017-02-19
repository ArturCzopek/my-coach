var BaseCardComponent = (function () {
    function BaseCardComponent() {
    }
    BaseCardComponent.prototype.ngOnInit = function () {
        // false showData because at first toggle we want to see true to load data
        this.showData = false;
        this.isLoading = true;
        this.arrowImageClass = 'left-arrow';
    };
    BaseCardComponent.prototype.toggleShow = function () {
        this.showData = !this.showData;
        if (this.showData) {
            this.arrowImageClass = 'down-arrow';
        }
        else {
            this.arrowImageClass = 'left-arrow';
        }
    };
    BaseCardComponent.prototype.getLoadingStyle = function () {
        if (this.isLoading) {
            return "loading";
        }
        else {
            return "";
        }
    };
    return BaseCardComponent;
}());
export { BaseCardComponent };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/shared/components/base-card.component.js.map