namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface VrstaTroskaForm {
        Naziv: Serenity.StringEditor;
        DateTimeCreated: Serenity.DateEditor;
        Active: Serenity.BooleanEditor;
    }

    export class VrstaTroskaForm extends Serenity.PrefixedContext {
        static formKey = 'OsnovnaSredstva.VrstaTroska';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VrstaTroskaForm.init)  {
                VrstaTroskaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(VrstaTroskaForm, [
                    'Naziv', w0,
                    'DateTimeCreated', w1,
                    'Active', w2
                ]);
            }
        }
    }
}

