import UserLinks from "./UserLinks";

export default function UserMenu() {
  return (
    <div className="hidden items-center gap-2 lg:flex">
      <UserLinks variant="desktop" />
    </div>
  );
}
