﻿// // <auto-generated />
// using System;
// using Microsoft.EntityFrameworkCore;
// using Microsoft.EntityFrameworkCore.Infrastructure;
// using Microsoft.EntityFrameworkCore.Migrations;
// using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
// using OVD.API.Data;

// namespace OVD.API.Migrations
// {
//     [DbContext(typeof(DataContext))]
//     [Migration("20190222195159_AddedAdminEntity")]
//     partial class AddedAdminEntity
//     {
//         protected override void BuildTargetModel(ModelBuilder modelBuilder)
//         {
// #pragma warning disable 612, 618
//             modelBuilder
//                 .HasAnnotation("ProductVersion", "2.2.0-rtm-35687")
//                 .HasAnnotation("Relational:MaxIdentifierLength", 64);

//             modelBuilder.Entity("OVD.API.Models.Admin", b =>
//                 {
//                     b.Property<int>("Id")
//                         .ValueGeneratedOnAdd();

//                     b.Property<byte[]>("PasswordHash");

//                     b.Property<byte[]>("PasswordSalt");

//                     b.Property<string>("Username");

//                     b.HasKey("Id");

//                     b.ToTable("Admins");
//                 });
// #pragma warning restore 612, 618
//         }
//     }
// }
