
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface OsnovnoSredstvoRow {
        OsnovnoId?: number;
        NazivOpreme?: string;
        PartnerId?: number;
        UraId?: number;
        SerijskiBroj?: string;
        InventarskiBroj?: string;
        NabavnaVrijednost?: number;
        AmortiziranaVrijednost?: number;
        KnjigovodstvenaVrijednost?: number;
        UvecanjeVrijednosti?: number;
        UmanjenjeVrijednosti?: number;
        SektorId?: number;
        Active?: boolean;
        DatumNabave?: string;
        DatumAmortizacije?: string;
        DatumOtpisa?: string;
        DatumPripreme?: string;
        Otpisano?: boolean;
        Količina?: number;
        AmGrupaId?: number;
        DateTimeCreated?: string;
        KontoId?: number;
        KontoIvId?: number;
        Napomena?: string;
        JedinicaMjere?: string;
        StopaAmSredstva?: number;
        PartnerNaziv?: string;
        PartnerAdresa?: string;
        PartnerPtt?: number;
        PartnerMjesto?: string;
        PartnerGrad?: string;
        PartnerActive?: boolean;
        PartnerDateTimeCreated?: string;
        PartnerDrzava?: string;
        UraPArtnerId?: number;
        UraUraBroj?: number;
        UraBrojRacuna?: string;
        UraDatumRacuna?: string;
        UraDatumKnjizenja?: string;
        UraDatumDospijeca?: string;
        UraDatumIsporuke?: string;
        UraPoslovnaGodina?: number;
        UraMjestoTroskaId?: number;
        UraIznosOsnovice?: number;
        UraIznosPoreza?: number;
        UraUkupanIznos?: number;
        UraOpis?: string;
        UraActive?: boolean;
        UraDateTimeCreated?: string;
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
        KontoNaziv?: string;
        KontoActive?: boolean;
        KontoDateTimeCreated?: string;
        Konto?: string;
        KontoIvNaziv?: string;
        KontoIvActive?: boolean;
        KontoIvDateTimeCreated?: string;
        KontoIvKonto?: string;
    }
 export function getLookup(): Q.Lookup<OsnovnoSredstvoRow> {
            return Q.getLookup<OsnovnoSredstvoRow>('OsnovnoSredstvoRow.AmGrupaId');
        }
    export namespace OsnovnoSredstvoRow {
        export const idProperty = 'OsnovnoId';
        export const nameProperty = 'NazivOpreme';
        export const localTextPrefix = 'OsnovnaSredstva.OsnovnoSredstvo';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const OsnovnoId;
            export declare const NazivOpreme;
            export declare const PartnerId;
            export declare const UraId;
            export declare const SerijskiBroj;
            export declare const InventarskiBroj;
            export declare const NabavnaVrijednost;
            export declare const AmortiziranaVrijednost;
            export declare const KnjigovodstvenaVrijednost;
            export declare const UvecanjeVrijednosti;
            export declare const UmanjenjeVrijednosti;
            export declare const SektorId;
            export declare const Active;
            export declare const DatumNabave;
            export declare const DatumAmortizacije;
            export declare const DatumOtpisa;
            export declare const DatumPripreme;
            export declare const Otpisano;
            export declare const Količina;
            export declare const AmGrupaId;
            export declare const DateTimeCreated;
            export declare const KontoId;
            export declare const KontoIvId;
            export declare const Napomena;
            export declare const JedinicaMjere;
            export declare const StopaAmSredstva;
            export declare const PartnerNaziv;
            export declare const PartnerAdresa;
            export declare const PartnerPtt;
            export declare const PartnerMjesto;
            export declare const PartnerGrad;
            export declare const PartnerActive;
            export declare const PartnerDateTimeCreated;
            export declare const PartnerDrzava;
            export declare const UraPArtnerId;
            export declare const UraUraBroj;
            export declare const UraBrojRacuna;
            export declare const UraDatumRacuna;
            export declare const UraDatumKnjizenja;
            export declare const UraDatumDospijeca;
            export declare const UraDatumIsporuke;
            export declare const UraPoslovnaGodina;
            export declare const UraMjestoTroskaId;
            export declare const UraIznosOsnovice;
            export declare const UraIznosPoreza;
            export declare const UraUkupanIznos;
            export declare const UraOpis;
            export declare const UraActive;
            export declare const UraDateTimeCreated;
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
            export declare const KontoNaziv;
            export declare const KontoActive;
            export declare const KontoDateTimeCreated;
            export declare const Konto;
            export declare const KontoIvNaziv;
            export declare const KontoIvActive;
            export declare const KontoIvDateTimeCreated;
            export declare const KontoIvKonto;
        }

        [
            'OsnovnoId',
            'NazivOpreme',
            'PartnerId',
            'UraId',
            'SerijskiBroj',
            'InventarskiBroj',
            'NabavnaVrijednost',
            'AmortiziranaVrijednost',
            'KnjigovodstvenaVrijednost',
            'UvecanjeVrijednosti',
            'UmanjenjeVrijednosti',
            'SektorId',
            'Active',
            'DatumNabave',
            'DatumAmortizacije',
            'DatumOtpisa',
            'DatumPripreme',
            'Otpisano',
            'Količina',
            'AmGrupaId',
            'DateTimeCreated',
            'KontoId',
            'KontoIvId',
            'Napomena',
            'JedinicaMjere',
            'StopaAmSredstva',
            'PartnerNaziv',
            'PartnerAdresa',
            'PartnerPtt',
            'PartnerMjesto',
            'PartnerGrad',
            'PartnerActive',
            'PartnerDateTimeCreated',
            'PartnerDrzava',
            'UraPArtnerId',
            'UraUraBroj',
            'UraBrojRacuna',
            'UraDatumRacuna',
            'UraDatumKnjizenja',
            'UraDatumDospijeca',
            'UraDatumIsporuke',
            'UraPoslovnaGodina',
            'UraMjestoTroskaId',
            'UraIznosOsnovice',
            'UraIznosPoreza',
            'UraUkupanIznos',
            'UraOpis',
            'UraActive',
            'UraDateTimeCreated',
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
            'AmGrupaDateTimeCreated',
            'KontoNaziv',
            'KontoActive',
            'KontoDateTimeCreated',
            'Konto',
            'KontoIvNaziv',
            'KontoIvActive',
            'KontoIvDateTimeCreated',
            'KontoIvKonto'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}