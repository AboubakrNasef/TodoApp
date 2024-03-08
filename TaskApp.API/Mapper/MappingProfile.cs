using AutoMapper;
using TasksApp.API.Models;
using TodoApp.API.Mapper.DTO;

namespace TodoApp.API.Mapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<TodoItem, TodoItemDTO>();
            CreateMap<TodoItemDTO, TodoItem>();
        }
    }
}
