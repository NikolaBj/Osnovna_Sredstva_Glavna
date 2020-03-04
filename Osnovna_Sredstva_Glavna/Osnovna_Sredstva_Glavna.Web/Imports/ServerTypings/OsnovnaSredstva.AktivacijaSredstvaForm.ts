
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export class AktivacijaSredstvaForm extends Serenity.PrefixedContext {
        static formKey = 'OsnovnaSredstva.AktivacijaSredstva';
    }

    export interface AktivacijaSredstvaForm {
        OsnovnoId: Serenity.IntegerEditor;
        DatumAktivacije: Serenity.DateEditor;
    }

    [,
        ['OsnovnoId', () => Serenity.IntegerEditor],
        ['DatumAktivacije', () => Serenity.DateEditor]
    ].forEach(x => Object.defineProperty(AktivacijaSredstvaForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}