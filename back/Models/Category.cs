using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace back.Models;

public class Category
{

    [Key]
    public int id { get; set; }

    [DisplayName("Nombre")]
    [Required(ErrorMessage = "ingrese el nombre")]
    [Column(TypeName = "varchar(200)")]
    public string name { get; set; }

    [DisplayName("Descripcion")]
    [Required(ErrorMessage = "ingrese la descripcion")]
    [Column(TypeName = "varchar(200)")]
    public string description { get; set; }

    [DisplayName("Tipo")]
    [Required(ErrorMessage ="Ingrese el tipo")]
    [Column(TypeName = "varchar(200)")]
    public string type { get; set; }
}
