import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProductSectionActionsProps = {
  onPrevious: () => void;
  onNext: () => void;
  previousDisabled?: boolean;
  nextDisabled?: boolean;
};

export function ProductSectionActions({
  onPrevious,
  onNext,
  previousDisabled,
  nextDisabled,
}: ProductSectionActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={onPrevious}
        disabled={previousDisabled}
      >
        <ChevronLeft className="size-4" />
        <span className="sr-only">Previous products</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={onNext}
        disabled={nextDisabled}
      >
        <ChevronRight className="size-4" />
        <span className="sr-only">Next products</span>
      </Button>
    </div>
  );
}
