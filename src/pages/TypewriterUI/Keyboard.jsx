import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddTypedLetter } from '../../reducers/actions';

const Keyboard = (props) => {
  const dispatch=useDispatch()
  // const state=useSelector(state=>state)
  const [HighLightKey, setHighLightKey] = useState('Enter');
  const { setKey } = props;
  // console.log(state)
   useEffect(() => {
     const handleKeyDown = (event) => {
       // Retrieve the pressed key
       const { key } = event;

       // Update the state with the typed keys
       if (key === 'Control' || key === 'Alt' ||key ==='CapsLock' || key==="Tab"){
      return null    
      }else{
          setHighLightKey(key);
          dispatch(AddTypedLetter(key))
       }
      //  setdisplayText(prev=> prev+key)
     };

     // Attach the event listener to the window
     window.addEventListener("keydown", handleKeyDown);

     // Clean up the event listener on component unmount
     return () => {
       window.removeEventListener("keydown", handleKeyDown);
     };
   }, []);

  return (
    <div className="container mx-auto h-full  ">
      <div className="h-full m-1 border-2 border-green rounded-lg flex justify-center flex-col">
        {/* 5 ROWS */}
        {/* 1 Row */}
        <div className="flex gap-1   m-1 justify-between text-center text-gray-light">
          {/* NUMBER AND SPECIAL CHARACTER */}
          <div
            className={`px-3  ${
              HighLightKey === "~" || HighLightKey === "`"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">
              ~ <br /> `
            </p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "!" || HighLightKey === "1"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">
              ! <br /> 1
            </p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "@" || HighLightKey === "2"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">
              @ <br /> 2
            </p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "#" || HighLightKey === "3"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">
              # <br /> 3
            </p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "$" || HighLightKey === "4"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">
              $ <br /> 4
            </p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "%" || HighLightKey === "5"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">
              % <br /> 5
            </p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "^" || HighLightKey === "6"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">
              ^ <br /> 6
            </p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "&" || HighLightKey === "7"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">
              & <br /> 7
            </p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "*" || HighLightKey === "8"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">
              * <br /> 8
            </p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "(" || HighLightKey === "9"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">
              {`(`} <br /> 9
            </p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === ")" || HighLightKey === "0"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">
              {`)`} <br /> 0
            </p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "-" || HighLightKey === "_"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">
              _ <br /> -
            </p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "+" || HighLightKey === "="
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">
              + <br /> =
            </p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "Backspace" || HighLightKey === "Backspace"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl my-2">Backspace</p>
          </div>
        </div>
        {/* 2 Row */}
        <div className="flex gap-1  mx-4 justify-around text-center text-gray-light">
          <div
            className={`px-3  ${
              HighLightKey === "Tab" || HighLightKey === "tab"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">tab</p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "q" || HighLightKey === "Q"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">Q</p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "w" || HighLightKey === "W"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">W</p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "e" || HighLightKey === "E"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">E</p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "r" || HighLightKey === "R"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">R</p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "t" || HighLightKey === "T"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">T </p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "y" || HighLightKey === "Y"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">Y </p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "u" || HighLightKey === "U"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">U </p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "i" || HighLightKey === "I"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">I</p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "o" || HighLightKey === "O"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">O </p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "p" || HighLightKey === "P"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">P </p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "{" || HighLightKey === "["
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">
              {"{"}
              <br /> {"["}
            </p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "]" || HighLightKey === "}"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">
              {"}"} <br /> {"]"}
            </p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "|" || HighLightKey === "\\"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">
              {"|"} <br /> \
            </p>
          </div>
        </div>

        {/* 3 Row */}
        <div className="flex gap-1  m-1  justify-evenly text-center text-gray-light">
          {/* CAPSLOCK */}
          <div
            className={`px-3  ${
              HighLightKey === "CapsLock" || HighLightKey === "capslock"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">caps lock</p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "a" || HighLightKey === "A"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">A</p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "s" || HighLightKey === "S"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">S</p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "d" || HighLightKey === "D"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">D</p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "f" || HighLightKey === "F"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">F</p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "g" || HighLightKey === "G"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">G</p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "h" || HighLightKey === "H"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">H</p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "j" || HighLightKey === "J"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">J</p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "k" || HighLightKey === "K"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">K</p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "l" || HighLightKey === "L"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">L</p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === ":" || HighLightKey === ";"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">
              : <br /> ;
            </p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === '"' || HighLightKey === "'"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">
              " <br /> '
            </p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "enter" || HighLightKey === "Enter"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">enter</p>
          </div>
        </div>
        {/* 4 Row */}
        <div className="flex gap-1   m-1 justify-evenly text-center text-gray-light">
          <div
            className={`px-3  ${
              HighLightKey === "shift" || HighLightKey === "Shift"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">shift</p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "z" || HighLightKey === "Z"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">Z</p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "x" || HighLightKey === "X"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">X</p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "c" || HighLightKey === "C"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">C</p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "v" || HighLightKey === "V"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">V</p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "b" || HighLightKey === "B"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">B</p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "n" || HighLightKey === "N"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">N</p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "m" || HighLightKey === "M"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">M</p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "<" || HighLightKey === ","
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">
              {`<`} <br /> ,
            </p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === ">" || HighLightKey === "."
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">
              {`>`} <br /> .
            </p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "?" || HighLightKey === "/"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">
              {`?`} <br /> /
            </p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "Shift" || HighLightKey === "shift"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">shift</p>
          </div>
        </div>
        {/* 5 Row */}
        <div className="flex gap-1    justify-evenly text-center text-gray-light">
          <div
            className={`px-5  ${
              HighLightKey === "control" || HighLightKey === "Control"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">ctrl</p>
          </div>
          <div
            className={`px-3  ${
              HighLightKey === "alt" || HighLightKey === "Alt"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">alt</p>
          </div>
          <div className="px-7    bg-green rounded-lg">
            <p className="text-xl px-7">space</p>
          </div>

          <div
            className={`px-3  ${
              HighLightKey === "alt" || HighLightKey === "Alt"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">alt</p>
          </div>

          <div
            className={`px-5  ${
              HighLightKey === "control" || HighLightKey === "Control"
                ? "bg-orange"
                : " bg-green "
            }`}
          >
            <p className="text-xl">
              ctrl <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Keyboard
