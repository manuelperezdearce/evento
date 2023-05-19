using System.ComponentModel.DataAnnotations;

namespace back.Models;

public class Entry
{
    [Key]
    public int id { get; set; }

    public string name { get; set; }

    public string description { get; set; }
}
