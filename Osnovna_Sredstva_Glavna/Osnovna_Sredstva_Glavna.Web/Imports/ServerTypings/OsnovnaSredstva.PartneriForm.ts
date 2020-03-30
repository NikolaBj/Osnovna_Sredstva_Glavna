namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface PartneriForm {
        Naziv: Serenity.StringEditor;
        Adresa: Serenity.StringEditor;
        Ptt: Serenity.IntegerEditor;
        Mjesto: Serenity.StringEditor;
        Grad: Serenity.StringEditor;
        Active: Serenity.BooleanEditor;
        DateTimeCreated: Serenity.DateEditor;
        Drzava: Serenity.StringEditor;
    }

    export class PartneriForm extends Serenity.PrefixedContext {
        static formKey = 'OsnovnaSredstva.Partneri';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PartneriForm.init)  {
                PartneriForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.DateEditor;

                Q.initFormType(PartneriForm, [
                    'Naziv', w0,
                    'Adresa', w0,
                    'Ptt', w1,
                    'Mjesto', w0,
                    'Grad', w0,
                    'Active', w2,
                    'DateTimeCreated', w3,
                    'Drzava', w0
                ]);
            }
        }
    }
}

