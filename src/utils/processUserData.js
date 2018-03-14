var defaultTodos = [
    {
        todo: "Finish math homework", 
        checked: false
    }, 
    {
        todo: "Watch Black Panther",
        checked: true
    }
];

export function processTodos() {
   var data = localStorage.getItem('todos');
   data = data ? JSON.parse(data) : defaultTodos;

   return data;
}

export function storeTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}