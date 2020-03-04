/// <reference path="../../../Northwind/Category/CategoryGrid.ts" />

namespace Osnovna_Sredstva_Glavna.BasicSamples {

    /**
     * Subclass of CategoryGrid to override dialog type to GetInsertedRecordIdDialog
     */
    @Serenity.Decorators.registerClass()
    export class GetInsertedRecordIdGrid extends Northwind.CategoryGrid {

        protected getDialogType() { return GetInsertedRecordIdDialog; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}