document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    const apiBaseUrl = 'http://localhost:3000/todos';

    // Fetch and display todos
    const fetchTodos = async () => {
        const response = await fetch(apiBaseUrl);
        const todos = await response.json();
        todoList.innerHTML = '';
        todos.forEach(todo => addTodoToDOM(todo));
    };

    // Add a new todo
    const addTodo = async () => {
        const todoText = todoInput.value;
        if (todoText === '') return;
        
        const newTodo = { id: Date.now(), text: todoText };
        const response = await fetch(apiBaseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTodo)
        });
        
        const addedTodo = await response.json();
        addTodoToDOM(addedTodo);
        todoInput.value = '';
    };

    // Delete a todo
    const deleteTodo = async (id) => {
        await fetch(`${apiBaseUrl}/${id}`, { method: 'DELETE' });
        document.getElementById(id).remove();
    };

    // Add todo to DOM
    const addTodoToDOM = (todo) => {
        const li = document.createElement('li');
        li.id = todo.id;
        li.className = 'todo-item';
        li.textContent = todo.text;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteTodo(todo.id);

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    };

    addBtn.addEventListener('click', addTodo);
    fetchTodos();
});
