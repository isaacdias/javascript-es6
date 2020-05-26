class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super();

        this.user = 'Isaac';     
    }

    showUser() {
        console.log(this.user);  
    }
}

const MyList = new TodoList();

document.getElementById('novo-todo').onclick = function () {
    MyList.add('Novo todo');
}

MyList.showUser();

