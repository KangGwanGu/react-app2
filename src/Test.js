import React, { Component } from 'react';
import { useState } from 'react';

function Test(props) {
    const [mode, setMode] = useState("welcome");
    
    const fc = (data1, data2) => {
        alert(data1);
        alert(data2);
        alert(this.fc("111","222"))
        
        const name = "james";

    }

    
    // setMode("read");
    
    return (


      <p>{props.title}</p>
  
    );
  }

  export default Test;