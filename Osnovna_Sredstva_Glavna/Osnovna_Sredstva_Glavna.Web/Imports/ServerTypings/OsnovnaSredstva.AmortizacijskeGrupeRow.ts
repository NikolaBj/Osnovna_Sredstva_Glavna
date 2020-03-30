namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface AmortizacijskeGrupeRow {
        AmGrupaId?: number;
        Naziv?: string;
        Naziv2?: string;
        AmVijekTrajanja?: number;
        GodisnjaAmortizacija?: number;
        DvostrukaGodisnjaAm?: number;
        KontoIvId?: number;
        KontoTrId?: number;
        Active?: boolean;
        DateTimeCreated?: string;
        KontoIvNaziv?: string;
        KontoIvActive?: boolean;
        KontoIvDateTimeCreated?: string;
        KontoIvKonto?: string;
        KontoTrNaziv?: string;
        KontoTrActive?: boolean;
        KontoTrDateTimeCreated?: string;
        KontoTrKonto?: string;
    }

    export namespace AmortizacijskeGrupeRow {
        export const idProperty = 'AmGrupaId';
        export const nameProperty = 'Naziv';
        export const localTextPrefix = 'OsnovnaSredstva.AmortizacijskeGrupe';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            AmGrupaId = "AmGrupaId",
            Naziv = "Naziv",
            Naziv2 = "Naziv2",
            AmVijekTrajanja = "AmVijekTrajanja",
            GodisnjaAmortizacija = "GodisnjaAmortizacija",
            DvostrukaGodisnjaAm = "DvostrukaGodisnjaAm",
            KontoIvId = "KontoIvId",
            KontoTrId = "KontoTrId",
            Active = "Active",
            DateTimeCreated = "DateTimeCreated",
            KontoIvNaziv = "KontoIvNaziv",
            KontoIvActive = "KontoIvActive",
            KontoIvDateTimeCreated = "KontoIvDateTimeCreated",
            KontoIvKonto = "KontoIvKonto",
            KontoTrNaziv = "KontoTrNaziv",
            KontoTrActive = "KontoTrActive",
            KontoTrDateTimeCreated = "KontoTrDateTimeCreated",
            KontoTrKonto = "KontoTrKonto"
        }
    }
}

