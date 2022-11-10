import { ChangeEventHandler } from "react";

interface SearchInputProps {
  onChange: (text: string) => void;
  value: string;
  name: string;
  placeholder: string;
}

const SearchInput: React.FC<SearchInputProps> = (props: SearchInputProps) => {
  return (
    <div className="filter-input">
      <input
        onChange={(e) => props.onChange(e.currentTarget.value)}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        className="form-control"
        value={props.value}
      />
    </div>
  );
};

export default SearchInput;
