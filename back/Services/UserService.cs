using back.DTO.User;
using back.Models;

namespace back.Services;

public class UserService
{
    private readonly AppDbContext _context;

    private UserService(AppDbContext context)
    {
        _context = context;
    }
 
    public async void Create(UserInDTO userDTO)
    {
        User user = new User
        {
            Lastname = userDTO.Lastname
        };
    }
}

