import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { FloorTab } from "./floor-tab";

interface BlockTabProps {
  block: string;
}

export default function BlockTabs({ block }: BlockTabProps) {
  return (
    <Tabs defaultValue="floor-1" className="w-full">
      <TabsList>
        <TabsTrigger value="floor-1">Floor 1</TabsTrigger>
        <TabsTrigger value="floor-2">Floor 2</TabsTrigger>
        <TabsTrigger value="floor-3">Floor 3</TabsTrigger>
      </TabsList>

      {/* todo: fetch by block */}
      <TabsContent value="floor-1">
        <FloorTab block={block} floor={1} />
      </TabsContent>

      <TabsContent value="floor-2">
        <FloorTab block={block} floor={2} />
      </TabsContent>

      <TabsContent value="floor-3">
        <FloorTab block={block} floor={3} />
      </TabsContent>
    </Tabs>
  );
}
