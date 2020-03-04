
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    @Serenity.Decorators.registerClass()
    export class TemeljnicaStavkeDialog extends Serenity.EntityDialog<TemeljnicaStavkeRow, any> {
        protected getFormKey() { return TemeljnicaStavkeForm.formKey; }
        protected getIdProperty() { return TemeljnicaStavkeRow.idProperty; }
        protected getLocalTextPrefix() { return TemeljnicaStavkeRow.localTextPrefix; }
        protected getNameProperty() { return TemeljnicaStavkeRow.nameProperty; }
        protected getService() { return TemeljnicaStavkeService.baseUrl; }
        protected getDeletePermission() { return TemeljnicaStavkeRow.deletePermission; }
        protected getInsertPermission() { return TemeljnicaStavkeRow.insertPermission; }
        protected getUpdatePermission() { return TemeljnicaStavkeRow.updatePermission; }

        protected form = new TemeljnicaStavkeForm(this.idPrefix);

    }
}