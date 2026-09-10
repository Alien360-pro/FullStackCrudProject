import { useState } from "react";

function Add() {
    const [data, setdata] = useState(0)
    let set01 = () => {
        setdata(data + 1)
    }
    return <div>
        {/* <h3>Addition</h3>
        <h1>{data}</h1>
        <button onClick={set01}>Add</button> */}
    </div>
}
export default Add