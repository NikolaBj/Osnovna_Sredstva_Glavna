namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface ObracunStavkeForm {
        ObracunId: Serenity.IntegerEditor;
        PartnerId: Serenity.IntegerEditor;
        OsnovnoId: Serenity.LookupEditor;
        SektorId: Serenity.IntegerEditor;
        AmGrupaId: Serenity.IntegerEditor;
        StopaAmort: Serenity.DecimalEditor;
        IznosOsnovice: Serenity.DecimalEditor;
        IznosAmortizacije: Serenity.DecimalEditor;
        DatumOdObracuna: Serenity.DateEditor;
        Napomena: Serenity.StringEditor;
        Active: Serenity.BooleanEditor;
        DateTimeCreated: Serenity.DateEditor;
    }

    export class ObracunStavkeForm extends Serenity.PrefixedContext {
        static formKey = 'OsnovnaSredstva.ObracunStavke';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ObracunStavkeForm.init)  {
                ObracunStavkeForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.DateEditor;
                var w4 = s.StringEditor;
                var w5 = s.BooleanEditor;

                Q.initFormType(ObracunStavkeForm, [
                    'ObracunId', w0,
                    'PartnerId', w0,
                    'OsnovnoId', w1,
                    'SektorId', w0,
                    'AmGrupaId', w0,
                    'StopaAmort', w2,
                    'IznosOsnovice', w2,
                    'IznosAmortizacije', w2,
                    'DatumOdObracuna', w3,
                    'Napomena', w4,
                    'Active', w5,
                    'DateTimeCreated', w3
                ]);
            }
        }
    }
}

