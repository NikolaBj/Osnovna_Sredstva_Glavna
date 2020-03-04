
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export class MjestoTroskaForm extends Serenity.PrefixedContext {
        static formKey = 'OsnovnaSredstva.MjestoTroska';
    }

    export interface MjestoTroskaForm {
        Sifra: Serenity.StringEditor;
        Naziv: Serenity.StringEditor;
        Active: Serenity.BooleanEditor;
        DateTimeCreated: Serenity.DateEditor;
    }

    [,
        ['Sifra', () => Serenity.StringEditor],
        ['Naziv', () => Serenity.StringEditor],
        ['Active', () => Serenity.BooleanEditor],
        ['DateTimeCreated', () => Serenity.DateEditor]
    ].forEach(x => Object.defineProperty(MjestoTroskaForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}