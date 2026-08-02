import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative hidden w-full max-w-sm lg:block">
      <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

      <Input placeholder="Search products..." className="pl-10" />
    </div>
  );
}
