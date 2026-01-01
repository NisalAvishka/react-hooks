import { memo } from "react";

interface SearchProps {
  onChange: (text: string) => void;
}

const Search = ({ onChange }: SearchProps) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default memo(Search);
