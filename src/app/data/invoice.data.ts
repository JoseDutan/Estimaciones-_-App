import { Invoice } from "../model/Invoice";

export const invoiceData: Invoice = {
    cliente: {
        nombre: "Acme",
        direccion: "Quito, Ecuador",
        requerimiento: "requiere crear una aplicación utilizando Angular para calcular el costo total de un proyecto de desarrollo de software.",
        tiempo: "3 Meses",
        roles: [
            {
                rol: "GERENTE",
                sueldo: "486,14",
                participacion: "20%"
            },
            {
                rol: "LIDER",
                sueldo: "2340,70",
                participacion: "100%"
            },
            {
                rol: "DESARROLADOR",
                sueldo: "1967,75",
                participacion: "100%"
            },
            {
                rol: "TESTERS",
                sueldo: "492,43",
                participacion: "25%"
            },
            {
                rol: "INFRAESTRUCTURA",
                sueldo: "595,17",
                participacion: "25%"
            }

        ]
    }
}