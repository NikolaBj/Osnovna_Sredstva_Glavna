namespace Osnovna_Sredstva_Glavna.Migrations.Osnovna_Sredstva
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Osnovna_Sredstva : DbContext
    {
        public Osnovna_Sredstva()
            : base("name=Osnovna_Sredstva")
        {
        }

        public virtual DbSet<Amortizacijske_grupe> Amortizacijske_grupe { get; set; }
        public virtual DbSet<Konta> Konta { get; set; }
        public virtual DbSet<KontaUra> KontaUra { get; set; }
        public virtual DbSet<Mjesto_Troska> Mjesto_Troska { get; set; }
        public virtual DbSet<Osnovno_Sredstvo> Osnovno_Sredstvo { get; set; }
        public virtual DbSet<Partneri> Partneri { get; set; }
        public virtual DbSet<Sektori> Sektori { get; set; }
        public virtual DbSet<Ulazni_racun> Ulazni_racun { get; set; }

        public virtual DbSet<AktivacijaSredstva> Aktivacija_Sredstva { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Amortizacijske_grupe>()
                .Property(e => e.Naziv)
                .IsUnicode(false);

            modelBuilder.Entity<Amortizacijske_grupe>()
                .Property(e => e.Naziv2)
                .IsUnicode(false);

            modelBuilder.Entity<Amortizacijske_grupe>()
                .Property(e => e.Godisnja_amortizacija)
                .HasPrecision(5, 2);

            modelBuilder.Entity<Amortizacijske_grupe>()
                .Property(e => e.Dvostruka_Godisnja_am)
                .HasPrecision(5, 2);

            modelBuilder.Entity<Amortizacijske_grupe>()
                .HasMany(e => e.Osnovno_Sredstvo)
                .WithRequired(e => e.Amortizacijske_grupe)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Konta>()
                .Property(e => e.Naziv)
                .IsUnicode(false);

            modelBuilder.Entity<Konta>()
                .Property(e => e.Konto)
                .IsUnicode(false);

            modelBuilder.Entity<Konta>()
                .HasMany(e => e.Amortizacijske_grupe)
                .WithRequired(e => e.Konta)
                .HasForeignKey(e => e.KontoIVId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Konta>()
                .HasMany(e => e.Amortizacijske_grupe1)
                .WithRequired(e => e.Konta1)
                .HasForeignKey(e => e.KontoTrId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Konta>()
                .HasMany(e => e.KontaUra)
                .WithRequired(e => e.Konta)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Konta>()
                .HasMany(e => e.Osnovno_Sredstvo)
                .WithRequired(e => e.Konta)
                .HasForeignKey(e => e.KontoId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Konta>()
                .HasMany(e => e.Osnovno_Sredstvo1)
                .WithRequired(e => e.Konta1)
                .HasForeignKey(e => e.KontoIVId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<KontaUra>()
                .Property(e => e.IznosDuguje)
                .HasPrecision(11, 2);

            modelBuilder.Entity<KontaUra>()
                .Property(e => e.IznosPotrazuje)
                .HasPrecision(11, 2);

            modelBuilder.Entity<KontaUra>()
                .Property(e => e.Opis)
                .IsUnicode(false);

            modelBuilder.Entity<Mjesto_Troska>()
                .Property(e => e.Sifra)
                .IsUnicode(false);

            modelBuilder.Entity<Mjesto_Troska>()
                .HasMany(e => e.KontaUra)
                .WithRequired(e => e.Mjesto_Troska)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Mjesto_Troska>()
                .HasMany(e => e.Ulazni_racun)
                .WithRequired(e => e.Mjesto_Troska)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Osnovno_Sredstvo>()
                .Property(e => e.Naziv_opreme)
                .IsUnicode(false);

            modelBuilder.Entity<Osnovno_Sredstvo>()
                .Property(e => e.Serijski_broj)
                .IsUnicode(false);

            modelBuilder.Entity<Osnovno_Sredstvo>()
                .Property(e => e.Inventarski_broj)
                .IsUnicode(false);

            modelBuilder.Entity<Osnovno_Sredstvo>()
                .Property(e => e.Nabavna_vrijednost)
                .HasPrecision(11, 2);

            modelBuilder.Entity<Osnovno_Sredstvo>()
                .Property(e => e.Amortizirana_vrijednost)
                .HasPrecision(11, 2);

            modelBuilder.Entity<Osnovno_Sredstvo>()
                .Property(e => e.Knjigovodstvena_vrijednost)
                .HasPrecision(11, 2);

            modelBuilder.Entity<Osnovno_Sredstvo>()
                .Property(e => e.Uvecanje_vrijednosti)
                .HasPrecision(11, 2);

            modelBuilder.Entity<Osnovno_Sredstvo>()
                .Property(e => e.Umanjenje_vrijednosti)
                .HasPrecision(11, 2);

            modelBuilder.Entity<Osnovno_Sredstvo>()
                .Property(e => e.Količina)
                .HasPrecision(11, 2);

            modelBuilder.Entity<Osnovno_Sredstvo>()
                .Property(e => e.Jedinica_mjere)
                .IsUnicode(false);

            modelBuilder.Entity<Osnovno_Sredstvo>()
                .Property(e => e.Stopa_am_sredstva)
                .HasPrecision(5, 2);

            modelBuilder.Entity<Partneri>()
                .Property(e => e.Mjesto)
                .IsUnicode(false);

            modelBuilder.Entity<Partneri>()
                .HasMany(e => e.Osnovno_Sredstvo)
                .WithRequired(e => e.Partneri)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Partneri>()
                .HasMany(e => e.Ulazni_racun)
                .WithRequired(e => e.Partneri)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Sektori>()
                .Property(e => e.Naziv)
                .IsUnicode(false);

            modelBuilder.Entity<Sektori>()
                .Property(e => e.Šifra)
                .IsUnicode(false);

            modelBuilder.Entity<Sektori>()
                .HasMany(e => e.Osnovno_Sredstvo)
                .WithRequired(e => e.Sektori)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Ulazni_racun>()
                .Property(e => e.BrojRacuna)
                .IsUnicode(false);

            modelBuilder.Entity<Ulazni_racun>()
                .Property(e => e.Iznos_Osnovice)
                .HasPrecision(11, 2);

            modelBuilder.Entity<Ulazni_racun>()
                .Property(e => e.Iznos_Poreza)
                .HasPrecision(11, 2);

            modelBuilder.Entity<Ulazni_racun>()
                .Property(e => e.Ukupan_Iznos)
                .HasPrecision(11, 2);

            modelBuilder.Entity<Ulazni_racun>()
                .HasMany(e => e.KontaUra)
                .WithRequired(e => e.Ulazni_racun)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Ulazni_racun>()
                .HasMany(e => e.Osnovno_Sredstvo)
                .WithRequired(e => e.Ulazni_racun)
                .WillCascadeOnDelete(false);


            modelBuilder.Entity<AktivacijaSredstva>()
    .Property(e => e.DatumAktivacije);



        }
    }
}
