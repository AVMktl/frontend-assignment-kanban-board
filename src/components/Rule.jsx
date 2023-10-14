import React from "react";
import "../CSS/Rule.css";
import { UilPlus, UilEllipsisH } from "@iconscout/react-unicons";
import Card from "./Card";

function Rule({
  userInformation,
  cards,
  heading,
  groupCriteria,
  orderCriteria,
  extra,
}) {
  var orderCards;
  if (cards) {
    if (orderCriteria === "priority") {
      orderCards = [...cards].sort((a, b) => b.priority - a.priority);
    } else {
      orderCards = [...cards].sort((a, b) => (a.title > b.title ? 1 : -1));
    }
  }

  if (groupCriteria !== "userId") {
    return (
      <div className="Column">
        <div className="header">
          <div>
            <img
              src={heading.icon}
              alt="headingIcon"
              className="heading-icon"
            />
            {heading.name}
            {orderCards ? <span>{orderCards.length}</span> : <span>0</span>}
          </div>
          <div>
            <UilPlus />
            <UilEllipsisH />
          </div>
        </div>
        <div className="cards">
          {orderCards
            ? orderCards.map((ele) => (
                <Card
                  key={ele.id}
                  userInformation={userInformation}
                  card={ele}
                  groupCriteria={groupCriteria}
                  extra={extra}
                />
              ))
            : null}
        </div>
      </div>
    );
  } else {
    var shortName = userInformation.name.split(" ");

    if (shortName.length !== 1) {
      shortName = shortName[0][0] + shortName[shortName.length - 1][0];
    } else {
      shortName = shortName[0][0] + " ";
    }

    shortName = shortName.toUpperCase();

    var online;

    if (userInformation.available) {
      online = "#e1bd09";
    } else {
      online = "grey";
    }

    return (
      <div className="Column">
        <div className="header">
          <div>
            <div
              className="user-icon"
              style={{ backgroundColor: userInformation.color }}
            >
              {shortName}
              <div style={{ backgroundColor: online }}></div>
            </div>
            {userInformation.name}
            {orderCards ? <span>{orderCards.length}</span> : <span>0</span>}
          </div>
          <div>
            <UilPlus />
            <UilEllipsisH />
          </div>
        </div>
        <div className="cards">
          {orderCards
            ? orderCards.map((ele) => (
                <Card
                  key={ele.id}
                  card={ele}
                  groupCriteria={groupCriteria}
                  extra={extra}
                />
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default Rule;
