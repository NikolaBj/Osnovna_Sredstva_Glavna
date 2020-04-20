namespace Osnovna_Sredstva_Glavna.Modules.OsnovnaSredstva.OsnovnoSredstvo {
    export interface PokreniAktivacijuRequest extends Serenity.ServiceRequest {
        OsnovnoId?: number;
        osnovnoId?: number;
    }
}

