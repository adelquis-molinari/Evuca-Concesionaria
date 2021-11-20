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
        // console.log(JSON.parse(action.payload), 'dataaa')
        const jsonData = JSON.parse(action.payload)
        return {
            dataSimple: jsonData.dataSimple,
            dataDetallada: jsonData.dataDetallada,
            dataGarage: jsonData.dataGarage,
            stock: jsonData.stock
        }
    case "ADD_GARAGE":
        //agregar al estado dataGarage
        //reduir cantidad de estado dataSimple
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
        const newDataGarage = state.dataGarage.concat(action.payload);
        return {
            ...state,
            dataSimple: newDataSimple,
            dataDetallada: newDataDetallada,
            dataGarage: newDataGarage
        }
        // return {
        //     ...state,
        //     dataGarage: [...state.dataGarage, action.payload]
        // }
    case "REMOVE_GARAGE":
        return {
            dataGarage: [...state.filter(item => item.id !== action.payload)]
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