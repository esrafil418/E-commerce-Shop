import { Suspense } from "react";

import { Container } from "../common/layout/Container";
import { ModeToggle } from "../common/theme/ThemeToggle";
import { DesktopNav } from "./DesktopNav";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { SearchBar } from "./SearchBar";
import { UserMenu } from "./UserMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Logo />
            <DesktopNav />
          </div>

          <div className="flex items-center gap-4">
            <Suspense>
              <SearchBar />
            </Suspense>
            <UserMenu />
            <MobileNav />
            <ModeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
