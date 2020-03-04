
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export class ObracunStavkeForm extends Serenity.PrefixedContext {
        static formKey = 'OsnovnaSredstva.ObracunStavke';
    }

    export interface ObracunStavkeForm {
        ObracunId: Serenity.IntegerEditor;
        PartnerId: Serenity.IntegerEditor;
        OsnovnoId: Serenity.IntegerEditor;
        SektorId: Serenity.IntegerEditor;
        AmGrupaId: Serenity.IntegerEditor;
        StopaAmort: Serenity.DecimalEditor;
        IznosOsnovice: Serenity.DecimalEditor;
        IznosAmortizacije: Serenity.DecimalEditor;
        DatumOdObracuna: Serenity.DateEditor;
        Napomena: Serenity.StringEditor;
        Active: Serenity.BooleanEditor;
        DateTimeCreated: Serenity.DateEditor;
    }

    [,
        ['ObracunId', () => Serenity.IntegerEditor],
        ['PartnerId', () => Serenity.IntegerEditor],
        ['OsnovnoId', () => Serenity.IntegerEditor],
        ['SektorId', () => Serenity.IntegerEditor],
        ['AmGrupaId', () => Serenity.IntegerEditor],
        ['StopaAmort', () => Serenity.DecimalEditor],
        ['IznosOsnovice', () => Serenity.DecimalEditor],
        ['IznosAmortizacije', () => Serenity.DecimalEditor],
        ['DatumOdObracuna', () => Serenity.DateEditor],
        ['Napomena', () => Serenity.StringEditor],
        ['Active', () => Serenity.BooleanEditor],
        ['DateTimeCreated', () => Serenity.DateEditor]
    ].forEach(x => Object.defineProperty(ObracunStavkeForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}