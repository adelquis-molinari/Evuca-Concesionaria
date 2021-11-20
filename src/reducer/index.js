import { apiSimpleAutos, apiDetalladaAutos } from "../Data/apiAutos";
import { apiSimpleMotos, apiDetalladaMotos } from "../Data/apiMotos";
import { apiSimpleTractores, apiDetalladaTractores } from "../Data/apiTractores";

const dataSimple = apiSimpleAutos.concat(apiSimpleMotos, apiSimpleTractores);
const dataDetallada = apiDetalladaAutos.concat(apiDetalladaMotos, apiDetalladaTractores);
const myData = {
    dataSimple: dataSimple,
    dataDetallada: dataDetallada,
    dataGarage: [],
    stock:true
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
        console.log(action.payload);
        const newGarage = [...state.dataGarage];
        const inGarage = newGarage.findIndex(item => item.id === action.payload.id);
        console.log(inGarage,'reducer');
        if (inGarage === -1) {
            newGarage.push(action.payload);
         } 
        else {
            return newGarage[inGarage].cantidad = newGarage[inGarage].cantidad + 1;
        }

        const newDataSimple = state.dataSimple.map(item => {
            if(item.modelo === action.payload.modelo) {
                item.cantidad = item.cantidad - 1;
            }
            return item;
        });
        const newDataDetallada = state.dataDetallada.map(item => {
            if(item.modelo === action.payload.modelo) {
                item.cantidad = item.cantidad - 1;
            }
            return item;
        });
        return {
            ...state,
            dataSimple: newDataSimple,
            dataDetallada: newDataDetallada,
            dataGarage: newGarage
        }
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