import { SatelliteDish } from "lucide-react";

// technically, it would be enough to simply check whether the user is authenticated or not here, but this is usually cached and that can cause breaches.
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6">
      <div className="flex max-w-sm flex-col gap-6">
        <div className="text-primary flex items-center gap-2 self-center font-medium">
          <SatelliteDish className="size-6" />
          smartIPS
        </div>

        {children}
      </div>
    </div>
  );
}
