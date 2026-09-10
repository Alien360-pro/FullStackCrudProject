// import { useState } from "react";

// function From() {
//     const [data, setdata] = useState({
//         Name: "",
//         Phone: "",
//         Email: ""
//     })
//     function set01(event1) {
//         setdata({ ...data, Name: event1.target.value })
//     }
//     function set02(event2) {
//         setdata({ ...data, Phone: event2.target.value })
//     }
//     function set03(event3) {
//         setdata({ ...data, Email: event3.target.value })
//     }
//     return <div>
//         <h2>My Form</h2>
//         Name:- <input type="text" value={data.Name} onChange={set01} />
//         <br />
//         Phone:- <input type="tele" value={data.Phone} onChange={set02} />
//         <br />
//         Email:- <input type="Email" value={data.Email} onChange={set03} />
//         <br />
//         Name:-{Name}
//         <br />
//         Phone:-{Phone}
//         <br />
//         Email:-{Email}
//     </div>
// }
// export default From