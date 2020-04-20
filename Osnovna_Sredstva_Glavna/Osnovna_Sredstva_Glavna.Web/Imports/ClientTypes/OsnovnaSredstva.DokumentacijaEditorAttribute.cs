using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Osnovna_Sredstva_Glavna.OsnovnaSredstva
{
    public partial class DokumentacijaEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Osnovna_Sredstva_Glavna.OsnovnaSredstva.DokumentacijaEditor";

        public DokumentacijaEditorAttribute()
            : base(Key)
        {
        }
    }
}

