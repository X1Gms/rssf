import Link from "next/link";
import { Logo } from "./logo";
import { Button } from "./ui/button";

// todo: check if user is authenticated from API and if it is admin
const IS_ADMIN = true;
const IS_AUTHENTICATED = true;

export function Header() {
  return (
    <header className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 flex h-14 items-center border-b p-6 backdrop-blur">
      <div className="container flex">
        <Logo />

        <nav className="ml-auto flex items-center gap-2">
          {/* todo: implement dashboard, hide if not admin */}
          {IS_ADMIN && (
            <Button asChild>
              <Link href="/dashboard/users">Dashboard</Link>
            </Button>
          )}

          {/* todo: implement logout, hide if not authenticated */}
          {IS_AUTHENTICATED && <Button variant="outline">Logout</Button>}
        </nav>
      </div>
    </header>
  );
}
