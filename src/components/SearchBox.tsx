import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../styles/SearchBox.css";

interface Props {
  onSearch: () => void;
  onInputChange: (input: string) => void;
  inputValue: string;
}

function SearchBox({ onSearch, onInputChange, inputValue }: Props) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Write a new task"
        value={inputValue}
        onChange={(event) => onInputChange(event.target.value)}
        maxLength={100}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onSearch();
          }
        }}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="icon"
        onClick={onSearch}
      />
    </div>
  );
}

export default SearchBox;
