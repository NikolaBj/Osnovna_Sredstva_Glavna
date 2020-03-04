
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    @Serenity.Decorators.registerClass()
    export class AmortizacijskeGrupeDialog extends Serenity.EntityDialog<AmortizacijskeGrupeRow, any> {
        protected getFormKey() { return AmortizacijskeGrupeForm.formKey; }
        protected getIdProperty() { return AmortizacijskeGrupeRow.idProperty; }
        protected getLocalTextPrefix() { return AmortizacijskeGrupeRow.localTextPrefix; }
        protected getNameProperty() { return AmortizacijskeGrupeRow.nameProperty; }
        protected getService() { return AmortizacijskeGrupeService.baseUrl; }
        protected getDeletePermission() { return AmortizacijskeGrupeRow.deletePermission; }
        protected getInsertPermission() { return AmortizacijskeGrupeRow.insertPermission; }
        protected getUpdatePermission() { return AmortizacijskeGrupeRow.updatePermission; }

        protected form = new AmortizacijskeGrupeForm(this.idPrefix);

    }
}