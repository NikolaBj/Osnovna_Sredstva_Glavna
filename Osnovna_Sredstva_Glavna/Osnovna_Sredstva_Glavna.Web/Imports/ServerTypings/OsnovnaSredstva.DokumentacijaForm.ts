namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface DokumentacijaForm {
        Naziv: Serenity.StringEditor;
        Active: Serenity.BooleanEditor;
        FileContent: Serenity.ImageUploadEditor;
        DateTimeCreated: Serenity.DateEditor;
        OsnovnoId: Serenity.IntegerEditor;
    }

    export class DokumentacijaForm extends Serenity.PrefixedContext {
        static formKey = 'OsnovnaSredstva.Dokumentacija';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DokumentacijaForm.init)  {
                DokumentacijaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;
                var w2 = s.ImageUploadEditor;
                var w3 = s.DateEditor;
                var w4 = s.IntegerEditor;

                Q.initFormType(DokumentacijaForm, [
                    'Naziv', w0,
                    'Active', w1,
                    'FileContent', w2,
                    'DateTimeCreated', w3,
                    'OsnovnoId', w4
                ]);
            }
        }
    }
}

