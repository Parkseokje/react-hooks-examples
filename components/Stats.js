import useStats from "../utils/useStats";

export default function Stats({ url }) {
  const stats = useStats(url);

  console.log(stats)

  if (!stats) return <p>Loading..</p>;
  if (stats.error) return <p>{stats.error.message}</p>

  return (
    <div>
      <div className="statBlock">
        <h3>Confirmed:</h3>
        <span>{stats.confirmed.value}</span>
      </div>
      <div className="statBlock">
        <h3>deaths:</h3>
        <span>{stats.deaths.value}</span>
      </div>
      <div className="statBlock">
        <h3>recovered:</h3>
        <span>{stats.recovered.value}</span>
      </div>
    </div>
  );
}
