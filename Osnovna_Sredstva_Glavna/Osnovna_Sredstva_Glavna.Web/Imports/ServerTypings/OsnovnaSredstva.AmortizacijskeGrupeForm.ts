namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export interface AmortizacijskeGrupeForm {
        Naziv: Serenity.StringEditor;
        Naziv2: Serenity.StringEditor;
        AmVijekTrajanja: Serenity.IntegerEditor;
        GodisnjaAmortizacija: Serenity.DecimalEditor;
        DvostrukaGodisnjaAm: Serenity.DecimalEditor;
        KontoIvId: Serenity.LookupEditor;
        KontoTrId: Serenity.LookupEditor;
        Active: Serenity.BooleanEditor;
        DateTimeCreated: Serenity.DateEditor;
    }

    export class AmortizacijskeGrupeForm extends Serenity.PrefixedContext {
        static formKey = 'OsnovnaSredstva.AmortizacijskeGrupe';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AmortizacijskeGrupeForm.init)  {
                AmortizacijskeGrupeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.LookupEditor;
                var w4 = s.BooleanEditor;
                var w5 = s.DateEditor;

                Q.initFormType(AmortizacijskeGrupeForm, [
                    'Naziv', w0,
                    'Naziv2', w0,
                    'AmVijekTrajanja', w1,
                    'GodisnjaAmortizacija', w2,
                    'DvostrukaGodisnjaAm', w2,
                    'KontoIvId', w3,
                    'KontoTrId', w3,
                    'Active', w4,
                    'DateTimeCreated', w5
                ]);
            }
        }
    }
}

