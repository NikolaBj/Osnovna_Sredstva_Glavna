namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface KontaUraForm {
        UraId: Serenity.LookupEditor;
        KontoId: Serenity.LookupEditor;
        IznosDuguje: Serenity.DecimalEditor;
        IznosPotrazuje: Serenity.DecimalEditor;
        MjestoTroskaId: Serenity.LookupEditor;
        Opis: Serenity.StringEditor;
        Active: Serenity.BooleanEditor;
        DateTimeCreated: Serenity.DateEditor;
    }

    export class KontaUraForm extends Serenity.PrefixedContext {
        static formKey = 'OsnovnaSredstva.KontaUra';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!KontaUraForm.init)  {
                KontaUraForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.StringEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.DateEditor;

                Q.initFormType(KontaUraForm, [
                    'UraId', w0,
                    'KontoId', w0,
                    'IznosDuguje', w1,
                    'IznosPotrazuje', w1,
                    'MjestoTroskaId', w0,
                    'Opis', w2,
                    'Active', w3,
                    'DateTimeCreated', w4
                ]);
            }
        }
    }
}

