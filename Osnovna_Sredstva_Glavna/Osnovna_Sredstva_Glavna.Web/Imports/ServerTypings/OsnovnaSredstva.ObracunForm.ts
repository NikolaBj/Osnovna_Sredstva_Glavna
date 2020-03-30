namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface ObracunForm {
        PartnerId: Serenity.LookupEditor;
        OsnovnoId: Serenity.LookupEditor;
        SektorId: Serenity.LookupEditor;
        AmGrupaId: Serenity.LookupEditor;
        DatumObracuna: Serenity.DateEditor;
        RazdobljeOd: Serenity.DateEditor;
        RazdobljeDo: Serenity.DateEditor;
        Napomena: Serenity.StringEditor;
        Otpisano: Serenity.BooleanEditor;
        Active: Serenity.BooleanEditor;
        Zavrsen: Serenity.BooleanEditor;
        DateTimeCreated: Serenity.DateEditor;
    }

    export class ObracunForm extends Serenity.PrefixedContext {
        static formKey = 'OsnovnaSredstva.Obracun';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ObracunForm.init)  {
                ObracunForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(ObracunForm, [
                    'PartnerId', w0,
                    'OsnovnoId', w0,
                    'SektorId', w0,
                    'AmGrupaId', w0,
                    'DatumObracuna', w1,
                    'RazdobljeOd', w1,
                    'RazdobljeDo', w1,
                    'Napomena', w2,
                    'Otpisano', w3,
                    'Active', w3,
                    'Zavrsen', w3,
                    'DateTimeCreated', w1
                ]);
            }
        }
    }
}

