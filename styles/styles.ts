import { css } from "@emotion/react";
import { StatusLabels } from "../utils/types";

const breakpointTablet = 768;
const breakpointDesktop = 1280;

export const header = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  padding: 0px 40px;
  gap: 40px;
  a {
    height: 25px;
  }
`;

export const headerCopy = css`
  font-size: 1.25rem;
  line-height: 120%;
  font-weight: 400;
  letter-spacing: 0.01em;
  @media (max-width: ${breakpointTablet - 1}px) {
    display: none;
  }
`;

export const intro = css`
  background: var(--blue-500);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  gap: 30px;
  @media (min-width: ${breakpointTablet}px) {
    padding: 60px 40px;
  }
`;

export const introSite = css`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-direction: column;
  @media (min-width: ${breakpointTablet}px) {
    flex-direction: row;
  }
`;

export const introFavicon = css`
  width: 51px;
  height: 51px;
  padding: 5px;
  background: var(--white);
  border-radius: 50%;
  border: 2px solid var(--blue-500);
  box-shadow: 0 0 0 2px var(--blue-200);
`;

export const introHeading = css`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 120%;
  letter-spacing: -0.01em;
  color: var(--blue-200);
`;

export const introCopy = css`
  max-width: 640px;
  text-align: center;
  font-size: 1.125rem;
  line-height: 150%;
  color: var(--blue-50);
  @media (min-width: ${breakpointTablet}px) {
    font-size: 1.25rem;
  }
  a {
    color: var(--blue-200);
    &:hover,
    &:focus {
      color: var(--blue-50);
    }
  }
`;

export const metrics = css`
  padding: 30px 20px;
  @media (min-width: ${breakpointTablet}px) {
    padding: 60px 40px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const metricsHeading = css`
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  line-height: 120%;
  letter-spacing: -0.01em;
`;

export const cards = css`
  display: grid;
  padding: 30px 0px;
  gap: 30px;
  grid-template-columns: 1fr;
  @media (min-width: ${breakpointTablet}px) {
    padding: 60px 0;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${breakpointDesktop}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const card = css`
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 15px;
  background: var(--grey-50);
  border-radius: 6px;
`;

export const result = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 15px;
`;

export const score = (status: StatusLabels) => css`
  font-size: 3.75rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 120%;
  ${status === StatusLabels.GOOD && "color: var(--green-300)"}
  ${status === StatusLabels.IMPROVE && "color: var(--orange)"}
  ${status === StatusLabels.POOR && "color: var(--red-300)"}
`;

export const status = (status: StatusLabels) => css`
  padding: 1px 8px;
  border-radius: 3px;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  text-transform: uppercase;
  ${status === StatusLabels.IMPROVE
    ? "color: var(--yellow-500);"
    : "color: var(--white);"}
  ${status === StatusLabels.GOOD && "background: var(--green-300);"}
  ${status === StatusLabels.IMPROVE && "background: var(--yellow-300);"}
  ${status === StatusLabels.POOR && "background: var(--red-300);"}
`;

export const cardTitle = css`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 150%;
`;

export const cardCopy = css`
  font-size: 1rem;
  line-height: 150%;
`;
