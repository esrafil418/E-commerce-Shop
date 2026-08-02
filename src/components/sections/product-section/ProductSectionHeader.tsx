type ProductSectionHeaderProps = {
  title: string;
  description?: string;
};

export function ProductSectionHeader({
  title,
  description,
}: ProductSectionHeaderProps) {
  return (
    <div className="space-y-1">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>

      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
