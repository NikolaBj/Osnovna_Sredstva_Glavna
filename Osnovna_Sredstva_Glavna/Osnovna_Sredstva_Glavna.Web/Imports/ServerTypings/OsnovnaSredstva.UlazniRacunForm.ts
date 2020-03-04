
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export class UlazniRacunForm extends Serenity.PrefixedContext {
        static formKey = 'OsnovnaSredstva.UlazniRacun';
    }

    export interface UlazniRacunForm {
        PArtnerId: Serenity.IntegerEditor;
        UraBroj: Serenity.StringEditor;
        BrojRacuna: Serenity.StringEditor;
        DatumRacuna: Serenity.DateEditor;
        DatumKnjizenja: Serenity.DateEditor;
        DatumDospijeca: Serenity.DateEditor;
        DatumIsporuke: Serenity.DateEditor;
        PoslovnaGodina: Serenity.IntegerEditor;
        MjestoTroskaId: Serenity.IntegerEditor;
        IznosOsnovice: Serenity.DecimalEditor;
        IznosPoreza: Serenity.DecimalEditor;
        UkupanIznos: Serenity.DecimalEditor;
        Opis: Serenity.StringEditor;
        Active: Serenity.BooleanEditor;
        DateTimeCreated: Serenity.DateEditor;
    }

    [,
        ['PArtnerId', () => Serenity.IntegerEditor],
        ['UraBroj', () => Serenity.StringEditor],
        ['BrojRacuna', () => Serenity.StringEditor],
        ['DatumRacuna', () => Serenity.DateEditor],
        ['DatumKnjizenja', () => Serenity.DateEditor],
        ['DatumDospijeca', () => Serenity.DateEditor],
        ['DatumIsporuke', () => Serenity.DateEditor],
        ['PoslovnaGodina', () => Serenity.IntegerEditor],
        ['MjestoTroskaId', () => Serenity.IntegerEditor],
        ['IznosOsnovice', () => Serenity.DecimalEditor],
        ['IznosPoreza', () => Serenity.DecimalEditor],
        ['UkupanIznos', () => Serenity.DecimalEditor],
        ['Opis', () => Serenity.StringEditor],
        ['Active', () => Serenity.BooleanEditor],
        ['DateTimeCreated', () => Serenity.DateEditor]
    ].forEach(x => Object.defineProperty(UlazniRacunForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}