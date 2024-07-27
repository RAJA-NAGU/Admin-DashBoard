// prevent all link from default behaviour 
const link = document.querySelectorAll('a');
link.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        e.preventDefault();
    })
}) 


// Main Navigation open-close
const navmenu = document.querySelector(".bx-menu")
const appsection = document.querySelector(".app-section")
const side_bar = document.querySelector(".side-menu-bar")
navmenu.addEventListener("click",()=>{

    if(window.innerWidth <= 992){
        if (appsection.classList.contains("hide")){
            appsection.classList.remove("hide")
            side_bar.style.padding = "30px 15px"
            side_bar.style.width = "220px"
        }else{
            appsection.classList.add("hide")
            side_bar.style.padding = "0"
            side_bar.style.width = "0"
        }
    }
})


// pop-up list
const btns = document.querySelectorAll(".btn-action")
btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        e.preventDefault();
        // const parent = btn.closest(".drop-down-container");
        const parent = btn.parentNode
        parent.classList.toggle("open-pop-up")
    })
})
// close pop-up if clicked doutside
document.body.addEventListener("click",(e)=>{
    if(!e.target.closest(".drop-down-container")){
        let pop_ups = document.querySelectorAll(".drop-down-lists")
        
        for(let i=0 ; i < pop_ups.length ; i++){
            let parent = pop_ups[i].closest(".drop-down-container")
            if(parent.classList.contains("open-pop-up")){
                parent.classList.remove("open-pop-up")
            }
        }
    }
})


// side menu navigation
const menus = document.querySelectorAll(".side-menu-list")
const submenus = document.querySelectorAll(".sub-menu-lists")
menus.forEach((menu)=>{
    menu.addEventListener("click",(e)=>{
        e.preventDefault();
        
        // Check if the clicked menu is already active            
        const isActive = menu.classList.contains("active")
        document.querySelectorAll(".side-menu-list.active").forEach((element)=>{
            element.classList.remove("active")
        })

        submenus.forEach((sub)=>{
            sub.style.height = "0";
        })
        
        if(!isActive){
            menu.classList.add("active")
            const submenu = menu.querySelector(".sub-menu-lists")
            if (submenu) {
                if(menu.classList.contains("active")){
                    submenu.style.height = submenu.scrollHeight + "px" 
                }
            }
        }


    })
})

document.querySelectorAll(".sub-menu-list").forEach((item)=>{
    item.addEventListener("click",(e)=>{
        e.preventDefault();
        let parent =item.closest(".side-menu-list")
        parent.classList.add("active")
        let submenu = parent.querySelector(".sub-menu-lists")
        submenu.style.height = submenu.scrollHeight + "px"
    })
})

// load pages

function changePage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
        })
}


// notes list active

const noteslists = document.querySelectorAll(".notes-list")

noteslists.forEach((notes_list)=>{
    notes_list.addEventListener("click",(e)=>{
        e.preventDefault();
        console.log("hi")
        noteslists.forEach((notes)=>{
            notes.classList.remove("active")
        })

        notes_list.classList.add("active")

    })
})


// to do list

const input = document.querySelector(".task-input")
const btnadd = document.querySelector(".btn-add")
const error = document.querySelector(".error")
const tasklist = document.querySelector(".task-list")

const addTask = ()=>{
    let value = input.value.trim()

    if(value == ""){
        error.textContent = "please enter a task"
    }
    else{
        let task = 
            `<div class="todo-item">
                <div class="todo-inner d-flex al-c jc-sb">
                    <h2 class="todo-value">${value}</h2>
                    <i class='bx bx-x btn-close'></i>
                </div>
            </div> `

        tasklist.innerHTML += task;
        error.textContent = ""
        input.value = ""
    }

    const btndelete = document.querySelectorAll(".btn-close")

    btndelete.forEach((btn)=>{
        btn.addEventListener("click",(e)=>{
            e.preventDefault
            console.log("sd")
            btn.parentNode.remove();
    
        })
    })
}

// btnadd.addEventListener("click",addTask)


// Currency Drop_down

const triggers = document.querySelectorAll(".select-trigger")

triggers.forEach((trigger)=>{
    trigger.addEventListener("click",()=>{
        trigger.classList.toggle("open")
    })
})
// close dropdown if click outside
document.body.addEventListener('click', (e)=>{
    if(!e.target.closest(".select-trigger")){
        let options = document.querySelectorAll(".select-options")
        for(let i=0 ; i < options.length ; i++){
            let parent = options[i].closest(".select-trigger")
            if(parent.classList.contains("open")){
                parent.classList.remove("open")
            }
        }
    }
})
