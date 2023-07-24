import { faHourglassHalf } from "@fortawesome/free-regular-svg-icons";
import { faArrowsRotate, faArrowsToDot, faMaximize, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Display = (props) => {
  const [startGame, setstartGame] = useState(false);
  const text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ab magnam vel eligendi placeat voluptas nisi, voluptatem ea omnis. Dolor porro iure necessitatibus eveniet beatae ex laborum. Laudantium, iste illo'
  // console.log(text.split("")) 
  // let newText=text.slice(0,20)
  // console.log(text.slice(0, 20), "------------");
  
  const { setKey, currentKey } = props;
  return (
    <div className=" border-2 border-green w-full rounded-lg mb-1 h-full">
      {/* Parent Container */}
      <div className="flex flex-row h-full w-full">
        {/* Text Input && Output */}
        <div className=" w-9/12 h-full flex flex-col">
          {/* Text Input */}

          {/* <div className="flex-1 p-2 border-none">
            <textarea
              readOnly
              value={"Hi I am"}
              name=""
              id=""
              className="resize-none h-full w-full p-3 rounded-xl bg-menuColor text-gray-light text-2xl  font-semibold tracking-wider "
            ></textarea>
          </div> */}

           <div className="flex-1 p-2 border-none">
            <p className="resize-none h-full w-full p-3 rounded-xl bg-menuColor text-gray-light text-2xl  font-semibold tracking-wider whitespace-pre-line">{text.slice(0,70).split("").map((value,index)=>
            {return <span style={{color:'red'}} key={index}> {value} </span>})}</p>
          </div> 
       
          {/* Text Output */}
          <div className="flex-1 p-2 ">
            <textarea
              readOnly
              value={currentKey}
              name=""
              placeholder="Enter the Text Here"
              id=""
              onKeyDown={(e) => {
                console.log(e);
                return setKey(e.target.value);
              }}
              className="resize-none h-full w-full p-3 rounded-xl bg-menuColor text-gray-light text-3xl font-semibold tracking-wider leading-8"
            ></textarea>
          </div>
        </div>
        {/* Score time remaining */}
        <div className=" w-3/12 p-3 flex h-full items-center justify-center  ">
          <div className="w-full h-full  rounded-xl bg-menuColor flex flex-col items-stretch justify-around ">
            {/* Time */}
            <div className="flex-1 gap-4 h-full flex items-center justify-center border-b-2  pb-2 border-yellow mx-4 my-2 ">
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faHourglassHalf}
                  className="text-4xl text-green mb-3"
                  spinPulse={true}
                />

                <h1 className="text-3xl font-bold text-gray-light">5:00</h1>
              </div>
            </div>
            {/* Your Score */}
            <div className="flex-1  h-full flex items-center justify-center border-b-2 border-yellow mx-4 mb-2 pb-2">
              <div className="text-center">
                <h1 className="text-2xl font-semibold text-gray-light">
                  {" "}
                  Your Score{" "}
                </h1>
                <h1 className="text-4xl font-bold text-gray-light">89%</h1>
              </div>
            </div>
            {/* START STOP */}
            <div className="  h-full flex flex-col justify-center ">
              <div className="text-center flex justify-around">
                <FontAwesomeIcon
                  className="text-xl text-green"
                  icon={faMaximize}
                />
                {/* <FontAwesomeIcon className="text-lg text-green" icon={faArrowsToDot} /> */}
                <FontAwesomeIcon
                  className="text-xl text-green"
                  icon={startGame ? faStop : faPlay}
                  onClick={() =>
                    setstartGame((prev) => {
                      return !prev;
                    })
                  }
                />
                {/* <FontAwesomeIcon className="text-lg text-green" icon={faStop} /> */}
                <FontAwesomeIcon
                  className="text-xl text-green"
                  icon={faArrowsRotate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
