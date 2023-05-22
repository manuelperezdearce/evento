using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace back.Models;

public class Coment
{
    [Key]
    public int id { get; set; }
    public string description { get; set; }
    
    public DateTime created_at { get; set; }

    public int idUser { get; set; }

    public int idEvent { get; set; }

    [ForeignKey("idUser")]
    public virtual  User User { get; set; }

    [ForeignKey("idEvent")]
    public virtual Event Event { get; set; }
     
}
