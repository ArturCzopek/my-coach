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
    public startDate: Date,
    public endDate: Date
  ) {}
}

export class WeightsPreview {
  constructor (
    public month: number,
    public year: number
  ) {}
}
