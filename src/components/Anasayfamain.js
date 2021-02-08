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
                <div className="row d-flex justify-content-center">
                    <Informationınput />
                    <Button id={"inputbutton"} title={"Ekle"} className={"btn btn-success btn-sm"} onClick={ekle} />
                </div>
            </section>
            <section>
                <div className="row d-flex justify-content-start">
                    <Usercard />
                    {usercomp}
                </div>
            </section>
        </div>
    )
}

export default Anasayfamain