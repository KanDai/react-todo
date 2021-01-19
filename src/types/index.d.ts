export interface TaskType {
    id: number
    index?: number
    label: string
    onSubmitEdit?: Function
    clickDelete?: Function
}

export interface TaskListType {
    list: Array<TaskType>
    onSubmitEdit: Function
    clickDelete: Function
}
