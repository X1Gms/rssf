import { Room as RoomType } from "@/types";

import { RoomGrid } from "./room-grid";

interface FloorTabProps {
  block: string;
  floor: number;
}

const ROOMS: RoomType[] = [
  { id: 1, name: "Room 1", type: "room", floor: 3, block: "F" },
  {
    id: 2,
    name: "Eletric Panel 1",
    type: "eletric_panel",
    floor: 3,
    block: "F",
  },
  { id: 3, name: "Room 2", type: "room", floor: 3, block: "F" },
  { id: 4, name: "Corridor", type: "corridor", floor: 3, block: "F" },
  { id: 5, name: "Room 3", type: "room", floor: 3, block: "F" },
  { id: 6, name: "Corridor", type: "corridor", floor: 3, block: "F" },
  { id: 7, name: "Room 4", type: "room", floor: 3, block: "F" },
  {
    id: 8,
    name: "Eletric Panel 2",
    type: "eletric_panel",
    floor: 3,
    block: "F",
  },
];

// todo: fetch by floor
export function FloorTab({ block, floor }: FloorTabProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border p-6 shadow-sm">
      <p className="inline-block">
        Floor <span className="font-medium">{floor}</span> of{" "}
        <span className="font-medium">{block}</span>
      </p>
      <RoomGrid rooms={ROOMS} />
    </div>
  );
}
