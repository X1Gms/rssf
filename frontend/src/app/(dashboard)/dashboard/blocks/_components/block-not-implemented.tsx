import { Ban } from "lucide-react";
import Link from "next/link";

import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyContent,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";

export function BlockNotImplemented() {
  return (
    <div className="h-fullf flex flex-1 flex-col">
      <Empty className="p-0">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Ban />
          </EmptyMedia>
          <EmptyTitle>Block Not Yet Implemented</EmptyTitle>
          <EmptyDescription>
            This block has not yet been implemented in the system. Please try
            another block.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex flex-col gap-2 md:flex-row">
            <Button asChild>
              <Link href="/dashboard/blocks">Go Back to Blocks</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/dashboard/users">Go Back to Dashboard</Link>
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  );
}
