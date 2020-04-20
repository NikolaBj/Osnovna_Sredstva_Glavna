namespace Osnovna_Sredstva_Glavna.Default {
    export interface OsnovnoSredstvoForm {
        NazivOpreme: Serenity.StringEditor;
        PartnerId: Serenity.IntegerEditor;
        UraId: Serenity.IntegerEditor;
        SerijskiBroj: Serenity.StringEditor;
        InventarskiBroj: Serenity.StringEditor;
        NabavnaVrijednost: Serenity.DecimalEditor;
        AmortiziranaVrijednost: Serenity.DecimalEditor;
        KnjigovodstvenaVrijednost: Serenity.DecimalEditor;
        UvecanjeVrijednosti: Serenity.DecimalEditor;
        UmanjenjeVrijednosti: Serenity.DecimalEditor;
        SektorId: Serenity.IntegerEditor;
        Active: Serenity.BooleanEditor;
        DatumNabave: Serenity.DateEditor;
        DatumAmortizacije: Serenity.DateEditor;
        DatumOtpisa: Serenity.DateEditor;
        DatumPripreme: Serenity.DateEditor;
        Otpisano: Serenity.BooleanEditor;
        Količina: Serenity.DecimalEditor;
        AmGrupaId: Serenity.IntegerEditor;
        DateTimeCreated: Serenity.DateEditor;
        KontoId: Serenity.IntegerEditor;
        KontoIvId: Serenity.IntegerEditor;
        Napomena: Serenity.StringEditor;
        JedinicaMjere: Serenity.StringEditor;
        StopaAmSredstva: Serenity.DecimalEditor;
        DatumServisa: Serenity.DateEditor;
    }

    export class OsnovnoSredstvoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.OsnovnoSredstvo';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OsnovnoSredstvoForm.init)  {
                OsnovnoSredstvoForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.DateEditor;

                Q.initFormType(OsnovnoSredstvoForm, [
                    'NazivOpreme', w0,
                    'PartnerId', w1,
                    'UraId', w1,
                    'SerijskiBroj', w0,
                    'InventarskiBroj', w0,
                    'NabavnaVrijednost', w2,
                    'AmortiziranaVrijednost', w2,
                    'KnjigovodstvenaVrijednost', w2,
                    'UvecanjeVrijednosti', w2,
                    'UmanjenjeVrijednosti', w2,
                    'SektorId', w1,
                    'Active', w3,
                    'DatumNabave', w4,
                    'DatumAmortizacije', w4,
                    'DatumOtpisa', w4,
                    'DatumPripreme', w4,
                    'Otpisano', w3,
                    'Količina', w2,
                    'AmGrupaId', w1,
                    'DateTimeCreated', w4,
                    'KontoId', w1,
                    'KontoIvId', w1,
                    'Napomena', w0,
                    'JedinicaMjere', w0,
                    'StopaAmSredstva', w2,
                    'DatumServisa', w4
                ]);
            }
        }
    }
}

