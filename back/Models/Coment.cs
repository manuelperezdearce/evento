using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace back.Models;

public class Coment
{
    [Key]
    public int Id { get; set; }

    public string Description { get; set; }
    
    public DateTime CreatedAt { get; set; }

    public int UserId { get; set; }

    public int EventId { get; set; }
    public  User User { get; set; }
    public Event Event { get; set; }
     
}
