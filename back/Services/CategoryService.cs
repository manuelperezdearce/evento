using back.Dtos.Category;
using back.Models;

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



}
