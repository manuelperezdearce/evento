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
        var Category = new Category
        {
            Name = categoryDto.Name,
            Description = categoryDto.Description,
            Type = categoryDto.Type
        };
        _context.Category.Add(Category);
        await _context.SaveChangesAsync();

        return Category;
    }

    public async Task<List<CategoryGetOutDto>> GetAll()
    {
        List<Category> categories = await _context.Category.ToListAsync();

        List<CategoryGetOutDto> categoriesDto = categories.Select(gellcategoryDto => new CategoryGetOutDto
        {
            Id = gellcategoryDto.Id,
            Name = gellcategoryDto.Name,
            Description = gellcategoryDto.Description,
            Type = gellcategoryDto.Type
        }).ToList();

        return categoriesDto;
    }

    public async Task<CategoryGetOutDto> GetById(int id)
    {
        Category category = await _context.Category.FirstOrDefaultAsync(c => c.Id == id);

        CategoryGetOutDto result = new CategoryGetOutDto
        {
            Id = category.Id,
            Name = category.Name,
            Type = category.Type
        };
        return result;
    }


    public async Task<Category>Update(CategoryUpdateInDto categoryUpdateInDto)
    {
        Category category = await _context.Category.FindAsync(categoryUpdateInDto.Id);
        category.Name = categoryUpdateInDto.Name;
        category.Description=categoryUpdateInDto.Description;
        category.Type = categoryUpdateInDto.Type;

        await _context.SaveChangesAsync();

        return category;

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
