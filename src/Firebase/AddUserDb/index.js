import { db } from "../firebaseConfig";
import { setDoc, doc, getDoc} from "firebase/firestore";
import { loadData } from "../../actions";


export const addUserDb = async (user)=> {
    try {
        const docRef = await setDoc(doc(db, 'usuarios', user.sub), user);
        console.log("Document written with ID: ", docRef);
    } catch(e) {
        console.error("Error adding document: ", e);
    }
}


export const checkUserDb = async (user) => {
    const docRef = doc(db, "usuarios", user.sub);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        addUserDb(user)
    }
}

export const addDataRedux = async () => {
    const docRef = doc(db, "vehiculos", '9aTxcazQcQuKnhHarxMR');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const data = docSnap.data();
        console.log("Document data:", docSnap.data(), data);
        return data
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}