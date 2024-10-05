import { InfoFinanciero } from "../model/InfoFinanzas";
import { Invoice } from "../model/Invoice";

export const invoiceData: Invoice = {
    cliente: {
        nombre: "Acme",
        direccion: "Quito, Ecuador",
        requerimiento: "requiere crear una aplicación utilizando Angular para calcular el costo total de un proyecto de desarrollo de software.",
        tiempo: "3 MESES",
        roles: [
            {
                rol: "GERENTE",
                sueldo: "780.23",
                cantidad: 1,
                participacion: "20%",
                sueldoARecibir:"$468.14"
            },
            {
                rol: "LIDER",
                sueldo: "780.23",
                cantidad: 1,
                participacion: "100%",
                sueldoARecibir:"2340.70"
            },
            {
                rol: "DESARROLADOR",
                sueldo: "656.58",
                cantidad:4,
                participacion: "100%",
                sueldoARecibir:"7879"
            },
            {
                rol: "TESTERS",
                sueldo: "656.58",
                cantidad: 1,
                participacion: "25%",
                sueldoARecibir:"492.44"
            },
            {
                rol: "INFRAESTRUCTURA",
                sueldo: "780.23",
                cantidad: 1,
                participacion: "25%",
                sueldoARecibir:"585.18"
            }

        ]
    },
    infoFinanzas: {
        costos_ad: [
            {
                nombre: "Internet",
                monto: 135
            },
            {
                nombre: "Alquiler de oficina",
                monto: 1350
            },
            {
                nombre: "Alquiler de computadoras",
                monto: 1200
            },
            {
                nombre: "Mano de obra",
                monto: 11765.45
            },
            
            {
                nombre: "Alquiler de oficina",
                monto: 1350
            },
            
        ],
        costo_total: [
            {

                nombre: "Costo total",
                monto: 14450.45
            }
        ],
        nomina_mensual: [
            {
                nombre: "Nomina mensual",
                monto: 5623.62
            }
        ],
        precio_venta: [
            {
                nombre: "Precio de venta",
                monto: 21250.67
            }
        ],
        utilidad: [
            {
                nombre: "Utilidad",
                monto: 6800.21
            }
        ],
    }

}