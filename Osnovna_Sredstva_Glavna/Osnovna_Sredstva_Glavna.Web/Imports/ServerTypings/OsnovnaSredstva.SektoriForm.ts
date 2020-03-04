
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export class SektoriForm extends Serenity.PrefixedContext {
        static formKey = 'OsnovnaSredstva.Sektori';
    }

    export interface SektoriForm {
        Naziv: Serenity.StringEditor;
        Šifra: Serenity.StringEditor;
        Active: Serenity.BooleanEditor;
        DateTimeCreated: Serenity.DateEditor;
    }

    [,
        ['Naziv', () => Serenity.StringEditor],
        ['Šifra', () => Serenity.StringEditor],
        ['Active', () => Serenity.BooleanEditor],
        ['DateTimeCreated', () => Serenity.DateEditor]
    ].forEach(x => Object.defineProperty(SektoriForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}