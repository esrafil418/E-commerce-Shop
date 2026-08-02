import { CircleAlert } from "lucide-react";

type ErrorMessageProps = {
  message?: string;
};

export function ErrorMessage({
  message = "Something went wrong. Please try again.",
}: ErrorMessageProps) {
  return (
    <div className="flex min-h-50 flex-col items-center justify-center gap-3 rounded-xl border border-destructive/20 bg-destructive/5 p-6">
      <CircleAlert className="size-8 text-destructive" />

      <p className="max-w-md text-center text-sm text-muted-foreground">
        {message}
      </p>
    </div>
  );
}
