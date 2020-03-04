
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface AktivacijaSredstvaRow {
        Int?: number;
        OsnovnoId?: number;
        DatumAktivacije?: string;
        OsnovnoNazivOpreme?: string;
        OsnovnoPartnerId?: number;
        OsnovnoUraId?: number;
        OsnovnoSerijskiBroj?: string;
        OsnovnoInventarskiBroj?: string;
        OsnovnoNabavnaVrijednost?: number;
        OsnovnoAmortiziranaVrijednost?: number;
        OsnovnoKnjigovodstvenaVrijednost?: number;
        OsnovnoUvecanjeVrijednosti?: number;
        OsnovnoUmanjenjeVrijednosti?: number;
        OsnovnoSektorId?: number;
        OsnovnoActive?: boolean;
        OsnovnoDatumNabave?: string;
        OsnovnoDatumAmortizacije?: string;
        OsnovnoDatumOtpisa?: string;
        OsnovnoDatumPripreme?: string;
        OsnovnoOtpisano?: boolean;
        OsnovnoKoličina?: number;
        OsnovnoAmGrupaId?: number;
        OsnovnoDateTimeCreated?: string;
        OsnovnoKontoId?: number;
        OsnovnoKontoIvId?: number;
        OsnovnoNapomena?: string;
        OsnovnoJedinicaMjere?: string;
        OsnovnoStopaAmSredstva?: number;
    }

    export namespace AktivacijaSredstvaRow {
        export const idProperty = 'Int';
        export const localTextPrefix = 'OsnovnaSredstva.AktivacijaSredstva';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Int;
            export declare const OsnovnoId;
            export declare const DatumAktivacije;
            export declare const OsnovnoNazivOpreme;
            export declare const OsnovnoPartnerId;
            export declare const OsnovnoUraId;
            export declare const OsnovnoSerijskiBroj;
            export declare const OsnovnoInventarskiBroj;
            export declare const OsnovnoNabavnaVrijednost;
            export declare const OsnovnoAmortiziranaVrijednost;
            export declare const OsnovnoKnjigovodstvenaVrijednost;
            export declare const OsnovnoUvecanjeVrijednosti;
            export declare const OsnovnoUmanjenjeVrijednosti;
            export declare const OsnovnoSektorId;
            export declare const OsnovnoActive;
            export declare const OsnovnoDatumNabave;
            export declare const OsnovnoDatumAmortizacije;
            export declare const OsnovnoDatumOtpisa;
            export declare const OsnovnoDatumPripreme;
            export declare const OsnovnoOtpisano;
            export declare const OsnovnoKoličina;
            export declare const OsnovnoAmGrupaId;
            export declare const OsnovnoDateTimeCreated;
            export declare const OsnovnoKontoId;
            export declare const OsnovnoKontoIvId;
            export declare const OsnovnoNapomena;
            export declare const OsnovnoJedinicaMjere;
            export declare const OsnovnoStopaAmSredstva;
        }

        [
            'Int',
            'OsnovnoId',
            'DatumAktivacije',
            'OsnovnoNazivOpreme',
            'OsnovnoPartnerId',
            'OsnovnoUraId',
            'OsnovnoSerijskiBroj',
            'OsnovnoInventarskiBroj',
            'OsnovnoNabavnaVrijednost',
            'OsnovnoAmortiziranaVrijednost',
            'OsnovnoKnjigovodstvenaVrijednost',
            'OsnovnoUvecanjeVrijednosti',
            'OsnovnoUmanjenjeVrijednosti',
            'OsnovnoSektorId',
            'OsnovnoActive',
            'OsnovnoDatumNabave',
            'OsnovnoDatumAmortizacije',
            'OsnovnoDatumOtpisa',
            'OsnovnoDatumPripreme',
            'OsnovnoOtpisano',
            'OsnovnoKoličina',
            'OsnovnoAmGrupaId',
            'OsnovnoDateTimeCreated',
            'OsnovnoKontoId',
            'OsnovnoKontoIvId',
            'OsnovnoNapomena',
            'OsnovnoJedinicaMjere',
            'OsnovnoStopaAmSredstva'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}