using back.Dtos.Output.User;

namespace back.Dtos.Output.Coment;

public class ComentGetOutDto
{
    public int Id { get; set; } 

    public string Description { get; set; }

    public DateTime CreatedAt { get; set; }

    public int UserId { get; set; }

    public int EventId { get; set; }

    public UserGetOutDto User { get; set; }
  

}
