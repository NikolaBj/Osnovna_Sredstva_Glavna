/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace Osnovna_Sredstva_Glavna.Administration {
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    namespace BasicSamplesService {
        const baseUrl = "BasicSamples/BasicSamples";
        function OrdersByShipper(request: OrdersByShipperRequest, onSuccess?: (response: OrdersByShipperResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function OrderBulkAction(request: OrderBulkActionRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            OrdersByShipper = "BasicSamples/BasicSamples/OrdersByShipper",
            OrderBulkAction = "BasicSamples/BasicSamples/OrderBulkAction"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    interface ChangingLookupTextForm {
        ProductID: ChangingLookupTextEditor;
        UnitPrice: Serenity.DecimalEditor;
        Quantity: Serenity.IntegerEditor;
        Discount: Serenity.DecimalEditor;
    }
    class ChangingLookupTextForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    interface CustomerGrossSalesListRequest extends Serenity.ListRequest {
        StartDate?: string;
        EndDate?: string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    namespace CustomerGrossSalesService {
        const baseUrl = "BasicSamples/CustomerGrossSales";
        function List(request: CustomerGrossSalesListRequest, onSuccess?: (response: Serenity.ListResponse<Northwind.CustomerGrossSalesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "BasicSamples/CustomerGrossSales/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    interface DragDropSampleForm {
        Title: Serenity.StringEditor;
    }
    class DragDropSampleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    interface DragDropSampleRow {
        Id?: number;
        ParentId?: number;
        Title?: string;
    }
    namespace DragDropSampleRow {
        const idProperty = "Id";
        const nameProperty = "Title";
        const localTextPrefix = "Northwind.DragDropSample";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            Id = "Id",
            ParentId = "ParentId",
            Title = "Title"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    namespace DragDropSampleService {
        const baseUrl = "BasicSamples/DragDropSample";
        function Create(request: Serenity.SaveRequest<DragDropSampleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DragDropSampleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DragDropSampleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DragDropSampleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "BasicSamples/DragDropSample/Create",
            Update = "BasicSamples/DragDropSample/Update",
            Delete = "BasicSamples/DragDropSample/Delete",
            Retrieve = "BasicSamples/DragDropSample/Retrieve",
            List = "BasicSamples/DragDropSample/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    interface FilteredLookupInDetailForm {
        CustomerID: Northwind.CustomerEditor;
        OrderDate: Serenity.DateEditor;
        CategoryID: Serenity.LookupEditor;
        DetailList: FilteredLookupDetailEditor;
    }
    class FilteredLookupInDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    interface HardcodedValuesForm {
        SomeValue: HardcodedValuesEditor;
    }
    class HardcodedValuesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    interface LookupFilterByMultipleForm {
        ProductName: Serenity.StringEditor;
        ProductImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        SupplierID: Serenity.LookupEditor;
        CategoryID: ProduceSeafoodCategoryEditor;
        QuantityPerUnit: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.IntegerEditor;
        UnitsOnOrder: Serenity.IntegerEditor;
        ReorderLevel: Serenity.IntegerEditor;
    }
    class LookupFilterByMultipleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    interface OrderBulkActionRequest extends Serenity.ServiceRequest {
        OrderIDs?: number[];
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    interface OrdersByShipperRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    interface OrdersByShipperResponse extends Serenity.ServiceResponse {
        Values?: {
            [key: string]: any;
        }[];
        ShipperKeys?: string[];
        ShipperLabels?: string[];
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    interface PopulateLinkedDataForm {
        CustomerID: Northwind.CustomerEditor;
        CustomerContactName: Serenity.StringEditor;
        CustomerContactTitle: Serenity.StringEditor;
        CustomerCity: Serenity.StringEditor;
        CustomerRegion: Serenity.StringEditor;
        CustomerCountry: Serenity.StringEditor;
        CustomerPhone: Serenity.StringEditor;
        CustomerFax: Serenity.StringEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.DateEditor;
        EmployeeID: Serenity.LookupEditor;
        DetailList: Northwind.OrderDetailsEditor;
    }
    class PopulateLinkedDataForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    interface ProductExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class ProductExcelImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    namespace ProductExcelImportService {
        const baseUrl = "BasicSamples/ProductExcelImport";
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            ExcelImport = "BasicSamples/ProductExcelImport/ExcelImport"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    interface StaticTextBlockForm {
        StaticText: StaticTextBlock;
        SomeInput: Serenity.StringEditor;
        HtmlList: StaticTextBlock;
        FromLocalText: StaticTextBlock;
        DisplayFieldValue: StaticTextBlock;
    }
    class StaticTextBlockForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    interface VSGalleryQAPost {
        PostId?: number;
        PostedOn?: string;
        PostedByName?: string;
        PostedByUserId?: string;
        Message?: string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    namespace VSGalleryQAService {
        const baseUrl = "BasicSamples/VSGalleryQA";
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VSGalleryQAThread>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "BasicSamples/VSGalleryQA/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    interface VSGalleryQAThread {
        ThreadId?: number;
        Title?: string;
        StartedOn?: string;
        StartedByName?: string;
        StartedByUserId?: string;
        LastPostOn?: string;
        PostCount?: number;
        Posts?: VSGalleryQAPost[];
    }
}
declare namespace Osnovna_Sredstva_Glavna.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace Osnovna_Sredstva_Glavna {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace Osnovna_Sredstva_Glavna {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace Osnovna_Sredstva_Glavna {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace Osnovna_Sredstva_Glavna {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Modules.OsnovnaSredstva.Izvjesca {
    interface ProcParam extends Serenity.ServiceRequest {
        OsnovnoId?: string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Modules.OsnovnaSredstva.Izvjesca {
    interface ProcResponse extends Serenity.ServiceResponse {
        ExecutionResult?: string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Modules.OsnovnaSredstva.Obracun {
    interface PokreniObracunAction extends Serenity.ServiceResponse {
        ObracunID?: number;
        IdObracun?: number;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Modules.OsnovnaSredstva.Obracun {
    interface PokreniObracunRequest extends Serenity.ServiceRequest {
        ObracunID?: number;
        IdObracun?: number;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface CategoryForm {
        CategoryName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class CategoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface CategoryLangRow {
        Id?: number;
        CategoryId?: number;
        LanguageId?: number;
        CategoryName?: string;
        Description?: string;
    }
    namespace CategoryLangRow {
        const idProperty = "Id";
        const nameProperty = "CategoryName";
        const localTextPrefix = "Northwind.CategoryLang";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            Id = "Id",
            CategoryId = "CategoryId",
            LanguageId = "LanguageId",
            CategoryName = "CategoryName",
            Description = "Description"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    namespace CategoryLangService {
        const baseUrl = "Northwind/CategoryLang";
        function Create(request: Serenity.SaveRequest<CategoryLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoryLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/CategoryLang/Create",
            Update = "Northwind/CategoryLang/Update",
            Delete = "Northwind/CategoryLang/Delete",
            Retrieve = "Northwind/CategoryLang/Retrieve",
            List = "Northwind/CategoryLang/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface CategoryRow {
        CategoryID?: number;
        CategoryName?: string;
        Description?: string;
        Picture?: number[];
    }
    namespace CategoryRow {
        const idProperty = "CategoryID";
        const nameProperty = "CategoryName";
        const localTextPrefix = "Northwind.Category";
        const lookupKey = "Northwind.Category";
        function getLookup(): Q.Lookup<CategoryRow>;
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            CategoryID = "CategoryID",
            CategoryName = "CategoryName",
            Description = "Description",
            Picture = "Picture"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    namespace CategoryService {
        const baseUrl = "Northwind/Category";
        function Create(request: Serenity.SaveRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Category/Create",
            Update = "Northwind/Category/Update",
            Delete = "Northwind/Category/Delete",
            Retrieve = "Northwind/Category/Retrieve",
            List = "Northwind/Category/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface CustomerCustomerDemoRow {
        ID?: number;
        CustomerID?: string;
        CustomerTypeID?: string;
        CustomerCompanyName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerAddress?: string;
        CustomerCity?: string;
        CustomerRegion?: string;
        CustomerPostalCode?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        CustomerTypeCustomerDesc?: string;
    }
    namespace CustomerCustomerDemoRow {
        const idProperty = "ID";
        const nameProperty = "CustomerID";
        const localTextPrefix = "Northwind.CustomerCustomerDemo";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            ID = "ID",
            CustomerID = "CustomerID",
            CustomerTypeID = "CustomerTypeID",
            CustomerCompanyName = "CustomerCompanyName",
            CustomerContactName = "CustomerContactName",
            CustomerContactTitle = "CustomerContactTitle",
            CustomerAddress = "CustomerAddress",
            CustomerCity = "CustomerCity",
            CustomerRegion = "CustomerRegion",
            CustomerPostalCode = "CustomerPostalCode",
            CustomerCountry = "CustomerCountry",
            CustomerPhone = "CustomerPhone",
            CustomerFax = "CustomerFax",
            CustomerTypeCustomerDesc = "CustomerTypeCustomerDesc"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface CustomerDemographicRow {
        ID?: number;
        CustomerTypeID?: string;
        CustomerDesc?: string;
    }
    namespace CustomerDemographicRow {
        const idProperty = "ID";
        const nameProperty = "CustomerTypeID";
        const localTextPrefix = "Northwind.CustomerDemographic";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            ID = "ID",
            CustomerTypeID = "CustomerTypeID",
            CustomerDesc = "CustomerDesc"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface CustomerDetailsRow {
        Id?: number;
        LastContactDate?: string;
        LastContactedBy?: number;
        Email?: string;
        SendBulletin?: boolean;
        LastContactedByLastName?: string;
        LastContactedByFirstName?: string;
        LastContactedByTitle?: string;
        LastContactedByTitleOfCourtesy?: string;
        LastContactedByBirthDate?: string;
        LastContactedByHireDate?: string;
        LastContactedByAddress?: string;
        LastContactedByCity?: string;
        LastContactedByRegion?: string;
        LastContactedByPostalCode?: string;
        LastContactedByCountry?: string;
        LastContactedByHomePhone?: string;
        LastContactedByExtension?: string;
        LastContactedByPhoto?: number[];
        LastContactedByNotes?: string;
        LastContactedByReportsTo?: number;
        LastContactedByPhotoPath?: string;
    }
    namespace CustomerDetailsRow {
        const idProperty = "Id";
        const nameProperty = "Email";
        const localTextPrefix = "Northwind.CustomerDetails";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            Id = "Id",
            LastContactDate = "LastContactDate",
            LastContactedBy = "LastContactedBy",
            Email = "Email",
            SendBulletin = "SendBulletin",
            LastContactedByLastName = "LastContactedByLastName",
            LastContactedByFirstName = "LastContactedByFirstName",
            LastContactedByTitle = "LastContactedByTitle",
            LastContactedByTitleOfCourtesy = "LastContactedByTitleOfCourtesy",
            LastContactedByBirthDate = "LastContactedByBirthDate",
            LastContactedByHireDate = "LastContactedByHireDate",
            LastContactedByAddress = "LastContactedByAddress",
            LastContactedByCity = "LastContactedByCity",
            LastContactedByRegion = "LastContactedByRegion",
            LastContactedByPostalCode = "LastContactedByPostalCode",
            LastContactedByCountry = "LastContactedByCountry",
            LastContactedByHomePhone = "LastContactedByHomePhone",
            LastContactedByExtension = "LastContactedByExtension",
            LastContactedByPhoto = "LastContactedByPhoto",
            LastContactedByNotes = "LastContactedByNotes",
            LastContactedByReportsTo = "LastContactedByReportsTo",
            LastContactedByPhotoPath = "LastContactedByPhotoPath"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface CustomerForm {
        CustomerID: Serenity.StringEditor;
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Representatives: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
        Country: Serenity.LookupEditor;
        City: Serenity.LookupEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        NoteList: NotesEditor;
        LastContactDate: Serenity.DateEditor;
        LastContactedBy: Serenity.LookupEditor;
        Email: Serenity.EmailEditor;
        SendBulletin: Serenity.BooleanEditor;
    }
    class CustomerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface CustomerGrossSalesRow {
        CustomerId?: string;
        ContactName?: string;
        ProductId?: number;
        ProductName?: string;
        GrossAmount?: number;
    }
    namespace CustomerGrossSalesRow {
        const nameProperty = "ContactName";
        const localTextPrefix = "Northwind.CustomerGrossSales";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            CustomerId = "CustomerId",
            ContactName = "ContactName",
            ProductId = "ProductId",
            ProductName = "ProductName",
            GrossAmount = "GrossAmount"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface CustomerRepresentativesRow {
        RepresentativeId?: number;
        CustomerId?: number;
        EmployeeId?: number;
    }
    namespace CustomerRepresentativesRow {
        const idProperty = "RepresentativeId";
        const localTextPrefix = "Northwind.CustomerRepresentatives";
        const deletePermission = "Northwind:Customer:View";
        const insertPermission = "Northwind:Customer:View";
        const readPermission = "Northwind:Customer:View";
        const updatePermission = "Northwind:Customer:View";
        const enum Fields {
            RepresentativeId = "RepresentativeId",
            CustomerId = "CustomerId",
            EmployeeId = "EmployeeId"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface CustomerRow {
        ID?: number;
        CustomerID?: string;
        CompanyName?: string;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Fax?: string;
        NoteList?: NoteRow[];
        Representatives?: number[];
        LastContactDate?: string;
        LastContactedBy?: number;
        Email?: string;
        SendBulletin?: boolean;
    }
    namespace CustomerRow {
        const idProperty = "ID";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Northwind.Customer";
        const lookupKey = "Northwind.Customer";
        function getLookup(): Q.Lookup<CustomerRow>;
        const deletePermission = "Northwind:Customer:Delete";
        const insertPermission = "Northwind:Customer:Modify";
        const readPermission = "Northwind:Customer:View";
        const updatePermission = "Northwind:Customer:Modify";
        const enum Fields {
            ID = "ID",
            CustomerID = "CustomerID",
            CompanyName = "CompanyName",
            ContactName = "ContactName",
            ContactTitle = "ContactTitle",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            Country = "Country",
            Phone = "Phone",
            Fax = "Fax",
            NoteList = "NoteList",
            Representatives = "Representatives",
            LastContactDate = "LastContactDate",
            LastContactedBy = "LastContactedBy",
            Email = "Email",
            SendBulletin = "SendBulletin"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    namespace CustomerService {
        const baseUrl = "Northwind/Customer";
        function Create(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Customer/Create",
            Update = "Northwind/Customer/Update",
            Delete = "Northwind/Customer/Delete",
            GetNextNumber = "Northwind/Customer/GetNextNumber",
            Retrieve = "Northwind/Customer/Retrieve",
            List = "Northwind/Customer/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface EmployeeRow {
        EmployeeID?: number;
        LastName?: string;
        FirstName?: string;
        FullName?: string;
        Title?: string;
        TitleOfCourtesy?: string;
        BirthDate?: string;
        HireDate?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        HomePhone?: string;
        Extension?: string;
        Photo?: number[];
        Notes?: string;
        ReportsTo?: number;
        PhotoPath?: string;
        ReportsToFullName?: string;
        ReportsToLastName?: string;
        ReportsToFirstName?: string;
        ReportsToTitle?: string;
        ReportsToTitleOfCourtesy?: string;
        ReportsToBirthDate?: string;
        ReportsToHireDate?: string;
        ReportsToAddress?: string;
        ReportsToCity?: string;
        ReportsToRegion?: string;
        ReportsToPostalCode?: string;
        ReportsToCountry?: string;
        ReportsToHomePhone?: string;
        ReportsToExtension?: string;
        ReportsToPhoto?: number[];
        ReportsToNotes?: string;
        ReportsToReportsTo?: number;
        ReportsToPhotoPath?: string;
        Gender?: Gender;
    }
    namespace EmployeeRow {
        const idProperty = "EmployeeID";
        const nameProperty = "FullName";
        const localTextPrefix = "Northwind.Employee";
        const lookupKey = "Northwind.Employee";
        function getLookup(): Q.Lookup<EmployeeRow>;
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            EmployeeID = "EmployeeID",
            LastName = "LastName",
            FirstName = "FirstName",
            FullName = "FullName",
            Title = "Title",
            TitleOfCourtesy = "TitleOfCourtesy",
            BirthDate = "BirthDate",
            HireDate = "HireDate",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            Country = "Country",
            HomePhone = "HomePhone",
            Extension = "Extension",
            Photo = "Photo",
            Notes = "Notes",
            ReportsTo = "ReportsTo",
            PhotoPath = "PhotoPath",
            ReportsToFullName = "ReportsToFullName",
            ReportsToLastName = "ReportsToLastName",
            ReportsToFirstName = "ReportsToFirstName",
            ReportsToTitle = "ReportsToTitle",
            ReportsToTitleOfCourtesy = "ReportsToTitleOfCourtesy",
            ReportsToBirthDate = "ReportsToBirthDate",
            ReportsToHireDate = "ReportsToHireDate",
            ReportsToAddress = "ReportsToAddress",
            ReportsToCity = "ReportsToCity",
            ReportsToRegion = "ReportsToRegion",
            ReportsToPostalCode = "ReportsToPostalCode",
            ReportsToCountry = "ReportsToCountry",
            ReportsToHomePhone = "ReportsToHomePhone",
            ReportsToExtension = "ReportsToExtension",
            ReportsToPhoto = "ReportsToPhoto",
            ReportsToNotes = "ReportsToNotes",
            ReportsToReportsTo = "ReportsToReportsTo",
            ReportsToPhotoPath = "ReportsToPhotoPath",
            Gender = "Gender"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface EmployeeTerritoryRow {
        EmployeeID?: number;
        TerritoryID?: string;
        EmployeeLastName?: string;
        EmployeeFirstName?: string;
        EmployeeTitle?: string;
        EmployeeTitleOfCourtesy?: string;
        EmployeeBirthDate?: string;
        EmployeeHireDate?: string;
        EmployeeAddress?: string;
        EmployeeCity?: string;
        EmployeeRegion?: string;
        EmployeePostalCode?: string;
        EmployeeCountry?: string;
        EmployeeHomePhone?: string;
        EmployeeExtension?: string;
        EmployeePhoto?: number[];
        EmployeeNotes?: string;
        EmployeeReportsTo?: number;
        EmployeePhotoPath?: string;
        TerritoryTerritoryDescription?: string;
        TerritoryRegionID?: number;
    }
    namespace EmployeeTerritoryRow {
        const idProperty = "EmployeeID";
        const nameProperty = "TerritoryID";
        const localTextPrefix = "Northwind.EmployeeTerritory";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            EmployeeID = "EmployeeID",
            TerritoryID = "TerritoryID",
            EmployeeLastName = "EmployeeLastName",
            EmployeeFirstName = "EmployeeFirstName",
            EmployeeTitle = "EmployeeTitle",
            EmployeeTitleOfCourtesy = "EmployeeTitleOfCourtesy",
            EmployeeBirthDate = "EmployeeBirthDate",
            EmployeeHireDate = "EmployeeHireDate",
            EmployeeAddress = "EmployeeAddress",
            EmployeeCity = "EmployeeCity",
            EmployeeRegion = "EmployeeRegion",
            EmployeePostalCode = "EmployeePostalCode",
            EmployeeCountry = "EmployeeCountry",
            EmployeeHomePhone = "EmployeeHomePhone",
            EmployeeExtension = "EmployeeExtension",
            EmployeePhoto = "EmployeePhoto",
            EmployeeNotes = "EmployeeNotes",
            EmployeeReportsTo = "EmployeeReportsTo",
            EmployeePhotoPath = "EmployeePhotoPath",
            TerritoryTerritoryDescription = "TerritoryTerritoryDescription",
            TerritoryRegionID = "TerritoryRegionID"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    enum Gender {
        Male = 1,
        Female = 2
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface NoteRow {
        NoteId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserDisplayName?: string;
    }
    namespace NoteRow {
        const idProperty = "NoteId";
        const nameProperty = "EntityType";
        const localTextPrefix = "Northwind.Note";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            NoteId = "NoteId",
            EntityType = "EntityType",
            EntityId = "EntityId",
            Text = "Text",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            InsertUserDisplayName = "InsertUserDisplayName"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface OrderDetailForm {
        ProductID: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        Quantity: Serenity.IntegerEditor;
        Discount: Serenity.DecimalEditor;
    }
    class OrderDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface OrderDetailRow {
        DetailID?: number;
        OrderID?: number;
        ProductID?: number;
        UnitPrice?: number;
        Quantity?: number;
        Discount?: number;
        OrderCustomerID?: string;
        OrderEmployeeID?: number;
        OrderDate?: string;
        OrderShippedDate?: string;
        OrderShipVia?: number;
        OrderShipCity?: string;
        OrderShipCountry?: string;
        ProductName?: string;
        ProductDiscontinued?: boolean;
        ProductSupplierID?: number;
        ProductQuantityPerUnit?: string;
        ProductUnitPrice?: number;
        LineTotal?: number;
    }
    namespace OrderDetailRow {
        const idProperty = "DetailID";
        const localTextPrefix = "Northwind.OrderDetail";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            DetailID = "DetailID",
            OrderID = "OrderID",
            ProductID = "ProductID",
            UnitPrice = "UnitPrice",
            Quantity = "Quantity",
            Discount = "Discount",
            OrderCustomerID = "OrderCustomerID",
            OrderEmployeeID = "OrderEmployeeID",
            OrderDate = "OrderDate",
            OrderShippedDate = "OrderShippedDate",
            OrderShipVia = "OrderShipVia",
            OrderShipCity = "OrderShipCity",
            OrderShipCountry = "OrderShipCountry",
            ProductName = "ProductName",
            ProductDiscontinued = "ProductDiscontinued",
            ProductSupplierID = "ProductSupplierID",
            ProductQuantityPerUnit = "ProductQuantityPerUnit",
            ProductUnitPrice = "ProductUnitPrice",
            LineTotal = "LineTotal"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    namespace OrderDetailService {
        const baseUrl = "Northwind/OrderDetail";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "Northwind/OrderDetail/Retrieve",
            List = "Northwind/OrderDetail/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface OrderForm {
        CustomerID: CustomerEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.DateEditor;
        EmployeeID: Serenity.LookupEditor;
        DetailList: OrderDetailsEditor;
        ShippedDate: Serenity.DateEditor;
        ShipVia: Serenity.LookupEditor;
        Freight: Serenity.DecimalEditor;
        ShipName: Serenity.StringEditor;
        ShipAddress: Serenity.StringEditor;
        ShipCity: Serenity.StringEditor;
        ShipRegion: Serenity.StringEditor;
        ShipPostalCode: Serenity.StringEditor;
        ShipCountry: Serenity.StringEditor;
    }
    class OrderForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface OrderListRequest extends Serenity.ListRequest {
        ProductID?: number;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface OrderRow {
        OrderID?: number;
        CustomerID?: string;
        EmployeeID?: number;
        OrderDate?: string;
        RequiredDate?: string;
        ShippedDate?: string;
        ShipVia?: number;
        Freight?: number;
        ShipName?: string;
        ShipAddress?: string;
        ShipCity?: string;
        ShipRegion?: string;
        ShipPostalCode?: string;
        ShipCountry?: string;
        CustomerCompanyName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerCity?: string;
        CustomerRegion?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        EmployeeFullName?: string;
        EmployeeGender?: Gender;
        EmployeeReportsToFullName?: string;
        ShipViaCompanyName?: string;
        ShipViaPhone?: string;
        ShippingState?: OrderShippingState;
        DetailList?: OrderDetailRow[];
    }
    namespace OrderRow {
        const idProperty = "OrderID";
        const nameProperty = "CustomerID";
        const localTextPrefix = "Northwind.Order";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            OrderID = "OrderID",
            CustomerID = "CustomerID",
            EmployeeID = "EmployeeID",
            OrderDate = "OrderDate",
            RequiredDate = "RequiredDate",
            ShippedDate = "ShippedDate",
            ShipVia = "ShipVia",
            Freight = "Freight",
            ShipName = "ShipName",
            ShipAddress = "ShipAddress",
            ShipCity = "ShipCity",
            ShipRegion = "ShipRegion",
            ShipPostalCode = "ShipPostalCode",
            ShipCountry = "ShipCountry",
            CustomerCompanyName = "CustomerCompanyName",
            CustomerContactName = "CustomerContactName",
            CustomerContactTitle = "CustomerContactTitle",
            CustomerCity = "CustomerCity",
            CustomerRegion = "CustomerRegion",
            CustomerCountry = "CustomerCountry",
            CustomerPhone = "CustomerPhone",
            CustomerFax = "CustomerFax",
            EmployeeFullName = "EmployeeFullName",
            EmployeeGender = "EmployeeGender",
            EmployeeReportsToFullName = "EmployeeReportsToFullName",
            ShipViaCompanyName = "ShipViaCompanyName",
            ShipViaPhone = "ShipViaPhone",
            ShippingState = "ShippingState",
            DetailList = "DetailList"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    namespace OrderService {
        const baseUrl = "Northwind/Order";
        function Create(request: Serenity.SaveRequest<OrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: OrderListRequest, onSuccess?: (response: Serenity.ListResponse<OrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Order/Create",
            Update = "Northwind/Order/Update",
            Delete = "Northwind/Order/Delete",
            Retrieve = "Northwind/Order/Retrieve",
            List = "Northwind/Order/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface ProductForm {
        ProductName: Serenity.StringEditor;
        ProductImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        SupplierID: Serenity.LookupEditor;
        CategoryID: Serenity.LookupEditor;
        QuantityPerUnit: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.IntegerEditor;
        UnitsOnOrder: Serenity.IntegerEditor;
        ReorderLevel: Serenity.IntegerEditor;
    }
    class ProductForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface ProductLangRow {
        Id?: number;
        ProductId?: number;
        LanguageId?: number;
        ProductName?: string;
    }
    namespace ProductLangRow {
        const idProperty = "Id";
        const nameProperty = "ProductName";
        const localTextPrefix = "Northwind.ProductLang";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            Id = "Id",
            ProductId = "ProductId",
            LanguageId = "LanguageId",
            ProductName = "ProductName"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    namespace ProductLangService {
        const baseUrl = "Northwind/ProductLang";
        function Create(request: Serenity.SaveRequest<ProductLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/ProductLang/Create",
            Update = "Northwind/ProductLang/Update",
            Delete = "Northwind/ProductLang/Delete",
            Retrieve = "Northwind/ProductLang/Retrieve",
            List = "Northwind/ProductLang/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface ProductLogRow {
        ProductLogID?: number;
        OperationType?: Serenity.CaptureOperationType;
        ChangingUserId?: number;
        ValidFrom?: string;
        ValidUntil?: string;
        ProductID?: number;
        ProductName?: string;
        ProductImage?: string;
        Discontinued?: boolean;
        SupplierID?: number;
        CategoryID?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
    }
    namespace ProductLogRow {
        const idProperty = "ProductLogID";
        const localTextPrefix = "Northwind.ProductLog";
        const deletePermission: any;
        const insertPermission: any;
        const readPermission = "";
        const updatePermission: any;
        const enum Fields {
            ProductLogID = "ProductLogID",
            OperationType = "OperationType",
            ChangingUserId = "ChangingUserId",
            ValidFrom = "ValidFrom",
            ValidUntil = "ValidUntil",
            ProductID = "ProductID",
            ProductName = "ProductName",
            ProductImage = "ProductImage",
            Discontinued = "Discontinued",
            SupplierID = "SupplierID",
            CategoryID = "CategoryID",
            QuantityPerUnit = "QuantityPerUnit",
            UnitPrice = "UnitPrice",
            UnitsInStock = "UnitsInStock",
            UnitsOnOrder = "UnitsOnOrder",
            ReorderLevel = "ReorderLevel"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface ProductRow {
        ProductID?: number;
        ProductName?: string;
        ProductImage?: string;
        Discontinued?: boolean;
        SupplierID?: number;
        CategoryID?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
        SupplierCompanyName?: string;
        SupplierContactName?: string;
        SupplierContactTitle?: string;
        SupplierAddress?: string;
        SupplierCity?: string;
        SupplierRegion?: string;
        SupplierPostalCode?: string;
        SupplierCountry?: string;
        SupplierPhone?: string;
        SupplierFax?: string;
        SupplierHomePage?: string;
        CategoryName?: string;
        CategoryDescription?: string;
        CategoryPicture?: number[];
    }
    namespace ProductRow {
        const idProperty = "ProductID";
        const nameProperty = "ProductName";
        const localTextPrefix = "Northwind.Product";
        const lookupKey = "Northwind.Product";
        function getLookup(): Q.Lookup<ProductRow>;
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            ProductID = "ProductID",
            ProductName = "ProductName",
            ProductImage = "ProductImage",
            Discontinued = "Discontinued",
            SupplierID = "SupplierID",
            CategoryID = "CategoryID",
            QuantityPerUnit = "QuantityPerUnit",
            UnitPrice = "UnitPrice",
            UnitsInStock = "UnitsInStock",
            UnitsOnOrder = "UnitsOnOrder",
            ReorderLevel = "ReorderLevel",
            SupplierCompanyName = "SupplierCompanyName",
            SupplierContactName = "SupplierContactName",
            SupplierContactTitle = "SupplierContactTitle",
            SupplierAddress = "SupplierAddress",
            SupplierCity = "SupplierCity",
            SupplierRegion = "SupplierRegion",
            SupplierPostalCode = "SupplierPostalCode",
            SupplierCountry = "SupplierCountry",
            SupplierPhone = "SupplierPhone",
            SupplierFax = "SupplierFax",
            SupplierHomePage = "SupplierHomePage",
            CategoryName = "CategoryName",
            CategoryDescription = "CategoryDescription",
            CategoryPicture = "CategoryPicture"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    namespace ProductService {
        const baseUrl = "Northwind/Product";
        function Create(request: Serenity.SaveRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Product/Create",
            Update = "Northwind/Product/Update",
            Delete = "Northwind/Product/Delete",
            Retrieve = "Northwind/Product/Retrieve",
            List = "Northwind/Product/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface RegionForm {
        RegionID: Serenity.IntegerEditor;
        RegionDescription: Serenity.StringEditor;
    }
    class RegionForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface RegionRow {
        RegionID?: number;
        RegionDescription?: string;
    }
    namespace RegionRow {
        const idProperty = "RegionID";
        const nameProperty = "RegionDescription";
        const localTextPrefix = "Northwind.Region";
        const lookupKey = "Northwind.Region";
        function getLookup(): Q.Lookup<RegionRow>;
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            RegionID = "RegionID",
            RegionDescription = "RegionDescription"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    namespace RegionService {
        const baseUrl = "Northwind/Region";
        function Create(request: Serenity.SaveRequest<RegionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RegionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RegionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RegionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Region/Create",
            Update = "Northwind/Region/Update",
            Delete = "Northwind/Region/Delete",
            Retrieve = "Northwind/Region/Retrieve",
            List = "Northwind/Region/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface SalesByCategoryRow {
        CategoryId?: number;
        CategoryName?: string;
        ProductName?: string;
        ProductSales?: number;
    }
    namespace SalesByCategoryRow {
        const nameProperty = "CategoryName";
        const localTextPrefix = "Northwind.SalesByCategory";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            CategoryId = "CategoryId",
            CategoryName = "CategoryName",
            ProductName = "ProductName",
            ProductSales = "ProductSales"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    namespace SalesByCategoryService {
        const baseUrl = "Northwind/SalesByCategory";
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesByCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Northwind/SalesByCategory/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface ShipperForm {
        CompanyName: Serenity.StringEditor;
        Phone: PhoneEditor;
    }
    class ShipperForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface ShipperRow {
        ShipperID?: number;
        CompanyName?: string;
        Phone?: string;
    }
    namespace ShipperRow {
        const idProperty = "ShipperID";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Northwind.Shipper";
        const lookupKey = "Northwind.Shipper";
        function getLookup(): Q.Lookup<ShipperRow>;
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            ShipperID = "ShipperID",
            CompanyName = "CompanyName",
            Phone = "Phone"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    namespace ShipperService {
        const baseUrl = "Northwind/Shipper";
        function Create(request: Serenity.SaveRequest<ShipperRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ShipperRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ShipperRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ShipperRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Shipper/Create",
            Update = "Northwind/Shipper/Update",
            Delete = "Northwind/Shipper/Delete",
            Retrieve = "Northwind/Shipper/Retrieve",
            List = "Northwind/Shipper/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface SupplierForm {
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        HomePage: Serenity.StringEditor;
    }
    class SupplierForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface SupplierRow {
        SupplierID?: number;
        CompanyName?: string;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Fax?: string;
        HomePage?: string;
    }
    namespace SupplierRow {
        const idProperty = "SupplierID";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Northwind.Supplier";
        const lookupKey = "Northwind.Supplier";
        function getLookup(): Q.Lookup<SupplierRow>;
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            SupplierID = "SupplierID",
            CompanyName = "CompanyName",
            ContactName = "ContactName",
            ContactTitle = "ContactTitle",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            Country = "Country",
            Phone = "Phone",
            Fax = "Fax",
            HomePage = "HomePage"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    namespace SupplierService {
        const baseUrl = "Northwind/Supplier";
        function Create(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SupplierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SupplierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Supplier/Create",
            Update = "Northwind/Supplier/Update",
            Delete = "Northwind/Supplier/Delete",
            Retrieve = "Northwind/Supplier/Retrieve",
            List = "Northwind/Supplier/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface TerritoryForm {
        TerritoryID: Serenity.StringEditor;
        TerritoryDescription: Serenity.StringEditor;
        RegionID: Serenity.LookupEditor;
    }
    class TerritoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    interface TerritoryRow {
        ID?: number;
        TerritoryID?: string;
        TerritoryDescription?: string;
        RegionID?: number;
        RegionDescription?: string;
    }
    namespace TerritoryRow {
        const idProperty = "ID";
        const nameProperty = "TerritoryID";
        const localTextPrefix = "Northwind.Territory";
        const lookupKey = "Northwind.Territory";
        function getLookup(): Q.Lookup<TerritoryRow>;
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            ID = "ID",
            TerritoryID = "TerritoryID",
            TerritoryDescription = "TerritoryDescription",
            RegionID = "RegionID",
            RegionDescription = "RegionDescription"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    namespace TerritoryService {
        const baseUrl = "Northwind/Territory";
        function Create(request: Serenity.SaveRequest<TerritoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TerritoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TerritoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TerritoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Territory/Create",
            Update = "Northwind/Territory/Update",
            Delete = "Northwind/Territory/Delete",
            Retrieve = "Northwind/Territory/Retrieve",
            List = "Northwind/Territory/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    interface AktivacijaSredstvaForm {
        OsnovnoId: Serenity.LookupEditor;
        DatumAktivacije: Serenity.DateEditor;
    }
    class AktivacijaSredstvaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    interface AktivacijaSredstvaRow {
        Int?: number;
        OsnovnoId?: number;
        DatumAktivacije?: string;
        OsnovnoNazivOpreme?: string;
        OsnovnoPartnerId?: number;
        OsnovnoUraId?: number;
        OsnovnoSerijskiBroj?: string;
        OsnovnoInventarskiBroj?: string;
        OsnovnoNabavnaVrijednost?: number;
        OsnovnoAmortiziranaVrijednost?: number;
        OsnovnoKnjigovodstvenaVrijednost?: number;
        OsnovnoUvecanjeVrijednosti?: number;
        OsnovnoUmanjenjeVrijednosti?: number;
        OsnovnoSektorId?: number;
        OsnovnoActive?: boolean;
        OsnovnoDatumNabave?: string;
        OsnovnoDatumAmortizacije?: string;
        OsnovnoDatumOtpisa?: string;
        OsnovnoDatumPripreme?: string;
        OsnovnoOtpisano?: boolean;
        OsnovnoKoličina?: number;
        OsnovnoAmGrupaId?: number;
        OsnovnoDateTimeCreated?: string;
        OsnovnoKontoId?: number;
        OsnovnoKontoIvId?: number;
        OsnovnoNapomena?: string;
        OsnovnoJedinicaMjere?: string;
        OsnovnoStopaAmSredstva?: number;
    }
    namespace AktivacijaSredstvaRow {
        const idProperty = "Int";
        const localTextPrefix = "OsnovnaSredstva.AktivacijaSredstva";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Int = "Int",
            OsnovnoId = "OsnovnoId",
            DatumAktivacije = "DatumAktivacije",
            OsnovnoNazivOpreme = "OsnovnoNazivOpreme",
            OsnovnoPartnerId = "OsnovnoPartnerId",
            OsnovnoUraId = "OsnovnoUraId",
            OsnovnoSerijskiBroj = "OsnovnoSerijskiBroj",
            OsnovnoInventarskiBroj = "OsnovnoInventarskiBroj",
            OsnovnoNabavnaVrijednost = "OsnovnoNabavnaVrijednost",
            OsnovnoAmortiziranaVrijednost = "OsnovnoAmortiziranaVrijednost",
            OsnovnoKnjigovodstvenaVrijednost = "OsnovnoKnjigovodstvenaVrijednost",
            OsnovnoUvecanjeVrijednosti = "OsnovnoUvecanjeVrijednosti",
            OsnovnoUmanjenjeVrijednosti = "OsnovnoUmanjenjeVrijednosti",
            OsnovnoSektorId = "OsnovnoSektorId",
            OsnovnoActive = "OsnovnoActive",
            OsnovnoDatumNabave = "OsnovnoDatumNabave",
            OsnovnoDatumAmortizacije = "OsnovnoDatumAmortizacije",
            OsnovnoDatumOtpisa = "OsnovnoDatumOtpisa",
            OsnovnoDatumPripreme = "OsnovnoDatumPripreme",
            OsnovnoOtpisano = "OsnovnoOtpisano",
            OsnovnoKoličina = "OsnovnoKoli\u010Dina",
            OsnovnoAmGrupaId = "OsnovnoAmGrupaId",
            OsnovnoDateTimeCreated = "OsnovnoDateTimeCreated",
            OsnovnoKontoId = "OsnovnoKontoId",
            OsnovnoKontoIvId = "OsnovnoKontoIvId",
            OsnovnoNapomena = "OsnovnoNapomena",
            OsnovnoJedinicaMjere = "OsnovnoJedinicaMjere",
            OsnovnoStopaAmSredstva = "OsnovnoStopaAmSredstva"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    namespace AktivacijaSredstvaService {
        const baseUrl = "OsnovnaSredstva/AktivacijaSredstva";
        function Create(request: Serenity.SaveRequest<AktivacijaSredstvaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AktivacijaSredstvaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AktivacijaSredstvaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AktivacijaSredstvaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "OsnovnaSredstva/AktivacijaSredstva/Create",
            Update = "OsnovnaSredstva/AktivacijaSredstva/Update",
            Delete = "OsnovnaSredstva/AktivacijaSredstva/Delete",
            Retrieve = "OsnovnaSredstva/AktivacijaSredstva/Retrieve",
            List = "OsnovnaSredstva/AktivacijaSredstva/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    interface AmortizacijskeGrupeForm {
        Naziv: Serenity.StringEditor;
        Naziv2: Serenity.StringEditor;
        AmVijekTrajanja: Serenity.IntegerEditor;
        GodisnjaAmortizacija: Serenity.DecimalEditor;
        DvostrukaGodisnjaAm: Serenity.DecimalEditor;
        KontoIvId: Serenity.LookupEditor;
        KontoTrId: Serenity.LookupEditor;
        Active: Serenity.BooleanEditor;
        DateTimeCreated: Serenity.DateEditor;
    }
    class AmortizacijskeGrupeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    interface AmortizacijskeGrupeRow {
        AmGrupaId?: number;
        Naziv?: string;
        Naziv2?: string;
        AmVijekTrajanja?: number;
        GodisnjaAmortizacija?: number;
        DvostrukaGodisnjaAm?: number;
        KontoIvId?: number;
        KontoTrId?: number;
        Active?: boolean;
        DateTimeCreated?: string;
        KontoIvNaziv?: string;
        KontoIvActive?: boolean;
        KontoIvDateTimeCreated?: string;
        KontoIvKonto?: string;
        KontoTrNaziv?: string;
        KontoTrActive?: boolean;
        KontoTrDateTimeCreated?: string;
        KontoTrKonto?: string;
    }
    namespace AmortizacijskeGrupeRow {
        const idProperty = "AmGrupaId";
        const nameProperty = "Naziv";
        const localTextPrefix = "OsnovnaSredstva.AmortizacijskeGrupe";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            AmGrupaId = "AmGrupaId",
            Naziv = "Naziv",
            Naziv2 = "Naziv2",
            AmVijekTrajanja = "AmVijekTrajanja",
            GodisnjaAmortizacija = "GodisnjaAmortizacija",
            DvostrukaGodisnjaAm = "DvostrukaGodisnjaAm",
            KontoIvId = "KontoIvId",
            KontoTrId = "KontoTrId",
            Active = "Active",
            DateTimeCreated = "DateTimeCreated",
            KontoIvNaziv = "KontoIvNaziv",
            KontoIvActive = "KontoIvActive",
            KontoIvDateTimeCreated = "KontoIvDateTimeCreated",
            KontoIvKonto = "KontoIvKonto",
            KontoTrNaziv = "KontoTrNaziv",
            KontoTrActive = "KontoTrActive",
            KontoTrDateTimeCreated = "KontoTrDateTimeCreated",
            KontoTrKonto = "KontoTrKonto"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    namespace AmortizacijskeGrupeService {
        const baseUrl = "OsnovnaSredstva/AmortizacijskeGrupe";
        function Create(request: Serenity.SaveRequest<AmortizacijskeGrupeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AmortizacijskeGrupeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AmortizacijskeGrupeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AmortizacijskeGrupeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "OsnovnaSredstva/AmortizacijskeGrupe/Create",
            Update = "OsnovnaSredstva/AmortizacijskeGrupe/Update",
            Delete = "OsnovnaSredstva/AmortizacijskeGrupe/Delete",
            Retrieve = "OsnovnaSredstva/AmortizacijskeGrupe/Retrieve",
            List = "OsnovnaSredstva/AmortizacijskeGrupe/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    interface KontaForm {
        Naziv: Serenity.StringEditor;
        Active: Serenity.BooleanEditor;
        DateTimeCreated: Serenity.DateEditor;
        Konto: Serenity.StringEditor;
    }
    class KontaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    interface KontaRow {
        KontoId?: number;
        Naziv?: string;
        Active?: boolean;
        DateTimeCreated?: string;
        Konto?: string;
    }
    namespace KontaRow {
        const idProperty = "KontoId";
        const nameProperty = "Naziv";
        const localTextPrefix = "OsnovnaSredstva.Konta";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            KontoId = "KontoId",
            Naziv = "Naziv",
            Active = "Active",
            DateTimeCreated = "DateTimeCreated",
            Konto = "Konto"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    namespace KontaService {
        const baseUrl = "OsnovnaSredstva/Konta";
        function Create(request: Serenity.SaveRequest<KontaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<KontaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<KontaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<KontaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "OsnovnaSredstva/Konta/Create",
            Update = "OsnovnaSredstva/Konta/Update",
            Delete = "OsnovnaSredstva/Konta/Delete",
            Retrieve = "OsnovnaSredstva/Konta/Retrieve",
            List = "OsnovnaSredstva/Konta/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    interface KontaUraForm {
        UraId: Serenity.LookupEditor;
        KontoId: Serenity.LookupEditor;
        IznosDuguje: Serenity.DecimalEditor;
        IznosPotrazuje: Serenity.DecimalEditor;
        MjestoTroskaId: Serenity.LookupEditor;
        Opis: Serenity.StringEditor;
        Active: Serenity.BooleanEditor;
        DateTimeCreated: Serenity.DateEditor;
    }
    class KontaUraForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    interface KontaUraRow {
        KontaUraId?: number;
        UraId?: number;
        KontoId?: number;
        IznosDuguje?: number;
        IznosPotrazuje?: number;
        MjestoTroskaId?: number;
        Opis?: string;
        Active?: boolean;
        DateTimeCreated?: string;
        UraPArtnerId?: number;
        UraUraBroj?: number;
        UraBrojRacuna?: string;
        UraDatumRacuna?: string;
        UraDatumKnjizenja?: string;
        UraDatumDospijeca?: string;
        UraDatumIsporuke?: string;
        UraPoslovnaGodina?: number;
        UraMjestoTroskaId?: number;
        UraIznosOsnovice?: number;
        UraIznosPoreza?: number;
        UraUkupanIznos?: number;
        UraOpis?: string;
        UraActive?: boolean;
        UraDateTimeCreated?: string;
        KontoNaziv?: string;
        KontoActive?: boolean;
        KontoDateTimeCreated?: string;
        Konto?: string;
        MjestoTroskaSifra?: string;
        MjestoTroskaNaziv?: string;
        MjestoTroskaActive?: boolean;
        MjestoTroskaDateTimeCreated?: string;
    }
    namespace KontaUraRow {
        const idProperty = "KontaUraId";
        const nameProperty = "Opis";
        const localTextPrefix = "OsnovnaSredstva.KontaUra";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            KontaUraId = "KontaUraId",
            UraId = "UraId",
            KontoId = "KontoId",
            IznosDuguje = "IznosDuguje",
            IznosPotrazuje = "IznosPotrazuje",
            MjestoTroskaId = "MjestoTroskaId",
            Opis = "Opis",
            Active = "Active",
            DateTimeCreated = "DateTimeCreated",
            UraPArtnerId = "UraPArtnerId",
            UraUraBroj = "UraUraBroj",
            UraBrojRacuna = "UraBrojRacuna",
            UraDatumRacuna = "UraDatumRacuna",
            UraDatumKnjizenja = "UraDatumKnjizenja",
            UraDatumDospijeca = "UraDatumDospijeca",
            UraDatumIsporuke = "UraDatumIsporuke",
            UraPoslovnaGodina = "UraPoslovnaGodina",
            UraMjestoTroskaId = "UraMjestoTroskaId",
            UraIznosOsnovice = "UraIznosOsnovice",
            UraIznosPoreza = "UraIznosPoreza",
            UraUkupanIznos = "UraUkupanIznos",
            UraOpis = "UraOpis",
            UraActive = "UraActive",
            UraDateTimeCreated = "UraDateTimeCreated",
            KontoNaziv = "KontoNaziv",
            KontoActive = "KontoActive",
            KontoDateTimeCreated = "KontoDateTimeCreated",
            Konto = "Konto",
            MjestoTroskaSifra = "MjestoTroskaSifra",
            MjestoTroskaNaziv = "MjestoTroskaNaziv",
            MjestoTroskaActive = "MjestoTroskaActive",
            MjestoTroskaDateTimeCreated = "MjestoTroskaDateTimeCreated"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    namespace KontaUraService {
        const baseUrl = "OsnovnaSredstva/KontaUra";
        function Create(request: Serenity.SaveRequest<KontaUraRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<KontaUraRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<KontaUraRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<KontaUraRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "OsnovnaSredstva/KontaUra/Create",
            Update = "OsnovnaSredstva/KontaUra/Update",
            Delete = "OsnovnaSredstva/KontaUra/Delete",
            Retrieve = "OsnovnaSredstva/KontaUra/Retrieve",
            List = "OsnovnaSredstva/KontaUra/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    interface MjestoTroskaForm {
        Sifra: Serenity.StringEditor;
        Naziv: Serenity.StringEditor;
        Active: Serenity.BooleanEditor;
        DateTimeCreated: Serenity.DateEditor;
    }
    class MjestoTroskaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    interface MjestoTroskaRow {
        MjestoTroskaId?: number;
        Sifra?: string;
        Naziv?: string;
        Active?: boolean;
        DateTimeCreated?: string;
    }
    namespace MjestoTroskaRow {
        const idProperty = "MjestoTroskaId";
        const nameProperty = "Sifra";
        const localTextPrefix = "OsnovnaSredstva.MjestoTroska";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            MjestoTroskaId = "MjestoTroskaId",
            Sifra = "Sifra",
            Naziv = "Naziv",
            Active = "Active",
            DateTimeCreated = "DateTimeCreated"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    namespace MjestoTroskaService {
        const baseUrl = "OsnovnaSredstva/MjestoTroska";
        function Create(request: Serenity.SaveRequest<MjestoTroskaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MjestoTroskaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MjestoTroskaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MjestoTroskaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "OsnovnaSredstva/MjestoTroska/Create",
            Update = "OsnovnaSredstva/MjestoTroska/Update",
            Delete = "OsnovnaSredstva/MjestoTroska/Delete",
            Retrieve = "OsnovnaSredstva/MjestoTroska/Retrieve",
            List = "OsnovnaSredstva/MjestoTroska/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    interface ObracunForm {
        PartnerId: Serenity.LookupEditor;
        OsnovnoId: Serenity.LookupEditor;
        SektorId: Serenity.LookupEditor;
        AmGrupaId: Serenity.LookupEditor;
        DatumObracuna: Serenity.DateEditor;
        RazdobljeOd: Serenity.DateEditor;
        RazdobljeDo: Serenity.DateEditor;
        Napomena: Serenity.StringEditor;
        Otpisano: Serenity.BooleanEditor;
        Active: Serenity.BooleanEditor;
        Zavrsen: Serenity.BooleanEditor;
        DateTimeCreated: Serenity.DateEditor;
    }
    class ObracunForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    interface ObracunRow {
        ObracunId?: number;
        PartnerId?: number;
        OsnovnoId?: number;
        SektorId?: number;
        AmGrupaId?: number;
        DatumObracuna?: string;
        RazdobljeOd?: string;
        RazdobljeDo?: string;
        Napomena?: string;
        Otpisano?: boolean;
        Active?: boolean;
        Zavrsen?: boolean;
        DateTimeCreated?: string;
        PartnerNaziv?: string;
        PartnerAdresa?: string;
        PartnerPtt?: number;
        PartnerMjesto?: string;
        PartnerGrad?: string;
        PartnerActive?: boolean;
        PartnerDateTimeCreated?: string;
        PartnerDrzava?: string;
        OsnovnoNazivOpreme?: string;
        OsnovnoPartnerId?: number;
        OsnovnoUraId?: number;
        OsnovnoSerijskiBroj?: string;
        OsnovnoInventarskiBroj?: string;
        OsnovnoNabavnaVrijednost?: number;
        OsnovnoAmortiziranaVrijednost?: number;
        OsnovnoKnjigovodstvenaVrijednost?: number;
        OsnovnoUvecanjeVrijednosti?: number;
        OsnovnoUmanjenjeVrijednosti?: number;
        OsnovnoSektorId?: number;
        OsnovnoActive?: boolean;
        OsnovnoDatumNabave?: string;
        OsnovnoDatumAmortizacije?: string;
        OsnovnoDatumOtpisa?: string;
        OsnovnoDatumPripreme?: string;
        OsnovnoOtpisano?: boolean;
        OsnovnoKoličina?: number;
        OsnovnoAmGrupaId?: number;
        OsnovnoDateTimeCreated?: string;
        OsnovnoKontoId?: number;
        OsnovnoKontoIvId?: number;
        OsnovnoNapomena?: string;
        OsnovnoJedinicaMjere?: string;
        OsnovnoStopaAmSredstva?: number;
        SektorNaziv?: string;
        SektorŠifra?: string;
        SektorActive?: boolean;
        SektorDateTimeCreated?: string;
        AmGrupaNaziv?: string;
        AmGrupaNaziv2?: string;
        AmGrupaAmVijekTrajanja?: number;
        AmGrupaGodisnjaAmortizacija?: number;
        AmGrupaDvostrukaGodisnjaAm?: number;
        AmGrupaKontoIvId?: number;
        AmGrupaKontoTrId?: number;
        AmGrupaActive?: boolean;
        AmGrupaDateTimeCreated?: string;
    }
    namespace ObracunRow {
        const idProperty = "ObracunId";
        const nameProperty = "Napomena";
        const localTextPrefix = "OsnovnaSredstva.Obracun";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ObracunId = "ObracunId",
            PartnerId = "PartnerId",
            OsnovnoId = "OsnovnoId",
            SektorId = "SektorId",
            AmGrupaId = "AmGrupaId",
            DatumObracuna = "DatumObracuna",
            RazdobljeOd = "RazdobljeOd",
            RazdobljeDo = "RazdobljeDo",
            Napomena = "Napomena",
            Otpisano = "Otpisano",
            Active = "Active",
            Zavrsen = "Zavrsen",
            DateTimeCreated = "DateTimeCreated",
            PartnerNaziv = "PartnerNaziv",
            PartnerAdresa = "PartnerAdresa",
            PartnerPtt = "PartnerPtt",
            PartnerMjesto = "PartnerMjesto",
            PartnerGrad = "PartnerGrad",
            PartnerActive = "PartnerActive",
            PartnerDateTimeCreated = "PartnerDateTimeCreated",
            PartnerDrzava = "PartnerDrzava",
            OsnovnoNazivOpreme = "OsnovnoNazivOpreme",
            OsnovnoPartnerId = "OsnovnoPartnerId",
            OsnovnoUraId = "OsnovnoUraId",
            OsnovnoSerijskiBroj = "OsnovnoSerijskiBroj",
            OsnovnoInventarskiBroj = "OsnovnoInventarskiBroj",
            OsnovnoNabavnaVrijednost = "OsnovnoNabavnaVrijednost",
            OsnovnoAmortiziranaVrijednost = "OsnovnoAmortiziranaVrijednost",
            OsnovnoKnjigovodstvenaVrijednost = "OsnovnoKnjigovodstvenaVrijednost",
            OsnovnoUvecanjeVrijednosti = "OsnovnoUvecanjeVrijednosti",
            OsnovnoUmanjenjeVrijednosti = "OsnovnoUmanjenjeVrijednosti",
            OsnovnoSektorId = "OsnovnoSektorId",
            OsnovnoActive = "OsnovnoActive",
            OsnovnoDatumNabave = "OsnovnoDatumNabave",
            OsnovnoDatumAmortizacije = "OsnovnoDatumAmortizacije",
            OsnovnoDatumOtpisa = "OsnovnoDatumOtpisa",
            OsnovnoDatumPripreme = "OsnovnoDatumPripreme",
            OsnovnoOtpisano = "OsnovnoOtpisano",
            OsnovnoKoličina = "OsnovnoKoli\u010Dina",
            OsnovnoAmGrupaId = "OsnovnoAmGrupaId",
            OsnovnoDateTimeCreated = "OsnovnoDateTimeCreated",
            OsnovnoKontoId = "OsnovnoKontoId",
            OsnovnoKontoIvId = "OsnovnoKontoIvId",
            OsnovnoNapomena = "OsnovnoNapomena",
            OsnovnoJedinicaMjere = "OsnovnoJedinicaMjere",
            OsnovnoStopaAmSredstva = "OsnovnoStopaAmSredstva",
            SektorNaziv = "SektorNaziv",
            SektorŠifra = "Sektor\u0160ifra",
            SektorActive = "SektorActive",
            SektorDateTimeCreated = "SektorDateTimeCreated",
            AmGrupaNaziv = "AmGrupaNaziv",
            AmGrupaNaziv2 = "AmGrupaNaziv2",
            AmGrupaAmVijekTrajanja = "AmGrupaAmVijekTrajanja",
            AmGrupaGodisnjaAmortizacija = "AmGrupaGodisnjaAmortizacija",
            AmGrupaDvostrukaGodisnjaAm = "AmGrupaDvostrukaGodisnjaAm",
            AmGrupaKontoIvId = "AmGrupaKontoIvId",
            AmGrupaKontoTrId = "AmGrupaKontoTrId",
            AmGrupaActive = "AmGrupaActive",
            AmGrupaDateTimeCreated = "AmGrupaDateTimeCreated"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    namespace ObracunService {
        const baseUrl = "OsnovnaSredstva/Obracun";
        function Create(request: Serenity.SaveRequest<ObracunRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ObracunRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ObracunRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ObracunRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function PokreniObracun(request: Modules.OsnovnaSredstva.Obracun.PokreniObracunRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "OsnovnaSredstva/Obracun/Create",
            Update = "OsnovnaSredstva/Obracun/Update",
            Delete = "OsnovnaSredstva/Obracun/Delete",
            Retrieve = "OsnovnaSredstva/Obracun/Retrieve",
            GetNextNumber = "OsnovnaSredstva/Obracun/GetNextNumber",
            List = "OsnovnaSredstva/Obracun/List",
            PokreniObracun = "OsnovnaSredstva/Obracun/PokreniObracun"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    interface ObracunStavkeForm {
        ObracunId: Serenity.IntegerEditor;
        PartnerId: Serenity.IntegerEditor;
        OsnovnoId: Serenity.LookupEditor;
        SektorId: Serenity.IntegerEditor;
        AmGrupaId: Serenity.IntegerEditor;
        StopaAmort: Serenity.DecimalEditor;
        IznosOsnovice: Serenity.DecimalEditor;
        IznosAmortizacije: Serenity.DecimalEditor;
        DatumOdObracuna: Serenity.DateEditor;
        Napomena: Serenity.StringEditor;
        Active: Serenity.BooleanEditor;
        DateTimeCreated: Serenity.DateEditor;
    }
    class ObracunStavkeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    interface ObracunStavkeRow {
        ObracunStavkeId?: number;
        ObracunId?: number;
        PartnerId?: number;
        OsnovnoId?: number;
        SektorId?: number;
        AmGrupaId?: number;
        StopaAmort?: number;
        IznosOsnovice?: number;
        IznosAmortizacije?: number;
        DatumOdObracuna?: string;
        Napomena?: string;
        Active?: boolean;
        DateTimeCreated?: string;
        ObracunPartnerId?: number;
        ObracunOsnovnoId?: number;
        ObracunSektorId?: number;
        ObracunAmGrupaId?: number;
        ObracunDatumObracuna?: string;
        ObracunRazdobljeOd?: string;
        ObracunRazdobljeDo?: string;
        ObracunNapomena?: string;
        ObracunOtpisano?: boolean;
        ObracunActive?: boolean;
        ObracunZavrsen?: boolean;
        ObracunDateTimeCreated?: string;
        PartnerNaziv?: string;
        PartnerAdresa?: string;
        PartnerPtt?: number;
        PartnerMjesto?: string;
        PartnerGrad?: string;
        PartnerActive?: boolean;
        PartnerDateTimeCreated?: string;
        PartnerDrzava?: string;
        OsnovnoNazivOpreme?: string;
        OsnovnoPartnerId?: number;
        OsnovnoUraId?: number;
        OsnovnoSerijskiBroj?: string;
        OsnovnoInventarskiBroj?: string;
        OsnovnoNabavnaVrijednost?: number;
        OsnovnoAmortiziranaVrijednost?: number;
        OsnovnoKnjigovodstvenaVrijednost?: number;
        OsnovnoUvecanjeVrijednosti?: number;
        OsnovnoUmanjenjeVrijednosti?: number;
        OsnovnoSektorId?: number;
        OsnovnoActive?: boolean;
        OsnovnoDatumNabave?: string;
        OsnovnoDatumAmortizacije?: string;
        OsnovnoDatumOtpisa?: string;
        OsnovnoDatumPripreme?: string;
        OsnovnoOtpisano?: boolean;
        OsnovnoKoličina?: number;
        OsnovnoAmGrupaId?: number;
        OsnovnoDateTimeCreated?: string;
        OsnovnoKontoId?: number;
        OsnovnoKontoIvId?: number;
        OsnovnoNapomena?: string;
        OsnovnoJedinicaMjere?: string;
        OsnovnoStopaAmSredstva?: number;
        SektorNaziv?: string;
        SektorŠifra?: string;
        SektorActive?: boolean;
        SektorDateTimeCreated?: string;
        AmGrupaNaziv?: string;
        AmGrupaNaziv2?: string;
        AmGrupaAmVijekTrajanja?: number;
        AmGrupaGodisnjaAmortizacija?: number;
        AmGrupaDvostrukaGodisnjaAm?: number;
        AmGrupaKontoIvId?: number;
        AmGrupaKontoTrId?: number;
        AmGrupaActive?: boolean;
        AmGrupaDateTimeCreated?: string;
    }
    namespace ObracunStavkeRow {
        const idProperty = "ObracunStavkeId";
        const nameProperty = "Napomena";
        const localTextPrefix = "OsnovnaSredstva.ObracunStavke";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ObracunStavkeId = "ObracunStavkeId",
            ObracunId = "ObracunId",
            PartnerId = "PartnerId",
            OsnovnoId = "OsnovnoId",
            SektorId = "SektorId",
            AmGrupaId = "AmGrupaId",
            StopaAmort = "StopaAmort",
            IznosOsnovice = "IznosOsnovice",
            IznosAmortizacije = "IznosAmortizacije",
            DatumOdObracuna = "DatumOdObracuna",
            Napomena = "Napomena",
            Active = "Active",
            DateTimeCreated = "DateTimeCreated",
            ObracunPartnerId = "ObracunPartnerId",
            ObracunOsnovnoId = "ObracunOsnovnoId",
            ObracunSektorId = "ObracunSektorId",
            ObracunAmGrupaId = "ObracunAmGrupaId",
            ObracunDatumObracuna = "ObracunDatumObracuna",
            ObracunRazdobljeOd = "ObracunRazdobljeOd",
            ObracunRazdobljeDo = "ObracunRazdobljeDo",
            ObracunNapomena = "ObracunNapomena",
            ObracunOtpisano = "ObracunOtpisano",
            ObracunActive = "ObracunActive",
            ObracunZavrsen = "ObracunZavrsen",
            ObracunDateTimeCreated = "ObracunDateTimeCreated",
            PartnerNaziv = "PartnerNaziv",
            PartnerAdresa = "PartnerAdresa",
            PartnerPtt = "PartnerPtt",
            PartnerMjesto = "PartnerMjesto",
            PartnerGrad = "PartnerGrad",
            PartnerActive = "PartnerActive",
            PartnerDateTimeCreated = "PartnerDateTimeCreated",
            PartnerDrzava = "PartnerDrzava",
            OsnovnoNazivOpreme = "OsnovnoNazivOpreme",
            OsnovnoPartnerId = "OsnovnoPartnerId",
            OsnovnoUraId = "OsnovnoUraId",
            OsnovnoSerijskiBroj = "OsnovnoSerijskiBroj",
            OsnovnoInventarskiBroj = "OsnovnoInventarskiBroj",
            OsnovnoNabavnaVrijednost = "OsnovnoNabavnaVrijednost",
            OsnovnoAmortiziranaVrijednost = "OsnovnoAmortiziranaVrijednost",
            OsnovnoKnjigovodstvenaVrijednost = "OsnovnoKnjigovodstvenaVrijednost",
            OsnovnoUvecanjeVrijednosti = "OsnovnoUvecanjeVrijednosti",
            OsnovnoUmanjenjeVrijednosti = "OsnovnoUmanjenjeVrijednosti",
            OsnovnoSektorId = "OsnovnoSektorId",
            OsnovnoActive = "OsnovnoActive",
            OsnovnoDatumNabave = "OsnovnoDatumNabave",
            OsnovnoDatumAmortizacije = "OsnovnoDatumAmortizacije",
            OsnovnoDatumOtpisa = "OsnovnoDatumOtpisa",
            OsnovnoDatumPripreme = "OsnovnoDatumPripreme",
            OsnovnoOtpisano = "OsnovnoOtpisano",
            OsnovnoKoličina = "OsnovnoKoli\u010Dina",
            OsnovnoAmGrupaId = "OsnovnoAmGrupaId",
            OsnovnoDateTimeCreated = "OsnovnoDateTimeCreated",
            OsnovnoKontoId = "OsnovnoKontoId",
            OsnovnoKontoIvId = "OsnovnoKontoIvId",
            OsnovnoNapomena = "OsnovnoNapomena",
            OsnovnoJedinicaMjere = "OsnovnoJedinicaMjere",
            OsnovnoStopaAmSredstva = "OsnovnoStopaAmSredstva",
            SektorNaziv = "SektorNaziv",
            SektorŠifra = "Sektor\u0160ifra",
            SektorActive = "SektorActive",
            SektorDateTimeCreated = "SektorDateTimeCreated",
            AmGrupaNaziv = "AmGrupaNaziv",
            AmGrupaNaziv2 = "AmGrupaNaziv2",
            AmGrupaAmVijekTrajanja = "AmGrupaAmVijekTrajanja",
            AmGrupaGodisnjaAmortizacija = "AmGrupaGodisnjaAmortizacija",
            AmGrupaDvostrukaGodisnjaAm = "AmGrupaDvostrukaGodisnjaAm",
            AmGrupaKontoIvId = "AmGrupaKontoIvId",
            AmGrupaKontoTrId = "AmGrupaKontoTrId",
            AmGrupaActive = "AmGrupaActive",
            AmGrupaDateTimeCreated = "AmGrupaDateTimeCreated"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    namespace ObracunStavkeService {
        const baseUrl = "OsnovnaSredstva/ObracunStavke";
        function Create(request: Serenity.SaveRequest<ObracunStavkeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ObracunStavkeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ObracunStavkeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ObracunStavkeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "OsnovnaSredstva/ObracunStavke/Create",
            Update = "OsnovnaSredstva/ObracunStavke/Update",
            Delete = "OsnovnaSredstva/ObracunStavke/Delete",
            Retrieve = "OsnovnaSredstva/ObracunStavke/Retrieve",
            List = "OsnovnaSredstva/ObracunStavke/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    interface OsnovnoListRequest extends Serenity.ListRequest {
        OsnovnoId?: number;
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    interface OsnovnoSredstvoForm {
        Active: Serenity.BooleanEditor;
        NazivOpreme: Serenity.StringEditor;
        PartnerId: Serenity.LookupEditor;
        SerijskiBroj: Serenity.StringEditor;
        InventarskiBroj: Serenity.StringEditor;
        Količina: Serenity.DecimalEditor;
        JedinicaMjere: Serenity.StringEditor;
        NabavnaVrijednost: Serenity.DecimalEditor;
        AmortiziranaVrijednost: Serenity.DecimalEditor;
        KnjigovodstvenaVrijednost: Serenity.DecimalEditor;
        UvecanjeVrijednosti: Serenity.DecimalEditor;
        UmanjenjeVrijednosti: Serenity.DecimalEditor;
        UraId: Serenity.LookupEditor;
        KontoId: Serenity.LookupEditor;
        KontoIvId: Serenity.LookupEditor;
        Otpisano: Serenity.BooleanEditor;
        AmGrupaId: Serenity.LookupEditor;
        StopaAmSredstva: Serenity.LookupEditor;
        DatumNabave: Serenity.DateEditor;
        DatumAmortizacije: Serenity.DateEditor;
        DatumOtpisa: Serenity.DateEditor;
        DatumPripreme: Serenity.DateEditor;
        DateTimeCreated: Serenity.DateEditor;
        SektorId: Serenity.LookupEditor;
        Napomena: Serenity.TextAreaEditor;
    }
    class OsnovnoSredstvoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    interface OsnovnoSredstvoRow {
        OsnovnoId?: number;
        NazivOpreme?: string;
        PartnerId?: number;
        UraId?: number;
        SerijskiBroj?: string;
        InventarskiBroj?: string;
        NabavnaVrijednost?: number;
        AmortiziranaVrijednost?: number;
        KnjigovodstvenaVrijednost?: number;
        UvecanjeVrijednosti?: number;
        UmanjenjeVrijednosti?: number;
        SektorId?: number;
        Active?: boolean;
        DatumNabave?: string;
        DatumAmortizacije?: string;
        DatumOtpisa?: string;
        DatumPripreme?: string;
        Otpisano?: boolean;
        Količina?: number;
        AmGrupaId?: number;
        DateTimeCreated?: string;
        KontoId?: number;
        KontoIvId?: number;
        Napomena?: string;
        JedinicaMjere?: string;
        StopaAmSredstva?: number;
        PartnerNaziv?: string;
        PartnerAdresa?: string;
        PartnerPtt?: number;
        PartnerMjesto?: string;
        PartnerGrad?: string;
        PartnerActive?: boolean;
        PartnerDateTimeCreated?: string;
        PartnerDrzava?: string;
        UraPArtnerId?: number;
        UraUraBroj?: string;
        UraBrojRacuna?: string;
        UraDatumRacuna?: string;
        UraDatumKnjizenja?: string;
        UraDatumDospijeca?: string;
        UraDatumIsporuke?: string;
        UraPoslovnaGodina?: number;
        UraMjestoTroskaId?: number;
        UraIznosOsnovice?: number;
        UraIznosPoreza?: number;
        UraUkupanIznos?: number;
        UraOpis?: string;
        UraActive?: boolean;
        UraDateTimeCreated?: string;
        SektorNaziv?: string;
        SektorŠifra?: string;
        SektorActive?: boolean;
        SektorDateTimeCreated?: string;
        AmGrupaNaziv?: string;
        AmGrupaNaziv2?: string;
        AmGrupaAmVijekTrajanja?: number;
        AmGrupaGodisnjaAmortizacija?: number;
        AmGrupaDvostrukaGodisnjaAm?: number;
        AmGrupaKontoIvId?: number;
        AmGrupaKontoTrId?: number;
        AmGrupaActive?: boolean;
        AmGrupaDateTimeCreated?: string;
        KontoNaziv?: string;
        KontoActive?: boolean;
        KontoDateTimeCreated?: string;
        Konto?: string;
        KontoIvNaziv?: string;
        KontoIvActive?: boolean;
        KontoIvDateTimeCreated?: string;
        KontoIvKonto?: string;
    }
    namespace OsnovnoSredstvoRow {
        const idProperty = "OsnovnoId";
        const nameProperty = "NazivOpreme";
        const localTextPrefix = "OsnovnaSredstva.OsnovnoSredstvo";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            OsnovnoId = "OsnovnoId",
            NazivOpreme = "NazivOpreme",
            PartnerId = "PartnerId",
            UraId = "UraId",
            SerijskiBroj = "SerijskiBroj",
            InventarskiBroj = "InventarskiBroj",
            NabavnaVrijednost = "NabavnaVrijednost",
            AmortiziranaVrijednost = "AmortiziranaVrijednost",
            KnjigovodstvenaVrijednost = "KnjigovodstvenaVrijednost",
            UvecanjeVrijednosti = "UvecanjeVrijednosti",
            UmanjenjeVrijednosti = "UmanjenjeVrijednosti",
            SektorId = "SektorId",
            Active = "Active",
            DatumNabave = "DatumNabave",
            DatumAmortizacije = "DatumAmortizacije",
            DatumOtpisa = "DatumOtpisa",
            DatumPripreme = "DatumPripreme",
            Otpisano = "Otpisano",
            Količina = "Koli\u010Dina",
            AmGrupaId = "AmGrupaId",
            DateTimeCreated = "DateTimeCreated",
            KontoId = "KontoId",
            KontoIvId = "KontoIvId",
            Napomena = "Napomena",
            JedinicaMjere = "JedinicaMjere",
            StopaAmSredstva = "StopaAmSredstva",
            PartnerNaziv = "PartnerNaziv",
            PartnerAdresa = "PartnerAdresa",
            PartnerPtt = "PartnerPtt",
            PartnerMjesto = "PartnerMjesto",
            PartnerGrad = "PartnerGrad",
            PartnerActive = "PartnerActive",
            PartnerDateTimeCreated = "PartnerDateTimeCreated",
            PartnerDrzava = "PartnerDrzava",
            UraPArtnerId = "UraPArtnerId",
            UraUraBroj = "UraUraBroj",
            UraBrojRacuna = "UraBrojRacuna",
            UraDatumRacuna = "UraDatumRacuna",
            UraDatumKnjizenja = "UraDatumKnjizenja",
            UraDatumDospijeca = "UraDatumDospijeca",
            UraDatumIsporuke = "UraDatumIsporuke",
            UraPoslovnaGodina = "UraPoslovnaGodina",
            UraMjestoTroskaId = "UraMjestoTroskaId",
            UraIznosOsnovice = "UraIznosOsnovice",
            UraIznosPoreza = "UraIznosPoreza",
            UraUkupanIznos = "UraUkupanIznos",
            UraOpis = "UraOpis",
            UraActive = "UraActive",
            UraDateTimeCreated = "UraDateTimeCreated",
            SektorNaziv = "SektorNaziv",
            SektorŠifra = "Sektor\u0160ifra",
            SektorActive = "SektorActive",
            SektorDateTimeCreated = "SektorDateTimeCreated",
            AmGrupaNaziv = "AmGrupaNaziv",
            AmGrupaNaziv2 = "AmGrupaNaziv2",
            AmGrupaAmVijekTrajanja = "AmGrupaAmVijekTrajanja",
            AmGrupaGodisnjaAmortizacija = "AmGrupaGodisnjaAmortizacija",
            AmGrupaDvostrukaGodisnjaAm = "AmGrupaDvostrukaGodisnjaAm",
            AmGrupaKontoIvId = "AmGrupaKontoIvId",
            AmGrupaKontoTrId = "AmGrupaKontoTrId",
            AmGrupaActive = "AmGrupaActive",
            AmGrupaDateTimeCreated = "AmGrupaDateTimeCreated",
            KontoNaziv = "KontoNaziv",
            KontoActive = "KontoActive",
            KontoDateTimeCreated = "KontoDateTimeCreated",
            Konto = "Konto",
            KontoIvNaziv = "KontoIvNaziv",
            KontoIvActive = "KontoIvActive",
            KontoIvDateTimeCreated = "KontoIvDateTimeCreated",
            KontoIvKonto = "KontoIvKonto"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    namespace OsnovnoSredstvoService {
        const baseUrl = "OsnovnaSredstva/OsnovnoSredstvo";
        function Create(request: Serenity.SaveRequest<OsnovnoSredstvoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OsnovnoSredstvoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OsnovnoSredstvoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OsnovnoSredstvoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "OsnovnaSredstva/OsnovnoSredstvo/Create",
            Update = "OsnovnaSredstva/OsnovnoSredstvo/Update",
            GetNextNumber = "OsnovnaSredstva/OsnovnoSredstvo/GetNextNumber",
            Delete = "OsnovnaSredstva/OsnovnoSredstvo/Delete",
            Retrieve = "OsnovnaSredstva/OsnovnoSredstvo/Retrieve",
            List = "OsnovnaSredstva/OsnovnoSredstvo/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    interface PartneriForm {
        Naziv: Serenity.StringEditor;
        Adresa: Serenity.StringEditor;
        Ptt: Serenity.IntegerEditor;
        Mjesto: Serenity.StringEditor;
        Grad: Serenity.StringEditor;
        Active: Serenity.BooleanEditor;
        DateTimeCreated: Serenity.DateEditor;
        Drzava: Serenity.StringEditor;
    }
    class PartneriForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    interface PartneriRow {
        PartnerId?: number;
        Naziv?: string;
        Adresa?: string;
        Ptt?: number;
        Mjesto?: string;
        Grad?: string;
        Active?: boolean;
        DateTimeCreated?: string;
        Drzava?: string;
    }
    namespace PartneriRow {
        const idProperty = "PartnerId";
        const nameProperty = "Naziv";
        const localTextPrefix = "OsnovnaSredstva.Partneri";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            PartnerId = "PartnerId",
            Naziv = "Naziv",
            Adresa = "Adresa",
            Ptt = "Ptt",
            Mjesto = "Mjesto",
            Grad = "Grad",
            Active = "Active",
            DateTimeCreated = "DateTimeCreated",
            Drzava = "Drzava"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    namespace PartneriService {
        const baseUrl = "OsnovnaSredstva/Partneri";
        function Create(request: Serenity.SaveRequest<PartneriRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PartneriRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PartneriRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PartneriRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "OsnovnaSredstva/Partneri/Create",
            Update = "OsnovnaSredstva/Partneri/Update",
            Delete = "OsnovnaSredstva/Partneri/Delete",
            Retrieve = "OsnovnaSredstva/Partneri/Retrieve",
            List = "OsnovnaSredstva/Partneri/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    interface SektoriForm {
        Naziv: Serenity.StringEditor;
        Šifra: Serenity.StringEditor;
        Active: Serenity.BooleanEditor;
        DateTimeCreated: Serenity.DateEditor;
    }
    class SektoriForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    interface SektoriRow {
        SektorId?: number;
        Naziv?: string;
        Šifra?: string;
        Active?: boolean;
        DateTimeCreated?: string;
    }
    namespace SektoriRow {
        const idProperty = "SektorId";
        const nameProperty = "Naziv";
        const localTextPrefix = "OsnovnaSredstva.Sektori";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            SektorId = "SektorId",
            Naziv = "Naziv",
            Šifra = "\u0160ifra",
            Active = "Active",
            DateTimeCreated = "DateTimeCreated"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    namespace SektoriService {
        const baseUrl = "OsnovnaSredstva/Sektori";
        function Create(request: Serenity.SaveRequest<SektoriRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SektoriRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SektoriRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SektoriRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "OsnovnaSredstva/Sektori/Create",
            Update = "OsnovnaSredstva/Sektori/Update",
            Delete = "OsnovnaSredstva/Sektori/Delete",
            Retrieve = "OsnovnaSredstva/Sektori/Retrieve",
            List = "OsnovnaSredstva/Sektori/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    interface TemeljnicaStavkeForm {
        ObracunId: Serenity.IntegerEditor;
        DateTimeCreated: Serenity.DateEditor;
        Kontoid: Serenity.StringEditor;
        Duguje: Serenity.DecimalEditor;
        Potrazuje: Serenity.DecimalEditor;
    }
    class TemeljnicaStavkeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    interface TemeljnicaStavkeRow {
        TemeljnicaId?: number;
        ObracunId?: number;
        DateTimeCreated?: string;
        Kontoid?: string;
        Duguje?: number;
        Potrazuje?: number;
        ObracunPartnerId?: number;
        ObracunOsnovnoId?: number;
        ObracunSektorId?: number;
        ObracunAmGrupaId?: number;
        ObracunDatumObracuna?: string;
        ObracunRazdobljeOd?: string;
        ObracunRazdobljeDo?: string;
        ObracunNapomena?: string;
        ObracunOtpisano?: boolean;
        ObracunActive?: boolean;
        ObracunZavrsen?: boolean;
        ObracunDateTimeCreated?: string;
    }
    namespace TemeljnicaStavkeRow {
        const idProperty = "TemeljnicaId";
        const nameProperty = "Kontoid";
        const localTextPrefix = "OsnovnaSredstva.TemeljnicaStavke";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            TemeljnicaId = "TemeljnicaId",
            ObracunId = "ObracunId",
            DateTimeCreated = "DateTimeCreated",
            Kontoid = "Kontoid",
            Duguje = "Duguje",
            Potrazuje = "Potrazuje",
            ObracunPartnerId = "ObracunPartnerId",
            ObracunOsnovnoId = "ObracunOsnovnoId",
            ObracunSektorId = "ObracunSektorId",
            ObracunAmGrupaId = "ObracunAmGrupaId",
            ObracunDatumObracuna = "ObracunDatumObracuna",
            ObracunRazdobljeOd = "ObracunRazdobljeOd",
            ObracunRazdobljeDo = "ObracunRazdobljeDo",
            ObracunNapomena = "ObracunNapomena",
            ObracunOtpisano = "ObracunOtpisano",
            ObracunActive = "ObracunActive",
            ObracunZavrsen = "ObracunZavrsen",
            ObracunDateTimeCreated = "ObracunDateTimeCreated"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    namespace TemeljnicaStavkeService {
        const baseUrl = "OsnovnaSredstva/TemeljnicaStavke";
        function Create(request: Serenity.SaveRequest<TemeljnicaStavkeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TemeljnicaStavkeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TemeljnicaStavkeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TemeljnicaStavkeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "OsnovnaSredstva/TemeljnicaStavke/Create",
            Update = "OsnovnaSredstva/TemeljnicaStavke/Update",
            Delete = "OsnovnaSredstva/TemeljnicaStavke/Delete",
            Retrieve = "OsnovnaSredstva/TemeljnicaStavke/Retrieve",
            List = "OsnovnaSredstva/TemeljnicaStavke/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    interface UlazniRacunForm {
        PArtnerId: Serenity.LookupEditor;
        UraBroj: Serenity.StringEditor;
        BrojRacuna: Serenity.StringEditor;
        DatumRacuna: Serenity.DateEditor;
        DatumKnjizenja: Serenity.DateEditor;
        DatumDospijeca: Serenity.DateEditor;
        DatumIsporuke: Serenity.DateEditor;
        PoslovnaGodina: Serenity.IntegerEditor;
        MjestoTroskaId: Serenity.LookupEditor;
        IznosOsnovice: Serenity.DecimalEditor;
        IznosPoreza: Serenity.DecimalEditor;
        UkupanIznos: Serenity.DecimalEditor;
        Opis: Serenity.StringEditor;
        Active: Serenity.BooleanEditor;
        DateTimeCreated: Serenity.DateEditor;
    }
    class UlazniRacunForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    interface UlazniRacunRow {
        UraId?: number;
        PArtnerId?: number;
        UraBroj?: string;
        BrojRacuna?: string;
        DatumRacuna?: string;
        DatumKnjizenja?: string;
        DatumDospijeca?: string;
        DatumIsporuke?: string;
        PoslovnaGodina?: number;
        MjestoTroskaId?: number;
        IznosOsnovice?: number;
        IznosPoreza?: number;
        UkupanIznos?: number;
        Opis?: string;
        Active?: boolean;
        DateTimeCreated?: string;
        PArtnerNaziv?: string;
        PArtnerAdresa?: string;
        PArtnerPtt?: number;
        PArtnerMjesto?: string;
        PArtnerGrad?: string;
        PArtnerActive?: boolean;
        PArtnerDateTimeCreated?: string;
        PArtnerDrzava?: string;
        MjestoTroskaSifra?: string;
        MjestoTroskaNaziv?: string;
        MjestoTroskaActive?: boolean;
        MjestoTroskaDateTimeCreated?: string;
    }
    namespace UlazniRacunRow {
        const idProperty = "UraId";
        const nameProperty = "BrojRacuna";
        const localTextPrefix = "OsnovnaSredstva.UlazniRacun";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            UraId = "UraId",
            PArtnerId = "PArtnerId",
            UraBroj = "UraBroj",
            BrojRacuna = "BrojRacuna",
            DatumRacuna = "DatumRacuna",
            DatumKnjizenja = "DatumKnjizenja",
            DatumDospijeca = "DatumDospijeca",
            DatumIsporuke = "DatumIsporuke",
            PoslovnaGodina = "PoslovnaGodina",
            MjestoTroskaId = "MjestoTroskaId",
            IznosOsnovice = "IznosOsnovice",
            IznosPoreza = "IznosPoreza",
            UkupanIznos = "UkupanIznos",
            Opis = "Opis",
            Active = "Active",
            DateTimeCreated = "DateTimeCreated",
            PArtnerNaziv = "PArtnerNaziv",
            PArtnerAdresa = "PArtnerAdresa",
            PArtnerPtt = "PArtnerPtt",
            PArtnerMjesto = "PArtnerMjesto",
            PArtnerGrad = "PArtnerGrad",
            PArtnerActive = "PArtnerActive",
            PArtnerDateTimeCreated = "PArtnerDateTimeCreated",
            PArtnerDrzava = "PArtnerDrzava",
            MjestoTroskaSifra = "MjestoTroskaSifra",
            MjestoTroskaNaziv = "MjestoTroskaNaziv",
            MjestoTroskaActive = "MjestoTroskaActive",
            MjestoTroskaDateTimeCreated = "MjestoTroskaDateTimeCreated"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    namespace UlazniRacunService {
        const baseUrl = "OsnovnaSredstva/UlazniRacun";
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Create(request: Serenity.SaveRequest<UlazniRacunRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UlazniRacunRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UlazniRacunRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UlazniRacunRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            GetNextNumber = "OsnovnaSredstva/UlazniRacun/GetNextNumber",
            Create = "OsnovnaSredstva/UlazniRacun/Create",
            Update = "OsnovnaSredstva/UlazniRacun/Update",
            Delete = "OsnovnaSredstva/UlazniRacun/Delete",
            Retrieve = "OsnovnaSredstva/UlazniRacun/Retrieve",
            List = "OsnovnaSredstva/UlazniRacun/List"
        }
    }
}
declare namespace Osnovna_Sredstva_Glavna {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace Osnovna_Sredstva_Glavna.Texts {
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace Osnovna_Sredstva_Glavna.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare var Morris: any;
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class ChartInDialog extends Serenity.TemplatedDialog<any> {
        private areaChart;
        static initializePage(): void;
        protected onDialogOpen(): void;
        protected arrange(): void;
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    class ProductDialog extends Serenity.EntityDialog<ProductRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProductForm;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class CloneableEntityDialog extends Northwind.ProductDialog {
        protected updateInterface(): void;
        /**
         * Overriding this method is optional to customize cloned entity
         */
        protected getCloningEntity(): Northwind.ProductRow;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    class ProductGrid extends Serenity.EntityGrid<ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private pendingChanges;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected onViewProcessData(response: any): Serenity.ListResponse<ProductRow>;
        /**
         * It would be nice if we could use autonumeric, Serenity editors etc. here, to control input validation,
         * but it's not supported by SlickGrid as we are only allowed to return a string, and should attach
         * no event handlers to rendered cell contents
         */
        private numericInputFormatter;
        private stringInputFormatter;
        /**
         * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
         */
        private selectFormatter;
        private getEffectiveValue;
        protected getColumns(): Slick.Column[];
        private inputsChange;
        private setSaveButtonState;
        private saveClick;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    /**
     * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
     */
    class CloneableEntityGrid extends Northwind.ProductGrid {
        protected getDialogType(): typeof CloneableEntityDialog;
        constructor(container: JQuery);
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    class OrderGrid extends Serenity.EntityGrid<OrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected shippingStateFilter: Serenity.EnumEditor;
        constructor(container: JQuery);
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        protected createQuickFilters(): void;
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        set_shippingState(value: number): void;
        protected addButtonClick(): void;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class DefaultValuesInNewGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
        /**
         * This method is called when New Item button is clicked.
         * By default, it calls EditItem with an empty entity.
         * This is a good place to fill in default values for New Item button.
         */
        protected addButtonClick(): void;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples.DialogBoxes {
    function initializePage(): void;
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    class OrderDialog extends Serenity.EntityDialog<OrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: OrderForm;
        constructor();
        getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    /**
     * A version of order dialog converted to a panel by adding Serenity.Decorators.panel decorator.
     */
    class EntityDialogAsPanel extends Northwind.OrderDialog {
        constructor();
        protected updateInterface(): void;
        protected onSaveSuccess(response: any): void;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    class CategoryDialog extends Serenity.EntityDialog<CategoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CategoryForm;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class GetInsertedRecordIdDialog extends Northwind.CategoryDialog {
        /**
         * This method is called after the save request to service
         * is completed succesfully. This can be an insert or update.
         *
         * @param response Response that is returned from server
         */
        protected onSaveSuccess(response: Serenity.SaveResponse): void;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    class CategoryGrid extends Serenity.EntityGrid<CategoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    /**
     * Subclass of CategoryGrid to override dialog type to GetInsertedRecordIdDialog
     */
    class GetInsertedRecordIdGrid extends Northwind.CategoryGrid {
        protected getDialogType(): typeof GetInsertedRecordIdDialog;
        constructor(container: JQuery);
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    /**
     * Our custom order dialog subclass that will have a tab to display and edit selected customer details.
     */
    class OtherFormInTabDialog extends Northwind.OrderDialog {
        private customerPropertyGrid;
        private customerForm;
        private customerValidator;
        constructor();
        getCustomerID(): number;
        loadEntity(entity: Northwind.OrderRow): void;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    /**
     * Subclass of OrderGrid to override dialog type to OtherFormInTabDialog
     */
    class OtherFormInTabGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof OtherFormInTabDialog;
        constructor(container: JQuery);
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    /**
     * Our custom order dialog subclass that will have a tab to display and edit selected customer details.
     * With single toolbar for all forms
     */
    class OtherFormOneBarDialog extends Northwind.OrderDialog {
        private customerPropertyGrid;
        private customerForm;
        private customerValidator;
        private selfChange;
        constructor();
        getCustomerID(): number;
        loadEntity(entity: Northwind.OrderRow): void;
        protected saveCustomer(callback: (response: Serenity.SaveResponse) => void, onSuccess?: (response: Serenity.SaveResponse) => void): boolean;
        protected saveOrder(callback: (response: Serenity.SaveResponse) => void): void;
        protected saveAll(callback: (response: Serenity.SaveResponse) => void): void;
        protected save(callback: (response: Serenity.SaveResponse) => void): void;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    /**
     * Subclass of OrderGrid to override dialog type to OtherFormInTabOneBarDialog
     */
    class OtherFormInTabOneBarGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof OtherFormOneBarDialog;
        constructor(container: JQuery);
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class PopulateLinkedDataDialog extends Serenity.EntityDialog<Northwind.OrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PopulateLinkedDataForm;
        constructor();
        private setCustomerDetails;
        /**
         * This dialog will have CSS class "s-PopulateLinkedDataDialog"
         * We are changing it here to "s-OrderDialog", to make it use default OrderDialog styles
         * This has no effect other than looks on populate linked data demonstration
         */
        protected getCssClass(): string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    /**
     * A subclass of OrderGrid that launches PopulateLinkedDataDialog
     */
    class PopulateLinkedDataGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof PopulateLinkedDataDialog;
        constructor(container: JQuery);
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    class SupplierDialog extends Serenity.EntityDialog<SupplierRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SupplierForm;
        protected getLanguages(): string[][];
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class ReadOnlyDialog extends Northwind.SupplierDialog {
        /**
         * This is the method that gets list of tool
         * buttons to be created in a dialog.
         *
         * Here we'll remove save and close button, and
         * apply changes buttons.
         */
        protected getToolbarButtons(): Serenity.ToolButton[];
        /**
         * This method is a good place to update states of
         * interface elements. It is called after dialog
         * is initialized and an entity is loaded into dialog.
         * This is also called in new item mode.
         */
        protected updateInterface(): void;
        /**
         * This method is called when dialog title needs to be updated.
         * Base class returns something like 'Edit xyz' for edit mode,
         * and 'New xyz' for new record mode.
         *
         * But our dialog is readonly, so we should change it to 'View xyz'
         */
        protected getEntityTitle(): string;
        /**
         * This method is actually the one that calls getEntityTitle()
         * and updates the dialog title. We could do it here too...
         */
        protected updateTitle(): void;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    class SupplierGrid extends Serenity.EntityGrid<SupplierRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    /**
     * A readonly grid that launches ReadOnlyDialog
     */
    class ReadOnlyGrid extends Northwind.SupplierGrid {
        protected getDialogType(): typeof ReadOnlyDialog;
        constructor(container: JQuery);
        /**
         * Removing add button from grid using its css class
         */
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    class OsnovnoSredstvoDialog extends Serenity.EntityDialog<OsnovnoSredstvoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: OsnovnoSredstvoForm;
        private obracunGrid;
        private loadedState;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class SerialAutoNumberDialog extends OsnovnaSredstva.OsnovnoSredstvoDialog {
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    class CustomerGrid extends Serenity.EntityGrid<CustomerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    /**
     * Subclass of CustomerGrid to override dialog type to SerialAutoNumberDialog
     */
    class SerialAutoNumberGrid extends Northwind.CustomerGrid {
        protected getDialogType(): typeof SerialAutoNumberDialog;
        constructor(container: JQuery);
    }
}
declare namespace Osnovna_Sredstva_Glavna.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class ChangingLookupTextDialog extends Common.GridEditorDialog<Northwind.OrderDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ChangingLookupTextForm;
        constructor();
        protected updateInterface(): void;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    /**
     * Our custom product editor type
     */
    class ChangingLookupTextEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Northwind.ProductRow> {
        constructor(container: JQuery, options: Serenity.LookupEditorOptions);
        protected getLookupKey(): string;
        protected getItemText(item: Northwind.ProductRow, lookup: Q.Lookup<Northwind.ProductRow>): string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    class OrderDetailDialog extends Common.GridEditorDialog<OrderDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: OrderDetailForm;
        constructor();
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    /**
     * Our subclass of order detail dialog with a CategoryID property
     * that will be used to set CascadeValue of product editor
     */
    class FilteredLookupOrderDetailDialog extends Northwind.OrderDetailDialog {
        constructor();
        /**
         * This method is called just before an entity is loaded to dialog
         * This is also called for new record mode with an empty entity
         */
        protected beforeLoadEntity(entity: any): void;
        categoryID: number;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    class OrderDetailsEditor extends Common.GridEditorBase<OrderDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OrderDetailDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    /**
     * Our subclass of Order Details editor with a CategoryID property
     */
    class FilteredLookupDetailEditor extends Northwind.OrderDetailsEditor {
        protected getDialogType(): typeof FilteredLookupOrderDetailDialog;
        constructor(container: JQuery);
        categoryID: number;
        /**
         * This method is called to initialize an edit dialog created by
         * grid editor when Add button or an edit link is clicked
         * We have an opportunity here to pass CategoryID to edit dialog
         */
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    /**
     * Basic order dialog with a category selection
     */
    class FilteredLookupInDetailDialog extends Serenity.EntityDialog<Northwind.OrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        private form;
        constructor();
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    /**
     * Subclass of OrderGrid to override dialog type to FilteredLookupInDetailDialog
     */
    class FilteredLookupInDetailGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof FilteredLookupInDetailDialog;
        constructor(container: JQuery);
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    /**
     * This is our custom product dialog that uses a different product form
     * (LookupFilterByMultipleForm) with our special category editor.
     */
    class LookupFilterByMultipleDialog extends Northwind.ProductDialog {
        protected getFormKey(): string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    /**
     * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
     */
    class LookupFilterByMultipleGrid extends Northwind.ProductGrid {
        protected getDialogType(): typeof LookupFilterByMultipleDialog;
        constructor(container: JQuery);
        /**
         * This method is called just before List request is sent to service.
         * You have an opportunity here to cancel request or modify it.
         * Here we'll add a custom criteria to list request.
         */
        protected onViewSubmit(): boolean;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    /**
     * This is our category editor that will show only categories of Produce and
     * Seafood. We are subclassing LookupEditorBase which also LookupEditor
     * derives from.
     *
     * After compiling and transforming templates, this editor type will be
     * available in server side to use in our LookupFilterByMultipleForm,
     * which is a version of ProductForm that uses our custom editor.
     */
    class ProduceSeafoodCategoryEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Northwind.CategoryRow> {
        constructor(container: JQuery, opt: Serenity.LookupEditorOptions);
        /**
         * Normally LookupEditor requires a lookup key to determine which set of
         * lookup data to show in editor. As our editor will only show category
         * data, we lock it to category lookup key.
         */
        protected getLookupKey(): string;
        /**
         * Here we are filtering by category name but you could filter by any field.
         * Just make sure the fields you filter on has [LookupInclude] attribute on them,
         * otherwise their value will be null in client side as they are not sent back
         * from server in lookup script.
         */
        protected getItems(lookup: Q.Lookup<Northwind.CategoryRow>): Northwind.CategoryRow[];
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class HardcodedValuesDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey(): string;
        protected form: HardcodedValuesForm;
        constructor();
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    /**
     * Our select editor with hardcoded values.
     *
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    class HardcodedValuesEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class StaticTextBlockDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey(): string;
        protected form: StaticTextBlockForm;
        constructor();
        /**
         * Here we override loadInitialEntity method to set value for "DisplayFieldValue" field.
         * If this was an EntityDialog, your field value would be originating from server side entity.
         */
        protected loadInitialEntity(): void;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class OrderBulkAction extends Common.BulkServiceAction {
        /**
         * This controls how many service requests will be used in parallel.
         * Determine this number based on how many requests your server
         * might be able to handle, and amount of wait on external resources.
         */
        protected getParallelRequests(): number;
        /**
         * These number of records IDs will be sent to your service in one
         * service call. If your service is designed to handle one record only,
         * set it to 1. But note that, if you have 5000 records, this will
         * result in 5000 service calls / requests.
         */
        protected getBatchSize(): number;
        /**
         * This is where you should call your service.
         * Batch parameter contains the selected order IDs
         * that should be processed in this service call.
         */
        protected executeForBatch(batch: any): void;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class CancellableBulkActionGrid extends Northwind.OrderGrid {
        private rowSelection;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
        protected getColumns(): Slick.Column[];
        protected getViewOptions(): Slick.RemoteViewOptions;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class ConditionalFormattingGrid extends Serenity.EntityGrid<Northwind.ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        /**
         * We override getColumns() to be able to add a custom CSS class to UnitPrice
         * We could also add this class in ProductColumns.cs but didn't want to modify
         * it solely for this sample.
         */
        protected getColumns(): Slick.Column[];
        /**
         * This method is called for all rows
         * @param item Data item for current row
         * @param index Index of the row in grid
         */
        protected getItemCssClass(item: Northwind.ProductRow, index: number): string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class CustomLinksInGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
        /**
         * We override getColumns() to change format functions for some columns.
         * You could also write them as formatter classes, and use them at server side
         */
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        /**
         * This method is called for columns with [EditLink] attribute,
         * but only for edit links of this grid's own item type.
         * It is also called by Add Product button with a NULL entityOrId
         * parameter so we should check that entityOrId is a string
         * to be sure it is originating from a link.
         *
         * As we changed format for other columns, this will only be called
         * for links in remaining OrderID column
         */
        protected editItem(entityOrId: any): void;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class DragDropSampleDialog extends Serenity.EntityDialog<DragDropSampleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: DragDropSampleForm;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class DragDropSampleGrid extends Serenity.EntityGrid<DragDropSampleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DragDropSampleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private dragging;
        constructor(container: JQuery);
        /**
         * This method will determine if item can be moved under a given target
         * An item can't be moved under itself, under one of its children
         */
        private canMoveUnder;
        /**
         * Gets children list of an item
         */
        private getChildren;
        /**
         * Gets all parents of an item
         */
        private getParents;
        protected getButtons(): any[];
        protected usePager(): boolean;
    }
}
declare namespace Osnovna_Sredstva_Glavna {
    class SelectableEntityGrid<TItem, TOptions> extends Serenity.EntityGrid<TItem, TOptions> {
        protected getSlickOptions(): Slick.GridOptions;
        protected createSlickGrid(): Slick.Grid;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class RowSelectionGrid extends SelectableEntityGrid<Northwind.SupplierRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class GridFilteredByCriteria extends Northwind.ProductGrid {
        constructor(container: JQuery);
        protected onViewSubmit(): boolean;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class GroupingAndSummariesInGrid extends Northwind.ProductGrid {
        constructor(container: JQuery);
        protected createSlickGrid(): Slick.Grid;
        protected getColumns(): Slick.Column[];
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
        protected getButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class InitialValuesForQuickFilters extends Northwind.OrderGrid {
        constructor(container: JQuery);
        /**
         * This method is called to get list of quick filters to be created for this grid.
         * By default, it returns quick filter objects corresponding to properties that
         * have a [QuickFilter] attribute at server side OrderColumns.cs
         */
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        /**
         * This method is another possible place to modify quick filter widgets.
         * It is where the quick filter widgets are actually created.
         *
         * By default, it calls getQuickFilters() then renders UI for these
         * quick filters.
         *
         * We could use getQuickFilters() method for ShipVia too,
         * but this is for demonstration purposes
         */
        protected createQuickFilters(): void;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class InlineActionGrid extends Northwind.CustomerGrid {
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class InlineImageFormatter implements Slick.Formatter, Serenity.IInitializeColumn {
        format(ctx: Slick.FormatterContext): string;
        initializeColumn(column: Slick.Column): void;
        fileProperty: string;
        thumb: boolean;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class InlineImageInGrid extends Serenity.EntityGrid<Northwind.ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class ProductExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class ProductExcelImportGrid extends Northwind.ProductGrid {
        constructor(container: JQuery);
        /**
         * This method is called to get list of buttons to be created.
         */
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class QuickFilterCustomization extends Serenity.EntityGrid<Northwind.OrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof Northwind.OrderDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        /**
         * This method is called to get list of quick filters to be created for this grid.
         * By default, it returns quick filter objects corresponding to properties that
         * have a [QuickFilter] attribute at server side OrderColumns.cs
         */
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class RemovingAddButton extends Northwind.SupplierGrid {
        constructor(container: JQuery);
        /**
         * This method is called to get list of buttons to be created.
         */
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class CustomerGrossSalesGrid extends Serenity.EntityGrid<Northwind.CustomerGrossSalesRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private nextId;
        constructor(container: JQuery);
        /**
         * This method is called to preprocess data returned from the list service
         */
        protected onViewProcessData(response: Serenity.ListResponse<Northwind.SalesByCategoryRow>): Serenity.ListResponse<Northwind.SalesByCategoryRow>;
        protected getButtons(): any[];
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class TreeGrid extends Northwind.OrderGrid {
        private treeMixin;
        constructor(container: JQuery);
        protected usePager(): boolean;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class VSGalleryQAGrid extends Serenity.EntityGrid<BasicSamples.VSGalleryQAThread, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): any[];
        protected getSlickOptions(): Slick.GridOptions;
        protected getColumns(): Slick.Column[];
        protected getInitialTitle(): any;
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class ViewWithoutIDGrid extends Serenity.EntityGrid<Northwind.SalesByCategoryRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private nextId;
        constructor(container: JQuery);
        /**
         * This method is called to preprocess data returned from the list service
         */
        protected onViewProcessData(response: Serenity.ListResponse<Northwind.SalesByCategoryRow>): Serenity.ListResponse<Northwind.SalesByCategoryRow>;
        protected getButtons(): any[];
    }
}
declare namespace Osnovna_Sredstva_Glavna.BasicSamples {
    class WrappedHeadersGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
    }
}
declare namespace Osnovna_Sredstva_Glavna.LanguageList {
    function getValue(): string[][];
}
declare namespace Osnovna_Sredstva_Glavna.ScriptInitialization {
}
declare namespace Osnovna_Sredstva_Glavna {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace Osnovna_Sredstva_Glavna.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace Osnovna_Sredstva_Glavna {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace Osnovna_Sredstva_Glavna.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace Osnovna_Sredstva_Glavna.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace Osnovna_Sredstva_Glavna.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace Osnovna_Sredstva_Glavna.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Osnovna_Sredstva_Glavna.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Osnovna_Sredstva_Glavna.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Osnovna_Sredstva_Glavna.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    class CustomerDialog extends Serenity.EntityDialog<CustomerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CustomerForm;
        private ordersGrid;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: CustomerRow): void;
        onSaveSuccess(response: any): void;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    class CustomerEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, CustomerRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: any, lookup: any): string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    class CustomerOrderDialog extends OrderDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    class CustomerOrdersGrid extends OrderGrid {
        protected getDialogType(): typeof CustomerOrderDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _customerID;
        customerID: string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    class EmployeeListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    class EmployeeFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
        genderProperty: string;
        initializeColumn(column: Slick.Column): void;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    class NoteDialog extends Serenity.TemplatedDialog<any> {
        private textEditor;
        constructor();
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        text: string;
        okClick: () => void;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    class NotesEditor extends Serenity.TemplatedWidget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        private isDirty;
        private items;
        constructor(div: JQuery);
        protected getTemplate(): string;
        protected updateContent(): void;
        protected addClick(): void;
        protected editClick(e: any): void;
        deleteClick(e: any): void;
        value: NoteRow[];
        getEditValue(prop: Serenity.PropertyItem, target: any): void;
        setEditValue(source: any, prop: Serenity.PropertyItem): void;
        get_isDirty(): boolean;
        set_isDirty(value: any): void;
        onChange: () => void;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    class FreightFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    class RegionDialog extends Serenity.EntityDialog<RegionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RegionForm;
        protected getLanguages(): string[][];
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    class RegionGrid extends Serenity.EntityGrid<RegionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    class PhoneEditor extends Serenity.StringEditor {
        constructor(input: JQuery);
        protected formatValue(): void;
        protected getFormattedValue(): string;
        multiple: boolean;
        get_value(): string;
        set_value(value: string): void;
        static validate(phone: string, isMultiple: boolean): string;
        static isValidPhone(phone: string): boolean;
        static formatPhone(phone: any): any;
        static formatMulti(phone: string, format: (s: string) => string): string;
        static isValidMulti(phone: string, check: (s: string) => boolean): boolean;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    class ShipperDialog extends Serenity.EntityDialog<ShipperRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ShipperForm;
        protected getLanguages(): string[][];
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    class ShipperFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    class ShipperGrid extends Serenity.EntityGrid<ShipperRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    class TerritoryDialog extends Serenity.EntityDialog<TerritoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TerritoryForm;
        protected getLanguages(): string[][];
    }
}
declare namespace Osnovna_Sredstva_Glavna.Northwind {
    class TerritoryGrid extends Serenity.EntityGrid<TerritoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    class AktivacijaSredstvaDialog extends Serenity.EntityDialog<AktivacijaSredstvaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AktivacijaSredstvaForm;
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    class AktivacijaSredstvaGrid extends Serenity.EntityGrid<AktivacijaSredstvaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AktivacijaSredstvaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    class AmortizacijskeGrupeDialog extends Serenity.EntityDialog<AmortizacijskeGrupeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AmortizacijskeGrupeForm;
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    class AmortizacijskeGrupeGrid extends Serenity.EntityGrid<AmortizacijskeGrupeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AmortizacijskeGrupeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    class KontaDialog extends Serenity.EntityDialog<KontaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: KontaForm;
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    class KontaGrid extends Serenity.EntityGrid<KontaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof KontaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    class KontaUraDialog extends Serenity.EntityDialog<KontaUraRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: KontaUraForm;
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    class KontaUraGrid extends Serenity.EntityGrid<KontaUraRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof KontaUraDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    class MjestoTroskaDialog extends Serenity.EntityDialog<MjestoTroskaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MjestoTroskaForm;
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    class MjestoTroskaGrid extends Serenity.EntityGrid<MjestoTroskaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MjestoTroskaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    class ObracunDialog extends Serenity.EntityDialog<ObracunRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ObracunForm;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    class ObracunGrid extends Serenity.EntityGrid<ObracunRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ObracunDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        _osnovnoId: number;
        osnovnoId: number;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    class ObracunStavkeDialog extends Serenity.EntityDialog<ObracunStavkeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ObracunStavkeForm;
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    class ObracunStavkeGrid extends Serenity.EntityGrid<ObracunStavkeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ObracunStavkeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    class OsnovnoSredstvoGrid extends Serenity.EntityGrid<OsnovnoSredstvoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OsnovnoSredstvoDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    class PartneriDialog extends Serenity.EntityDialog<PartneriRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PartneriForm;
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    class PartneriGrid extends Serenity.EntityGrid<PartneriRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PartneriDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    class SektoriDialog extends Serenity.EntityDialog<SektoriRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SektoriForm;
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    class SektoriGrid extends Serenity.EntityGrid<SektoriRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SektoriDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    class TemeljnicaStavkeDialog extends Serenity.EntityDialog<TemeljnicaStavkeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TemeljnicaStavkeForm;
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    class TemeljnicaStavkeGrid extends Serenity.EntityGrid<TemeljnicaStavkeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TemeljnicaStavkeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    class UlazniRacunDialog extends Serenity.EntityDialog<UlazniRacunRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: UlazniRacunForm;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva {
    class UlazniRacunGrid extends Serenity.EntityGrid<UlazniRacunRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UlazniRacunDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
