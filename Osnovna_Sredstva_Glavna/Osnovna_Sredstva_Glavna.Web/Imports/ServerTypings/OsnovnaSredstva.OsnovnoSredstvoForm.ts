namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface OsnovnoSredstvoForm {
        Active: Serenity.BooleanEditor;
        NazivOpreme: Serenity.StringEditor;
        PartnerId: Serenity.LookupEditor;
        SerijskiBroj: Serenity.StringEditor;
        InventarskiBroj: Serenity.StringEditor;
        Količina: Serenity.DecimalEditor;
        JedinicaMjere: Serenity.StringEditor;
        NabavnaVrijednost: Serenity.DecimalEditor;
        AmortiziranaVrijednost: Serenity.DecimalEditor;
        KnjigovodstvenaVrijednost: Serenity.DecimalEditor;
        UvecanjeVrijednosti: Serenity.DecimalEditor;
        UmanjenjeVrijednosti: Serenity.DecimalEditor;
        UraId: Serenity.LookupEditor;
        KontoId: Serenity.LookupEditor;
        KontoIvId: Serenity.LookupEditor;
        Otpisano: Serenity.BooleanEditor;
        AmGrupaId: Serenity.LookupEditor;
        StopaAmSredstva: Serenity.LookupEditor;
        DatumNabave: Serenity.DateEditor;
        DatumAmortizacije: Serenity.DateEditor;
        DatumOtpisa: Serenity.DateEditor;
        DatumPripreme: Serenity.DateEditor;
        DatumServisa: Serenity.DateEditor;
        DateTimeCreated: Serenity.DateEditor;
        SektorId: Serenity.LookupEditor;
        Napomena: Serenity.TextAreaEditor;
    }

    export class OsnovnoSredstvoForm extends Serenity.PrefixedContext {
        static formKey = 'OsnovnaSredstva.OsnovnoSredstvo';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OsnovnoSredstvoForm.init)  {
                OsnovnoSredstvoForm.init = true;

                var s = Serenity;
                var w0 = s.BooleanEditor;
                var w1 = s.StringEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.DateEditor;
                var w5 = s.TextAreaEditor;

                Q.initFormType(OsnovnoSredstvoForm, [
                    'Active', w0,
                    'NazivOpreme', w1,
                    'PartnerId', w2,
                    'SerijskiBroj', w1,
                    'InventarskiBroj', w1,
                    'Količina', w3,
                    'JedinicaMjere', w1,
                    'NabavnaVrijednost', w3,
                    'AmortiziranaVrijednost', w3,
                    'KnjigovodstvenaVrijednost', w3,
                    'UvecanjeVrijednosti', w3,
                    'UmanjenjeVrijednosti', w3,
                    'UraId', w2,
                    'KontoId', w2,
                    'KontoIvId', w2,
                    'Otpisano', w0,
                    'AmGrupaId', w2,
                    'StopaAmSredstva', w2,
                    'DatumNabave', w4,
                    'DatumAmortizacije', w4,
                    'DatumOtpisa', w4,
                    'DatumPripreme', w4,
                    'DatumServisa', w4,
                    'DateTimeCreated', w4,
                    'SektorId', w2,
                    'Napomena', w5
                ]);
            }
        }
    }
}

