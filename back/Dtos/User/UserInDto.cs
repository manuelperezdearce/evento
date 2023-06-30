namespace back.Dtos.User;

public class UserInDto
{

    public int Id { get; set; }
    public string Email { get; set; }

    public string Password { get; set; }

    public string? Name { get; set; }

    public string? Lastname { get; set; }

    public bool IsOrganizator { get; set; }

    public int CityId { get; set; }
}
