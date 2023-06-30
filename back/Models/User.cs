using System.ComponentModel.DataAnnotations;

namespace back.Models;

public class User
{
    [Key]
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Lastname { get; set; }

    public string Email { get; set; }

    public string Password { get; set; }

    public int? CityId { get; set; }

    public bool IsOrganizator { get; set; }
    public City City { get; set; }

}

