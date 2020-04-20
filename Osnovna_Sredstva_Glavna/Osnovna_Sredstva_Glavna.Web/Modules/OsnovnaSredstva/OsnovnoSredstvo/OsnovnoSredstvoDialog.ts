
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class OsnovnoSredstvoDialog extends Serenity.EntityDialog<OsnovnoSredstvoRow, any> {
        protected getFormKey() { return OsnovnoSredstvoForm.formKey; }
        protected getIdProperty() { return OsnovnoSredstvoRow.idProperty; }
        protected getLocalTextPrefix() { return OsnovnoSredstvoRow.localTextPrefix; }
        protected getNameProperty() { return OsnovnoSredstvoRow.nameProperty; }
        protected getService() { return OsnovnoSredstvoService.baseUrl; }
        protected getDeletePermission() { return OsnovnoSredstvoRow.deletePermission; }
        protected getInsertPermission() { return OsnovnoSredstvoRow.insertPermission; }
        protected getUpdatePermission() { return OsnovnoSredstvoRow.updatePermission; }


        protected form = new OsnovnoSredstvoForm(this.idPrefix);
        //private obracunGrid: ObracunGrid;
        //private loadedState: string;
        private servisGrid: OsnovnoServisGrid;
        private loadedState: string;


        protected getToolbarButtons(): Serenity.ToolButton[] {
            let btns = super.getToolbarButtons();

            var btnSave = Q.first(btns, x => x.cssClass == "save-and-close-button");
            var btnApply = Q.first(btns, x => x.cssClass == "apply-changes-button");

            var oldSaveClick = btnSave.onClick;
            var oldApplyClick = btnApply.onClick;

            btnSave.onClick = e => { this.confirmBeforeSave(oldSaveClick, e); };
            btnApply.onClick = e => { this.confirmBeforeSave(oldApplyClick, e); };

            return btns;
        }

        private confirmBeforeSave(oldEvt, e) {
            Q.confirm("Potvrdite unos novog Osnovnog sredstva", () => {
                oldEvt(e);
            });
        }



        constructor() {
            super();


            this.servisGrid = new OsnovnoServisGrid(this.byId('ServisGrid'));

            this.servisGrid.openDialogsAsPanel = false;

            // force order dialog to open in Dialog mode instead of Panel mode
            // which is set as default on OrderDialog with @panelAttribute
            //this.obracunGrid = new ObracunGrid(this.byId('ObracunGrid'));
            //this.obracunGrid.openDialogsAsPanel = false;
            //DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);


            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        


        
   


            this.form.SerijskiBroj.element.on('keyup', (e) => {
                // only auto number when a key between 'A' and 'Z' is pressed
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
            });
        }

        getSaveState() {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        }

        loadResponse(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }

        loadEntity(entity: OsnovnoSredstvoRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Servis', this.isNewOrDeleted());

            this.servisGrid.osnovnoId = entity.OsnovnoId;
        }

        onSaveSuccess(response) {
            super.onSaveSuccess(response);

            Q.reloadLookup('Osnovnasredstva.OsnovnoSredstvo');
        }

        //getSaveState() {
        //    try {
        //        return $.toJSON(this.getSaveEntity());
        //    }
        //    catch (e) {
        //        return null;
        //    }
        //}

        //loadResponse(data) {
        //    super.loadResponse(data);
        //    this.loadedState = this.getSaveState();
        //}
        ////protected afterLoadEntity() {
        ////    super.afterLoadEntity();
        ////              $('<a class="inplace-button inplace-create"><b><\/b><\/a>')
        ////        .insertAfter(this.form.PartnerId.element)  // <======================
        ////        .click(() => this.myFunction());
        ////    // fill next number in new record mode
        ////    if (this.isNew())
        ////        this.getNextNumber();
        ////}
        //loadEntity(entity: OsnovnoSredstvoRow) {
        //    super.loadEntity(entity);

        //    Serenity.TabsExtensions.setDisabled(this.tabs, 'Obračuni', this.isNewOrDeleted());

        //    this.obracunGrid.osnovnoId = entity.OsnovnoId;
       
        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();
        }

         


        private getNextNumber() {
            
            var val = Q.trimToNull(this.form.SerijskiBroj.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'O').toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                Osnovna_Sredstva_Glavna.OsnovnaSredstva.OsnovnoSredstvoService.GetNextNumber({
                    Prefix: prefix,
                    Length: 5 // we want service to search for and return serials of 5 in length
                }, response => {
                        this.form.SerijskiBroj.value = response.Serial;
                        

                    // this is to mark numerical part after prefix
                        (this.form.SerijskiBroj.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }

        

  
  

        //private myFunction() {

        //    var dlga = new AktivacijaSredstvaDialog;
        
      
        //    Q.outerHtml(OsnovnoSredstvoRow.Fields.Active("http://desktop-jbaab7c/Reports/Pages/Report.aspx?ItemPath=%2fKarticaSredstva"));
        //}



        //protected updateInterface(): void {

        //    super.updateInterface();

        //    // finding all editor elements and setting their readonly attribute
        //    // note that this helper method only works with basic inputs, 
        //    // some editors require widget based set readonly overload (setReadOnly)
        //    Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);

        //    // remove required asterisk (*)
        // //   this.element.find('sup').hide();

        //    // here is a way to locate a button by its css class
        //    // note that this method is not available in 
        //    // getToolbarButtons() because buttons are not 
        //    // created there yet!
        //    // 
        //    // this.toolbar.findButton('delete-button').hide();

        //    // entity dialog also has reference variables to
        //    // its default buttons, lets use them to hide delete button
        //    this.deleteButton.hide();

        //    // we could also hide save buttons just like delete button,
        //    // but they are null now as we removed them in getToolbarButtons()
        //    // if we didn't we could write like this:
        //    // 
        //    // this.applyChangesButton.hide();
        //    // this.saveAndCloseButton.hide();

        //    // instead of hiding, we could disable a button
        //    // 
        //    // this.deleteButton.toggleClass('disabled', true);
        //}

        //onSaveSuccess(response) {
        //    super.onSaveSuccess(response);

        //    Q.reloadLookup('OsnovnaSredstva.OsnovnoSredstvo');
        //}

    };
}




      
       