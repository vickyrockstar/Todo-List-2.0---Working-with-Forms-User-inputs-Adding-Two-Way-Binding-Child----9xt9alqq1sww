import React from "react";
import ListRender from "./ListRender";

const Next7Days = (props) => {
  const date = new Date();
  console.log(date);
  const nextWeek = new date(date.getTime() + 7 * 24 * 60 * 60 * 1000); 
  //add 7 days to the current date
  const nxtseven = props.list.filter((item) => {
    const d = new Date(item.date);
    console.log(d, "ddddd");
    return d <= date || d <= nextWeek && d>= date;
  });
  console.log(nxtseven);


  return (
    <div id="next-list">
      <ListRender list={nxtseven}/>
    </div>
  );
};

export default Next7Days;
