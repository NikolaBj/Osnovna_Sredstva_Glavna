
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.ObracunRepository;
    using MyRow = Entities.ObracunRow;
    using Osnovna_Sredstva_Glavna.OsnovnaSredstva.Entities;
     

    [RoutePrefix("Services/OsnovnaSredstva/Obracun"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ObracunController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        public GetNextNumberResponse GetNextNumber(IDbConnection connection, GetNextNumberRequest request)
        {
            return new MyRepository().GetNextNumber(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        //[HttpPost]
        //public bool Start(IDbConnection connection)
        //{
        //    try
        //    {

        //        connection.Execute("EXECUTE sp_ObracunAmortizacije", 
        //            param: new
        //            {
        //                @ObracunID = 35
        //            }, commandType: CommandType.StoredProcedure
        //            );


        //        return true;
        //            }
        //    catch
        //    {
        //        return false;
        //    }


        //    }
        public ServiceResponse PokreniObracun(IUnitOfWork uow, Modules.OsnovnaSredstva.Obracun.PokreniObracunRequest request)
        {

            request.CheckNotNull();

            var error = false;
            var noterror = true;
            var random = new Random();

            var connection = SqlConnections.NewFor<ObracunRow>();


            var y = request.ObracunID;
            var x = request.IdObracun;

            if (error)
                throw new ValidationError("Došlo je do greške u obradi podataka !!!");

            var SQLCommand = "execute sp_ObracunAmortizacije " + x.ToString();
            var record = connection.Query(SQLCommand);


            return new ServiceResponse();
        }



    }



    //public int Runprocedure(IDbConnection connection)
    //{
    //    connection.Execute("ObracunAmortizacije",
    //       param: new
    //       {
    //           ObracunId = ObracunRow.Fields.ObracunId
    //       }, commandType: CommandType.StoredProcedure);
    //    return 0;
    //}
}

