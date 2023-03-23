import React, { useState } from "react";
import Inbox from "./Inbox";
import Next7Days from "./Next7Days";
import Today from "./Today";

const list = [
  { number: 1, title: "Let's complete this", date: (new Date()).toLocaleDateString("en-US") },
  { number: 2, title: "Should sleep at 9pm", date: (new Date()).toLocaleDateString("en-US") },
  { number: 3, title: "Should complete react", date: (new Date()).toLocaleDateString("en-US")},
];

const MainSection = (props) => {
  const [mainlist, setList] = useState(list);
  const [newli, setNewLi] = useState(0);
  function appendList(newList){
    setList([...mainlist, newList]);
  } 
  
  return (
    <div className="main-section">
      {props.active === "INBOX" && (
        <Inbox list={mainlist} append={appendList} />
      )}
      {props.active === "TODAY" && <Today list={mainlist} />}
      {props.active === "NEXT" && <Next7Days list={mainlist} />}
    </div>
  );
};

export default MainSection;
