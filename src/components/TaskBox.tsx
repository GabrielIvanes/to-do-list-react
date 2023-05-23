import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import "../styles/TaskBox.css";
library.add(faTrash, faPencil);
interface Task {
  text: string;
  checked: boolean;
}

interface Props {
  task: Task;
  handleDeleteClick: (task: string) => void;
  handleEditClick: (task: string) => void;
  handleChecked: (task: string) => void;
}

function TaskBox({
  task,
  handleDeleteClick,
  handleEditClick,
  handleChecked,
}: Props) {
  return (
    <div className="task">
      <span>
        {!task.checked ? (
          <>
            <input type="checkBox" onChange={() => handleChecked(task.text)} />
            <span className="unchecked">{task.text}</span>
          </>
        ) : (
          <>
            <input
              type="checkBox"
              onChange={() => handleChecked(task.text)}
              checked
            />
            <span className="checked">{task.text}</span>
          </>
        )}
      </span>

      <span>
        <button onClick={() => handleEditClick(task.text)}>
          <FontAwesomeIcon icon={faPencil} />
        </button>
        <button onClick={() => handleDeleteClick(task.text)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </span>
    </div>
  );
}

export default TaskBox;
