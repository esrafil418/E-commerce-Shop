import { ArrowRight } from "lucide-react";
import Link from "next/link";

type SectionHeaderProps = {
  title: string;
  description?: string;
  href?: string;
};

export function SectionHeader({
  title,
  description,
  href,
}: SectionHeaderProps) {
  return (
    <div className="mb-6 flex items-end justify-between">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>

        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      {href && (
        <Link
          href={href}
          className="group flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          View All
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
