import user from "../App"
import Informationınput from "./Informationinput"
import Usercard from "./Usercard"

function Anasayfamain() {
    return (
        <div className="container">
            <section>
                <Informationınput />
            </section>
            <section>
                <Usercard />
            </section>
        </div>
    )
}

export default Anasayfamain