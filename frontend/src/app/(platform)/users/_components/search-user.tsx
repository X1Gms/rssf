import { Search } from "lucide-react";

import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";

interface SearchUserProps {
  value: string;
  onChange: (value: string) => void;
  totalResults: number;
}

export function SearchUser({ value, onChange, totalResults }: SearchUserProps) {
  return (
    <InputGroup>
      <InputGroupInput
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">{totalResults}</InputGroupAddon>
    </InputGroup>
  );
}
