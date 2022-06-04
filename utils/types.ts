export enum MetricNames {
  CLS = "cumulative_layout_shift",
  FCP = "first_contentful_paint",
  FID = "first_input_delay",
  LCP = "largest_contentful_paint",
}

export enum UnitNames {
  SECONDS = "s",
  MILLISECONDS = "ms",
  UNITLESS = "",
}

export enum StatusLabels {
  POOR = "poor",
  IMPROVE = "improve",
  GOOD = "good",
}

export interface MetricCard {
  type: MetricNames;
  title: string;
  description: string;
}

export type Thresholds = {
  [key in MetricNames]: [poor: number, good: number];
};

export type Units = {
  [key in MetricNames]: UnitNames;
};

export interface CruxResults {
  [key: string]: {
    score: number;
    status: StatusLabels;
  };
}

export interface CruxReport {
  record: {
    metrics: {
      [key in MetricNames]: {
        percentiles: {
          p75: number;
        };
      };
    };
  };
}
