using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TasksApp.API.Models;
using TasksApp.API.Repositry;
using TodoApp.API.Mapper.DTO;

[Route("api/[controller]")]
[ApiController]
public class TodoItemsController : ControllerBase
{
    private readonly IGenericRepository<TodoItem> _todoItemRepository;
    private readonly IMapper _mapper;

    public TodoItemsController(IGenericRepository<TodoItem> todoItemRepository, IMapper mapper)
    {
        _todoItemRepository = todoItemRepository;
        _mapper = mapper;
    }

    // GET: api/todoitems
    [HttpGet]
    public async Task<ActionResult<IEnumerable<TodoItem>>> GetTodoItems()
    {
        var todoItems = await _todoItemRepository.GetAllAsync();
        return Ok(todoItems);
    }

    // GET: api/todoitems/5
    [HttpGet("{id}")]
    public async Task<ActionResult<TodoItem>> GetTodoItem(int id)
    {
        var todoItem = await _todoItemRepository.GetByIdAsync(id);
        if (todoItem == null)
        {
            return NotFound();
        }
        return todoItem;
    }

    // POST: api/todoitems
    [HttpPost]
    public async Task<ActionResult<TodoItem>> PostTodoItem(PostTodoItemDTO todoItemDTO)
    {

        var todoItem = new TodoItem()
        {
            Title = todoItemDTO.Title,
            Description = todoItemDTO.Description,
            DueDate = todoItemDTO.DueDate,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow,
        };

      var item =  await _todoItemRepository.AddAsync(todoItem);

        return CreatedAtAction(nameof(GetTodoItem), new { id = item.Id }, todoItem);
    }

    // PUT: api/todoitems/5
    [HttpPatch("{id}")]
    public async Task<IActionResult> PatchTodoItem(int id, TodoItemDTO todoItemDTO)
    {
        if (id != todoItemDTO.Id)
        {
            return BadRequest();
        }
        var todoItem = await _todoItemRepository.GetByIdAsync(id);
        if (todoItem == null)
        {
            return NotFound();
        }

        var updatedProperties = typeof(TodoItemDTO).GetProperties()
          .Where(prop => prop.GetValue(todoItemDTO) != null);

        foreach (var property in updatedProperties)
        {
            var value = property.GetValue(todoItemDTO);
            var todoItemProperty = todoItem.GetType().GetProperty(property.Name);
            if (todoItemProperty != null)
            {
                todoItemProperty.SetValue(todoItem, value);
            }
        }
        todoItem.UpdatedAt = DateTime.Now;

        await _todoItemRepository.UpdateAsync(todoItem);

        return Ok(todoItem);
    }

    // DELETE: api/todoitems/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTodoItem(int id)
    {
        var todoItem = await _todoItemRepository.GetByIdAsync(id);
        if (todoItem == null)
        {
            return NotFound();
        }

        await _todoItemRepository.DeleteAsync(todoItem);
        return NoContent();
    }
}