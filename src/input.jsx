import { useState } from "react";

function Input() {
    const [data, setdata] = useState({
        name: "",
        email: "",
        number: "",
        select: "",
        check: []
    })
    function Chang2(event) {
        setdata({ ...data, [event.target.name]: event.target.value })
        console.log(event)
    }
    return <div>
        <h1>My Form</h1>
        Name:- <input type="text" name='name' value={data.name} onChange={Chang2} />
        <br />
        Email:- <input type="email" name='email' value={data.email} onChange={Chang2} />
        <br />
        Number:- <input type="tele" name='number' value={data.number} onChange={Chang2} />
        <br />
        <div>
            <label >Select:-</label>
            <input type="radio" name='select' value="Red" checked={data.select === "Red"} onChange={Chang2} /> Red
            <input type="radio" name='select' value="Gold" checked={data.select === "Gold"} onChange={Chang2} /> Gold
            <input type="radio" name='select' value="Black" checked={data.select === "Black"} onChange={Chang2} /> Black
            <input type="radio" name='select' value="Pink" checked={data.select === "Pink"} onChange={Chang2} /> Pink
        </div>
        <div>
            <label >Check:-</label>
            <input type="checkbox" name="check" value="Apple" checked={data.check === "Apple"} onChange={Chang2} /> Apple
            <input type="checkbox" name="check" value="Orange" checked={data.check === "Orange"} onChange={Chang2} /> Orange
            <input type="checkbox" name="check" value="Mango" checked={data.check === "Mango"} onChange={Chang2} /> Mango
            <input type="checkbox" name="check"  value="Banana" checked={data.check === "Banana"} onChange={Chang2} /> Banana
        </div>
        <br />
        <br />
        Name:-{data.name}
        <br />
        Email:-{data.email}
        <br />
        Number:-{data.number}
        <br />
        Select:-{data.select}
        <br />
        Check:-{data.check}
    </div>
}
export default Input