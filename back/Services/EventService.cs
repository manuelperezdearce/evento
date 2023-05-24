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
        events.Name = eventCreateInDto.Name;
        events.ShortDescription = eventCreateInDto.ShortDescription;
        events.Description = eventCreateInDto.Description; ;
        events.DateStart = eventCreateInDto.DateStart;
        events.DateEnd = eventCreateInDto.DateEnd;
        events.CreatedAt = eventCreateInDto.CreatedAt;
        events.TicketPrice = eventCreateInDto.TicketPrice;
        events.CommentId = eventCreateInDto.CommentId;
        events.FeatureId = eventCreateInDto.FeatureId;
        events.RankingId = eventCreateInDto.RankingId;
        events.EntryId = eventCreateInDto.EntryId;
        events.Status = true;
        _context.Event.Add(events);
        await _context.SaveChangesAsync();

        return events;
    }


    public async Task<List<EventGetOutDto>> GetAll()
    {
        List<Event> events = await _context.Event.Where(c => c.Status == true).ToListAsync();

        List<EventGetOutDto> eventDto = events.Select(eventGetOutDto => new EventGetOutDto
        {
            Id = eventGetOutDto.Id,
            Name = eventGetOutDto.Name,
            ShortDescription = eventGetOutDto.ShortDescription,
            Description = eventGetOutDto.Description,
            DateStart = eventGetOutDto.DateStart,
            DateEnd = eventGetOutDto.DateEnd,
            CreatedAt = eventGetOutDto.CreatedAt,
            TicketPrice = eventGetOutDto.TicketPrice,
            CommentId = eventGetOutDto.CommentId,
            FeatureId = eventGetOutDto.FeatureId,
            RankingId = eventGetOutDto.RankingId,
            EntryId = eventGetOutDto.EntryId,
            Status = eventGetOutDto.Status

        }).ToList();

        return eventDto;
    }

    public async Task<EventGetOutDto> GetById(int id)
    {
        Event events = await _context.Event.FirstOrDefaultAsync(c => c.Id == id && c.Status == true);

        EventGetOutDto result = new EventGetOutDto
        {
            Id = events.Id,
            Name = events.Name,
            ShortDescription = events.ShortDescription,
            Description = events.Description,
            DateStart = events.DateStart,
            DateEnd = events.DateEnd,
            CreatedAt = events.CreatedAt,
            TicketPrice = events.TicketPrice,
            CommentId = events.CommentId,
            FeatureId = events.FeatureId,
            RankingId = events.RankingId,
            EntryId = events.EntryId,
            Status = events.Status
        };
        return result;
    }

    public async Task<Event> Update(EventUpdateInDtocs eventUpdateInDtocs)
    {
        Event events = await _context.Event.FindAsync(eventUpdateInDtocs.Id);
        events.Name = eventUpdateInDtocs.Name;
        events.ShortDescription = eventUpdateInDtocs.ShortDescription;
        events.Description = eventUpdateInDtocs.Description;
        events.DateStart = eventUpdateInDtocs.DateStart;
        events.DateEnd = eventUpdateInDtocs.DateEnd;
        events.CreatedAt = eventUpdateInDtocs.CreatedAt;
        events.TicketPrice = eventUpdateInDtocs.TicketPrice;
        events.CommentId = eventUpdateInDtocs.CommentId;
        events.FeatureId = eventUpdateInDtocs.FeatureId;
        events.RankingId = eventUpdateInDtocs.RankingId;
        events.EntryId = eventUpdateInDtocs.EntryId;
        await _context.SaveChangesAsync();

        return events;

    }

    public async Task<Event> Delete(int id)
    {
        Event events = await _context.Event.FirstOrDefaultAsync(c => c.Id == id);
        events.Status = false;
        await _context.SaveChangesAsync();

        return events;
    }
}
