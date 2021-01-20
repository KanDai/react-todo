import styles from './styles.module.scss'
interface InputFormType {
    onFormSubmit: Function
}

const InputForm = (props: InputFormType) => {
    const handleSubmit = (e: any): void => {
        e.preventDefault()
        const { task } = e.target.elements

        if (!task.value) return

        props.onFormSubmit(task.value)
        task.value = ''
    }

    return (
        <div className={styles.wrap}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input className={styles.input} type="text" name="task" />
                <button className={styles.button} type="submit">
                    作成
                </button>
            </form>
        </div>
    )
}

export default InputForm
