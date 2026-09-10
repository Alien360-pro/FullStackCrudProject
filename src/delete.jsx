import axios from "axios";
import { useState } from "react";

function Delete() {
    const [Data, setData] = useState("")
    let send = () => {
        axios.delete("http://localhost:3000/user/" + Data)
            .then((Response) => console.log(Response))
            .catch((err) => console.log(err))
    }
    let display = (event) => {
        setData(event.target.value)
    }
    return <div>
        DeleteID:- <input type="text" value={Data} onChange={send} />
        <br />
        <button onClick={display}>Sumbit</button>
    </div>
}
export default Delete