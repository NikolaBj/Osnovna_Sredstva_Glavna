
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    @Serenity.Decorators.registerClass()
    export class AktivacijaSredstvaDialog extends Serenity.EntityDialog<AktivacijaSredstvaRow, any> {
        protected getFormKey() { return AktivacijaSredstvaForm.formKey; }
        protected getIdProperty() { return AktivacijaSredstvaRow.idProperty; }
        protected getLocalTextPrefix() { return AktivacijaSredstvaRow.localTextPrefix; }
        protected getService() { return AktivacijaSredstvaService.baseUrl; }
        protected getDeletePermission() { return AktivacijaSredstvaRow.deletePermission; }
        protected getInsertPermission() { return AktivacijaSredstvaRow.insertPermission; }
        protected getUpdatePermission() { return AktivacijaSredstvaRow.updatePermission; }

        protected form = new AktivacijaSredstvaForm(this.idPrefix);

    }
}