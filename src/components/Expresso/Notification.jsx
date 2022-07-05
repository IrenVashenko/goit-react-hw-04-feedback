import css from "./Expresso.module.css"
const Notification = ({ message }) => {
    return (
        <p className={css.message}>{message}</p>
    )
}

export default Notification;