function addTask(){

    let btn = document.getElementById('add');
    
    btn.addEventListener('click', function(){
        var doList = document.getElementById('todoList');
        var task = document.getElementById('task').value;

        var li = document.createElement('li');

        var listItem = document.createTextNode(task);


        
        if(task == ''){
            alert("please enter a task");
        }
        else{
            li.appendChild(listItem)
            doList.appendChild(li);

        }
        
        document.getElementById('task').value = '';
        
        li.addEventListener('click', function(){
            li.style.textDecoration = 'line-through'
        })
        li.addEventListener('dblclick', function(){
            var doneList = document.getElementById('finList');
            doneList.appendChild(li);
            li.style.textDecoration = 'none';
            
        })
        
    })
    function newTask(){
        var doList = document.getElementById('todoList');
        var task = document.getElementById('task').value;
        var li = document.createElement('li');
        var listItem = document.createTextNode(task);
        if(task == ''){
            alert("please enter a task");
        }
        else{
            li.appendChild(listItem)
            doList.appendChild(li);

        }
        
        document.getElementById('task').value = '';
    }
}

addTask()