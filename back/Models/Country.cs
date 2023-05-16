using System.ComponentModel.DataAnnotations;

namespace back.Models;

public class Country
{
    [Key]
    public int Id { get; set; }

    public string Name { get; set; }

    public string Prefix { get; set; }

    public ICollection<City> City { get; set; }

    public Country()
    {
        City = new HashSet<City>();
    }


}
