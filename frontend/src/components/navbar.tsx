import { NavBarLink } from "./navbar-link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export async function NavBar() {
  return (
    <div className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-14 z-50 border-b px-6 py-2 backdrop-blur">
      <div className="container">
        <ScrollArea>
          <nav className="flex items-center gap-2">
            <NavBarLink href="/dashboard/users" value="Users" />
            <NavBarLink href="/dashboard/blocks" value="Blocks" />
          </nav>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}
