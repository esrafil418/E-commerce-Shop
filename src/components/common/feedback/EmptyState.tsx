import { Inbox } from "lucide-react";

type EmptyStateProps = {
  title?: string;
  description?: string;
};

export function EmptyState({
  title = "Nothing here",
  description = "There is no data to display.",
}: EmptyStateProps) {
  return (
    <div className="flex min-h-62.5 flex-col items-center justify-center gap-3 rounded-xl border border-dashed p-6">
      <Inbox className="size-10 text-muted-foreground" />

      <h3 className="font-semibold">{title}</h3>

      <p className="max-w-md text-center text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
