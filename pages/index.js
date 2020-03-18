import Stats from "../components/Stats";
import CountrySeletor from "../components/CountrySelector";

export default function IndexPage() {
  return (
    <div>
      <Stats url="https://covid19.mathdro.id/api"></Stats>
      <CountrySeletor></CountrySeletor>
    </div>
  );
}
