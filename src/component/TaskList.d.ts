import { TaskType } from "./Task.d"

export interface TaskListType {
  list: Array<TaskType>
  onSubmitEdit: Function
  clickDelete: Function
}