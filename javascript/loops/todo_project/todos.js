let input;
let todoList = [];

while (true) {
    input = prompt("Enter your command:").toUpperCase();
    if (input === "NEW") {
        let secondInput = prompt("Type your TODO:");
        todoList.push(secondInput);
        console.log(`${secondInput} added to the list!`);
        list();
    } else if (input === "LIST") {
        list();
    } else if (input === "DELETE") {
        let secondInput = prompt("Enter the index of your TODO:");
        let index = parseInt(secondInput);
        if (Number.isNaN(index)) {
            console.log(`Invalid index: ${secondInput}`);
        } else {
            let deleted = todoList.splice(index, 1);
            console.log(`${deleted[0]} deleted from list!`);
        }
        list();
    } else if (input === "QUIT") {
        console.log("Quitting!");
        break;
    }
}

function list() {
    console.log("********************");
    if (todoList === undefined || todoList.length === 0) {
        console.log("<EMPTY>");
    } else {
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i} ${todoList[i]}`);
        }
    }
    console.log("********************");
}


/*
let input = prompt('what would you like to do?');
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('*****************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*****************')
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter an index to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index')
        }
    }
    input = prompt('what would you like to do?')
}
console.log('OK QUIT THE APP!')
*/