namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface OsnovnoSredstvoSecondForm {
        DatumServisa: Serenity.DateEditor;
    }

    export class OsnovnoSredstvoSecondForm extends Serenity.PrefixedContext {
        static formKey = 'Osnovna_Sredstva_Glavna.OsnovnaSredstva.OsnovnoSredstvo.OsnovnoSredstvoSecondForm';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OsnovnoSredstvoSecondForm.init)  {
                OsnovnoSredstvoSecondForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;

                Q.initFormType(OsnovnoSredstvoSecondForm, [
                    'DatumServisa', w0
                ]);
            }
        }
    }
}

