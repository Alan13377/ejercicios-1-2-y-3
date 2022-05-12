import { LEVELS } from "./levels.enum";

/* The class Task is a blueprint for creating objects that have the properties name, descripcion,
completed, and level. */
export class Task {
  name = "";
  descripcion = "";
  completed = false;
  level = LEVELS.NORMAL;

  constructor(name, descripcion, completed, level) {
    this.name = name;
    this.descripcion = descripcion;
    this.completed = completed;
    this.level = level;
  }
}
