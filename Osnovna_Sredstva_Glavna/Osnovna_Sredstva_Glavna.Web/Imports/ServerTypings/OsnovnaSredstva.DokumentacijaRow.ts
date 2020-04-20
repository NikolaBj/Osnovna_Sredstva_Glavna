namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface DokumentacijaRow {
        DokumentId?: number;
        Naziv?: string;
        Active?: boolean;
        FileContent?: string;
        DateTimeCreated?: string;
        OsnovnoId?: number;
        ServisId?: number;
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
        ServisPartnerId?: number;
        ServisOsnovnoId?: number;
        ServisDatumServisa?: string;
        ServisDatumEndServisa?: string;
        ServisNapomena?: string;
        ServisActive?: boolean;
        ServisDateTimeCreated?: string;
        ServisIznosServisa?: number;
        ServisVrstaTroskaId?: number;
    }

    export namespace DokumentacijaRow {
        export const idProperty = 'DokumentId';
        export const nameProperty = 'Naziv';
        export const localTextPrefix = 'OsnovnaSredstva.Dokumentacija';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            DokumentId = "DokumentId",
            Naziv = "Naziv",
            Active = "Active",
            FileContent = "FileContent",
            DateTimeCreated = "DateTimeCreated",
            OsnovnoId = "OsnovnoId",
            ServisId = "ServisId",
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
            ServisPartnerId = "ServisPartnerId",
            ServisOsnovnoId = "ServisOsnovnoId",
            ServisDatumServisa = "ServisDatumServisa",
            ServisDatumEndServisa = "ServisDatumEndServisa",
            ServisNapomena = "ServisNapomena",
            ServisActive = "ServisActive",
            ServisDateTimeCreated = "ServisDateTimeCreated",
            ServisIznosServisa = "ServisIznosServisa",
            ServisVrstaTroskaId = "ServisVrstaTroskaId"
        }
    }
}

