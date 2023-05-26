namespace back.Dtos.Input.Coment;

public class ComentCreateInDto
{

    public string Description { get; set; }

    public DateTime CreatedAt { get; set; }

    public int UserId { get; set; }

    public int EventId { get; set; }
}
