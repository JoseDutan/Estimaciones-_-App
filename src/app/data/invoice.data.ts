import { DetFinanciero } from "../model/InfoFinanzas";
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
    },
    infoFinanzas:{
        costos_ad:[
            {
                nombre:"Mano de obra",
                monto:11765.45
            },
            {
                nombre:"Alquiler de computadoras",
                monto:1200
            },
            {
                nombre:"Alquiler de oficina",
                monto:1350
            },
            {
                nombre:"Internet",
                monto:135
            },
        ],
        costo_total:{
            nombre:"Costo total",
            monto:14450.45
        },
        nomina_mensual:{
            nombre:"Nomina mensual",
            monto:5623.62   
        },
        precio_venta:{
            nombre:"Precio de venta",
            monto:21250.67   
        },
        utilidad:{
            nombre:"Utilidad",
            monto:6800.21
        },
    }

}