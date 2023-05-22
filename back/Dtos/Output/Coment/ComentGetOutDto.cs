namespace back.Dtos.Output.Coment;

public class ComentGetOutDto
{
    public int id { get; set; } 
    public string description { get; set; }

    public DateTime created_at { get; set; }

    public int idUser { get; set; }

    public int idEvent { get; set; }

}
