type ProductSectionHeaderProps = {
  title: string;
  description?: string;
};

export function ProductSectionHeader({
  title,
  description,
}: ProductSectionHeaderProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>

      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
