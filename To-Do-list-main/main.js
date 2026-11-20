const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const TaskList = document.getElementById('TaskList');

addBtn.addEventListener("click",() => {

    const taskText = taskInput.value;

    if(taskText.trim() !== ''){

    const newTaskHTML = `
    <div class="flex justify-between items-center py-4 border-b border-dashed">
        <input type="checkbox" class="accent-green-500 w-5 h-5">
        <label class="text-gray-400 text-center flex-1 text-2xl">
            ${taskText}
        </label>
        <button class="bg-red-600 text-white px-3 py-1 rounded cursor-pointer btn-remove">
            Remove
        </button>
    </div>
`;
    TaskList.insertAdjacentHTML('beforeend', newTaskHTML);
    taskInput.value = "";

        saveData();
    }
});
   
    TaskList.addEventListener("click", (e) => {

        if(e.target.classList.contains("btn-remove")){
            e.target.parentElement.remove();
            saveData();

        }
    });

        TaskList.addEventListener("change", (e) => {
            if(e.target.type === "checkbox" ){

                const label = e.target.nextElementSibling;

                if(e.target.checked === true){
                    label.classList.add("line-through","accent-green-500");
                    e.target.setAttribute("checked", "checked");
                }else{
                    label.classList.remove("line-through","accent-green-500");
                    e.target.removeAttribute("checked");
                }
                saveData();
            }
        });

        function saveData() {
            localStorage.setItem("myTasks", TaskList.innerHTML);
        }
        function showData(){
            if(localStorage.getItem("myTasks")){
                TaskList.innerHTML = localStorage.getItem("myTasks");
            } 
        }
            showData();
