
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    @Serenity.Decorators.registerClass()
    export class KontaDialog extends Serenity.EntityDialog<KontaRow, any> {
        protected getFormKey() { return KontaForm.formKey; }
        protected getIdProperty() { return KontaRow.idProperty; }
        protected getLocalTextPrefix() { return KontaRow.localTextPrefix; }
        protected getNameProperty() { return KontaRow.nameProperty; }
        protected getService() { return KontaService.baseUrl; }
        protected getDeletePermission() { return KontaRow.deletePermission; }
        protected getInsertPermission() { return KontaRow.insertPermission; }
        protected getUpdatePermission() { return KontaRow.updatePermission; }

        protected form = new KontaForm(this.idPrefix);

    }
}