export class UpdateCycle {
  constructor(private cycleId: number,
              private startDate?: Date,
              private endDate?: Date) {
  }
}

export class UpdatePrice {
  constructor(private priceId: number,
              private priceDate?: Date,
              private quantity?: number,
              private value?: number,
              private place?: string) {
  }
}

export class UpdateProduct {
  constructor(private productId: number,
              private productName?: string,
              private screenUrl?: string) {
  }
}

export class UpdateSet {
  constructor(private setId: number,
              private setName: string) {
  }
}

export class UpdateWeight {
  constructor(private weightId: number,
              private value?: number,
              private measurementDate?: Date) {
  }
}
