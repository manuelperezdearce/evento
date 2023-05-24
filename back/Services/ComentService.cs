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
        var Coment = new Coment
        {
            Description = comentCreateInDto.Description,
            CreatedAt = comentCreateInDto.CreatedAt,
            UserId = comentCreateInDto.UserId,
            EventId = comentCreateInDto.EventId
        };
        _context.Coment.Add(Coment);
        await _context.SaveChangesAsync();

        return Coment;
    }


    public async Task<List<ComentGetOutDto>> GetAll()
    {
        List<Coment> coment = await _context.Coment.ToListAsync();

        List<ComentGetOutDto> comentDto = coment.Select(comentgetoutDto => new ComentGetOutDto
        {
          Id=comentgetoutDto.Id,
          Description=comentgetoutDto.Description,
          CreatedAt=comentgetoutDto.CreatedAt,
          UserId = comentgetoutDto.UserId,
          EventId =comentgetoutDto.EventId,  
       
        }).ToList();

        return comentDto;
    }





}
