
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface AmortizacijskeGrupeRow {
        AmGrupaId?: number;
        Naziv?: string;
        Naziv2?: string;
        AmVijekTrajanja?: number;
        GodisnjaAmortizacija?: number;
        DvostrukaGodisnjaAm?: number;
        KontoIvId?: number;
        KontoTrId?: number;
        Active?: boolean;
        DateTimeCreated?: string;
        KontoIvNaziv?: string;
        KontoIvActive?: boolean;
        KontoIvDateTimeCreated?: string;
        KontoIvKonto?: string;
        KontoTrNaziv?: string;
        KontoTrActive?: boolean;
        KontoTrDateTimeCreated?: string;
        KontoTrKonto?: string;
    }

    export namespace AmortizacijskeGrupeRow {
        export const idProperty = 'AmGrupaId';
        export const nameProperty = 'Naziv';
        export const localTextPrefix = 'OsnovnaSredstva.AmortizacijskeGrupe';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const AmGrupaId;
            export declare const Naziv;
            export declare const Naziv2;
            export declare const AmVijekTrajanja;
            export declare const GodisnjaAmortizacija;
            export declare const DvostrukaGodisnjaAm;
            export declare const KontoIvId;
            export declare const KontoTrId;
            export declare const Active;
            export declare const DateTimeCreated;
            export declare const KontoIvNaziv;
            export declare const KontoIvActive;
            export declare const KontoIvDateTimeCreated;
            export declare const KontoIvKonto;
            export declare const KontoTrNaziv;
            export declare const KontoTrActive;
            export declare const KontoTrDateTimeCreated;
            export declare const KontoTrKonto;
        }

        [
            'AmGrupaId',
            'Naziv',
            'Naziv2',
            'AmVijekTrajanja',
            'GodisnjaAmortizacija',
            'DvostrukaGodisnjaAm',
            'KontoIvId',
            'KontoTrId',
            'Active',
            'DateTimeCreated',
            'KontoIvNaziv',
            'KontoIvActive',
            'KontoIvDateTimeCreated',
            'KontoIvKonto',
            'KontoTrNaziv',
            'KontoTrActive',
            'KontoTrDateTimeCreated',
            'KontoTrKonto'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}