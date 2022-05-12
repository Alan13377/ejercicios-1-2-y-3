import React from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/taskComponent";

//Componente padre de TaskComponent
//Renderiza todas las tareas
const TaskList = () => {
  const changeState = (id) => {
    console.log("TODO: Cambiar el estado de una tarea");
  };

  /* Creating a new task with the default values. */
  const defaultTask = new Task(
    "Example",
    "Default Description",
    false,
    LEVELS.NORMAL
  );

  return (
    <div>
      <h1>Tu tarea:</h1>
      {/**Aplicar un for o un map para renderizar una lista */}
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};

export default TaskList;
