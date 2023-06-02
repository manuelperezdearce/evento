using back.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<User> User { get; set; }
    public DbSet<Category> Category { get; set; }
    public DbSet<Coment>Coment { get; set; }
    public DbSet<Event> Event { get; set; }
    public DbSet<City> City { get; set; }
    public DbSet<Country> Country { get; set; }
    public DbSet<Feature> Feature { get; set; }
    public DbSet<Images> Images { get; set; }
    public DbSet<Ranking> Ranking { get; set; }
    public DbSet<Social> Social{ get; set; }
    public DbSet<Entry> Entry { get; set; }



}
