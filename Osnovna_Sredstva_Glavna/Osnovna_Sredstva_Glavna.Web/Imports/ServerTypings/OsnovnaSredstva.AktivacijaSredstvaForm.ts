namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface AktivacijaSredstvaForm {
        OsnovnoId: Serenity.IntegerEditor;
        DatumAktivacije: Serenity.DateEditor;
    }

    export class AktivacijaSredstvaForm extends Serenity.PrefixedContext {
        static formKey = 'OsnovnaSredstva.AktivacijaSredstva';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AktivacijaSredstvaForm.init)  {
                AktivacijaSredstvaForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;

                Q.initFormType(AktivacijaSredstvaForm, [
                    'OsnovnoId', w0,
                    'DatumAktivacije', w1
                ]);
            }
        }
    }
}

