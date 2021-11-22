import { apiSimpleAutos, apiDetalladaAutos } from "../Data/apiAutos";
import { apiSimpleMotos, apiDetalladaMotos } from "../Data/apiMotos";
import { apiSimpleTractores, apiDetalladaTractores } from "../Data/apiTractores";

const dataSimple = apiSimpleAutos.concat(apiSimpleMotos, apiSimpleTractores);
const dataDetallada = apiDetalladaAutos.concat(apiDetalladaMotos, apiDetalladaTractores);
const myData = {
    dataSimple: dataSimple,
    dataDetallada: dataDetallada,
    dataGarage: [],
};

localStorage.setItem('my-data', JSON.stringify(myData));

const appData = (state = myData , action) => {
    switch(action.type) {
    case "LOAD_DATA":
        const jsonData = JSON.parse(action.payload)
        return {
            dataSimple: jsonData.dataSimple,
            dataDetallada: jsonData.dataDetallada,
            dataGarage: jsonData.dataGarage,
            stock: jsonData.stock
        }
    case "ADD_GARAGE":
        const newGarage = [...state.dataGarage]
        const inGarage = newGarage.findIndex(item => item.id === action.payload.id)
        if (inGarage === -1) {
            newGarage.push(action.payload)
        }else {
        newGarage[inGarage].cantCart = newGarage[inGarage].cantCart + 1;
        }
        const newDataSimple = state.dataSimple.map(item => {
            if(item.modelo === action.payload.modelo) {
                item.stock = item.stock - 1;
            }
            return item;
        });
        const newDataDetallada = state.dataDetallada.map(item => {
            if(item.modelo === action.payload.modelo) {
                item.stock = item.stock - 1;
            }
            return item;
        });
        const newData = {
            dataSimple: newDataSimple,
            dataDetallada: newDataDetallada,
            dataGarage: newGarage,
        }
        // localStorage.setItem('my-data', JSON.stringify(newData));
        return newData
    case "REMOVE_GARAGE":
        console.log(action.payload, "reducer");
        return {
            // dataGarage: [...state.filter(item => item.idGarage !== action.payload)]
        }
    case "SET_STOCK":
        return {
            stock: !state.stock
        }
    default:
        return
    }
}

export default appData;