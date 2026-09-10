import { useState } from "react";

function Name() {
    const [data, setdata] = useState({
        Name: "Sanjay",
        Age: 19,
        Height: 0.1
    })
    return <div>
        {/* <h2>Name:-{data.Name}</h2>
        <h2>Age:-{data.Age}</h2>
        <h2>Height:-{data.Height}</h2>
        <button onClick={() => setdata({ ...data, Name: "Jai" })}>Change Name</button>
        <button onClick={() => setdata({ ...data, Age: 20 })}>Change Name</button>
        <button onClick={() => setdata({ ...data, Height: 0.2 })}>Change Name</button> */}
    </div>
}
export default Name