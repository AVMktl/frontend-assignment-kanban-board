import React from "react";
import "../CSS/Card.css";
import img_featureLogo from "../Assets/img_feature.png";

function Card({ userInformation, card, groupCriteria, extra }) {
  var keyId = 0;

  if (groupCriteria !== "userId") {
    const userDetail = userInformation.find((user) => user.id === card.userId);
    var shortName = userDetail.name.split(" ");

    if (shortName.length !== 1) {
      shortName = shortName[0][0] + shortName[shortName.length - 1][0];
    } else {
      shortName = shortName[0][0] + " ";
    }

    var info;
    if (groupCriteria === "priority") {
      info = extra.find((e) => e.value === card.status);
    } else {
      info = extra.find((e) => e.value === card.priority);
    }

    var online;

    if (userDetail.available) {
      online = "#e1bd09";
    } else {
      online = "grey";
    }

    return (
      <div className="Card">
        <div className="container">
          <div className="first">
            {card.id}
            <div style={{ backgroundColor: userDetail.color }}>
              {shortName}
              <div style={{ backgroundColor: online }}></div>
            </div>
          </div>
          <div className="second">
            <img src={info.icon} alt="" />
            {card.title}
          </div>
          <div className="third" key={keyId++} style={{ width: "50%" }}>
            <img src={img_featureLogo} alt="" />
            {card.tag}
          </div>
        </div>
      </div>
    );
  } else {
    var status = extra[0].find((e) => e.value === card.status);
    var priority = extra[1].find((e) => e.value === card.priority);

    return (
      <div className="Card">
        <div className="container">
          <div className="first">{card.id}</div>
          <div className="second">
            <img src={status.icon} alt="" />
            {card.title}
          </div>
          <div className="parent">
            <img
              src={priority.icon}
              alt=""
              style={{
                width: "12px",
                paddingRight: "5px",
                height: "12px",
                marginTop: "5px",
              }}
            />
            <div>
              <div className="third" key={keyId++}>
                <img src={img_featureLogo} alt="" />
                {card.tag}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
