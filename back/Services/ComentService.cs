using back.Dtos.Input.Coment;
using back.Dtos.Output.Coment;
using back.Models;
using Microsoft.EntityFrameworkCore;

namespace back.Services;

public class ComentService
{
    private readonly AppDbContext _context;


    public ComentService(AppDbContext context)
    {
        _context = context;
    }


    public async Task<Coment> Create(ComentCreateInDto comentCreateInDto)
    {
        var Coment = new Coment();
        Coment.description = comentCreateInDto.description;
        Coment.created_at = comentCreateInDto.created_at;
        Coment.idUser=comentCreateInDto.idUser;
        Coment.idEvent = comentCreateInDto.idEvent;
        _context.Coment.Add(Coment);
        await _context.SaveChangesAsync();

        return Coment;
    }


    public async Task<List<ComentGetOutDto>> GetAll()
    {
        List<Coment> coment = await _context.Coment.ToListAsync();

        List<ComentGetOutDto> comentDto = coment.Select(comentgetoutDto => new ComentGetOutDto
        {
          id=comentgetoutDto.id,
          description=comentgetoutDto.description,
          created_at=comentgetoutDto.created_at,
          idUser = comentgetoutDto.idUser,
          idEvent =comentgetoutDto.idEvent,  
       
        }).ToList();

        return comentDto;
    }





}
