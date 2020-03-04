
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export class OsnovnoSredstvoForm extends Serenity.PrefixedContext {
        static formKey = 'OsnovnaSredstva.OsnovnoSredstvo';
    }

    export interface OsnovnoSredstvoForm {
        NazivOpreme: Serenity.StringEditor;
        PartnerId: Serenity.IntegerEditor;
        UraId: Serenity.IntegerEditor;
        SerijskiBroj: Serenity.StringEditor;
        InventarskiBroj: Serenity.StringEditor;
        NabavnaVrijednost: Serenity.DecimalEditor;
        AmortiziranaVrijednost: Serenity.DecimalEditor;
        KnjigovodstvenaVrijednost: Serenity.DecimalEditor;
        UvecanjeVrijednosti: Serenity.DecimalEditor;
        UmanjenjeVrijednosti: Serenity.DecimalEditor;
        SektorId: Serenity.IntegerEditor;
        Active: Serenity.BooleanEditor;
        DatumNabave: Serenity.DateEditor;
        DatumAmortizacije: Serenity.DateEditor;
        DatumOtpisa: Serenity.DateEditor;
        DatumPripreme: Serenity.DateEditor;
        Otpisano: Serenity.BooleanEditor;
        Količina: Serenity.DecimalEditor;
        AmGrupaId: Serenity.IntegerEditor;
        DateTimeCreated: Serenity.DateEditor;
        KontoId: Serenity.IntegerEditor;
        KontoIvId: Serenity.IntegerEditor;
        Napomena: Serenity.StringEditor;
        JedinicaMjere: Serenity.StringEditor;
        StopaAmSredstva: Serenity.DecimalEditor;
    }

    [,
        ['NazivOpreme', () => Serenity.StringEditor],
        ['PartnerId', () => Serenity.IntegerEditor],
        ['UraId', () => Serenity.IntegerEditor],
        ['SerijskiBroj', () => Serenity.StringEditor],
        ['InventarskiBroj', () => Serenity.StringEditor],
        ['NabavnaVrijednost', () => Serenity.DecimalEditor],
        ['AmortiziranaVrijednost', () => Serenity.DecimalEditor],
        ['KnjigovodstvenaVrijednost', () => Serenity.DecimalEditor],
        ['UvecanjeVrijednosti', () => Serenity.DecimalEditor],
        ['UmanjenjeVrijednosti', () => Serenity.DecimalEditor],
        ['SektorId', () => Serenity.IntegerEditor],
        ['Active', () => Serenity.BooleanEditor],
        ['DatumNabave', () => Serenity.DateEditor],
        ['DatumAmortizacije', () => Serenity.DateEditor],
        ['DatumOtpisa', () => Serenity.DateEditor],
        ['DatumPripreme', () => Serenity.DateEditor],
        ['Otpisano', () => Serenity.BooleanEditor],
        ['Količina', () => Serenity.DecimalEditor],
        ['AmGrupaId', () => Serenity.IntegerEditor],
        ['DateTimeCreated', () => Serenity.DateEditor],
        ['KontoId', () => Serenity.IntegerEditor],
        ['KontoIvId', () => Serenity.IntegerEditor],
        ['Napomena', () => Serenity.StringEditor],
        ['JedinicaMjere', () => Serenity.StringEditor],
        ['StopaAmSredstva', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(OsnovnoSredstvoForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}