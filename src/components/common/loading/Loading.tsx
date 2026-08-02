import { LoaderCircle } from "lucide-react";

type LoadingProps = {
  message?: string;
};

export function Loading({ message = "Loading..." }: LoadingProps) {
  return (
    <div className="flex min-h-50 flex-col items-center justify-center gap-3">
      <LoaderCircle className="size-8 animate-spin text-primary" />

      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  );
}
