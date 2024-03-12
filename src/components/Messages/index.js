import classNames from "classnames/bind"

import styles from './Messages.module.css'

const cx = classNames.bind(styles)

export default function Messages({
    type = 'default',
    message = 'Không có gì',
    className,
    onClick,
    ...passProps
}) {

    let classIcon
    let toastClass = ''
    switch (type) {
        case 'success':
            toastClass = 'bg-green-500';
            classIcon = "fas fa-check-circle"
            break;
        case 'warning':
            toastClass = 'bg-yellow-500';
            classIcon = "fas fa-exclamation-triangle"
            break;
        case 'error':
            toastClass = 'bg-red-500';
            classIcon = "fas fa-exclamation-circle"
            break;
        default:
            toastClass = 'bg-white';
    }

    const classes = cx('fixed top-10 right-10 z-50 shadow-md px-6 py-2 rounded-full cursor-pointer', `${toastClass}`, {
        className
    })

    return (
        <div className={classes} onClick={onClick}>
            <i className={classIcon + ' mr-2 text-white'}></i>
            {message}
        </div>
    )
}