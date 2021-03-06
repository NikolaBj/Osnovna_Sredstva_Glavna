﻿namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    export namespace ServisService {
        export const baseUrl = 'OsnovnaSredstva/Servis';

        export declare function Create(request: Serenity.SaveRequest<ServisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ServisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ServisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: ServisListRequest, onSuccess?: (response: Serenity.ListResponse<ServisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "OsnovnaSredstva/Servis/Create",
            Update = "OsnovnaSredstva/Servis/Update",
            Delete = "OsnovnaSredstva/Servis/Delete",
            Retrieve = "OsnovnaSredstva/Servis/Retrieve",
            List = "OsnovnaSredstva/Servis/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ServisService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

