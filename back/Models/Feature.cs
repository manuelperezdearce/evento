using System.ComponentModel.DataAnnotations;

namespace back.Models;

public class Feature
{
    [Key]

    public int id { get; set; }

    public bool smoking { get; set; }

    public string pets { get; set; }

    public string drink { get; set; }

    public string food { get; set; }

    public string wifi { get; set; }

    public string parking { get; set; }
}
