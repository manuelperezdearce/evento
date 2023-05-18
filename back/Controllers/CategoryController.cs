using back.Dtos.Input.Category;
using back.Dtos.Output.Category;
using back.Services;
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
    public async Task<IActionResult> Create(CategoryCreateInDto categoryDto)
    {
        var response = await _categoryService.Create(categoryDto);
        if (response is null)
            return BadRequest("error");
        return Ok();
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        List<CategoryGetOutDto> categories = await _categoryService.GetAll();

        if (categories is null)
            return BadRequest("error");

        return Ok(categories);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        CategoryGetOutDto category = await _categoryService.GetById(id);

        if (category is null)
            return BadRequest("error");

        return Ok(category);
    }
}
