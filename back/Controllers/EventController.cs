using back.Dtos.Input.Event;
using back.Dtos.Output.Event;
using back.Models;
using back.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace back.Controllers;

[Route("api/[controller]")]
[ApiController]
public class EventController : ControllerBase
{
    private readonly EventService _EventService;

    public EventController(EventService eventService)
    {
        _EventService = eventService;
    }

    [HttpPost]
    public async Task<IActionResult> Create(EventCreateInDto eventCreateInDto)
    {
        var response = await _EventService.Create(eventCreateInDto);
        if (response is null)
            return BadRequest("error");
        return Ok();
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        List<EventGetOutDto> events = await _EventService.GetAll();

        if (events is null)
            return BadRequest("error");

        return Ok(events);
    }

    [HttpGet("{slug}")]
    public async Task<IActionResult> GetById(string slug)
    {
        EventGetOutDto events = await _EventService.GetById(slug);

        if (events is null)
            return BadRequest("error");

        return Ok(events);
    }

    [HttpPut]
    public async Task<IActionResult> Update(EventUpdateInDtocs eventUpdateInDtocs)
    {
        //categoryUpdateInDto.id= id;
        Event events = await _EventService.Update(eventUpdateInDtocs);
        if (events is null)
            return BadRequest("error");
        return Ok(events);

    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        Event events = await _EventService.Delete(id);

        if (events == null)

            return BadRequest("error"); // El evento no se encontró en la base de datos

        return Ok(events); // Devolver el evento inactivo
    }




}
