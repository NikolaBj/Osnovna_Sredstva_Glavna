namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export namespace ObracunStavkeService {
        export const baseUrl = 'OsnovnaSredstva/ObracunStavke';

        export declare function Create(request: Serenity.SaveRequest<ObracunStavkeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ObracunStavkeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ObracunStavkeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ObracunStavkeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "OsnovnaSredstva/ObracunStavke/Create",
            Update = "OsnovnaSredstva/ObracunStavke/Update",
            Delete = "OsnovnaSredstva/ObracunStavke/Delete",
            Retrieve = "OsnovnaSredstva/ObracunStavke/Retrieve",
            List = "OsnovnaSredstva/ObracunStavke/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ObracunStavkeService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

