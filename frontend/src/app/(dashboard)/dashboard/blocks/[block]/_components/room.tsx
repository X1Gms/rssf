import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Room as RoomType } from "@/types";
import Link from "next/link";

interface RoomProps {
  room: RoomType;
}

export function Room({ room }: RoomProps) {
  const typeLabel =
    room.type === "room"
      ? "Room"
      : room.type === "corridor"
        ? "Corridor"
        : "Eletric Panel";

  return (
    // only allows to click in room and electric panel
    <Link
      href={
        room.type !== "corridor"
          ? `/dashboard/rooms/${room.id}`
          : `/dashboard/blocks/${room.block}`
      }
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-base">{room.name}</CardTitle>
          <CardDescription className="text-sm">{typeLabel}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
