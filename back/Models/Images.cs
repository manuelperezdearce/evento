using System.ComponentModel.DataAnnotations;

namespace back.Models;

public class Images
{
    [Key]
    public int Id { get; set; }

    public string Url1 { get; set; }


    public string Url2 { get; set; }


    public int Url3 { get; set; }



}
