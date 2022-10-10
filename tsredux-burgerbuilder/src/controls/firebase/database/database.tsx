import { getDatabase, get, set, ref, child } from 'firebase/database';
import { app, firebaseConfig } from '../firebase_config';
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
const db = getDatabase(app, firebaseConfig.databaseURL)

export function writeUserData(userId:database, name:database, email:database, imageUrl:database) {
    set(ref(db, 'users/' + userId + '/settings'), {
        username: name,
        email: email,
        profile_picture : imageUrl
    });
}

export function getUserOrdersData(userId:database, loginStatus:boolean){
    const dbRef = ref(db);
    get(child(dbRef, `users/${userId}`)).then((snapshot) => {
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
    const data = get(ref(getDatabase(app, firebaseConfig.databaseURL+'/builder.json')));
    return data;    
}

