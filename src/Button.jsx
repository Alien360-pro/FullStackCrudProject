import { useState } from "react";

function Button() {
    const [data, setdata] = useState("subscribe")
    let set01 = () => {
        setdata("subscribed")
    }
    return <div>
        {/* <h1>Wlcome You </h1>
        <button onClick={set01}>{data}</button> */}
    </div>
}
export default Button