
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export class PartneriForm extends Serenity.PrefixedContext {
        static formKey = 'OsnovnaSredstva.Partneri';
    }

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

    [,
        ['Naziv', () => Serenity.StringEditor],
        ['Adresa', () => Serenity.StringEditor],
        ['Ptt', () => Serenity.IntegerEditor],
        ['Mjesto', () => Serenity.StringEditor],
        ['Grad', () => Serenity.StringEditor],
        ['Active', () => Serenity.BooleanEditor],
        ['DateTimeCreated', () => Serenity.DateEditor],
        ['Drzava', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(PartneriForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}