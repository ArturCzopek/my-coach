export class NewCycle {
  constructor(private startDate: Date,
              private sets: NewSet[]) {

  }
}

export class NewExerciseSession {
  constructor(private exerciseId: number,
              private series: NewSeries) {

  }
}

export class NewPrice {
  constructor(private productId: number,
              private value: number,
              private quantity: number,
              private place?: string,
              private priceDate?: Date) {
  }
}

export class NewProduct {
  constructor(private productName: string,
              private screenUrl?: string) {
  }
}

export class NewReport {
  constructor(public content: string,
              public startDate: Date,
              public endDate?: Date) {
  }
}

export class NewSeries {
  constructor(private weight: number,
              private repeats: number,
              private comment?: string) {
  }
}

export class NewSet {
  constructor(private setName: string,
              private exercises: string[]) {
  }
}

export class NewTraining {
  constructor(private setId: number,
              private exerciseSessions: NewExerciseSession[],
              private date?: Date) {
  }
}

export class NewWeight {
  constructor(public value: number,
              public measurementDate?: Date) {
  }
}

export class ShoppingList {
  constructor(private place: string,
              private prices: NewPrice[],
              shoppingDate?: Date) {

  }
}
