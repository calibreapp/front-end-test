/** @jsxImportSource @emotion/react */
import { CruxResults } from "../utils/types";
import { metricCards } from "../data/metric-cards";
import { units } from "../utils/crux-results";
import * as styles from "../styles/styles";

interface Props {
  cruxResults: CruxResults;
}

export const Metrics = ({ cruxResults }: Props) => {
  return (
    <div css={styles.metrics}>
      <h3 css={styles.metricsHeading}>Metric report</h3>
      <div css={styles.cards}>
        {metricCards.map((card) => (
          <div key={card.type} css={styles.card}>
            <div css={styles.result}>
              <div css={styles.score(cruxResults[card.type].status)}>
                {`${cruxResults[card.type].score}${units[card.type]}`}
              </div>
              <div css={styles.status(cruxResults[card.type].status)}>
                {cruxResults[card.type].status}
              </div>
            </div>
            <h4 css={styles.cardTitle}>{card.title}</h4>
            <p css={styles.cardCopy}>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
