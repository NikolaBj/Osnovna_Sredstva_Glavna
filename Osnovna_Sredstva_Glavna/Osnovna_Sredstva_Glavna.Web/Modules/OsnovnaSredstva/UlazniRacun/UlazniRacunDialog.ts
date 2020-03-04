
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    @Serenity.Decorators.registerClass()
    export class UlazniRacunDialog extends Serenity.EntityDialog<UlazniRacunRow, any> {
        protected getFormKey() { return UlazniRacunForm.formKey; }
        protected getIdProperty() { return UlazniRacunRow.idProperty; }
        protected getLocalTextPrefix() { return UlazniRacunRow.localTextPrefix; }
        protected getNameProperty() { return UlazniRacunRow.nameProperty; }
        protected getService() { return UlazniRacunService.baseUrl; }
        protected getDeletePermission() { return UlazniRacunRow.deletePermission; }
        protected getInsertPermission() { return UlazniRacunRow.insertPermission; }
        protected getUpdatePermission() { return UlazniRacunRow.updatePermission; }

        protected form = new UlazniRacunForm(this.idPrefix);

        constructor() {
            super();

            this.form.UraBroj.element.on('keyup', (e) => {
                // only auto number when a key between 'A' and 'Z' is pressed
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
            });
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();
        }

        private getNextNumber() {

            var val = Q.trimToNull(this.form.UraBroj.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || '20/').toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                Osnovna_Sredstva_Glavna.OsnovnaSredstva.UlazniRacunService.GetNextNumber({
                    Prefix: prefix,
                    Length: 10 // we want service to search for and return serials of 5 in length
                }, response => {
                    this.form.UraBroj.value = response.Serial;

                    // this is to mark numerical part after prefix
                    (this.form.UraBroj.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }
    }
}