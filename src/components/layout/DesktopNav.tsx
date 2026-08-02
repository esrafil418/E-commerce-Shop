import {NavigationLinks} from "./NavigationLinks";

export function DesktopNav() {
  return (
    <nav className="hidden items-center gap-2 lg:flex">
      <NavigationLinks />
    </nav>
  );
}
