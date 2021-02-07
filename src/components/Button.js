function Button({ id, title, className }) {
    /*     const isim= document.getElementById("isimInput")
        const bilgi= document.getElementById("bilgiInput")
        console.dir(isim)
        console.dir(bilgi) */

    return (
        <button id={id} type="button" className={className}>{title}</button>
    )
}

export default Button