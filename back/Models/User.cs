using System.ComponentModel.DataAnnotations;

namespace back.Models;

public class User
{
    [Key]
    public int Id { get; set; }

    public string Name { get; set; }

    public string Lastname{ get; set; }

}

