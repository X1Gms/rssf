"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

type Props = {
  href: string;
  value: string;
};

export function NavBarLink({ href, value }: Props) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={buttonVariants({
        variant: "ghost",
        size: "sm",
        className: isActive && "bg-accent",
      })}
    >
      {value}
    </Link>
  );
}
