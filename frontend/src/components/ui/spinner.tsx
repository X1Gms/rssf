import { Loader } from "lucide-react";

import { cn } from "@/lib/utils";

interface SpinnerProps {
  show: boolean;
  className?: string;
}

export function Spinner({ show, className }: SpinnerProps) {
  return (
    <>
      {show && <Loader className={cn("mr-2 size-4 animate-spin", className)} />}
    </>
  );
}
