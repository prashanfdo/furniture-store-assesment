import SearchBox from "components/organisms/SearchBox";
import { Link } from "react-router-dom";

export default function HeaderBar() {
  return (
    <>
      <header className="fixed w-full h-16 left-0 top-0 bg-white md:px-6 md:py-3 grid grid-cols-[6rem_1fr] !pl-14 lg:!pl-6">
        <Link to="/" className="grid w-24 place-items-center">
          <img className="h-full" src="/home24_logo.svg" alt="site logo" />
        </Link>
        <div className="grid mx-4 place-items-center lg:mr-24">
          <SearchBox />
        </div>
      </header>
    </>
  );
}
