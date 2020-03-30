namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface KontaForm {
        Naziv: Serenity.StringEditor;
        Active: Serenity.BooleanEditor;
        DateTimeCreated: Serenity.DateEditor;
        Konto: Serenity.StringEditor;
    }

    export class KontaForm extends Serenity.PrefixedContext {
        static formKey = 'OsnovnaSredstva.Konta';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!KontaForm.init)  {
                KontaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;
                var w2 = s.DateEditor;

                Q.initFormType(KontaForm, [
                    'Naziv', w0,
                    'Active', w1,
                    'DateTimeCreated', w2,
                    'Konto', w0
                ]);
            }
        }
    }
}

