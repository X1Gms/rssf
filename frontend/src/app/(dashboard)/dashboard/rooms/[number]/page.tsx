import { redirect } from "next/navigation";

interface RoomPageProps {
  params: Promise<{ number: string }>;
}

// todo: fetch room
export default async function RoomPage({ params }: RoomPageProps) {
  const { number } = await params;
  const roomNumber = parseInt(number);
  if (isNaN(roomNumber)) return redirect("/dashboard/blocks");

  return (
    <div className="flex flex-col gap-4 rounded-xl border p-6 shadow-sm">
      <p className="inline-block">
        Room <span className="font-medium">{roomNumber}</span>
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {/* todo: implement charts. i didn't do any chart because i don't have data to test it */}
        <div>Chart 1</div>
        <div>Chart 2</div>
        <div>Chart 3</div>
      </div>
    </div>
  );
}
