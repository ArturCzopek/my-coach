export class Cycle {
  constructor(public cycleId: number,
              public sets: Set[],
              public startDate: Date,
              public endDate?: Date) {
  }
}

export class Exercise {
  constructor(public exerciseId: number,
              public exerciseName: string,
              public exerciseSessions: ExerciseSession[]) {
  }
}

export class ExerciseSession {
  constructor(public exereciseSessionId: number,
              public series: Series[]) {
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
  constructor(public productId: number,
              public productName: string,
              public screenUrl: string,
              public average: number) {
  }
}


export class Report {
  constructor(public reportId: number,
              public content: string,
              public startDate: Date,
              public endDate: Date) {
  }
}

export class Series {
  constructor(public seriesId: number,
              public repeats: number,
              public weight: number,
              public comment?: string) {
  }
}

export class Set {
  constructor(public setId: number,
              public setName: string,
              public exercises: Exercise[],
              public trainings: Training[]) {
  }
}

export class Training {
  constructor(public trainingId: number,
              public trainingDate: Date) {
  }
}

export class Weight {
  constructor(public weightId: number,
              public value: number,
              public measurementDate: Date) {
  }
}
