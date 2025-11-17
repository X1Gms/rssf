import Link from "next/link";
import { SatelliteDish } from "lucide-react";

export function Logo() {
  return (
    <Link
      href="/"
      className="text-primary flex items-center gap-2 self-center font-medium"
    >
      <SatelliteDish className="size-6" />
      smartIPS
    </Link>
  );
}
