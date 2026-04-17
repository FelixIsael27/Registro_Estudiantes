using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Registro_de_Estudiantes.Data;
using Registro_de_Estudiantes.Models;

namespace Registro_de_Estudiantes.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EstudiantesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public EstudiantesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Crear(Estudiante estudiante)
        {
            _context.Estudiantes.Add(estudiante);
            await _context.SaveChangesAsync();
            return Ok(estudiante);
        }

        [HttpGet]
        public async Task<IActionResult> Obtener()
        {
            var lista = await _context.Estudiantes
                .Select(e => new {
                    e.Nombres,
                    e.Apellidos,
                    Edad = e.ObtenerEdad(),
                    e.Direccion,
                    e.Telefono
                })
                .ToListAsync();

            return Ok(lista);
        }
    }
}
