
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    @Serenity.Decorators.registerClass()
    export class KontaUraDialog extends Serenity.EntityDialog<KontaUraRow, any> {
        protected getFormKey() { return KontaUraForm.formKey; }
        protected getIdProperty() { return KontaUraRow.idProperty; }
        protected getLocalTextPrefix() { return KontaUraRow.localTextPrefix; }
        protected getNameProperty() { return KontaUraRow.nameProperty; }
        protected getService() { return KontaUraService.baseUrl; }
        protected getDeletePermission() { return KontaUraRow.deletePermission; }
        protected getInsertPermission() { return KontaUraRow.insertPermission; }
        protected getUpdatePermission() { return KontaUraRow.updatePermission; }

        protected form = new KontaUraForm(this.idPrefix);

    }
}