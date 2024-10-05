import { InfoFinanciero } from "../model/InfoFinanzas";
import { Invoice } from "../model/Invoice";

export const invoiceData: Invoice = {
    cliente: {
        nombre: "Acme",
        direccion: {
            calle_principal:"RUMICHACA",
            calle_secundaria:"9 DE OCTUBRE",
            numeracion:"800"
        },
        requerimiento: "requiere crear una aplicación utilizando Angular para calcular el costo total de un proyecto de desarrollo de software.",
        tiempo: "3 Meses",
        roles: [
            {
                rol: "GERENTE",
                sueldo: "600",
                cantidad: 1,
                participacion: "20%",
                mano_obra: "486,14",
            },
            {
                rol: "LIDER",
                sueldo: "600",
                cantidad: 1,
                participacion: "100%",
                mano_obra: "2340,70",
            },
            {
                rol: "DESARROLADOR",
                sueldo: "500",
                cantidad: 4,
                participacion: "100%",
                mano_obra: "7879"
            },
            {
                rol: "TESTERS",
                sueldo: "500",
                cantidad: 1,
                participacion: "25%",
                mano_obra: "492,43"
            },
            {
                rol: "INFRAESTRUCTURA",
                sueldo: "600",
                cantidad: 1,
                participacion: "25%",
                mano_obra: "595,17"
            }

        ]
    },
    infoFinanzas: {
        costos_ad: [            
            {
                nombre: "Alquiler de computadoras",
                monto: 1200
            },
            {
                nombre: "Alquiler de oficina",
                monto: 1350
            },
            {
                nombre: "Internet",
                monto: 135
            },
            {
                nombre: "Total adicionales",
                monto: 2685
            },
            
        ],
        total_proyecto: [
            {
                nombre: "Mano de obra",
                monto: 11765.45
            },
            {
                nombre: "Costo total",
                monto: 14450.45
            },
            {
                nombre: "Servicios adicionales",
                monto: 2685
            },
            {
                nombre: "Subtotal",
                monto: 14450.45
            },
            {
                nombre: "Porcentaje utilidad",
                monto: 32
            },
            {
                nombre: "Utilidad",
                monto: 6800.21
            },
            {
                nombre: "Total proyecto",
                monto: 21250.67
            }
            
        ]
    }

}