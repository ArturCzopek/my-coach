export class NewCycle {
  constructor(public startDate: Date,
              public sets: NewSet[]) {

  }
}

export class NewExercise {
  constructor(public setId: number, public exerciseName: string, public exerciseDescription?: string) {

  }
}

export class NewExerciseSession {
  constructor(public exerciseId: number,
              public series: NewSeries[],
              public empty: boolean = false) {

  }
}

export class NewPrice {
  constructor(public productId: number,
              public value: number,
              public quantity: number,
              public place?: string,
              public priceDate?: Date) {
  }
}

// screen can be file or string, not sure how sending files will be implemented
export class NewProduct {
  constructor(public productId: number = -1, public productName: string,
              public image?: string|any) {
  }
}

export class NewReport {
  constructor(public content: string,
              public startDate: Date,
              public endDate: Date) {
  }
}

export class NewSeries {
  constructor(public weight: number,
              public repeats: number,
              public comment?: string) {
  }
}

export class NewSet {
  constructor(public setName: string,
              public exercises: NewExercise[]) {
  }
}

export class NewTraining {
  constructor(public setId: number,
              public exerciseSessions: NewExerciseSession[],
              public trainingDate: Date) {
  }
}

export class NewWeight {
  constructor(public value: number,
              public measurementDate?: Date) {
  }
}

export class ShoppingList {
  constructor(public place: string,
              public prices: NewPrice[],
              public shoppingDate?: Date) {
  }
}
