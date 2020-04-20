namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export namespace DokumentacijaService {
        export const baseUrl = 'OsnovnaSredstva/Dokumentacija';

        export declare function Create(request: Serenity.SaveRequest<DokumentacijaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<DokumentacijaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DokumentacijaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DokumentacijaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "OsnovnaSredstva/Dokumentacija/Create",
            Update = "OsnovnaSredstva/Dokumentacija/Update",
            Delete = "OsnovnaSredstva/Dokumentacija/Delete",
            Retrieve = "OsnovnaSredstva/Dokumentacija/Retrieve",
            List = "OsnovnaSredstva/Dokumentacija/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>DokumentacijaService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

