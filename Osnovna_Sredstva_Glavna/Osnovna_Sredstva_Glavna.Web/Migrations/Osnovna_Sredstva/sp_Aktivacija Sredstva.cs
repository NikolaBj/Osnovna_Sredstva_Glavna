using FluentMigrator;

namespace Osnovna_Sredstva_Glavna.Migrations.Osnovna_Sredstva
{
    [Migration(20200129)]
    public class sp_Ativacija_Sredstva : AutoReversingMigration
    {
        public override void Up()
        {
            IfDatabase("SqlServer", "SqlServer2000", "SqlServerCe")
                .Execute.Sql(@"
create PROCEDURE [dbo].[sp_AktivacijaSredstva]
 @OsnovnoId INT, @DatumAktivacije DATE  as 

 
BEGIN
 
    UPDATE Osnovno_Sredstvo 
	set Active = 1, Datum_Amortizacije = @DatumAktivacije
	where OsnovnoId = @OsnovnoId 
 
	insert into AktivacijaSredstva(OsnovnoID, DatumAktivacije) values (@OsnovnoId, @DatumAktivacije) 
	
END");

        }
    }
}