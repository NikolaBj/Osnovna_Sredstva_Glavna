namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface TemeljnicaStavkeRow {
        TemeljnicaId?: number;
        ObracunId?: number;
        DateTimeCreated?: string;
        Kontoid?: string;
        Duguje?: number;
        Potrazuje?: number;
        ObracunPartnerId?: number;
        ObracunOsnovnoId?: number;
        ObracunSektorId?: number;
        ObracunAmGrupaId?: number;
        ObracunDatumObracuna?: string;
        ObracunRazdobljeOd?: string;
        ObracunRazdobljeDo?: string;
        ObracunNapomena?: string;
        ObracunOtpisano?: boolean;
        ObracunActive?: boolean;
        ObracunZavrsen?: boolean;
        ObracunDateTimeCreated?: string;
    }

    export namespace TemeljnicaStavkeRow {
        export const idProperty = 'TemeljnicaId';
        export const nameProperty = 'Kontoid';
        export const localTextPrefix = 'OsnovnaSredstva.TemeljnicaStavke';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            TemeljnicaId = "TemeljnicaId",
            ObracunId = "ObracunId",
            DateTimeCreated = "DateTimeCreated",
            Kontoid = "Kontoid",
            Duguje = "Duguje",
            Potrazuje = "Potrazuje",
            ObracunPartnerId = "ObracunPartnerId",
            ObracunOsnovnoId = "ObracunOsnovnoId",
            ObracunSektorId = "ObracunSektorId",
            ObracunAmGrupaId = "ObracunAmGrupaId",
            ObracunDatumObracuna = "ObracunDatumObracuna",
            ObracunRazdobljeOd = "ObracunRazdobljeOd",
            ObracunRazdobljeDo = "ObracunRazdobljeDo",
            ObracunNapomena = "ObracunNapomena",
            ObracunOtpisano = "ObracunOtpisano",
            ObracunActive = "ObracunActive",
            ObracunZavrsen = "ObracunZavrsen",
            ObracunDateTimeCreated = "ObracunDateTimeCreated"
        }
    }
}

