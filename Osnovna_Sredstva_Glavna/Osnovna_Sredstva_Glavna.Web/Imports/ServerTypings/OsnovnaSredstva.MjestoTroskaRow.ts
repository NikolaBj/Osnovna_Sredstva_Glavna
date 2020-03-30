namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface MjestoTroskaRow {
        MjestoTroskaId?: number;
        Sifra?: string;
        Naziv?: string;
        Active?: boolean;
        DateTimeCreated?: string;
    }

    export namespace MjestoTroskaRow {
        export const idProperty = 'MjestoTroskaId';
        export const nameProperty = 'Sifra';
        export const localTextPrefix = 'OsnovnaSredstva.MjestoTroska';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            MjestoTroskaId = "MjestoTroskaId",
            Sifra = "Sifra",
            Naziv = "Naziv",
            Active = "Active",
            DateTimeCreated = "DateTimeCreated"
        }
    }
}

