import { metricCards } from "../data/metric-cards";

export const Metrics = () => {
  return (
    <div>
      <h2>Metric report</h2>
      <div>
        {metricCards.map((card) => (
          <div key={card.type}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
