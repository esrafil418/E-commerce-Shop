import { Container } from "../common/layout/Container";
import { ModeToggle } from "../common/theme/ThemeToggle";
import { DesktopNav } from "./DesktopNav";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { SearchBar } from "./SearchBar";
import { UserMenu } from "./UserMenu";

export function Header() {
  return (
    <header className="border-b bg-background">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* left side  */}
          <div className="flex items-center gap-8">
            <Logo />
            <DesktopNav />
          </div>

          {/* right side  */}
          <div className="flex items-center gap-4">
            <SearchBar />
            <UserMenu />
            <MobileNav />
            <ModeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
