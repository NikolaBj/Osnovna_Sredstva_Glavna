/// <reference path="../Servis/ServisGrid.ts" />

namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {

    import fld = ServisRow.Fields;

    @Serenity.Decorators.registerClass()
    export class OsnovnoServisGrid extends ServisGrid {
        protected getDialogType() { return OsnovnoServisDialog; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns(): Slick.Column[] {
            return super.getColumns().filter(x => x.field !== fld.OsnovnoNazivOpreme);
        }

        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected addButtonClick() {
            this.editItem({ OsnovnoId: this.osnovnoId });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.osnovnoId;
        }

        private _osnovnoId: string;

        get osnovnoId() {
            return this._osnovnoId;
        }

        set osnovnoId(value: string) {
            if (this._osnovnoId !== value) {
                this._osnovnoId = value;
                this.setEquality('OsnovnoId', value);
                this.refresh();
            }
        }
    }
}