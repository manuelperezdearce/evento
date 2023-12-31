﻿using back.Dtos.Output.Category;
using back.Dtos.Output.Coment;
using back.Dtos.Output.Entry;
using back.Dtos.Output.Feature;
using back.Dtos.Output.Ranking;
using back.Dtos.Output.User;
using back.Models;

namespace back.Dtos.Output.Event;

public class EventGetOutDto
{
    public int Id { get; set; }

    public string Name { get; set; }

    public string ShortDescription { get; set; }

    public string Description { get; set; }

    public DateTime DateStart { get; set; }

    public DateTime DateEnd { get; set; }

    public DateTime CreatedAt { get; set; }

    public float TicketPrice { get; set; }

    public int CommentId { get; set; }

    public int FeatureId { get; set; }

    public int RankingId { get; set; }

    public int EntryId{ get; set; }

    public int CategoryId { get; set; }

    public bool IsActive { get; set; }

    public bool Status { get; set; }

    public ICollection<ComentGetOutDto> Comments { get; set; }
    public RankingGetOutDto Ranking { get; set; }
    public FeatureGetOutDto Feature { get; set; }
    public EntryGetOutDto Entry { get; set; }

    public CategoryGetOutDto Category { get; set; }

    //public UserGetOutDto User { get; set; }


    public string Slug { get; set; }
}




//public class ComentDto
//{




//}