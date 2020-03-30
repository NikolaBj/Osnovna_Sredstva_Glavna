namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface ObracunStavkeRow {
        ObracunStavkeId?: number;
        ObracunId?: number;
        PartnerId?: number;
        OsnovnoId?: number;
        SektorId?: number;
        AmGrupaId?: number;
        StopaAmort?: number;
        IznosOsnovice?: number;
        IznosAmortizacije?: number;
        DatumOdObracuna?: string;
        Napomena?: string;
        Active?: boolean;
        DateTimeCreated?: string;
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
        SektorNaziv?: string;
        SektorŠifra?: string;
        SektorActive?: boolean;
        SektorDateTimeCreated?: string;
        AmGrupaNaziv?: string;
        AmGrupaNaziv2?: string;
        AmGrupaAmVijekTrajanja?: number;
        AmGrupaGodisnjaAmortizacija?: number;
        AmGrupaDvostrukaGodisnjaAm?: number;
        AmGrupaKontoIvId?: number;
        AmGrupaKontoTrId?: number;
        AmGrupaActive?: boolean;
        AmGrupaDateTimeCreated?: string;
    }

    export namespace ObracunStavkeRow {
        export const idProperty = 'ObracunStavkeId';
        export const nameProperty = 'Napomena';
        export const localTextPrefix = 'OsnovnaSredstva.ObracunStavke';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ObracunStavkeId = "ObracunStavkeId",
            ObracunId = "ObracunId",
            PartnerId = "PartnerId",
            OsnovnoId = "OsnovnoId",
            SektorId = "SektorId",
            AmGrupaId = "AmGrupaId",
            StopaAmort = "StopaAmort",
            IznosOsnovice = "IznosOsnovice",
            IznosAmortizacije = "IznosAmortizacije",
            DatumOdObracuna = "DatumOdObracuna",
            Napomena = "Napomena",
            Active = "Active",
            DateTimeCreated = "DateTimeCreated",
            ObracunPartnerId = "ObracunPartnerId",
            ObracunOsnovnoId = "ObracunOsnovnoId",
            ObracunSektorId = "ObracunSektorId",
            ObracunAmGrupaId = "ObracunAmGrupaId",
            ObracunDatumObracuna = "ObracunDatumObracuna",
            ObracunRazdobljeOd = "ObracunRazdobljeOd",
            ObracunRazdobljeDo = "ObracunRazdobljeDo",
            ObracunNapomena = "ObracunNapomena",
            ObracunOtpisano = "ObracunOtpisano",
            ObracunActive = "ObracunActive",
            ObracunZavrsen = "ObracunZavrsen",
            ObracunDateTimeCreated = "ObracunDateTimeCreated",
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
            SektorNaziv = "SektorNaziv",
            SektorŠifra = "SektorŠifra",
            SektorActive = "SektorActive",
            SektorDateTimeCreated = "SektorDateTimeCreated",
            AmGrupaNaziv = "AmGrupaNaziv",
            AmGrupaNaziv2 = "AmGrupaNaziv2",
            AmGrupaAmVijekTrajanja = "AmGrupaAmVijekTrajanja",
            AmGrupaGodisnjaAmortizacija = "AmGrupaGodisnjaAmortizacija",
            AmGrupaDvostrukaGodisnjaAm = "AmGrupaDvostrukaGodisnjaAm",
            AmGrupaKontoIvId = "AmGrupaKontoIvId",
            AmGrupaKontoTrId = "AmGrupaKontoTrId",
            AmGrupaActive = "AmGrupaActive",
            AmGrupaDateTimeCreated = "AmGrupaDateTimeCreated"
        }
    }
}

