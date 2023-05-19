using back.Dtos.Input.Category;
using back.Dtos.Output.Category;
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

    public async Task<Category> Create(CategoryCreateInDto categoryDto)
    {
        var Category = new Category();
        Category.name = categoryDto.name;
        Category.description = categoryDto.description;
        Category.type = categoryDto.type;
        _context.Category.Add(Category);
        await _context.SaveChangesAsync();

        return Category;
    }

    public async Task<List<CategoryGetOutDto>> GetAll()
    {
        List<Category> categories = await _context.Category.ToListAsync();

        List<CategoryGetOutDto> categoriesDto = categories.Select(gellcategoryDto => new CategoryGetOutDto
        {
            id = gellcategoryDto.id,
            name = gellcategoryDto.name,
            description = gellcategoryDto.description,
            type = gellcategoryDto.type
        }).ToList();

        return categoriesDto;
    }

    public async Task<CategoryGetOutDto> GetById(int id)
    {
        Category category = await _context.Category.FirstOrDefaultAsync(c => c.id == id);

        CategoryGetOutDto result = new CategoryGetOutDto
        {
            id = category.id,
            name = category.name,
            type = category.type
        };
        return result;
    }
}


/*
 public async Task<IList<SavedSearch>> FindAllSavedSearches(int page, int limit)  //page=pagina, limit=10 cantidad por pagina
{
    var limit=9

    if (page == 0)
        page = 1;

    if (limit == 0)
        limit = int.MaxValue;

    var skip = (page - 1) * limit;

    var savedSearches = _databaseContext.SavedSearches.Skip(skip).Take(limit).Include(x => x.Parameters);
    return await savedSearches.ToArrayAsync();
}
 */
