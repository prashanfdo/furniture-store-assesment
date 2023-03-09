import SearchBar from "components/organisms/SearchBar";
import { Link } from "react-router-dom";

export default function HeaderBar() {
  return (
    <>
      <header className="fixed w-full h-16 left-0 top-0 bg-white md:px-6 md:py-3 grid grid-cols-[6rem_1fr] !pl-14 lg:!pl-6">
        <Link to="/" className="grid place-items-center w-24">
          <img className="h-full" src="/home24_logo.svg" alt="" />
        </Link>
        <div className="grid place-items-center mx-4 lg:mr-24">
          <SearchBar />
        </div>
      </header>
    </>
  );
}
