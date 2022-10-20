import { createHook } from "async_hooks";
import { errorMonitor } from "events";
import React, { useState, useEffect, Component } from "react";
import { Data, UserState } from "../types";
function UserDataManager(getUserData: Data) {
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
}
function ActiveDataManager(getUserData: Data) {
  const [activeData, setData] = useState({
    loading: false,
    ingr: {},
    totalPrice: 0,
    error: false,
    building: true,
    buying: false,
  });
  if (getUserData.activeData !== undefined) {
    setData(getUserData.activeData);
    return activeData;
  } else {
    return activeData;
  }
}
export function ActiveData(Data?: Data) {
  if (Data !== undefined) {
    console.log();
    return ActiveDataManager(Data);
  } else {
    console.log(ActiveDataManager);
    return ActiveDataManager;
  }
}
export default class main extends Component {
  state = {};
  render() {
    return <div className="a">aaaaa</div>;
  }
}
