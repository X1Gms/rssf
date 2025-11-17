import { SearchIcon } from "lucide-react";

import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  totalResults: number;
}

export function Search({ value, onChange, totalResults }: SearchProps) {
  return (
    <InputGroup>
      <InputGroupInput
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        {totalResults} {totalResults === 1 ? "result" : "results"}
      </InputGroupAddon>
    </InputGroup>
  );
}
