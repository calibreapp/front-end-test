import {
  CruxReport,
  CruxResults,
  MetricNames,
  StatusLabels,
  Thresholds,
  Units,
  UnitNames,
} from "./types";

const thresholds: Thresholds = {
  [MetricNames.LCP]: [4.0, 2.5],
  [MetricNames.CLS]: [0.25, 0.1],
  [MetricNames.FID]: [300, 100],
  [MetricNames.FCP]: [3.0, 1.8],
};

export const units: Units = {
  [MetricNames.LCP]: UnitNames.SECONDS,
  [MetricNames.CLS]: UnitNames.UNITLESS,
  [MetricNames.FID]: UnitNames.MILLISECONDS,
  [MetricNames.FCP]: UnitNames.SECONDS,
};

export const getCruxResults = (cruxReport: CruxReport): CruxResults => {
  const { metrics } = cruxReport.record;
  return Object.values(MetricNames).reduce((prev, current) => {
    const score = getScore(metrics[current].percentiles.p75, units[current]);
    const status = getStatusLabels(Number(score), thresholds[current]);
    return {
      ...prev,
      [current]: {
        score,
        status,
      },
    };
  }, {});
};

const getScore = (p75: number | string, units: UnitNames): number | string => {
  return units === UnitNames.SECONDS ? (Number(p75) / 1000).toFixed(2) : p75;
};

const getStatusLabels = (
  score: number,
  threshold: Thresholds[MetricNames]
): StatusLabels => {
  if (score > threshold[0]) return StatusLabels.POOR;
  if (score <= threshold[1]) return StatusLabels.GOOD;
  return StatusLabels.IMPROVE;
};
