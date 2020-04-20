namespace Osnovna_Sredstva_Glavna.Default {
    export namespace OsnovnoSredstvoService {
        export const baseUrl = 'Default/OsnovnoSredstvo';

        export declare function Create(request: Serenity.SaveRequest<OsnovnoSredstvoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<OsnovnoSredstvoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OsnovnoSredstvoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OsnovnoSredstvoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/OsnovnoSredstvo/Create",
            Update = "Default/OsnovnoSredstvo/Update",
            Delete = "Default/OsnovnoSredstvo/Delete",
            Retrieve = "Default/OsnovnoSredstvo/Retrieve",
            List = "Default/OsnovnoSredstvo/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>OsnovnoSredstvoService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

