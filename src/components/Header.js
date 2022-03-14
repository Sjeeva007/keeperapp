import React, { useState } from "react";

export default function Header() {
  const [first, setfirst] = useState();

  function handleChange(event) {
    const setfirst = event.target.value;
  }

  console.log(first);
  return (
    <div>
      <form>
        <label>Firstname</label>
        <input type="text" value={first} onChange={handleChange}></input>
        <br></br>
        {/* <label>Lastname</label>
        <input type="text"></input>
        <br></br>
        <label>Address</label>
        <input type="text"></input>
        <br></br>
        <label>City</label>
        <input type="text"></input>
        <br></br>
        <label>Email Id</label>
        <input type="text"></input>
        <br></br>
        <label>Ph.No</label>
        <input type="text"></input>
        <br></br>
        <label>Password</label>
        <input type="password" value=""></input>
        <br></br> */}
        <button>submit</button>
      </form>
    </div>
  );
}
