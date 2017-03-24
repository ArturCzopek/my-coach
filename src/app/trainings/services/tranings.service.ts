import {CyclePreview, SetPreview} from "../../shared/entities/preview.entities";
import {Set} from "../../shared/entities/get.entities";

abstract class TrainingsService {

  abstract getCyclePreviews(): CyclePreview[]

  abstract getCycleTitle(cycleId: number): string;

  abstract getSetsPreviews(cycleId: number): SetPreview[];

  abstract getSets(cycleId: number): string;

  abstract getSet(setId: number): Set;

  abstract getTrainingDates(setId: number);

  abstract getExercises(setId: number);
}
