﻿namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface ServisRow {
        ServisId?: number;
        PartnerId?: number;
        OsnovnoId?: number;
        DatumServisa?: string;
        DatumEndServisa?: string;
        Napomena?: string;
        Active?: boolean;
        DateTimeCreated?: string;
        IznosServisa?: number;
        VrstaTroskaId?: number;
        PartnerNaziv?: string;
        PartnerAdresa?: string;
        PartnerPtt?: number;
        PartnerMjesto?: string;
        PartnerGrad?: string;
        PartnerActive?: boolean;
        PartnerDateTimeCreated?: string;
        PartnerDrzava?: string;
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
        OsnovnoDatumServisa?: string;
        VrstaTroskaNaziv?: string;
        VrstaTroskaDateTimeCreated?: string;
        VrstaTroskaActive?: boolean;
        DetailList?: DokumentacijaRow[];
    }

    export namespace ServisRow {
        export const idProperty = 'ServisId';
        export const nameProperty = 'Napomena';
        export const localTextPrefix = 'OsnovnaSredstva.Servis';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ServisId = "ServisId",
            PartnerId = "PartnerId",
            OsnovnoId = "OsnovnoId",
            DatumServisa = "DatumServisa",
            DatumEndServisa = "DatumEndServisa",
            Napomena = "Napomena",
            Active = "Active",
            DateTimeCreated = "DateTimeCreated",
            IznosServisa = "IznosServisa",
            VrstaTroskaId = "VrstaTroskaId",
            PartnerNaziv = "PartnerNaziv",
            PartnerAdresa = "PartnerAdresa",
            PartnerPtt = "PartnerPtt",
            PartnerMjesto = "PartnerMjesto",
            PartnerGrad = "PartnerGrad",
            PartnerActive = "PartnerActive",
            PartnerDateTimeCreated = "PartnerDateTimeCreated",
            PartnerDrzava = "PartnerDrzava",
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
            OsnovnoStopaAmSredstva = "OsnovnoStopaAmSredstva",
            OsnovnoDatumServisa = "OsnovnoDatumServisa",
            VrstaTroskaNaziv = "VrstaTroskaNaziv",
            VrstaTroskaDateTimeCreated = "VrstaTroskaDateTimeCreated",
            VrstaTroskaActive = "VrstaTroskaActive",
            DetailList = "DetailList"
        }
    }
}

