"use client"
import React, { useState } from "react";
import HeaderAdmin from '@/components/HeaderAdmin'
import SmallCalendar from "@/components/SmallCalendar/SmallCalendar";



export default function appointment() {

  const [instruction, setInstruction] = useState([
    { lunes: [""] },
    { martes: [""] },
    { miercoles: [""] },
 ]);

 console.log(instruction)

 const handleInputChange = (dayIndex, inputIndex, newValue) => {
    const newInstruction = [...instruction];
    newInstruction[dayIndex][Object.keys(newInstruction[dayIndex])[0]][inputIndex] = newValue;
    setInstruction(newInstruction);
 };

 const handleAddInput = (dayIndex) => {
    const newInstruction = [...instruction];
    newInstruction[dayIndex][Object.keys(newInstruction[dayIndex])[0]].push("");
    setInstruction(newInstruction);
 };





 const [showTimeList, setShowTimeList] = useState(false);
 const [timeList, setTimeList] = useState(["01:00", "02:00", "03:00", "04:00"]);
 const [selectedTime, setSelectedTime] = useState("");

 const handleClick = () => {
    setShowTimeList(!showTimeList);
 };

 const handleTimeSelection = (time) => {
    setSelectedTime(time);
    setShowTimeList(false);
 };



 const [input1, setInput1] = useState('');
 const [input2, setInput2] = useState('');
 const [input3, setInput3] = useState('');
 const [showTimeListt, setShowTimeListt] = useState(false);

 const timeListt = ["01:00", "02:00", "03:00", "04:00"];

 const handleInputClick = () => {
    setShowTimeListt(true);
 };

 const handleTimeListClick = (time) => {
    setInput1(time);
    setShowTimeListt(false);
 };


    return (
      <>
      {/*
        <div>
        {instruction.map((day, dayIndex) => (
          <div key={dayIndex}>
            {Object.keys(day).map((dayName, dayNameIndex) => (
              <div key={dayNameIndex}>
                <h3>{dayName}</h3>
                {day[dayName].map((time, timeIndex) => (
                  <input key={timeIndex} type="text" value={time} onChange={(e) => handleInputChange(dayIndex, timeIndex, e.target.value)} />
                ))}
                <button onClick={() => handleAddInput(dayIndex)}>Agregar Input</button>
              </div>
            ))}
          </div>
        ))}
      </div>


      <div>
      <input 
        type="text" 
        value={input1} 
        onClick={handleInputClick} 
        onChange={(e) => setInput1(e.target.value)} 
      />
      <input 
        type="text" 
        value={input2} 
        onClick={handleInputClick} 
        onChange={(e) => setInput2(e.target.value)} 
      />
      <input 
        type="text" 
        value={input3} 
        onClick={handleInputClick} 
        onChange={(e) => setInput3(e.target.value)} 
      />
      {showTimeListt && (
        <ul>
          {timeListt.map((time, index) => (
            <li key={index} onClick={() => handleTimeListClick(time)}>
              {time}
            </li>
          ))}
        </ul>
      )}
    </div> */}

      <SmallCalendar/>


      </>
    );


};



/*
"use client"
import React, { useState } from "react";
import HeaderAdmin from '@/components/HeaderAdmin'

export default function appointment() {

    const [inputs, setInputs] = useState({
      lunes: [""],
      martes: [""],
      miercoles: [""],
    });

    console.log(inputs)

    const addInput = (day) => {
      setInputs({ ...inputs, [day]: [...inputs[day], ""] });
    };
    const handleChange = (day, index, value) => {
      const newInputs = { ...inputs };
      newInputs[day][index] = value;
      setInputs(newInputs);
    };

    return (
      <div className="App">
        {Object.keys(inputs).map((day) => (
          <div key={day}>
            {inputs[day].map((input, index) => (
              <input
                key={index}
                type="time"
                value={input}
                onChange={(e) => handleChange(day, index, e.target.value)}
              />
            ))}
            <button onClick={() => addInput(day)}>+</button>
          </div>
        ))}
      </div>
    );


};


*/