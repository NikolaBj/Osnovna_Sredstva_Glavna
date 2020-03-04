
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface ObracunRow {
        ObracunId?: number;
        PartnerId?: number;
        OsnovnoId?: number;
        SektorId?: number;
        AmGrupaId?: number;
        DatumObracuna?: string;
        RazdobljeOd?: string;
        RazdobljeDo?: string;
        Napomena?: string;
        Otpisano?: boolean;
        Active?: boolean;
        Zavrsen?: boolean;
        DateTimeCreated?: string;
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

    export namespace ObracunRow {
        export const idProperty = 'ObracunId';
        export const nameProperty = 'Napomena';
        export const localTextPrefix = 'OsnovnaSredstva.Obracun';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const ObracunId;
            export declare const PartnerId;
            export declare const OsnovnoId;
            export declare const SektorId;
            export declare const AmGrupaId;
            export declare const DatumObracuna;
            export declare const RazdobljeOd;
            export declare const RazdobljeDo;
            export declare const Napomena;
            export declare const Otpisano;
            export declare const Active;
            export declare const Zavrsen;
            export declare const DateTimeCreated;
            export declare const PartnerNaziv;
            export declare const PartnerAdresa;
            export declare const PartnerPtt;
            export declare const PartnerMjesto;
            export declare const PartnerGrad;
            export declare const PartnerActive;
            export declare const PartnerDateTimeCreated;
            export declare const PartnerDrzava;
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
            export declare const SektorNaziv;
            export declare const SektorŠifra;
            export declare const SektorActive;
            export declare const SektorDateTimeCreated;
            export declare const AmGrupaNaziv;
            export declare const AmGrupaNaziv2;
            export declare const AmGrupaAmVijekTrajanja;
            export declare const AmGrupaGodisnjaAmortizacija;
            export declare const AmGrupaDvostrukaGodisnjaAm;
            export declare const AmGrupaKontoIvId;
            export declare const AmGrupaKontoTrId;
            export declare const AmGrupaActive;
            export declare const AmGrupaDateTimeCreated;
        }

        [
            'ObracunId',
            'PartnerId',
            'OsnovnoId',
            'SektorId',
            'AmGrupaId',
            'DatumObracuna',
            'RazdobljeOd',
            'RazdobljeDo',
            'Napomena',
            'Otpisano',
            'Active',
            'Zavrsen',
            'DateTimeCreated',
            'PartnerNaziv',
            'PartnerAdresa',
            'PartnerPtt',
            'PartnerMjesto',
            'PartnerGrad',
            'PartnerActive',
            'PartnerDateTimeCreated',
            'PartnerDrzava',
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
            'OsnovnoStopaAmSredstva',
            'SektorNaziv',
            'SektorŠifra',
            'SektorActive',
            'SektorDateTimeCreated',
            'AmGrupaNaziv',
            'AmGrupaNaziv2',
            'AmGrupaAmVijekTrajanja',
            'AmGrupaGodisnjaAmortizacija',
            'AmGrupaDvostrukaGodisnjaAm',
            'AmGrupaKontoIvId',
            'AmGrupaKontoTrId',
            'AmGrupaActive',
            'AmGrupaDateTimeCreated'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}