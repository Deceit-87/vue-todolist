const app = new Vue({
    el : '#app',
    data: {
        newTodo:'',
        todoList:[
         

        ],
        done:"done",
        
    },
    methods:
   {
        addTodo: function()
        {
            this.newTodo = {
                obbiettivo: this.newTodo,
                done: false,
            }
            if( this.newTodo !== '' )
            this.todoList.push(this.newTodo);
            this.newTodo = '';
        },
        removeTodo(i)
        {
            this.todoList.splice(i,1);


        },
      
        objDone: function(element)
        { 
            
            if(element.done == false)
            {
                element.done = true;
            }
            else 

                element.done = false;
            
        },

        emptyList: function(){
            if(this.todoList.length < 1){
                return true;
                console.log(this.todoList.length)

            }
          
           
        }
    }
       
        
})