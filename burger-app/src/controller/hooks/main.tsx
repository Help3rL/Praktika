import { errorMonitor } from "events";
import React, { useState, useEffect, Component } from "react";
import { Data, UserState } from "../types";
function userDataManager(getUserData:Data) {
  const [userdata, setuserdata] = useState({
    userName: "",
    userSurname: "",
    userAddress: "",
    userZip: 96000,
    userEmail: "",
    userOrders: [{}],
    userCity: "",
    userToken: "",
    userPhoneNumber: 37055555555,
    userlogoutTime: 0,
    userLogState: false,
  });
  useEffect(() => {
    getUserData.activeData?.ingr
  
    return () => {
      <div>rest</div>
    }
  })
  

}
function activeDataManager(getUserData:Data) {
  const [activeData, setData] = useState({
    loading: false,
    ingr: [{}],
    totalPrice: 0,
    error: false,
    building: true,
    buying: false,
  });
  return activeData
}
export function ActiveData(){
  return(activeDataManager)
}
export default class main extends Component {
  state = {  }
  render() {
    return (
      <div className="a">aaaaa</div>
    );
  }
}