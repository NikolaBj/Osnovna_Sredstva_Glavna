
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

        export namespace Fields {
            export declare const KontoId;
            export declare const Naziv;
            export declare const Active;
            export declare const DateTimeCreated;
            export declare const Konto;
        }

        [
            'KontoId',
            'Naziv',
            'Active',
            'DateTimeCreated',
            'Konto'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}