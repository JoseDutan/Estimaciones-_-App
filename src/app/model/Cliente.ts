import { Direccion } from "./Direccion";
import { Roles} from "./Roles";

export class Cliente{
    nombre!:String;
    direccion!:Direccion;
    requerimiento!:String;
    tiempo!:String;
    roles!:Roles[];
}