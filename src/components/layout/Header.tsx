import Container from "../common/Container";
import DesktopNav from "./DesktopNav";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";

export default function Header() {
  return (
    <header>
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 border-b bg-background">
          {/* left side  */}
          <div className="flex items-center gap-8">
            <Logo />
            <DesktopNav />
          </div>

          {/* right side  */}
          <div className="flex items-center gap-4">
            <SearchBar />
            <UserMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
