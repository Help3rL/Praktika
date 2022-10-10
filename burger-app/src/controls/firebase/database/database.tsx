import { getDatabase, get, set, ref, child } from 'firebase/database';
// import { app, firebaseConfig } from '../firebase_config';

type ingrData = {
    name: string,
    amount: number
}
type order = {
    ingrName: Array<ingrData>,
    orderCost: number,
    paid: boolean,
}

type database = {
    userId: string,
    name: string,
    email: string,
    imageUrl: string,
    orders: Array<order>
}
const db:any = 'hell';

export function writeUserData(userId:database, name:database, email:database, imageUrl:database) {
    set(ref(db, 'users/' + userId + '/settings'), {
        username: name,
        email: email,
        profile_picture : imageUrl
    });
}

export function getUserOrdersData(userId:database, loginStatus:boolean){
    const dbRef = ref(db);
    get(child(dbRef, `users/${userId}`)).then((snapshot: { exists: () => any; val: () => any; }) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
    } else {
        console.log("No data available");
    }
    }).catch((error) => {
    console.error(error);
    });
}

export function writeUserOrderData(userId:database, order:order){
    set(ref(db, 'users/'+ userId), order)
}

export const getBuilderData = () => {
    // const service = require('../serviceAcc.json');
    // admin.initializeApp({
    //     credential: admin.credential.cert(service),
    //     databaseURL: "https://testproject-tsrecburgerbuilder-default-rtdb.europe-west1.firebasedatabase.app"
    // });
    // const hdb = admin.database();
    // var ref = hdb.ref("/builder");
    // ref.once('value', function(snapshot){
    //     console.log(snapshot.val)
    // })
    // const data = get(db.ref(getDatabase(app, firebaseConfig.databaseURL+'/builder.json')));
    // console.log(data)
    // return data;    
}

