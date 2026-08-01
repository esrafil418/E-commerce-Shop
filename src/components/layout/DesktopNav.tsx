import Link from "next/link";
import { storeNavigation } from "@/config/navigation";

export default function DesktopNav() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {storeNavigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
