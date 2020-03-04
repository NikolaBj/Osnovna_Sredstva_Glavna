
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

        export namespace Fields {
            export declare const TemeljnicaId;
            export declare const ObracunId;
            export declare const DateTimeCreated;
            export declare const Kontoid;
            export declare const Duguje;
            export declare const Potrazuje;
            export declare const ObracunPartnerId;
            export declare const ObracunOsnovnoId;
            export declare const ObracunSektorId;
            export declare const ObracunAmGrupaId;
            export declare const ObracunDatumObracuna;
            export declare const ObracunRazdobljeOd;
            export declare const ObracunRazdobljeDo;
            export declare const ObracunNapomena;
            export declare const ObracunOtpisano;
            export declare const ObracunActive;
            export declare const ObracunZavrsen;
            export declare const ObracunDateTimeCreated;
        }

        [
            'TemeljnicaId',
            'ObracunId',
            'DateTimeCreated',
            'Kontoid',
            'Duguje',
            'Potrazuje',
            'ObracunPartnerId',
            'ObracunOsnovnoId',
            'ObracunSektorId',
            'ObracunAmGrupaId',
            'ObracunDatumObracuna',
            'ObracunRazdobljeOd',
            'ObracunRazdobljeDo',
            'ObracunNapomena',
            'ObracunOtpisano',
            'ObracunActive',
            'ObracunZavrsen',
            'ObracunDateTimeCreated'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}