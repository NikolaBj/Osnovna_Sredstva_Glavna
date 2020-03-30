namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface SektoriForm {
        Naziv: Serenity.StringEditor;
        Šifra: Serenity.StringEditor;
        Active: Serenity.BooleanEditor;
        DateTimeCreated: Serenity.DateEditor;
    }

    export class SektoriForm extends Serenity.PrefixedContext {
        static formKey = 'OsnovnaSredstva.Sektori';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SektoriForm.init)  {
                SektoriForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;
                var w2 = s.DateEditor;

                Q.initFormType(SektoriForm, [
                    'Naziv', w0,
                    'Šifra', w0,
                    'Active', w1,
                    'DateTimeCreated', w2
                ]);
            }
        }
    }
}

