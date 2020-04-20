namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface VrstaTroskaRow {
        VrstaTroskaId?: number;
        Naziv?: string;
        DateTimeCreated?: string;
        Active?: boolean;
    }

    export namespace VrstaTroskaRow {
        export const idProperty = 'VrstaTroskaId';
        export const nameProperty = 'Naziv';
        export const localTextPrefix = 'OsnovnaSredstva.VrstaTroska';
        export const lookupKey = 'OsnovnaSredstva.VrstaTroska';

        export function getLookup(): Q.Lookup<VrstaTroskaRow> {
            return Q.getLookup<VrstaTroskaRow>('OsnovnaSredstva.VrstaTroska');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            VrstaTroskaId = "VrstaTroskaId",
            Naziv = "Naziv",
            DateTimeCreated = "DateTimeCreated",
            Active = "Active"
        }
    }
}

