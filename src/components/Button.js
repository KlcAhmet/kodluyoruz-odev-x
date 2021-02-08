function Button({ id, title, className, onClick }) {
    return (
        <button id={id} type="button" className={className} onClick={onClick}>{title}</button>
    )
}

export default Button