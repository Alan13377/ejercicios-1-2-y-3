import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/taskComponent";

//Componente padre de TaskComponent
//Renderiza todas las tareas
const TaskList = () => {
  /* Creating a new task with the default values. */
  const defaultTask = new Task(
    "Example",
    "Default Description",
    false,
    LEVELS.NORMAL
  );

  /* Estado del componente */
  const [tasks, setTasks] = useState(defaultTask);

  //Control del ciclo de vida del componete
  useEffect(() => {
    console.log("Modificacion de tareas");
    return () => {
      console.log("Cuando la lista de componentes unMount");
    };
  }, [tasks]);
  const changeCompleted = (id) => {};

  return (
    <div>
      <h1>Tu tarea:</h1>
      {/**Aplicar un for o un map para renderizar una lista */}
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};

export default TaskList;
