import React, { useState } from "react";
import Switch from "react-switch";
import moonsvg from "../static/media/moon.svg";
import sunsvg from "../static/media/sun.svg";

export default function MoonSwitch() {
  const [check, setCheck] = useState(true);

  const handleChange = (nextCheck) => {
    setCheck(nextCheck);
  };

  return (
    <div>
      <Switch
        
        onChange={handleChange}
        checked={check}
        checkedHandleIcon={<img src={moonsvg} alt="moon"></img>}
        uncheckedHandleIcon={<div><img src={sunsvg} alt="sun"></img><p style={{color:'var(--white)'}}>todo</p></div>}
        onColor="#E5E5E5"
        offColor="#191919"
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      />
    </div>
  );
}
