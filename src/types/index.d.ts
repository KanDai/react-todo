export interface TaskType {
    id: number
    index?: number
    label: string
    isChecked: boolean
    toggleChecked?: Function
    onSubmitEdit?: Function
    clickDelete?: Function
}

export interface TaskListType {
    list: Array<TaskType>
    toggleChecked: Function
    onSubmitEdit: Function
    clickDelete: Function
    deleteCompleteTask: Function
}
