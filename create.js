import * as uuid from "uuid";
import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async(event, context) => {
    // Request body is passed in as a JSON encoded string in 'event.body'
    const data = JSON.parse(event.body);
    const params = {
        TableName: process.env.tableName,
        Item: {
            // Atributos de vehiculo a crear
            codigo: uuid.v1(),
            nombre: "Sand Crawler",
            modelo: "Digger Crawler",
            fabricante: "Corellia Mining Corporation",
            costo_creditos: "150000",
            longitud: "36.8 ",
            velocidad_maxima: "30",
            tripulacion: "46",
            pasajeros: "30",
            capacidad_carga: "50000",
            consumibles: "2 months",
            clase_vehiculo: "wheeled",
            pilotos: [],
            peliculas: [
                "https://swapi.py4e.com/api/films/1/",
                "https://swapi.py4e.com/api/films/5/"
            ],
            creado: "2014-12-10T15:36:25.724000Z", // Date.now()
            editado: "2014-12-20T21:30:21.661000Z",
            url: "https://swapi.py4e.com/api/vehicles/4/"
        },
    };

    // Operacion para insertar
    await dynamoDb.put(params);

    return params.Item;
});