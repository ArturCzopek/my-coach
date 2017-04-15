export class CyclePreview {
  constructor (
    public cycleId: number,
    public finished: boolean,
    public startDate: Date,
    public endDate?: Date
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
