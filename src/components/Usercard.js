import React, { useState, useEffect } from "react"
import axios from "axios"

function Usercard() {
    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3004/users')
            .then(function ({ data }) {
                console.log({ data })
                setUser(data)
            })
            .catch(function (error) {
                console.log("Hata")
                console.log(error)
            })
    }, [])

    return user.map(({ name, desc }) => (
        <div className="user-card">
            <figure>
                <img src="https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png" alt="user" width="40" />
            </figure>
            <div>
                <strong>{name}</strong>
                <p>{desc}</p>
            </div>
        </div>
    ));
}

export default Usercard