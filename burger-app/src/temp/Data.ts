import { Data } from "../controller/types";

export let builderConfig: Data = {
  activeData: {
    loading: true,
    ingr: {
      patty: ["patty", 150, 1],
      cheese: ["cheese", 200, 1],
      lettuce: ["lettuce", 300, 1],
      tomato: ["tomato", 400,1],
    },
    totalPrice: 500,
    error: false,
    building: true,
    buying: false,
    update: () => {},
  },
  userData: {
    userName: "",
    userSurname: "",
    userAddress: "Test",
    userEmail: "",
    userOrders: [
      {
        ingrName: {
          patty: ["patty", 150, 1],
          cheese: ["cheese", 200, 2],
          lettuce: ["lettuce", 300, 3],
          tomato: ["tomato", 400, 4],
        },
        orderCost: 0,
        paid: true,
        id: 0,
        amount: 1,
        date: new Date(),
      },
      {
        ingrName: {
          patty: ["patty", 150, 1],
          cheese: ["cheese", 200, 2],
          lettuce: ["lettuce", 300, 3],
          tomato: ["tomato", 400, 4],
        },
        orderCost: 5000,
        paid: true,
        id: 498,
        amount: 3,
        date: new Date(),
      },
    ],
    userPhoneNumber: 0,
    userlogoutTime: 0,
    uid: "",
  },
};
