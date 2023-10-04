import SearchBox from "./SearchBox";
import Filters from "./Filters";

export default function SearchFilterSection() {
  return (
    <section className="filterSection">
      <SearchBox />
      <Filters />
    </section>
  );
}
