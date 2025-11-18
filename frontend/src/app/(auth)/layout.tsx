import { Logo } from "@/components/logo";

// technically, it would be enough to simply check whether the user is authenticated or not here, but this is usually cached and that can cause breaches.
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center p-6">
      <div className="flex max-w-sm flex-col gap-6">
        <Logo />

        {children}
      </div>
    </main>
  );
}
