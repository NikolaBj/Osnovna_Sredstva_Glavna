
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
        //constructor() {
        //    super();
        //    this.form.OsnovnoId.changeSelect2(e => {
        //        var osnovnoId = this.form.OsnovnoId.value / 12;
        //        //if (Q.isValue(osnovnoId)) {
        //        //    this.setOsnovnoDetails({});
        //        //    return;
        //        //}

        //        // in northwind CustomerID is a string like "ALFKI", 
        //        // while its actual integer ID value is 1.
        //        // so we need to convert customer ID to ID.
        //        // you won't have to do this conversion with your tables
        //        var id = Q.first(OsnovnoSredstvoRow.getLookup2().items, x => x.OsnovnoId == osnovnoId);

        //        OsnovnoSredstvoService.Retrieve({
        //            EntityId: id
        //        }, response => {
        //                this.setOsnovnoDetails(response.Entity);
        //        });
        //    });
        //}

        //private setOsnovnoDetails(details: OsnovnoSredstvoRow) {
        //    this.form.IznosOsnovice.value = details.NabavnaVrijednost;
            
        //}
}


    }
 