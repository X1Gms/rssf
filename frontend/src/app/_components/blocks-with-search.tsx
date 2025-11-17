"use client";

import { useState, useMemo } from "react";

import { Block as BlockType } from "@/types";

import { Search } from "@/components/search";
import { Block } from "./block";

interface BlocksWithSearchProps {
  blocks: BlockType[];
}

export function BlocksWithSearch({ blocks }: BlocksWithSearchProps) {
  const [query, setQuery] = useState("");

  const filteredBlocks = useMemo(() => {
    const q = query.toLowerCase();

    return blocks.filter((u) => u.name.toLowerCase().includes(q));
  }, [blocks, query]);

  return (
    <div className="flex flex-col gap-4">
      <Search
        value={query}
        onChange={setQuery}
        totalResults={filteredBlocks.length}
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {filteredBlocks.map((block) => (
          <Block key={block.id} block={block} />
        ))}
      </div>
    </div>
  );
}
