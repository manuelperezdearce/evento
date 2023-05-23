using back.Dtos.Input.Event;
using back.Dtos.Output.Event;
using back.Models;
using Microsoft.EntityFrameworkCore;

namespace back.Services;

public class EventService
{
    private readonly AppDbContext _context;

    public EventService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<Event> Create(EventCreateInDto eventCreateInDto)
    {
        var events = new Event();
        events.name = eventCreateInDto.name;
        events.short_description = eventCreateInDto.short_description;
        events.description = eventCreateInDto.description; ;
        events.date_start = eventCreateInDto.date_start;
        events.date_end= eventCreateInDto.date_end;
        events.created_at = eventCreateInDto.created_at;
        events.ticket_price = eventCreateInDto.ticket_price;
        events.idComment = eventCreateInDto.idComment;
        events.idFeature = eventCreateInDto.idFeature;
        events.idRanking = eventCreateInDto.idRanking;
        events.idEntry = eventCreateInDto.idEntry;
        events.status = true;
        _context.Event.Add(events);
        await _context.SaveChangesAsync();

        return events;
    }


    public async Task<List<EventGetOutDto>> GetAll()
    {
        List<Event> events = await _context.Event.Where(c=>c.status==true).ToListAsync();

        List<EventGetOutDto> eventDto = events.Select(eventGetOutDto => new EventGetOutDto
        {
            id = eventGetOutDto.id,
            name=eventGetOutDto.name,
            short_description=eventGetOutDto.short_description,
            description=eventGetOutDto.description,
            date_start=eventGetOutDto.date_start,
            date_end=eventGetOutDto.date_end,
            created_at=eventGetOutDto.created_at,
            ticket_price=eventGetOutDto.ticket_price,
            idComment=eventGetOutDto.idComment,
            idFeature=eventGetOutDto.idFeature,
            idRanking=eventGetOutDto.idRanking,
            idEntry=eventGetOutDto.idEntry,
            status=eventGetOutDto.status

        }).ToList();

        return eventDto;
    }



    public async Task<EventGetOutDto> GetById(int id)
    {
        Event events = await _context.Event.FirstOrDefaultAsync(c => c.id == id && c.status==true);

        EventGetOutDto result = new EventGetOutDto
        {
            id = events.id,
            name = events.name,
            short_description = events.short_description,
            description = events.description,
            date_start =events.date_start,
            date_end = events.date_end,
            created_at = events.created_at,
            ticket_price =events.ticket_price,
            idComment = events.idComment,
            idFeature = events.idFeature,
            idRanking = events.idRanking,
            idEntry = events.idEntry,
            status=events.status
        };
        return result;
    }



    public async Task<Event> Update(EventUpdateInDtocs eventUpdateInDtocs)
    {
        Event events = await _context.Event.FindAsync(eventUpdateInDtocs.id);
        events.name = eventUpdateInDtocs.name;
        events.short_description = eventUpdateInDtocs.short_description;
        events.description = eventUpdateInDtocs.description;
        events.date_start = eventUpdateInDtocs.date_start;
        events.date_end = eventUpdateInDtocs.date_end;
        events.created_at = eventUpdateInDtocs.created_at;
        events.ticket_price = eventUpdateInDtocs.ticket_price;
        events.idComment = eventUpdateInDtocs.idComment;
        events.idFeature = eventUpdateInDtocs.idFeature;
        events.idRanking = eventUpdateInDtocs.idRanking;
        events.idEntry = eventUpdateInDtocs.idEntry;
        await _context.SaveChangesAsync();

        return events;

    }



    public async Task<Event> Delete(int id)
    {
        Event events = await _context.Event.FirstOrDefaultAsync(c=>c.id==id);
        events.status = false;
        await _context.SaveChangesAsync();

        return events;

    }






}
