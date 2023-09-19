import Logo from "./Logo";
import ProfileAvatar from "./ProfileAvatar";
import SearchBox from "./SearchInput/SearchBox";
import SearchLocation from "./SearchLocation";

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 px-4 lg:border-b border-0 bg-white z-40">
      <nav className="h-14 lg:h-20  border-b lg:border-0 max-w-[1036px] mx-auto flex items-center">
        <Logo />
        <div className="hidden lg:flex">
          <SearchLocation />
        </div>

        <div className="w-full hidden lg:flex">
          <SearchBox />
        </div>

        <div className="ml-auto grid place-content-center">
          <ProfileAvatar />
        </div>
      </nav>
      <div className="max-w-[1036px] mx-auto py-2 flex flex-col gap-2 lg:hidden">
        <SearchLocation />
        <SearchBox />
      </div>
    </header>
  );
};
export default Navbar;
