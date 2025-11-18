import { Room as RoomType } from "@/types";

import { Room } from "./room";

interface RoomGridProps {
  rooms: RoomType[];
}

// i am not sure the way we are doing this, if it is not working with the api just change it as you want
export function RoomGrid({ rooms }: RoomGridProps) {
  const rows = [];
  for (let i = 0; i < rooms.length; i += 2) {
    const left = rooms[i];
    const right = rooms[i + 1];

    if (right) {
      rows.push({ left, right });
    }
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {rows.map((row, index) => (
        <div key={index} className="contents">
          <Room room={row.left} />
          <Room room={row.right} />
        </div>
      ))}
    </div>
  );
}
