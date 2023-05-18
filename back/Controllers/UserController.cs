using back.Dtos.User;
using back.Services;
using Microsoft.AspNetCore.Mvc;

namespace back.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly UserService _userService;

    public UserController(UserService userService)
    {
        _userService = userService;
    }

    [HttpPost]
    public async Task<IActionResult> Create(UserInDto userDTO)
    {
        var response = await _userService.Create(userDTO);

        if (response is null)
            return BadRequest("Error");

        return Ok();

        //return CreatedAtAction(nameof(GetById), new {id=}, )
    }

}
