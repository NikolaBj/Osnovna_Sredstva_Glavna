
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

        export namespace Fields {
            export declare const SektorId;
            export declare const Naziv;
            export declare const Šifra;
            export declare const Active;
            export declare const DateTimeCreated;
        }

        [
            'SektorId',
            'Naziv',
            'Šifra',
            'Active',
            'DateTimeCreated'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}