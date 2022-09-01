import React from "react";
import { useState } from "react";

export default function App(){

setInterval(gettime,1000);

const now = new Date().toLocaleTimeString()

const [time, timenow] = useState(now)

function gettime(){
    const newtime = new Date().toLocaleTimeString()
    timenow(newtime)
};
return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={gettime}>Get Time</button>
    </div>
  );
}