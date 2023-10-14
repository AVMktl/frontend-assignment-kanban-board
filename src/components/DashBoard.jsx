import React from "react";
import "../CSS/DashBoard.css";
import Rule from "./Rule.jsx";
import img_backlogLogo from "../Assets/img_backlog.png";
import img_cancelledLogo from "../Assets/img_cancelled.png";
import img_doneLogo from "../Assets/img_done.png";
import img_highLogo from "../Assets/img_high.png";
import img_inProgressLogo from "../Assets/img_in_progress.png";
import img_lowLogo from "../Assets/img_low.png";
import img_mediumLogo from "../Assets/img_medium.png";
import img_noPriorityLogo from "../Assets/img_no_priority.png";
import img_todoLogo from "../Assets/img_todo.png";
import img_urgentLogo from "../Assets/img_urgent.png";

function DashBoard({
  groupCriteria,
  orderCriteria,
  ticketInformation,
  userInformation,
}) {
  const priorities = [
    {
      id: 1,
      value: 0,
      name: "No priority",
      icon: img_noPriorityLogo,
    },
    {
      id: 2,
      value: 4,
      name: "Urgent",
      icon: img_urgentLogo,
    },
    {
      id: 3,
      value: 3,
      name: "High",
      icon: img_highLogo,
    },
    {
      id: 4,
      value: 2,
      name: "Medium",
      icon: img_mediumLogo,
    },
    {
      id: 5,
      value: 1,
      name: "Low",
      icon: img_lowLogo,
    },
  ];

  const status = [
    {
      id: 1,
      value: "Backlog",
      name: "Backlog",
      icon: img_backlogLogo,
    },
    {
      id: 2,
      value: "Todo",
      name: "Todo",
      icon: img_todoLogo,
    },
    {
      id: 3,
      value: "In progress",
      name: "In Progress",
      icon: img_inProgressLogo,
    },
    {
      id: 4,
      value: "Done",
      name: "Done",
      icon: img_doneLogo,
    },
    {
      id: 5,
      value: "Cancelled",
      name: "Cancelled",
      icon: img_cancelledLogo,
    },
  ];

  const data = ticketInformation.reduce((dataSoFar, curr) => {
    if (!dataSoFar[curr[groupCriteria]]) dataSoFar[curr[groupCriteria]] = [];
    dataSoFar[curr[groupCriteria]].push(curr);
    return dataSoFar;
  }, {});

  function pickColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  userInformation.forEach((ele) => {
    ele.color = pickColor();
  });

  if (groupCriteria !== "userId") {
    var mapping = groupCriteria === "priority" ? priorities : status;
    var extra = groupCriteria === "priority" ? status : priorities;

    return (
      <div className="Board">
        <div className="inContainer">
          {mapping.map((ele) => (
            <Rule
              key={ele.id}
              userInformation={userInformation}
              cards={data[ele.value]}
              heading={ele}
              groupCriteria={groupCriteria}
              orderCriteria={orderCriteria}
              extra={extra}
            />
          ))}
        </div>
      </div>
    );
  } else {
    var extra2 = [status, priorities];

    return (
      <div className="Board">
        <div className="inContainer">
          {userInformation.map((ele) => (
            <Rule
              key={ele.id}
              userInformation={ele}
              cards={data[ele.id]}
              groupCriteria={groupCriteria}
              orderCriteria={orderCriteria}
              extra={extra2}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default DashBoard;
