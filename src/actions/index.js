export function buscarVehiculo(payload) {
    console.log(payload)
    return{
        type: "BUSCAR_VEHICULO",
        payload
    }
};
