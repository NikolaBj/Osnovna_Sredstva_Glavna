 

namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    import fld = OsnovnaSredstva.AktivacijaSredstvaRow.Fields;
    


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


        protected afterLoadEntity() {
            super.afterLoadEntity();

        //    // fill next number in new record mode
        //    if (this.isNew())
        //        this.getNextNumber();
        //}


        //constructor() {
        //    super();

            //this.obracunGrid = new ObracunGrid(this.byId('ObracunGrid'));
            //this.obracunGrid.openDialogsAsPanel = false;
            //DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);







        //    this.form.OsnovnoId.element.on('keyup', (e) => {
        //        // only auto number when a key between 'A' and 'Z' is pressed
        //        if (e.which >= 65 && e.which <= 90)
        //            this.getNextNumber();
        //    });
        //}

        //private getNextNumber() {

        //    var val = Q.trimToNull(this.form.OsnovnoId.value.toString());

        //    // we will only get next number when customer ID is empty or 1 character in length
        //    if (!val || val.length <= 1) {

        //        // if no customer ID yet (new record mode probably) use 'C' as a prefix
        //       // var prefix = (val || 'O').toUpperCase();

        //        // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
        //        Osnovna_Sredstva_Glavna.OsnovnaSredstva.OsnovnoSredstvoService.GetNextNumber({
        //       //     Prefix: prefix,
        //       //     Length: 5 // we want service to search for and return serials of 5 in length
        //        }, response => {
        //            this.form.OsnovnoId.value.toString() = response.Serial.toString();


        //            // this is to mark numerical part after prefix
        //            (this.form.OsnovnoId.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
        //        });
        //    }
        //}
        
 


        //protected getToolbarButtons(): Serenity.ToolButton[] {
        //    let btns = super.getToolbarButtons();

        //    var btnSave = Q.first(btns, x => x.cssClass == "save-and-close-button");
        //    var btnApply = Q.first(btns, x => x.cssClass == "apply-changes-button");

        //    var oldSaveClick = btnSave.onClick;
        //    var oldApplyClick = btnApply.onClick;

        //    btnSave.onClick = e => { this.confirmBeforeSave(oldSaveClick, e); };
        //    btnApply.onClick = e => { this.confirmBeforeSave(oldApplyClick, e); };

        //    return btns;
        //}

        //private confirmBeforeSave(oldEvt, e) {

            
            
        //    var servicecall = OsnovnoSredstvoService.PokreniAktivaciju(
        //        {
        //            OsnovnoId: fld.OsnovnoId,
        //            osnovnoId: fld.OsnovnoId
        //        },
        //        response => {
        //            // Q.notifySuccess("Aktivacija Sredstva izvršena");


        //            Q.confirm(
        //                "Da li ste sigurni da želite aktivirati sredstvo?",
        //                () => {
        //                    Q.notifySuccess("Osnovno sredstvo:" + " " + fld.OsnovnoId + " aktivirano");
        //                   // oldEvt(e);
        //                },
        //                {
        //                    onNo: () => {
        //                        oldEvt(e);
        //                    },
        //                    onCancel: () => {
        //                        Q.notifyError("Aktivacija poništena!");
        //                    },
        //                    dialogClass: 's-MessageDialog s-WarningDialog'
                           
        //                });






                 
        //        });


            //Q.confirm("Potvrdite unos novog Osnovnog sredstva", () => {
            //    ;
            //});
        }













    }
}