Vue.createApp({
  data() {
    return {
      todos: [],
      newTodo: [],
      allTodos: "",
    };
  },
  methods: {
    addTodos() {
      this.todos.push(this.newTodo);
    },

    deleteTodos() {
      this.todos = this.todos.filter(function (todo) {
        todo.done;
      });
    },
  },

  computed: {
    filterOpenTodos() {
      return this.todos.filter((todo) => {
        return todo.done === false;
      });
    },
  },
}).mount("#app");

/*
 deleteTodos() {
    this.todos = this.todos.filter((todo) => {
      if (this.todo.checked === true) {
       return todo;
      }
    },
    )},
    */
