interface InputFormType {
  onFormSubmit: Function
}

const InputForm = (props: InputFormType) => {
  const handleSubmit = (e: any): void => {
    e.preventDefault()
    const { task } = e.target.elements

    if(!task.value) return

    props.onFormSubmit(task.value)
    task.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="task" />
      <button type="submit">作成</button>
    </form>
  )
}

export default InputForm
