namespace back.Dtos.Input.Coment;

public class ComentCreateInDto
{

    public string description { get; set; }

    public DateTime created_at { get; set; }

    public int idUser { get; set; }

    public int idEvent { get; set; }
}
