using System.ComponentModel.DataAnnotations;

namespace back.Models;

public class Images
{
    [Key]
    public int id { get; set; }

    public string url1 { get; set; }


    public string url2 { get; set; }


    public int url3 { get; set; }



}
