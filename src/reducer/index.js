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
    case "ADD_AMOUNT":
        console.log(action.payload);
        const newGarage2 = [...state.dataGarage]
        const newCount = newGarage2.map(item => {
            if(item.id === action.payload.id) {
                item.cantCart++;
            }
            return item;
        });
        const newDataSimple2 = state.dataSimple.map(item => {
            if(item.id === action.payload.id) {
                if (item.cantCart === 4) {
                    return  item;
                }
                item.stock = item.stock - 1;
            }
            return item;
        });
        const newDataDetallada2 = state.dataDetallada.map(item => {
            if(item.id === action.payload.id) {
                if (item.cantCart === 4) {
                    return item;
                }
                item.stock = item.stock - 1;
            }
            return item;
        });
        const newData2 = {
            dataSimple: newDataSimple2,
            dataDetallada: newDataDetallada2,
            dataGarage: newCount,
        }
        // localStorage.setItem('my-data', JSON.stringify(newData2));
        return newData2
    case "REMOVE_AMOUNT":
        const newGarage3 = [...state.dataGarage]
        const newCount2 = newGarage3.map(item => {
            if(item.id === action.payload.id) {
                item.cantCart--;
            }
            return item;
        });
        const newDataSimple3 = state.dataSimple.map(item => {
            if(item.id === action.payload.id) {
                item.stock = item.stock + 1;
            }
            return item;
        });
        const newDataDetallada3 = state.dataDetallada.map(item => {
            if(item.id === action.payload.id) {
                item.stock = item.stock + 1;
            }
            return item;
        });
        const newData3 = {
            dataSimple: newDataSimple3,
            dataDetallada: newDataDetallada3,
            dataGarage: newCount2,
        }
        // localStorage.setItem('my-data', JSON.stringify(newData3));
        return newData3
    case "REMOVE_GARAGE":
        const newGarage4 = [...state.dataGarage]
        const newDataSimple4 = state.dataSimple.map(item => {
            if(item.id === action.payload.id) {
                item.stock = item.stock + 3;
            }
            return item;
        });
        const newDataDetallada4 = state.dataDetallada.map(item => {
            if(item.id === action.payload.id) {
                item.stock = item.stock + 3;
            }
            return item;
        });
        const data5 = newGarage4.filter(item => item.id !== action.payload.id);
        const newData4 = {
            dataSimple: newDataSimple4,
            dataDetallada: newDataDetallada4,
            dataGarage: data5,
        }
        // localStorage.setItem('my-data', JSON.stringify(newData4));
        return newData4
    case "SET_STOCK":
        return {
            stock: !state.stock
        }
    default:
        return
    }
}

export default appData;