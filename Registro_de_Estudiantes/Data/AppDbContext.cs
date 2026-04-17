using Microsoft.EntityFrameworkCore;
using Registro_de_Estudiantes.Models;

namespace Registro_de_Estudiantes.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<Estudiante> Estudiantes { get; set; }
    }
}
