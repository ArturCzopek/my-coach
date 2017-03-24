export class CyclePreview {
  constructor (
    private cycleId: number,
    private startDate: Date,
    private endDate?: Date
  ) {}
}

export class SetPreview {
  constructor(
    public setId: number,
    public setName: string
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
