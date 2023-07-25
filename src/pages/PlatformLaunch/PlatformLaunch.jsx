import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import "./PlatformLaunch.css";

import { showModal } from "../../store/store";
import ViewTask from "../ViewTask/ViewTask";
import EditTask from "../EditTask/EditTask";
import DeleteTask from "../DeleteTask/DeleteTask";
import { CountContext } from "../../App";
import EditBoard from "../EditBoard/EditBoard";
import { useLocation, useParams } from "react-router-dom";

const PlatformLaunch = (props) => {
  const { boardData } = useContext(CountContext);
  const [taskModalDetails, setModalData] = useState({});
  const [showTaskDetailModal, setTaskDetailsModal] = useState(false);
  const [editTask, setEditTask] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);
  const [subtasks, setSubTasks] = useState([]);
  const chars = { "/": "", "-": " " };
  const { boardName } = useParams();
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem(
      "currentBoard",
      boardName.replace(/-/, " ").toLowerCase()
    );
  }, [location]);

  useEffect(() => {
    const boardPosition = boardData.boards.findIndex((item) =>
      item.name
        .toLowerCase()
        .includes(location.pathname.slice(8).replace(/-/g, " ").toLowerCase())
    );
    setBoardColumns(boardData.boards[boardPosition]);
  }, [location]);

  const boardPosition = boardData.boards.findIndex((item) =>
    item.name
      .toLowerCase()
      .includes(location.pathname.slice(8).replace(/-/g, " ").toLowerCase())
  );

  // EDIT BOARD STATES
  const [showEditBoardModal, setShowEditBoardModal] = useState(false);
  const closeEditBoardModal = () => {
    setShowEditBoardModal(false);
  };
  const openEditBoardModal = () => {
    setShowEditBoardModal(true);
  };
  const [boardColumns, setBoardColumns] = useState(
    boardData.boards[boardPosition]
  );

  const closeViewTaskModal = () => {
    setTaskDetailsModal(false);
  };

  const closeEditModal = () => {
    setEditTask(false);
  };

  const closeDeleteModal = () => {
    setDeleteTask(false);
  };

  const showTaskDetails = (id, item) => {
    setModalData(item);
    setSubTasks(item.subtasks);
    showModal(!showTaskDetailModal);
    setTaskDetailsModal(!showTaskDetailModal);
  };

  const showEditTask = () => {
    closeViewTaskModal();
    setEditTask(true);
  };

  const showDeleteTask = () => {
    closeViewTaskModal();
    setDeleteTask(true);
  };

  return (
    <div className="PlatformLaunch">
      <div
        className="default-content"
        style={{
          display:
            boardData.boards?.boardPosition?.columns?.length == 0 ||
            boardData["boards"].length == 0
              ? "flex"
              : "none",
        }}
      >
        <h3 className="empty-message">
          This board is empty. Create a new column to get started.
        </h3>
        <button onClick={openEditBoardModal} className="add-column-btn">
          +Add New Column
        </button>
      </div>
      {/* TASKS CONTAINER */}
      <div
        style={{ display: boardData.boards.length == 0 ? "none" : "flex" }}
        className="tasks-container"
      >
        {boardData.boards?.[boardPosition]?.columns.map((item, index) => {
          return (
            <section
              key={index}
              className={item["tasks"][0] ? "todo-col" : "empty-task-col"}
            >
              <div className={item["tasks"][0] ? "title" : "no-task-title"}>
                <span className={`dot ${item.name}`}></span>
                <h2>{item.name + " " + "(" + item["tasks"].length + ")"}</h2>
              </div>
              {item["tasks"].map((item, id) => {
                return (
                  <div key={id} className="task">
                    <h3
                      className="task-title"
                      onClick={() => showTaskDetails(item.subtasks, item)}
                    >
                      {item.title}
                    </h3>
                    <span className="sub-task">
                      {item["subtasks"].reduce(
                        (counter, subtask) =>
                          subtask.isCompleted ? (counter += 1) : counter,
                        0
                      ) +
                        " of " +
                        item["subtasks"].length +
                        " subtasks"}
                    </span>
                  </div>
                );
              })}
            </section>
          );
        })}
        <section onClick={openEditBoardModal} className="task add-new-col">
          <h3 className="add-col-btn">+New Column</h3>
        </section>
      </div>
      <ViewTask
        visible={showTaskDetailModal}
        selectedTask={taskModalDetails}
        closeViewTaskModal={closeViewTaskModal}
        showEditTask={showEditTask}
        showDeleteTask={showDeleteTask}
        subtasks={subtasks}
      />
      <EditTask
        visible={editTask}
        selectedTask={taskModalDetails}
        closeEditModal={closeEditModal}
        subtasks={subtasks}
      />
      <DeleteTask
        selectedTask={taskModalDetails}
        visible={deleteTask}
        closeDeleteModal={closeDeleteModal}
      />

      <EditBoard
        visible={showEditBoardModal}
        closeEditBoardModal={closeEditBoardModal}
        boardColumns={boardColumns}
      />
    </div>
  );
};

PlatformLaunch.propTypes = {};

PlatformLaunch.defaultProps = {};

export default PlatformLaunch;
