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

    [ForeignKey("idUser")]
    public virtual User User { get; set; }

    [ForeignKey("idEvent")]
    public virtual Event Event { get; set; }
     
}
