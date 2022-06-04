export enum Units {
  Seconds = "s",
  Milliseconds = "ms",
  Unitless = "",
}

export enum MetricNames {
  CLS = "cumulative_layout_shift",
  FCP = "first_contentful_paint",
  FID = "first_input_delay",
  LCP = "largest_contentful_paint",
}

export interface MetricCard {
  type: MetricNames;
  title: string;
  description: string;
  units: Units;
  threshold: [poor: number, good: number];
}
