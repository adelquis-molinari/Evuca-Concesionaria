import { doc, setDoc } from "firebase/firestore";
import { apiSimpleAutos } from "../Data/apiAutos";
import { apiSimpleMotos } from "../Data/apiMotos";
import { apiSimpleTractores } from "../Data/apiTractores";

const dataSimple = apiSimpleAutos.concat(apiSimpleMotos, apiSimpleTractores);
const myData = {
    dataSimple: dataSimple,
    dataGarage: [],
};

await setDoc(doc(db, "vehiculo"), myData);