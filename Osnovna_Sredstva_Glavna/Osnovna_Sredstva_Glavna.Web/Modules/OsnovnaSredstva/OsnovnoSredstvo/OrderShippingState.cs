
namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva
{
    using Serenity.ComponentModel;
    using System.ComponentModel;

    [EnumKey("OsnovnoSredstvo.Active")]

    public enum OrderShippingState
    {
        [Description("Active")]
        Active = 1,
        [Description("Neaktivna")]
        Neaktivna = 0
    }
}