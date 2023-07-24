import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faCaretDown, faCaretUp, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Menu = () => {
    const [basic, setBasic] = useState(false);
    const [intermediate, setIntermediate] = useState(false);
    const [advanced, setAdvanced] = useState(false);
  return (
    <div className="h-full w-full p-3">
      <div className="h-full w-full border-2 rounded-xl border-yellow">
        {/* Title  */}
        <div className="h-1/6 w-full flex flex-col items-center justify-center border-b-2 border-yellow text-2xl font-semibold text-gray-light">
          <h1 className="tracking-wide">
            <span className="text-green text-4xl">W</span>elcome To
          </h1>
          <h1 className="text-4xl tracking-wider">
            Typist..<span className="text-green">!</span>
          </h1>
        </div>
        {/* Course */}
        <div className="h-3/6 w-full p-3 ">
          <div className="scroll bg-menuColor h-full rounded-xl overflow-y-scroll p-3">
            {/* Basic */}
            <div>
              <h1 className="flex items-center justify-between px-2 py-1 border-2 border-green rounded-lg text-gray-light cursor-pointer"  onClick={()=>setBasic((prev)=>!prev)}>
                <span className="text-xl">Basic</span>
                <FontAwesomeIcon
                  icon={false ? faCaretUp : faCaretDown}
                />
              </h1>
              <ul
                className={`pl-3 py-2 ${basic ? "block" : "hidden"}`}
              >
                <li className="flex items-center justify-between text-gray-light p-1 rounded-xl border-2 border-green">
                  <span>Lesson 1 </span>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-green"
                  />
                </li>
                <li className="flex items-center my-1 justify-between text-gray-light p-1 rounded-xl border-2 border-yellow">
                  <span>Lesson 2 </span>

                  <FontAwesomeIcon icon={faLock} className="text-orange" />
                </li>
                <li className="flex items-center my-1 justify-between text-gray-light p-1 rounded-xl border-2 border-yellow">
                  <span>Lesson 3 </span>

                  <FontAwesomeIcon icon={faLock} className="text-orange" />
                </li>
                <li className="flex items-center my-1 justify-between text-gray-light p-1 rounded-xl border-2 border-yellow">
                  <span>Lesson 4 </span>

                  <FontAwesomeIcon icon={faLock} className="text-orange" />
                </li>
                <li className="flex items-center my-1 justify-between text-gray-light p-1 rounded-xl border-2 border-yellow">
                  <span>Lesson 5 </span>

                  <FontAwesomeIcon icon={faLock} className="text-orange" />
                </li>
                <li className="flex items-center my-1 justify-between text-gray-light p-1 rounded-xl border-2 border-yellow">
                  <span>Lesson 6 </span>

                  <FontAwesomeIcon icon={faLock} className="text-orange" />
                </li>
              </ul>
            </div>
            {/* Intermediate */}
            <div className="mt-1">
              <h1 className="flex items-center justify-between px-2 py-1 border-2 border-yellow rounded-lg text-gray-light cursor-pointer" onClick={()=>setIntermediate((prev=>!prev))}>
                {" "}
                <span className="text-xl">Intermediate</span>
                <FontAwesomeIcon
                  icon={intermediate ? faCaretUp : faCaretDown}
                />{" "}
              </h1>
              <ul
                className={`pl-3 py-2 ${intermediate ? "block" : "hidden"}`}
              >
                <li className="flex items-center justify-between text-gray-light p-1 rounded-xl border-2 border-green">
                  <span>Lesson 1 </span>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-green"
                  />
                </li>
                <li className="flex items-center my-1 justify-between text-gray-light p-1 rounded-xl border-2 border-yellow">
                  <span>Lesson 2 </span>

                  <FontAwesomeIcon icon={faLock} className="text-orange" />
                </li>
                <li className="flex items-center my-1 justify-between text-gray-light p-1 rounded-xl border-2 border-yellow">
                  <span>Lesson 3 </span>

                  <FontAwesomeIcon icon={faLock} className="text-orange" />
                </li>
                <li className="flex items-center my-1 justify-between text-gray-light p-1 rounded-xl border-2 border-yellow">
                  <span>Lesson 4 </span>

                  <FontAwesomeIcon icon={faLock} className="text-orange" />
                </li>
                <li className="flex items-center my-1 justify-between text-gray-light p-1 rounded-xl border-2 border-yellow">
                  <span>Lesson 5 </span>

                  <FontAwesomeIcon icon={faLock} className="text-orange" />
                </li>
                <li className="flex items-center my-1 justify-between text-gray-light p-1 rounded-xl border-2 border-yellow">
                  <span>Lesson 6 </span>

                  <FontAwesomeIcon icon={faLock} className="text-orange" />
                </li>
              </ul>
            </div>
            {/* Advanced */}
            <div className="mt-1">
              <h1 className="flex items-center justify-between px-2 py-1 border-2 border-yellow rounded-lg text-gray-light cursor-pointer" onClick={()=>setAdvanced(prev=>!prev)}>
                {" "}
                <span className="text-xl">Advanced</span>
                <FontAwesomeIcon
                  icon={advanced ? faCaretUp : faCaretDown}
                />{" "}
              </h1>
              <ul
                className={`pl-3 py-2 ${advanced ? "block" : "hidden"}`}
              >
                <li className="flex items-center justify-between text-gray-light p-1 rounded-xl border-2 border-green">
                  <span>Lesson 1 </span>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-green"
                  />
                </li>
                <li className="flex items-center my-1 justify-between text-gray-light p-1 rounded-xl border-2 border-yellow">
                  <span>Lesson 2 </span>

                  <FontAwesomeIcon icon={faLock} className="text-orange" />
                </li>
                <li className="flex items-center my-1 justify-between text-gray-light p-1 rounded-xl border-2 border-yellow">
                  <span>Lesson 3 </span>

                  <FontAwesomeIcon icon={faLock} className="text-orange" />
                </li>
                <li className="flex items-center my-1 justify-between text-gray-light p-1 rounded-xl border-2 border-yellow">
                  <span>Lesson 4 </span>

                  <FontAwesomeIcon icon={faLock} className="text-orange" />
                </li>
                <li className="flex items-center my-1 justify-between text-gray-light p-1 rounded-xl border-2 border-yellow">
                  <span>Lesson 5 </span>

                  <FontAwesomeIcon icon={faLock} className="text-orange" />
                </li>
                <li className="flex items-center my-1 justify-between text-gray-light p-1 rounded-xl border-2 border-yellow">
                  <span>Lesson 6 </span>

                  <FontAwesomeIcon icon={faLock} className="text-orange" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Profile & Logout */}
        <div className="h-2/6  w-full p-3 border-t-2 border-yellow">
          <div className="rounded-xl w-full bg-menuColor h-full p-3">
            <h1 className="text-xl font-semibold text-gray-light">Account </h1>
            <div className="flex flex-col items-center  text-gray-light">
              <button className="text-lg font-medium w-full m-1 block border-2 border-green p-1 rounded-xl">
                My Dashboard
              </button>
              <button className="text-lg font-medium block border-2 w-full border-green p-1 rounded-xl">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
