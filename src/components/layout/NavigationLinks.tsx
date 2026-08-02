import { buttonVariants } from "@/components/ui/button";
import { storeNavigation } from "@/config/navigation";
import { NavigationVariant } from "@/types/common";
import Link from "next/link";

type NavigationLinksProps = {
  variant?: NavigationVariant;
};

export function NavigationLinks({
  variant = "desktop",
}: NavigationLinksProps) {
  const isMobile = variant === "mobile";

  const linkClassName = isMobile ? "w-full justify-start" : undefined;

  return (
    <>
      {storeNavigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={buttonVariants({
            variant: "ghost",
            className: linkClassName,
          })}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}
