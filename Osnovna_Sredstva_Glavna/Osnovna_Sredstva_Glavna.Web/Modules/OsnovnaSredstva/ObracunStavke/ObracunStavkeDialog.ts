
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    @Serenity.Decorators.registerClass()
    export class ObracunStavkeDialog extends Serenity.EntityDialog<ObracunStavkeRow, any> {
        protected getFormKey() { return ObracunStavkeForm.formKey; }
        protected getIdProperty() { return ObracunStavkeRow.idProperty; }
        protected getLocalTextPrefix() { return ObracunStavkeRow.localTextPrefix; }
        protected getNameProperty() { return ObracunStavkeRow.nameProperty; }
        protected getService() { return ObracunStavkeService.baseUrl; }
        protected getDeletePermission() { return ObracunStavkeRow.deletePermission; }
        protected getInsertPermission() { return ObracunStavkeRow.insertPermission; }
        protected getUpdatePermission() { return ObracunStavkeRow.updatePermission; }

        protected form = new ObracunStavkeForm(this.idPrefix);

    }
}