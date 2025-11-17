import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-full min-h-screen flex-col items-center justify-center gap-2 p-4">
      <h1>Hello World from Next.js</h1>

      {/* render the button as a link */}
      {/* todo: make sure that only unauthenticated users can access this page */}
      <Button asChild>
        <Link href="/login">Login Page</Link>
      </Button>

      {/* todo: make sure that only unauthenticated users can access this page */}
      <Button asChild>
        <Link href="/signup">Signup Page</Link>
      </Button>

      {/* todo: make sure that only authenticated users can access this page */}
      <Button asChild>
        <Link href="/users">Users Page</Link>
      </Button>
    </main>
  );
}
