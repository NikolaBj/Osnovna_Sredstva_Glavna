namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface TemeljnicaStavkeForm {
        ObracunId: Serenity.IntegerEditor;
        DateTimeCreated: Serenity.DateEditor;
        Kontoid: Serenity.StringEditor;
        Duguje: Serenity.DecimalEditor;
        Potrazuje: Serenity.DecimalEditor;
    }

    export class TemeljnicaStavkeForm extends Serenity.PrefixedContext {
        static formKey = 'OsnovnaSredstva.TemeljnicaStavke';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TemeljnicaStavkeForm.init)  {
                TemeljnicaStavkeForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(TemeljnicaStavkeForm, [
                    'ObracunId', w0,
                    'DateTimeCreated', w1,
                    'Kontoid', w2,
                    'Duguje', w3,
                    'Potrazuje', w3
                ]);
            }
        }
    }
}

