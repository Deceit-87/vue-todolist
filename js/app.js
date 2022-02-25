const app = new Vue({
    el : '#app',
    data: {
        newTodo:'',
        todoList:[{
            obbiettivo: 'fare la spesa',
            done: true ,
        },
         

        ],
        done:".done",
        
    },
    methods: {
        addTodo: function(){
            this.newTodo = {
                obbiettivo: this.newTodo,
                done: false,
            }
            if( this.newTodo !== '' )
            this.todoList.push(this.newTodo);
            this.newTodo = '';
            console.log(this.todoList)
            console.log(item.done)
        },
        removeTodo(i){
            this.todoList.splice(i,1);


        }
        
    }
    
})