import "../styles/FilterBox.css";

interface Props {
  handleClearClick: () => void;
  handleFilterClick: (filter: string) => void;
}

function FilterBox({ handleClearClick, handleFilterClick }: Props) {
  return (
    <div className="filterBox">
      <div className="filters">
        <button onClick={() => handleFilterClick("all")}>All</button>
        <button onClick={() => handleFilterClick("pending")}>Pending</button>
        <button onClick={() => handleFilterClick("completed")}>
          Completed
        </button>
      </div>
      <button className="clear" onClick={handleClearClick}>
        Clear
      </button>
    </div>
  );
}

export default FilterBox;
