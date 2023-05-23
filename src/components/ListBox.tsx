import TaskBox from "./TaskBox";
import "../styles/ListBox.css";

interface Task {
  text: string;
  checked: boolean;
}

interface Props {
  tasks: Task[];
  handleDeleteClick: (task: string) => void;
  handleEditClick: (task: string) => void;
  handleChecked: (task: string) => void;
  filter: string;
}

function ListBox({
  tasks,
  handleDeleteClick,
  handleEditClick,
  handleChecked,
  filter,
}: Props) {
  return (
    <div className="list-tasks">
      {tasks.map((task) =>
        filter === "all" ? (
          <TaskBox
            key={task.text}
            task={task}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
            handleChecked={handleChecked}
          />
        ) : filter === "completed" ? (
          task.checked && (
            <TaskBox
              key={task.text}
              task={task}
              handleEditClick={handleEditClick}
              handleDeleteClick={handleDeleteClick}
              handleChecked={handleChecked}
            />
          )
        ) : (
          !task.checked && (
            <TaskBox
              key={task.text}
              task={task}
              handleEditClick={handleEditClick}
              handleDeleteClick={handleDeleteClick}
              handleChecked={handleChecked}
            />
          )
        )
      )}
    </div>
  );
}

export default ListBox;
