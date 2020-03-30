namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface UlazniRacunForm {
        PArtnerId: Serenity.LookupEditor;
        UraBroj: Serenity.StringEditor;
        BrojRacuna: Serenity.StringEditor;
        DatumRacuna: Serenity.DateEditor;
        DatumKnjizenja: Serenity.DateEditor;
        DatumDospijeca: Serenity.DateEditor;
        DatumIsporuke: Serenity.DateEditor;
        PoslovnaGodina: Serenity.IntegerEditor;
        MjestoTroskaId: Serenity.LookupEditor;
        IznosOsnovice: Serenity.DecimalEditor;
        IznosPoreza: Serenity.DecimalEditor;
        UkupanIznos: Serenity.DecimalEditor;
        Opis: Serenity.StringEditor;
        Active: Serenity.BooleanEditor;
        DateTimeCreated: Serenity.DateEditor;
    }

    export class UlazniRacunForm extends Serenity.PrefixedContext {
        static formKey = 'OsnovnaSredstva.UlazniRacun';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UlazniRacunForm.init)  {
                UlazniRacunForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.BooleanEditor;

                Q.initFormType(UlazniRacunForm, [
                    'PArtnerId', w0,
                    'UraBroj', w1,
                    'BrojRacuna', w1,
                    'DatumRacuna', w2,
                    'DatumKnjizenja', w2,
                    'DatumDospijeca', w2,
                    'DatumIsporuke', w2,
                    'PoslovnaGodina', w3,
                    'MjestoTroskaId', w0,
                    'IznosOsnovice', w4,
                    'IznosPoreza', w4,
                    'UkupanIznos', w4,
                    'Opis', w1,
                    'Active', w5,
                    'DateTimeCreated', w2
                ]);
            }
        }
    }
}

