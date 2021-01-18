export interface TaskType {
  id: number
  index?: number
  label: string
  onSubmitEdit?: Function
  clickDelete?: Function
}