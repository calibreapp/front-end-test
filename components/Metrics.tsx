import { CruxResults } from "../utils/types";
import { metricCards } from "../data/metric-cards";
import { units } from "../utils/crux-results";

interface Props {
  cruxResults: CruxResults;
}

export const Metrics = ({ cruxResults }: Props) => {
  return (
    <div>
      <h2>Metric report</h2>
      <div>
        {metricCards.map((card) => (
          <div key={card.type}>
            <div>
              <div>{`${cruxResults[card.type].score}${units[card.type]}`}</div>
              <div>{cruxResults[card.type].status}</div>
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
