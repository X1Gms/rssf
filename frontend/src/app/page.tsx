import { Logo } from "@/components/logo";
import { Welcome } from "@/components/welcome";

// todo: check if user is authenticated, if logged in, redirect to dashboard
export default function Home() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center p-6">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Logo />

        <Welcome />
      </div>
    </main>
  );
}
