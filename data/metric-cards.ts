import { MetricCard, MetricNames } from "../utils/types";

export const metricCards: MetricCard[] = [
  {
    type: MetricNames.LCP,
    title: "Largest Contentful Paint",
    description:
      "Time when the the largest image, video or text element was painted to the screen.",
  },
  {
    type: MetricNames.CLS,
    title: "Cumulative Layout Shift",
    description:
      "Sum of scores of the unstable elements that move around during user sessions.",
  },
  {
    type: MetricNames.FID,
    title: "First Input Delay",
    description:
      "Time from first user interaction to the time when the browser can respond to the interaction.",
  },
  {
    type: MetricNames.FCP,
    title: "First Contentful Paint",
    description:
      "Time when the browser rendered any text, image, non-white canvas or SVG content.",
  },
];
