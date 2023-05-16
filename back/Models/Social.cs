using System.ComponentModel.DataAnnotations;

namespace back.Models;

public class Social
{
    [Key]
    public int Id { get; set; } 

    public string Facebook { get; set; }

    public string Twitter{ get; set; }

    public string Instagram { get; set; }
    
    public string Whatsapp{ get; set; }

    public string Web{ get; set; }

}
