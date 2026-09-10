import { useState } from "react"
import axios from 'axios'
function Form() {
    const [Data, setData] = useState({
        Name: "",
        Age: ""
    })
    let send = () => {
        axios.post("http://localhost:3000/user", Data)
            .then((Response) => console.log(Response))
            .catch((err) => console.log(err))
    }
    let display = (event) => {
        setData({ ...Data, [event.target.name]: event.target.value })
    }
    return <div>
        Name:- <input type="text" name="Name" value={Data.Name} onChange={display} />
        <br />
        Age:- <input type="tele" name="Age" value={Data.Age} onChange={display} />
        <br />
        <button onClick={send}>Sumbit</button>
    </div>
}
export default Form