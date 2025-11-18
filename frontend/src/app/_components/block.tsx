import Link from "next/link";

import { Block as BlockType } from "@/types";

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
  return (
    <Link
      href={`/dashboard/blocks/${block.name}`}
      className="rounded-xl shadow-md transition-all hover:opacity-70"
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
