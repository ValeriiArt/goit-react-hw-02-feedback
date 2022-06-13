import s from './Notification.module.css'

const Notification = ({message}) => {
    return (
        <p className={s.warning}>
            {message}
        </p>
    )
}

export default Notification;