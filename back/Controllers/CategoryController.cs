using back.Dtos.Category;
using back.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace back.Controllers;
[Route("api/[controller]")]
[ApiController]
public class CategoryController : ControllerBase
{
    private readonly CategoryService _categoryService;

    public CategoryController(CategoryService categoryService)
    {

        _categoryService = categoryService;

    }


    [HttpPost]
    public async Task<IActionResult> create(CategoryDto categoryDto)
    {
        var response = await _categoryService.create(categoryDto);
        if (response is null)
        
            return BadRequest("error");
           return Ok();
        

    }


}
