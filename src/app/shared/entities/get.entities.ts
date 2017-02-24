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
  constructor(public priceId: number,
              public priceDate: Date,
              public place: string,
              public quantity: number,
              public value: number,
              public productId: number) {
  }
}

export class Product {
  constructor (
    public productId: number,
    public productName: string,
    public screenUrl: string,
    public average: number
  ) {}
}


export class Report {
  constructor(public reportId: number,
              public content: string,
              public startDate: Date,
              public endDate: Date) {
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
