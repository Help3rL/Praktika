import { createHook } from "async_hooks";
import React, { useState} from "react";
import { Data} from "../types";
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

