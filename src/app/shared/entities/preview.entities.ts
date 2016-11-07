export class CyclePreview {
  constructor (
    private cycleId: number,
    private startDate: Date,
    private endDate?: Date
  ) {}
}

export class ProductPreview {
  constructor (
    public productId: number,
    private productName: string,
    private screenUrl: string,
    private average: number
  ) {}
}

export class ReportPreview {
  constructor (
    public reportId: number,
    private startDate: Date,
    private endDate: Date
  ) {}
}

export class WeightPreview {
  constructor (
    private month: number,
    private year: number
  ) {}
}
