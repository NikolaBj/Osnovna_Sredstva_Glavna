
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export class KontaUraForm extends Serenity.PrefixedContext {
        static formKey = 'OsnovnaSredstva.KontaUra';
    }

    export interface KontaUraForm {
        UraId: Serenity.IntegerEditor;
        KontoId: Serenity.IntegerEditor;
        IznosDuguje: Serenity.DecimalEditor;
        IznosPotrazuje: Serenity.DecimalEditor;
        MjestoTroskaId: Serenity.IntegerEditor;
        Opis: Serenity.StringEditor;
        Active: Serenity.BooleanEditor;
        DateTimeCreated: Serenity.DateEditor;
    }

    [,
        ['UraId', () => Serenity.IntegerEditor],
        ['KontoId', () => Serenity.IntegerEditor],
        ['IznosDuguje', () => Serenity.DecimalEditor],
        ['IznosPotrazuje', () => Serenity.DecimalEditor],
        ['MjestoTroskaId', () => Serenity.IntegerEditor],
        ['Opis', () => Serenity.StringEditor],
        ['Active', () => Serenity.BooleanEditor],
        ['DateTimeCreated', () => Serenity.DateEditor]
    ].forEach(x => Object.defineProperty(KontaUraForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}