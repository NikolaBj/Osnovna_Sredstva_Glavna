using Serenity.Services;
using System.Collections.Generic;

namespace Osnovna_Sredstva_Glavna.Administration
{

    public class TranslationUpdateRequest : ServiceRequest
    {
        public string TargetLanguageID { get; set; }
        public Dictionary<string, string> Translations { get; set; }
    }
}