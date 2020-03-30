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

        export declare const enum Fields {
            Int = "Int",
            OsnovnoId = "OsnovnoId",
            DatumAktivacije = "DatumAktivacije",
            OsnovnoNazivOpreme = "OsnovnoNazivOpreme",
            OsnovnoPartnerId = "OsnovnoPartnerId",
            OsnovnoUraId = "OsnovnoUraId",
            OsnovnoSerijskiBroj = "OsnovnoSerijskiBroj",
            OsnovnoInventarskiBroj = "OsnovnoInventarskiBroj",
            OsnovnoNabavnaVrijednost = "OsnovnoNabavnaVrijednost",
            OsnovnoAmortiziranaVrijednost = "OsnovnoAmortiziranaVrijednost",
            OsnovnoKnjigovodstvenaVrijednost = "OsnovnoKnjigovodstvenaVrijednost",
            OsnovnoUvecanjeVrijednosti = "OsnovnoUvecanjeVrijednosti",
            OsnovnoUmanjenjeVrijednosti = "OsnovnoUmanjenjeVrijednosti",
            OsnovnoSektorId = "OsnovnoSektorId",
            OsnovnoActive = "OsnovnoActive",
            OsnovnoDatumNabave = "OsnovnoDatumNabave",
            OsnovnoDatumAmortizacije = "OsnovnoDatumAmortizacije",
            OsnovnoDatumOtpisa = "OsnovnoDatumOtpisa",
            OsnovnoDatumPripreme = "OsnovnoDatumPripreme",
            OsnovnoOtpisano = "OsnovnoOtpisano",
            OsnovnoKoličina = "OsnovnoKoličina",
            OsnovnoAmGrupaId = "OsnovnoAmGrupaId",
            OsnovnoDateTimeCreated = "OsnovnoDateTimeCreated",
            OsnovnoKontoId = "OsnovnoKontoId",
            OsnovnoKontoIvId = "OsnovnoKontoIvId",
            OsnovnoNapomena = "OsnovnoNapomena",
            OsnovnoJedinicaMjere = "OsnovnoJedinicaMjere",
            OsnovnoStopaAmSredstva = "OsnovnoStopaAmSredstva"
        }
    }
}

