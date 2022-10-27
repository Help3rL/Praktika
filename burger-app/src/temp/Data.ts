import { Data } from "../controller/types";

export const builderConfig: Data = {
  activeData: {
    loading: true,
    ingr: {
      patty: ["patty", 150, 10],
      cheese: ["cheese", 200, 3],
      lettuce: ["lettuce", 300, 2],
      tomato: ["tomato", 400,8],
    },
    totalPrice: 0,
    error: false,
    building: true,
    buying: false,
    update: () => {},
    DeliveryCost: 250
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
  orderData: {
    ingrName: {
      patty: ["patty", 150, 1],
      cheese: ["cheese", 200, 2],
      lettuce: ["lettuce", 300, 3],
      tomato: ["tomato", 400, 4],
    },
    orderCost: 0,
    paid: false,
    id: 0,
    amount: 0,
    date: new Date(),
  },
  activeProps: {},
  ingrData: {
    patty: ["patty", 150],
    cheese: ["cheese", 200],
    lettuce: ["lettuce", 300],
    tomato: ["tomato", 400],
  },
};
