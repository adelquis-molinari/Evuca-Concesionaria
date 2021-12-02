import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export const addProduct = async (product) => {
    try {
      const docRef = await addDoc(collection(db, "vehiculos"), product);
    } catch (e) {
      alert("Error adding document: ", e);
    }
  };

