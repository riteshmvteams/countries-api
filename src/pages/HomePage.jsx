// components
import CountryListingSection from "../components/CountryListingSection";
import SearchFilterSection from "../components/SearchFilterSection";

export default function HomePage() {
  return (
    <main className="home">
      <div className="home__container container">
        <SearchFilterSection />
        <CountryListingSection />
      </div>
    </main>
  );
}
