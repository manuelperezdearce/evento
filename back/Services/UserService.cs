using back.Dtos.User;
using back.Models;

namespace back.Services
{

    public class UserService
    {
        private readonly AppDbContext _context;

        public UserService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<User> Create(UserInDto userDto)
        {
            //var isFound = await context.User.FirstOrDefaultAsync(x => x.Email.Contains(userDTO.Email));

            var user = new User();
            user.Email = userDto.Email;
            user.Password = userDto.Password;
            user.CityId = userDto.CityId;

            //user.Name = userDTO.Name;
            //user.Lastname = userDTO.Lastname;
            //user.CityId = userDTO.CityId;

            _context.User.Add(user);
            await _context.SaveChangesAsync();
            return user;

        }
    }

}