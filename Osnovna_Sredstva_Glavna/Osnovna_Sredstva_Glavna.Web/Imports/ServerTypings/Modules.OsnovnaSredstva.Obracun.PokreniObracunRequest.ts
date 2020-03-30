namespace Osnovna_Sredstva_Glavna.Modules.OsnovnaSredstva.Obracun {
    export interface PokreniObracunRequest extends Serenity.ServiceRequest {
        ObracunID?: number;
        IdObracun?: number;
    }
}

