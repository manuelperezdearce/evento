using back.Dtos.Output.User;
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

    [Route("UserCreate")]
    [HttpPost]
    public async Task<IActionResult> UserCreate(UserInDto userDTO)
    {
        var response = await _userService.Create(userDTO);

        if (response is null)
            return BadRequest("Error");

        return Ok(new { Message = "Usuario Registrado" });

        //return CreatedAtAction(nameof(GetById), new {id=}, )
    }

    [Route("GetAll")]
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        List<UserGetOutDto> user = await _userService.GetAll();

        if (user is null)
            return BadRequest("error");

        return Ok(user);
    }



    [Route("Login")]
    [HttpPost]
    public async Task<IActionResult> Login(UserInDtoLogin userInDtologin)
    {

        var servicio = await _userService.GLogin(userInDtologin);
      
        if (servicio is null)
        {
            return Ok(new { Message = "error" });
           
        }


      
        var token = _userService.generartoken(servicio);

       

        var response = new
        {
            Servicio = servicio,
            Token = token,
            Message = "operacion con exito",
        };

        return Ok(response);
    


    }



}
