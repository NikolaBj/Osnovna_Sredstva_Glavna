
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export class TemeljnicaStavkeForm extends Serenity.PrefixedContext {
        static formKey = 'OsnovnaSredstva.TemeljnicaStavke';
    }

    export interface TemeljnicaStavkeForm {
        ObracunId: Serenity.IntegerEditor;
        DateTimeCreated: Serenity.DateEditor;
        Kontoid: Serenity.StringEditor;
        Duguje: Serenity.DecimalEditor;
        Potrazuje: Serenity.DecimalEditor;
    }

    [,
        ['ObracunId', () => Serenity.IntegerEditor],
        ['DateTimeCreated', () => Serenity.DateEditor],
        ['Kontoid', () => Serenity.StringEditor],
        ['Duguje', () => Serenity.DecimalEditor],
        ['Potrazuje', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(TemeljnicaStavkeForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}