import { CruxResults } from "../utils/types";
import { metricCards } from "../data/metric-cards";
import { units } from "../utils/crux-results";

interface Props {
  cruxResults: CruxResults;
}

export const Metrics = ({ cruxResults }: Props) => {
  return (
    <div>
      <h3>Metric report</h3>
      <div>
        {metricCards.map((card) => (
          <div key={card.type}>
            <div>
              <div>{`${cruxResults[card.type].score}${units[card.type]}`}</div>
              <div>{cruxResults[card.type].status}</div>
            </div>
            <h4>{card.title}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
