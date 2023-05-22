using back.Dtos.Input.Coment;
using back.Dtos.Output.Coment;
using back.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace back.Controllers;
[Route("api/[controller]")]
[ApiController]
public class ComentController : ControllerBase
{
    private readonly ComentService _comentService;

    public ComentController(ComentService comentService)
    {
      _comentService= comentService;
    }


    [HttpPost]
    public async Task<IActionResult> Create(ComentCreateInDto comentCreateInDto)
    {
        var response = await _comentService.Create(comentCreateInDto);
        if (response is null)
            return BadRequest("error");
        return Ok();
    }



    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        List<ComentGetOutDto> categories = await _comentService.GetAll();

        if (categories is null)
            return BadRequest("error");

        return Ok(categories);
    }



}
