namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface UlazniRacunRow {
        UraId?: number;
        PArtnerId?: number;
        UraBroj?: string;
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

        export declare const enum Fields {
            UraId = "UraId",
            PArtnerId = "PArtnerId",
            UraBroj = "UraBroj",
            BrojRacuna = "BrojRacuna",
            DatumRacuna = "DatumRacuna",
            DatumKnjizenja = "DatumKnjizenja",
            DatumDospijeca = "DatumDospijeca",
            DatumIsporuke = "DatumIsporuke",
            PoslovnaGodina = "PoslovnaGodina",
            MjestoTroskaId = "MjestoTroskaId",
            IznosOsnovice = "IznosOsnovice",
            IznosPoreza = "IznosPoreza",
            UkupanIznos = "UkupanIznos",
            Opis = "Opis",
            Active = "Active",
            DateTimeCreated = "DateTimeCreated",
            PArtnerNaziv = "PArtnerNaziv",
            PArtnerAdresa = "PArtnerAdresa",
            PArtnerPtt = "PArtnerPtt",
            PArtnerMjesto = "PArtnerMjesto",
            PArtnerGrad = "PArtnerGrad",
            PArtnerActive = "PArtnerActive",
            PArtnerDateTimeCreated = "PArtnerDateTimeCreated",
            PArtnerDrzava = "PArtnerDrzava",
            MjestoTroskaSifra = "MjestoTroskaSifra",
            MjestoTroskaNaziv = "MjestoTroskaNaziv",
            MjestoTroskaActive = "MjestoTroskaActive",
            MjestoTroskaDateTimeCreated = "MjestoTroskaDateTimeCreated"
        }
    }
}

