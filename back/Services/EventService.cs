using AutoMapper;
using back.Dtos.Input.Event;
using back.Dtos.Output.Coment;
using back.Dtos.Output.Entry;
using back.Dtos.Output.Event;
using back.Dtos.Output.Feature;
using back.Dtos.Output.Ranking;
using back.Mapper;
using back.Models;
using Microsoft.EntityFrameworkCore;
using Slugify;

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
        var slugHelper = new SlugHelper();
        var events = new Event();
        //events.Name = slugHelper.GenerateSlug(eventCreateInDto.Name.ToString());
        events.Name = eventCreateInDto.Name;
        events.Slug = slugHelper.GenerateSlug(events.Name);
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
            Status = eventGetOutDto.Status,
            Slug=eventGetOutDto.Slug

        }).ToList();

        return eventDto;
    }

    public async Task<EventGetOutDto> GetById(string slug)
    {
        Event events = await _context.Event.FirstOrDefaultAsync(c => c.Slug == slug && c.Status == true);

        //Event events = await _context.Event.FirstOrDefaultAsync(c => c.Id == id && c.Status == true);
        Event events = await _context.Event
            .Include(e=>e.Coment)
            .ThenInclude(e=>e.User)
            .Include(e => e.Feature)
            .Include(e => e.Ranking)
            .Include(e => e.Entry)
           .FirstOrDefaultAsync(c => c.Id == id && c.Status == true);

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.AddProfile<EventMappingProfile>(); // Agrega tu perfil de mapeo personalizado
        }).CreateMapper();

        EventGetOutDto result = mapper.Map<EventGetOutDto>(events);


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
            Status = events.Status,
            Slug =events.Slug
        };
        return result;
    }

    public async Task<Event> Update(EventUpdateInDtocs eventUpdateInDtocs)
    {
        var slugHelper =new SlugHelper();

        Event events = await _context.Event.FindAsync(eventUpdateInDtocs.Id);
        events.Name = eventUpdateInDtocs.Name;
        events.Slug= slugHelper.GenerateSlug(events.Name);
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
