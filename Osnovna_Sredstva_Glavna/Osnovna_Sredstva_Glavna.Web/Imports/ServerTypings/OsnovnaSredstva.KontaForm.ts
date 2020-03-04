
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export class KontaForm extends Serenity.PrefixedContext {
        static formKey = 'OsnovnaSredstva.Konta';
    }

    export interface KontaForm {
        Naziv: Serenity.StringEditor;
        Active: Serenity.BooleanEditor;
        DateTimeCreated: Serenity.DateEditor;
        Konto: Serenity.StringEditor;
    }

    [,
        ['Naziv', () => Serenity.StringEditor],
        ['Active', () => Serenity.BooleanEditor],
        ['DateTimeCreated', () => Serenity.DateEditor],
        ['Konto', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(KontaForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}