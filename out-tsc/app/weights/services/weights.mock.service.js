var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injector, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Weight } from "../../shared/entities/get.entities";
import { WEIGHT_LIST } from "../../shared/entities/mock-data/weights.mock-data";
import { WEIGHTS_PREVIEWS_LIST } from "../../shared/entities/mock-data/previews/weight-previews.mock-data";
import { WeightsService } from "./weights.service";
import { DOES_NOT_CONTAIN } from "../../shared/global.values";
import { ServiceInjector } from "../../shared/services/service.injector";
var WeightsMockService = (function (_super) {
    __extends(WeightsMockService, _super);
    function WeightsMockService(injector) {
        var _this = _super.call(this, injector.get(ServiceInjector)) || this;
        _this.injector = injector;
        _this.newId = WEIGHT_LIST[0].length + WEIGHT_LIST[1].length;
        return _this;
    }
    WeightsMockService.prototype.getWeightsPreviews = function () {
        return Observable.create(function (observer) {
            // timeout is simulation of 'getting from http'
            setTimeout(function () {
                observer.next(WEIGHTS_PREVIEWS_LIST);
            }, 1000);
            setTimeout(function () {
                observer.complete();
            }, 1100);
        });
    };
    ;
    WeightsMockService.prototype.getWeights = function (weightsPreview) {
        return Observable.create(function (observer) {
            var weightsToReturn;
            if (weightsPreview.month === 10) {
                weightsToReturn = WEIGHT_LIST[0];
            }
            else {
                weightsToReturn = WEIGHT_LIST[1];
            }
            // timeout is simulation of 'getting from http'
            setTimeout(function () {
                observer.next(weightsToReturn);
            }, 1000);
            setTimeout(function () {
                observer.complete();
            }, 1100);
        });
    };
    WeightsMockService.prototype.getAllDays = function (weights) {
        var days = [];
        weights.forEach(function (weight) {
            days.push(weight.measurementDate.getDate());
        });
        return days;
    };
    WeightsMockService.prototype.getAllValues = function (weights) {
        var values = [];
        weights.forEach(function (weight) {
            values.push(weight.value);
        });
        return values;
    };
    // for mock we add only to second month
    WeightsMockService.prototype.addWeight = function (weightToAdd) {
        var weightId = this.newId;
        this.newId++;
        var weight = new Weight(weightId, weightToAdd.value, weightToAdd.measurementDate);
        WEIGHT_LIST[1].push(weight);
    };
    WeightsMockService.prototype.editWeights = function (weights) {
        for (var _i = 0, weights_1 = weights; _i < weights_1.length; _i++) {
            var weightToUpdate = weights_1[_i];
            for (var _a = 0, WEIGHT_LIST_1 = WEIGHT_LIST; _a < WEIGHT_LIST_1.length; _a++) {
                var weightList = WEIGHT_LIST_1[_a];
                var weightIndex = weightList.indexOf(weightToUpdate);
                if (weightIndex === DOES_NOT_CONTAIN) {
                    continue;
                }
                else {
                    weightList[weightIndex] = weightToUpdate;
                    break;
                }
            }
        }
    };
    WeightsMockService.prototype.deleteWeights = function (weights) {
        for (var _i = 0, weights_2 = weights; _i < weights_2.length; _i++) {
            var weightToDelete = weights_2[_i];
            for (var _a = 0, WEIGHT_LIST_2 = WEIGHT_LIST; _a < WEIGHT_LIST_2.length; _a++) {
                var weightList = WEIGHT_LIST_2[_a];
                var weightIndex = weightList.indexOf(weightToDelete);
                if (weightIndex === DOES_NOT_CONTAIN) {
                    continue;
                }
                else {
                    weightList.splice(weightIndex, 1);
                    break;
                }
            }
        }
    };
    return WeightsMockService;
}(WeightsService));
WeightsMockService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Injector])
], WeightsMockService);
export { WeightsMockService };
//# sourceMappingURL=/home/arturczopek/Projects/MyCoach/front/src/app/weights/services/weights.mock.service.js.map