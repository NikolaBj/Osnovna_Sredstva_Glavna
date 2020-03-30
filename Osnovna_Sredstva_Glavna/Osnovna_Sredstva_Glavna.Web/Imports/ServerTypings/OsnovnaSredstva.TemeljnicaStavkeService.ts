namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export namespace TemeljnicaStavkeService {
        export const baseUrl = 'OsnovnaSredstva/TemeljnicaStavke';

        export declare function Create(request: Serenity.SaveRequest<TemeljnicaStavkeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TemeljnicaStavkeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TemeljnicaStavkeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TemeljnicaStavkeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "OsnovnaSredstva/TemeljnicaStavke/Create",
            Update = "OsnovnaSredstva/TemeljnicaStavke/Update",
            Delete = "OsnovnaSredstva/TemeljnicaStavke/Delete",
            Retrieve = "OsnovnaSredstva/TemeljnicaStavke/Retrieve",
            List = "OsnovnaSredstva/TemeljnicaStavke/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TemeljnicaStavkeService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

