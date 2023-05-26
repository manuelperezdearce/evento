using AutoMapper;
using back.Dtos.Output.Coment;
using back.Dtos.Output.Entry;
using back.Dtos.Output.Event;
using back.Dtos.Output.Feature;
using back.Dtos.Output.Ranking;
using back.Dtos.Output.User;
using back.Models;

namespace back.Mapper;

public class EventMappingProfile:Profile
{
    public EventMappingProfile()
    {
        CreateMap<Ranking, RankingGetOutDto>();
        CreateMap<Coment, ComentGetOutDto>()
        .ForMember(dest => dest.User, opt => opt.MapFrom(src => src.User));
        CreateMap<Feature, FeatureGetOutDto>();
        CreateMap<Entry, EntryGetOutDto>();
        CreateMap<User, UserGetOutDto>();
        CreateMap<Event, EventGetOutDto>()
       

            .ForMember(dest => dest.Comments, opt => opt.MapFrom(src => src.Coment))
            .ForMember(dest => dest.Feature, opt => opt.MapFrom(src => src.Feature))
            .ForMember(dest => dest.Ranking, opt => opt.MapFrom(src => src.Ranking))
            .ForMember(dest => dest.Entry, opt => opt.MapFrom(src => src.Entry));
    }

}
