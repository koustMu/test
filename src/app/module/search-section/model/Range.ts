export class Bar {
  private _percentageRange: Range;
  private _frequency: number;


  constructor(percentageRange?: Range, frequency?: number) {
    this._percentageRange = percentageRange || new Range();
    this._frequency = frequency || 0;
  }

  get percentageRange(): Range {
    return this._percentageRange;
  }

  set percentageRange(value: Range) {
    this._percentageRange = value;
  }

  get frequency(): number {
    return this._frequency;
  }

  set frequency(value: number) {
    this._frequency = value;
  }
}


export class Range {
  private _from: number;
  private _to: number;

  constructor(from?: number, to?: number) {
    this._from = from || 0;
    this._to = to || 0;
  }

  get from(): number {
    return this._from;
  }

  set from(value: number) {
    this._from = value;
  }

  get to(): number {
    return this._to;
  }

  set to(value: number) {
    this._to = value;
  }
}

export class Tuple<T, U> {
  private _first: T;
  private _second: U;

  constructor(first?: T, second?: U) {
    this._first = first;
    this._second = second;
  }

  get first(): T {
    return this._first;
  }

  set first(value: T) {
    this._first = value;
  }

  get second(): U {
    return this._second;
  }

  set second(value: U) {
    this._second = value;
  }
}
