using System.ComponentModel.DataAnnotations;

namespace back.Models;

public class Entry
{
    [Key]
    public int Id { get; set; }

    public string Name { get; set; }

    public string Description { get; set; }
}
