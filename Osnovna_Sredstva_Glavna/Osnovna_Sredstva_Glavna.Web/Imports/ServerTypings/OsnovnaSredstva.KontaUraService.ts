namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export namespace KontaUraService {
        export const baseUrl = 'OsnovnaSredstva/KontaUra';

        export declare function Create(request: Serenity.SaveRequest<KontaUraRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<KontaUraRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<KontaUraRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<KontaUraRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "OsnovnaSredstva/KontaUra/Create",
            Update = "OsnovnaSredstva/KontaUra/Update",
            Delete = "OsnovnaSredstva/KontaUra/Delete",
            Retrieve = "OsnovnaSredstva/KontaUra/Retrieve",
            List = "OsnovnaSredstva/KontaUra/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>KontaUraService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

