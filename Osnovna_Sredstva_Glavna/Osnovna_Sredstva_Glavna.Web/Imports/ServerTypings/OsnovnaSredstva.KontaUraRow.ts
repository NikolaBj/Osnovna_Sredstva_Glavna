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

        export declare const enum Fields {
            KontaUraId = "KontaUraId",
            UraId = "UraId",
            KontoId = "KontoId",
            IznosDuguje = "IznosDuguje",
            IznosPotrazuje = "IznosPotrazuje",
            MjestoTroskaId = "MjestoTroskaId",
            Opis = "Opis",
            Active = "Active",
            DateTimeCreated = "DateTimeCreated",
            UraPArtnerId = "UraPArtnerId",
            UraUraBroj = "UraUraBroj",
            UraBrojRacuna = "UraBrojRacuna",
            UraDatumRacuna = "UraDatumRacuna",
            UraDatumKnjizenja = "UraDatumKnjizenja",
            UraDatumDospijeca = "UraDatumDospijeca",
            UraDatumIsporuke = "UraDatumIsporuke",
            UraPoslovnaGodina = "UraPoslovnaGodina",
            UraMjestoTroskaId = "UraMjestoTroskaId",
            UraIznosOsnovice = "UraIznosOsnovice",
            UraIznosPoreza = "UraIznosPoreza",
            UraUkupanIznos = "UraUkupanIznos",
            UraOpis = "UraOpis",
            UraActive = "UraActive",
            UraDateTimeCreated = "UraDateTimeCreated",
            KontoNaziv = "KontoNaziv",
            KontoActive = "KontoActive",
            KontoDateTimeCreated = "KontoDateTimeCreated",
            Konto = "Konto",
            MjestoTroskaSifra = "MjestoTroskaSifra",
            MjestoTroskaNaziv = "MjestoTroskaNaziv",
            MjestoTroskaActive = "MjestoTroskaActive",
            MjestoTroskaDateTimeCreated = "MjestoTroskaDateTimeCreated"
        }
    }
}

