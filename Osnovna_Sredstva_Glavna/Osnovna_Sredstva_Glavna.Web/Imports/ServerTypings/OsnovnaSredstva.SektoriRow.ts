namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface SektoriRow {
        SektorId?: number;
        Naziv?: string;
        Šifra?: string;
        Active?: boolean;
        DateTimeCreated?: string;
    }

    export namespace SektoriRow {
        export const idProperty = 'SektorId';
        export const nameProperty = 'Naziv';
        export const localTextPrefix = 'OsnovnaSredstva.Sektori';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            SektorId = "SektorId",
            Naziv = "Naziv",
            Šifra = "Šifra",
            Active = "Active",
            DateTimeCreated = "DateTimeCreated"
        }
    }
}

