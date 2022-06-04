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
    const status = getStatusLabels(score, thresholds[current]);
    return {
      ...prev,
      [current]: {
        score,
        status,
      },
    };
  }, {});
};

const getScore = (p75: number | string, units: UnitNames): number => {
  return units === UnitNames.SECONDS ? millToSECONDS(Number(p75)) : Number(p75);
};

const getStatusLabels = (
  score: number,
  threshold: Thresholds[MetricNames]
): StatusLabels => {
  if (score > threshold[0]) return StatusLabels.POOR;
  if (score <= threshold[1]) return StatusLabels.GOOD;
  return StatusLabels.IMPROVE;
};

const millToSECONDS = (num: number): number => {
  return +(Math.round(Number(num / 1000 + "e+2")) + "e-2");
};
