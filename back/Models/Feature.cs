using System.ComponentModel.DataAnnotations;

namespace back.Models;

public class Feature
{
    [Key]

    public int Id { get; set; }

    public bool Smoking { get; set; }

    public string Pets { get; set; }

    public string Drink { get; set; }

    public string Food { get; set; }

    public string Wifi { get; set; }

    public string Parking { get; set; }
}
