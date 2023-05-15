using System.ComponentModel.DataAnnotations;

namespace back.Models;

public class Ranking
{
    [Key]
    public int Id { get; set; }
    public int Sum { get; set; }    

    public int Count { get; set; }  

}
