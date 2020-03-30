namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface KontaRow {
        KontoId?: number;
        Naziv?: string;
        Active?: boolean;
        DateTimeCreated?: string;
        Konto?: string;
    }

    export namespace KontaRow {
        export const idProperty = 'KontoId';
        export const nameProperty = 'Naziv';
        export const localTextPrefix = 'OsnovnaSredstva.Konta';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            KontoId = "KontoId",
            Naziv = "Naziv",
            Active = "Active",
            DateTimeCreated = "DateTimeCreated",
            Konto = "Konto"
        }
    }
}

