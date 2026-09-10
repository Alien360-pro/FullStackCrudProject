import { useState } from "react";
import axios from "axios";
function Get() {
    const [id, setId] = useState("")
    const [one, setOne] = useState({
        name: "",
        age: ""
    })
    let send = () => {
        axios.get("http://localhost:3000/user/" + id)
            .then((Response) => setOne(Response.data))
            .catch((err) => console.log(err))
    }
    let display = (event) => {
        setOne({ ...one, [event.target.name]: event.target.value })

    }
    let send1 = () => {
        axios.put("http://localhost:3000/user/" + id, one)
            .then((Response) => console.log(Response))
            .catch((err) => console.log(err))
    }
    return <div>
        Id:- <input type="tele" value={id} onChange={(pre) => setId(pre.target.value)} />
        <br />
        <button onClick={send}>View</button>
        <br />
        Name:- <input type="text" value={one.name} name="name" onChange={display} />
        <br />
        Age:- <input type="number" value={one.age} name="age" onChange={display} />
        <br />
        <button onClick={send1}>Update</button>
    </div>
}
export default Get