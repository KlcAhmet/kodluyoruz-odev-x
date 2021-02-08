import React, { useState, useEffect } from "react"
import Button from "./Button"
import Informationınput from "./Informationinput"
import Usercard from "./Usercard"


function Anasayfamain() {
    const [usercomp, setUsercomp] = useState([])

    const ekle = () => {
        const isimInput = document.getElementById("isimInput").value
        const bilgiInput = document.getElementById("bilgiInput").value
        const id = isimInput + bilgiInput
        setUsercomp(<Usercard id={id} name={isimInput} desc={bilgiInput} />)
    }

    return (
        <div className="container">
            <section>
                <Informationınput />
                <Button id={"inputbutton"} title={"Ekle"} className={"inputs__button btn btn-success btn-sm active"} onClick={ekle} />
            </section>
            <section>
                <Usercard />
                {usercomp}
            </section>
        </div>
    )
}

export default Anasayfamain