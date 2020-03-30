namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface PartneriRow {
        PartnerId?: number;
        Naziv?: string;
        Adresa?: string;
        Ptt?: number;
        Mjesto?: string;
        Grad?: string;
        Active?: boolean;
        DateTimeCreated?: string;
        Drzava?: string;
    }

    export namespace PartneriRow {
        export const idProperty = 'PartnerId';
        export const nameProperty = 'Naziv';
        export const localTextPrefix = 'OsnovnaSredstva.Partneri';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            PartnerId = "PartnerId",
            Naziv = "Naziv",
            Adresa = "Adresa",
            Ptt = "Ptt",
            Mjesto = "Mjesto",
            Grad = "Grad",
            Active = "Active",
            DateTimeCreated = "DateTimeCreated",
            Drzava = "Drzava"
        }
    }
}

