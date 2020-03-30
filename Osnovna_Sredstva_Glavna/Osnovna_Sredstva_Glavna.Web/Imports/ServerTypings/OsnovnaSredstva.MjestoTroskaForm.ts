namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface MjestoTroskaForm {
        Sifra: Serenity.StringEditor;
        Naziv: Serenity.StringEditor;
        Active: Serenity.BooleanEditor;
        DateTimeCreated: Serenity.DateEditor;
    }

    export class MjestoTroskaForm extends Serenity.PrefixedContext {
        static formKey = 'OsnovnaSredstva.MjestoTroska';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MjestoTroskaForm.init)  {
                MjestoTroskaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;
                var w2 = s.DateEditor;

                Q.initFormType(MjestoTroskaForm, [
                    'Sifra', w0,
                    'Naziv', w0,
                    'Active', w1,
                    'DateTimeCreated', w2
                ]);
            }
        }
    }
}

