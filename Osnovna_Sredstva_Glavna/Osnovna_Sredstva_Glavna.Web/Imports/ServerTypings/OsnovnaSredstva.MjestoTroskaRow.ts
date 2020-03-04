
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

        export namespace Fields {
            export declare const MjestoTroskaId;
            export declare const Sifra;
            export declare const Naziv;
            export declare const Active;
            export declare const DateTimeCreated;
        }

        [
            'MjestoTroskaId',
            'Sifra',
            'Naziv',
            'Active',
            'DateTimeCreated'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}