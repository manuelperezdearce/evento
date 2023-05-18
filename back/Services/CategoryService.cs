using back.Dtos.Category;
using back.Models;
using Microsoft.EntityFrameworkCore;

namespace back.Services;

public class CategoryService
{


    private readonly AppDbContext _context;

    public CategoryService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<Category> create(CategoryDto categoryDto)
    {


        var Category =new Category();
        Category.name = categoryDto.name;
        Category.description = categoryDto.description;
        Category.type = categoryDto.type;
        _context.Category.Add(Category);
        await _context.SaveChangesAsync();  

        return Category;

    }


    public async Task<List<GetAllCategoryDto>> GetAllCategories()
    {

        List<Category> categories=await _context.Category.ToListAsync();

        List<GetAllCategoryDto> gellCategoryDtos = categories.Select(gellcategoryDto => new GetAllCategoryDto

        {
            id = gellcategoryDto.id,
            name = gellcategoryDto.name,
            description = gellcategoryDto.description,
            type = gellcategoryDto.type

        }).ToList();


        return gellCategoryDtos;

    }



    public async Task<GetCategoryIdDto>GetCategoryById(GetCategoryIdDto getCategoryIdDto)
    {

        Category category= await _context.Category.FirstOrDefaultAsync(c=>c.id==getCategoryIdDto.id);

        GetCategoryIdDto result = new GetCategoryIdDto
        {

            id = category.id,
            name = category.name,
            type = category.type

        };

        return result;
    }




    }
