
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export class ObracunForm extends Serenity.PrefixedContext {
        static formKey = 'OsnovnaSredstva.Obracun';
    }

    export interface ObracunForm {
        PartnerId: Serenity.IntegerEditor;
        OsnovnoId: Serenity.IntegerEditor;
        SektorId: Serenity.IntegerEditor;
        AmGrupaId: Serenity.IntegerEditor;
        DatumObracuna: Serenity.DateEditor;
        RazdobljeOd: Serenity.DateEditor;
        RazdobljeDo: Serenity.DateEditor;
        Napomena: Serenity.StringEditor;
        Otpisano: Serenity.BooleanEditor;
        Active: Serenity.BooleanEditor;
        Zavrsen: Serenity.BooleanEditor;
        DateTimeCreated: Serenity.DateEditor;
    }

    [,
        ['PartnerId', () => Serenity.IntegerEditor],
        ['OsnovnoId', () => Serenity.IntegerEditor],
        ['SektorId', () => Serenity.IntegerEditor],
        ['AmGrupaId', () => Serenity.IntegerEditor],
        ['DatumObracuna', () => Serenity.DateEditor],
        ['RazdobljeOd', () => Serenity.DateEditor],
        ['RazdobljeDo', () => Serenity.DateEditor],
        ['Napomena', () => Serenity.StringEditor],
        ['Otpisano', () => Serenity.BooleanEditor],
        ['Active', () => Serenity.BooleanEditor],
        ['Zavrsen', () => Serenity.BooleanEditor],
        ['DateTimeCreated', () => Serenity.DateEditor]
    ].forEach(x => Object.defineProperty(ObracunForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}