export class Cycle {
  constructor(private cycleId: number,
              private sets: Set[],
              private startDate: Date,
              private endDate?: Date) {
  }
}

export class Exercise {
  constructor(private exerciseId: number,
              private exerciseName: string,
              private exerciseSessions: ExerciseSession[]) {
  }
}

export class ExerciseSession {
  constructor(private exereciseSessionId: number,
              private series: Series[]) {
  }
}

export class Price {
  constructor(private priceId: number,
              private priceDate: Date,
              private place: string,
              private quantity: number,
              private value: number) {
  }
}

export class Report {
  constructor(private reportId: number,
              private content: string,
              private startDate: Date,
              private endDate: Date) {
  }
}

export class Series {
  constructor(private seriesId: number,
              private repeats: number,
              private weight: number,
              private comment?: string) {
  }
}

export class Set {
  constructor(private setId: number,
              private setName: string,
              private exercises: Exercise[],
              private trainings: Training[]) {
  }
}

export class Training {
  constructor(private trainingId: number,
              private trainingDate: Date) {
  }
}

export class Weight {
  constructor(public weightId: number,
              public value: number,
              public measurementDate: Date) {
  }
}
