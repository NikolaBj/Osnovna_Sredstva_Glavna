
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export class AmortizacijskeGrupeForm extends Serenity.PrefixedContext {
        static formKey = 'OsnovnaSredstva.AmortizacijskeGrupe';
    }

    export interface AmortizacijskeGrupeForm {
        Naziv: Serenity.StringEditor;
        Naziv2: Serenity.StringEditor;
        AmVijekTrajanja: Serenity.IntegerEditor;
        GodisnjaAmortizacija: Serenity.DecimalEditor;
        DvostrukaGodisnjaAm: Serenity.DecimalEditor;
        KontoIvId: Serenity.IntegerEditor;
        KontoTrId: Serenity.IntegerEditor;
        Active: Serenity.BooleanEditor;
        DateTimeCreated: Serenity.DateEditor;
    }

    [,
        ['Naziv', () => Serenity.StringEditor],
        ['Naziv2', () => Serenity.StringEditor],
        ['AmVijekTrajanja', () => Serenity.IntegerEditor],
        ['GodisnjaAmortizacija', () => Serenity.DecimalEditor],
        ['DvostrukaGodisnjaAm', () => Serenity.DecimalEditor],
        ['KontoIvId', () => Serenity.IntegerEditor],
        ['KontoTrId', () => Serenity.IntegerEditor],
        ['Active', () => Serenity.BooleanEditor],
        ['DateTimeCreated', () => Serenity.DateEditor]
    ].forEach(x => Object.defineProperty(AmortizacijskeGrupeForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}