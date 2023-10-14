import React, { useEffect, useRef } from "react";
import { UilSlidersV, UilAngleDown } from "@iconscout/react-unicons";
import "../CSS/NavBarButton.css";

function NavBarButton({
  groupCriteria,
  setGroupCriteria,
  orderCriteria,
  setOrderCriteria,
}) {
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        document.getElementById("dropdown").classList.remove("show");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClick() {
    document.getElementById("dropdown").classList.toggle("show");
  }

  return (
    <div className="Display-Button" ref={dropdownRef}>
      <div>
        <button className="btn" onClick={handleClick}>
          <UilSlidersV />
          Display
          <UilAngleDown />
        </button>
      </div>
      <div id="dropdown" className="dropdown-list">
        <div className="dropdown-items">
          <label htmlFor="group-select">Grouping</label>

          <select
            name="groups"
            id="group-select"
            value={groupCriteria}
            onChange={(e) => setGroupCriteria(e.target.value)}
          >
            <option value={"priority"}>Priority</option>
            <option value={"status"}>Status</option>
            <option value={"userId"}>User</option>
          </select>
        </div>
        <div className="dropdown-items">
          <label htmlFor="order-select">Ordering</label>

          <select
            name="orders"
            id="order-select"
            value={orderCriteria}
            onChange={(e) => setOrderCriteria(e.target.value)}
          >
            <option value={"priority"}>Priority</option>
            <option value={"title"}>Title</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default NavBarButton;
