using back.Dtos.Category;
using back.Models;
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


    [HttpGet]
    public async Task<IActionResult> GetCategory()
    {


        List<GetAllCategoryDto> gellCategoryDtos = await _categoryService.GetAllCategories();

        if (gellCategoryDtos is null)
        {
            return BadRequest("error"); 

        }
        return Ok(gellCategoryDtos);

    }

    [HttpGet("{categoryId}")]

    public async Task<IActionResult> GetCategoryById(GetCategoryIdDto getCategoryIdDto)
    {

        GetCategoryIdDto response=await _categoryService.GetCategoryById(getCategoryIdDto);

        if (response is null)
        {
            return BadRequest("error");


        }

        return Ok(response);

    }


}
