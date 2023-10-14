import { useEffect, useState } from "react";
import "./App.css";
import NavigationBarButton from "./components/NavBarButton";
import fetchFromAPI from "./DataFetch/API.js";
import Dashboard from "./components/DashBoard";

function App() {
  const [groupCriteria, setGroupCriteria] = useState("status");
  const [orderCriteria, setOrderCriteria] = useState("priority");
  const [userInformation, setUserInformation] = useState(null);
  const [ticketInformation, setTicketInformation] = useState(null);

  useEffect(() => {
    var storedData = window.localStorage.getItem("groupCriteria");
    if (storedData !== null) setGroupCriteria(JSON.parse(storedData));

    storedData = window.localStorage.getItem("orderCriteria");
    if (storedData !== null) setOrderCriteria(JSON.parse(storedData));
  }, []);

  useEffect(() => {
    const retrieveData = async () => {
      const { tickets, users } = await fetchFromAPI();
      setTicketInformation(tickets);
      setUserInformation(users);
    };
    retrieveData();
    window.localStorage.setItem("groupCriteria", JSON.stringify(groupCriteria));
    window.localStorage.setItem("orderCriteria", JSON.stringify(orderCriteria));
  }, [groupCriteria, orderCriteria]);

  return (
    <div className="App">
      <NavigationBarButton
        groupCriteria={groupCriteria}
        setGroupCriteria={setGroupCriteria}
        orderCriteria={orderCriteria}
        setOrderCriteria={setOrderCriteria}
      />
      {ticketInformation && (
        <Dashboard
          groupCriteria={groupCriteria}
          orderCriteria={orderCriteria}
          ticketInformation={ticketInformation}
          userInformation={userInformation}
        />
      )}
    </div>
  );
}

export default App;
