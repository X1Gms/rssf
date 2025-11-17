import Link from "next/link";

import { Block as BlockType } from "@/types";
import { cn } from "@/lib/utils";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface BlockProps {
  block: BlockType;
}

// todo: think better about this
export function Block({ block }: BlockProps) {
  const isValidBlock = block.id === 6;

  return (
    <Link
      href={
        isValidBlock ? `/dashboard/blocks/${block.id}` : `/dashboard/blocks`
      }
      className={cn(isValidBlock ? "cursor-pointer" : "cursor-not-allowed")}
    >
      <Card>
        <CardHeader>
          <CardDescription>Block</CardDescription>
          <CardTitle className="text-primary text-2xl font-semibold">
            {block.name}
          </CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
}
