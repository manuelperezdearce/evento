using back.Dtos.Output.User;
using back.Dtos.User;
using back.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace back.Services
{

    public class UserService
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _config;
        public UserService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<User> Create(UserInDto userDto)
        {
            //var isFound = await context.User.FirstOrDefaultAsync(x => x.Email.Contains(userDTO.Email));

            var user = new User();
            user.Email = userDto.Email;
            user.Name = userDto.Name;
            user.Lastname = userDto.Lastname;
            user.Password = userDto.Password;
            user.IsOrganizator = userDto.IsOrganizator;
            _context.User.Add(user);
            await _context.SaveChangesAsync();
            return user;

        }


        public async Task<List<UserGetOutDto>> GetAll()
        {
            List<User> user = await _context.User.ToListAsync();

            if (user is null)
            {
                return null;
            }

            List<UserGetOutDto> userDto = user.Select(userGetOutDto => new UserGetOutDto
            {
                Id = userGetOutDto.Id,
                Name = userGetOutDto.Name,
                Lastname = userGetOutDto.Lastname,
                Email = userGetOutDto.Email,
                Password = userGetOutDto.Password,
                IsOrganizator = userGetOutDto.IsOrganizator,
            }).ToList();

            return userDto;
        }


        public async Task<User>GLogin(UserInDtoLogin userInDtoLogin)
        {

            User user = await _context.User.FirstOrDefaultAsync(c => c.Email == userInDtoLogin.Email && c.Password == userInDtoLogin.Password);
            if (user is null)
            {
                return null;
            }
           
            return user;
        }



        public string generartoken(User data)
        {

            try
            {
                string? nameuser = data.Email;
                int user = data.Id;
                string USUString = user.ToString();

                //string CargoRol = data.Post;

                //int sucursal = data.IdBranchOffice;
                //string rollString = sucursal.ToString();

                var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
                var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

                var claims = new[]
                {
                    new Claim("Name", nameuser),
                    new Claim("Id", USUString),

                };

                var token = new JwtSecurityToken(
                    _config["Jwt:Issuer"],
                    _config["Jwt:Audience"],
                    claims,
                    expires: DateTime.Now.AddMinutes(60),
                    signingCredentials: credentials);

                return new JwtSecurityTokenHandler().WriteToken(token);
            }

            catch (Exception)
            {
                throw;
            }
        }






    }

}