using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace back.Models;

public class Event
{
    [Key]
    public int Id { get; set; }

    public string Name { get; set; }

    public string ShortDescription { get; set; }

    public string Description { get; set; }

    public DateTime DateStart { get; set; }

    public DateTime DateEnd { get; set; }

    public DateTime CreatedAt{ get; set; }

    public float TicketPrice { get; set; }

    public int CommentId { get; set; }

    public int FeatureId { get; set; }

    public int RankingId { get; set; }

    public int EntryId { get; set; }

    public ICollection<Coment> Coment { get; set; }
    //public ICollection<Ranking> Ranking { get; set; }

    //public ICollection<Feature> Feature { get; set; }

    //public ICollection<Entry> Entry { get; set; }
    public Feature Feature { get; set; }
    public Ranking Ranking { get; set; }
    public Entry Entry { get; set; }

    public bool IsActive { get; set; }

    public bool Status { get; set; }

    public string prueba { get; set; }

    public Event()
    {

        Coment= new HashSet<Coment>();

    }



    public string Slug { get; set; }
}
