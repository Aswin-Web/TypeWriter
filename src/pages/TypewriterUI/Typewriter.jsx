import React, { useCallback, useEffect, useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Keyboard from "./Keyboard";
import Display from "./Display";
import Menu from "./Menu";

function App() {
  const [keyPress, setkeyPress] = useState('');
  const [displayText, setdisplayText] = useState('');
  const handle = useFullScreenHandle();

    //  useEffect(() => {
    //    const handleKeyDown = (event) => {
    //      // Retrieve the pressed key
    //      const { key } = event;

    //      // Update the state with the typed keys
    //      setkeyPress(key)
    //      setdisplayText(prev=> prev+key)
    //    };

    //    // Attach the event listener to the window
    //    window.addEventListener("keydown", handleKeyDown);

    //    // Clean up the event listener on component unmount
    //    return () => {
    //      window.removeEventListener("keydown", handleKeyDown);
    //    };
    //  }, []);


  return (
    <div>
      <button onClick={handle.enter}>Enter</button>
      {/* Full Screen Mode */}
      <FullScreen handle={handle} className="bg-white">
        {/* <button onClick={handle.exit}>Exit</button> */}
        {/* Container Body */}
        <div
          className="flex mx-auto rounded-full"
          style={{ height: "95vh", width: "90vw" }}
          onKeyDown={() => console.log("Key Pressed")}
        >
          {/* Left Menu */}
          <div className="w-3/12 bg-slate-400 h-full rounded-l-xl bg-writerColor">
            <Menu />
          </div>
          {/* Right Typing Area */}
          <div className="w-9/12 h-full bg-blue-500 flex flex-col rounded-r-lg bg-writerColor">
            {/* Prewritten Letters */}
            <div className="flex-1 w-full h-full px-1 mt-1">
              <Display currentKey={displayText} setKey={setkeyPress} />
            </div>

            {/* Keyboard and Text output */}
            <div className="flex-1 w-full mt-1 h-full pb-2  overflow-hidden ">
              <Keyboard setKey={setkeyPress} />
            </div>
          </div>
        </div>
      </FullScreen>
    </div>
  );
}

export default App;
