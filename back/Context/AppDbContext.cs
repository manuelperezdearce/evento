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

}
