import FilterBox from "./FilterBox";
import ListBox from "./ListBox";
import SearchBox from "./SearchBox";
import "../styles/MainWrapper.css";
import { useEffect, useRef, useState } from "react";

interface Task {
  text: string;
  checked: boolean;
}

function MainWrapper() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [indexEdit, setIndexEdit] = useState(-1);
  const [filter, setFilter] = useState("all");
  const isFirstRender = useRef(true);

  useEffect(() => {
    const storedTasks = window.localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
      console.log(tasks);
    } else {
      window.localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, []);

  useEffect(() => {
    if (!isFirstRender.current) {
      console.log("ok");
      window.localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      console.log("okay");
      isFirstRender.current = false;
    }
  }, [tasks]);

  const handleSearch = () => {
    if (
      inputValue.trim() !== "" &&
      !tasks.some((task) => task.text === inputValue)
    ) {
      if (indexEdit !== -1) {
        const updatedTasks = [...tasks];
        updatedTasks[indexEdit].text = inputValue;
        updatedTasks[indexEdit].checked = false;
        setTasks(updatedTasks);
        setInputValue("");
        setIndexEdit(-1);
      } else {
        const task: Task = {
          text: inputValue,
          checked: false,
        };
        setTasks([...tasks, task]);
        setInputValue("");
      }
    }
  };

  const handleDeleteClick = (taskText: string) => {
    if (indexEdit === -1) {
      const updatedTasks = tasks.filter((task) => task.text !== taskText);
      setTasks(updatedTasks);
    }
  };

  const handleEditClick = (taskText: string) => {
    setIndexEdit(tasks.findIndex((task) => task.text === taskText));
    setInputValue(taskText);
  };

  const handleChecked = (taskText: string) => {
    const index = tasks.findIndex((task) => task.text === taskText);
    const updatedTasks = [...tasks];
    updatedTasks[index].checked = !updatedTasks[index].checked;
    setTasks(updatedTasks);
  };

  return (
    <div className="main-wrapper">
      <SearchBox
        onInputChange={setInputValue}
        onSearch={handleSearch}
        inputValue={inputValue}
      />

      <FilterBox
        handleClearClick={() => {
          setTasks([]);
          window.localStorage.clear();
        }}
        handleFilterClick={setFilter}
      />

      <ListBox
        filter={filter}
        tasks={tasks}
        handleDeleteClick={handleDeleteClick}
        handleEditClick={handleEditClick}
        handleChecked={handleChecked}
      />
    </div>
  );
}

export default MainWrapper;
