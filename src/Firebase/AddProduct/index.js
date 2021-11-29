import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export const addProduct = async (product) => {
    try {
      const docRef = await addDoc(collection(db, "vehiculos"), product);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

