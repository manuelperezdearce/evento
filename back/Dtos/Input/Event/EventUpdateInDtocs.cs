namespace back.Dtos.Input.Event;

public class EventUpdateInDtocs
{
    public int id { get; set; }

    public string name { get; set; }

    public string short_description { get; set; }

    public string description { get; set; }

    public DateTime date_start { get; set; }

    public DateTime date_end { get; set; }

    public DateTime created_at { get; set; }

    public float ticket_price { get; set; }

    public int idComment { get; set; }

    public int idFeature { get; set; }

    public int idRanking { get; set; }

    public int idEntry { get; set; }

    public bool is_active { get; set; }
}
