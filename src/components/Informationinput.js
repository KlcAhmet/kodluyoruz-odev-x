import Button from "./Button"

function Informationınput() {
    return (
        <div className="inputs">
            <input id="isimInput" placeholder="isim" />
            <input id="bilgiInput" placeholder="Bilgi" />
            <Button id={"inputbutton"} title={"Ekle"} className={"inputs__button btn btn-success"} />
        </div>
    )
}

export default Informationınput