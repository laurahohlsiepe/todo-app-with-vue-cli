Vue.createApp({
  data() {
    return {
      todos: [],
      newTodo: [],
    };
  },
  methods: {
    addTodos() {
      this.todos.push(this.newTodo);
    },
  },
}).mount("#app");
