
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface KontaUraRow {
        KontaUraId?: number;
        UraId?: number;
        KontoId?: number;
        IznosDuguje?: number;
        IznosPotrazuje?: number;
        MjestoTroskaId?: number;
        Opis?: string;
        Active?: boolean;
        DateTimeCreated?: string;
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
        KontoNaziv?: string;
        KontoActive?: boolean;
        KontoDateTimeCreated?: string;
        Konto?: string;
        MjestoTroskaSifra?: string;
        MjestoTroskaNaziv?: string;
        MjestoTroskaActive?: boolean;
        MjestoTroskaDateTimeCreated?: string;
    }

    export namespace KontaUraRow {
        export const idProperty = 'KontaUraId';
        export const nameProperty = 'Opis';
        export const localTextPrefix = 'OsnovnaSredstva.KontaUra';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const KontaUraId;
            export declare const UraId;
            export declare const KontoId;
            export declare const IznosDuguje;
            export declare const IznosPotrazuje;
            export declare const MjestoTroskaId;
            export declare const Opis;
            export declare const Active;
            export declare const DateTimeCreated;
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
            export declare const KontoNaziv;
            export declare const KontoActive;
            export declare const KontoDateTimeCreated;
            export declare const Konto;
            export declare const MjestoTroskaSifra;
            export declare const MjestoTroskaNaziv;
            export declare const MjestoTroskaActive;
            export declare const MjestoTroskaDateTimeCreated;
        }

        [
            'KontaUraId',
            'UraId',
            'KontoId',
            'IznosDuguje',
            'IznosPotrazuje',
            'MjestoTroskaId',
            'Opis',
            'Active',
            'DateTimeCreated',
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
            'KontoNaziv',
            'KontoActive',
            'KontoDateTimeCreated',
            'Konto',
            'MjestoTroskaSifra',
            'MjestoTroskaNaziv',
            'MjestoTroskaActive',
            'MjestoTroskaDateTimeCreated'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}