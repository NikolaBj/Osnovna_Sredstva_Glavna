
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface UlazniRacunRow {
        UraId?: number;
        PArtnerId?: number;
        UraBroj?: number;
        BrojRacuna?: string;
        DatumRacuna?: string;
        DatumKnjizenja?: string;
        DatumDospijeca?: string;
        DatumIsporuke?: string;
        PoslovnaGodina?: number;
        MjestoTroskaId?: number;
        IznosOsnovice?: number;
        IznosPoreza?: number;
        UkupanIznos?: number;
        Opis?: string;
        Active?: boolean;
        DateTimeCreated?: string;
        PArtnerNaziv?: string;
        PArtnerAdresa?: string;
        PArtnerPtt?: number;
        PArtnerMjesto?: string;
        PArtnerGrad?: string;
        PArtnerActive?: boolean;
        PArtnerDateTimeCreated?: string;
        PArtnerDrzava?: string;
        MjestoTroskaSifra?: string;
        MjestoTroskaNaziv?: string;
        MjestoTroskaActive?: boolean;
        MjestoTroskaDateTimeCreated?: string;
    }

    export namespace UlazniRacunRow {
        export const idProperty = 'UraId';
        export const nameProperty = 'BrojRacuna';
        export const localTextPrefix = 'OsnovnaSredstva.UlazniRacun';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const UraId;
            export declare const PArtnerId;
            export declare const UraBroj;
            export declare const BrojRacuna;
            export declare const DatumRacuna;
            export declare const DatumKnjizenja;
            export declare const DatumDospijeca;
            export declare const DatumIsporuke;
            export declare const PoslovnaGodina;
            export declare const MjestoTroskaId;
            export declare const IznosOsnovice;
            export declare const IznosPoreza;
            export declare const UkupanIznos;
            export declare const Opis;
            export declare const Active;
            export declare const DateTimeCreated;
            export declare const PArtnerNaziv;
            export declare const PArtnerAdresa;
            export declare const PArtnerPtt;
            export declare const PArtnerMjesto;
            export declare const PArtnerGrad;
            export declare const PArtnerActive;
            export declare const PArtnerDateTimeCreated;
            export declare const PArtnerDrzava;
            export declare const MjestoTroskaSifra;
            export declare const MjestoTroskaNaziv;
            export declare const MjestoTroskaActive;
            export declare const MjestoTroskaDateTimeCreated;
        }

        [
            'UraId',
            'PArtnerId',
            'UraBroj',
            'BrojRacuna',
            'DatumRacuna',
            'DatumKnjizenja',
            'DatumDospijeca',
            'DatumIsporuke',
            'PoslovnaGodina',
            'MjestoTroskaId',
            'IznosOsnovice',
            'IznosPoreza',
            'UkupanIznos',
            'Opis',
            'Active',
            'DateTimeCreated',
            'PArtnerNaziv',
            'PArtnerAdresa',
            'PArtnerPtt',
            'PArtnerMjesto',
            'PArtnerGrad',
            'PArtnerActive',
            'PArtnerDateTimeCreated',
            'PArtnerDrzava',
            'MjestoTroskaSifra',
            'MjestoTroskaNaziv',
            'MjestoTroskaActive',
            'MjestoTroskaDateTimeCreated'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}