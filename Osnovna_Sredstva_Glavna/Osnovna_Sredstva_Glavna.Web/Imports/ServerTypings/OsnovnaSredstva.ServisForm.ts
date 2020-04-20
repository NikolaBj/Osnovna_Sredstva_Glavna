namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface ServisForm {
        PartnerId: Serenity.LookupEditor;
        OsnovnoId: Serenity.LookupEditor;
        DatumServisa: Serenity.DateEditor;
        DatumEndServisa: Serenity.DateEditor;
        Napomena: Serenity.StringEditor;
        Active: Serenity.BooleanEditor;
        DateTimeCreated: Serenity.DateEditor;
        IznosServisa: Serenity.DecimalEditor;
        VrstaTroskaId: Serenity.LookupEditor;
        DetailList: DokumentacijaEditor;
    }

    export class ServisForm extends Serenity.PrefixedContext {
        static formKey = 'OsnovnaSredstva.Servis';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ServisForm.init)  {
                ServisForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.DecimalEditor;
                var w5 = DokumentacijaEditor;

                Q.initFormType(ServisForm, [
                    'PartnerId', w0,
                    'OsnovnoId', w0,
                    'DatumServisa', w1,
                    'DatumEndServisa', w1,
                    'Napomena', w2,
                    'Active', w3,
                    'DateTimeCreated', w1,
                    'IznosServisa', w4,
                    'VrstaTroskaId', w0,
                    'DetailList', w5
                ]);
            }
        }
    }
}

