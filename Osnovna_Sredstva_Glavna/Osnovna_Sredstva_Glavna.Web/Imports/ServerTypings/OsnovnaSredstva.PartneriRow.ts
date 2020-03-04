
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

        export namespace Fields {
            export declare const PartnerId;
            export declare const Naziv;
            export declare const Adresa;
            export declare const Ptt;
            export declare const Mjesto;
            export declare const Grad;
            export declare const Active;
            export declare const DateTimeCreated;
            export declare const Drzava;
        }

        [
            'PartnerId',
            'Naziv',
            'Adresa',
            'Ptt',
            'Mjesto',
            'Grad',
            'Active',
            'DateTimeCreated',
            'Drzava'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}