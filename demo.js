let form=document.getElementById("addForm");

let data=document.getElementById("item");
let list=document.getElementById("items");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let list=document.createElement("li");
    list.className="list-group-item";
    list.appendChild(document.createTextNode(data.value));
    let btn=document.createElement("button");
    btn.className="btn btn-danger ram btn-sm float-right";
    
    btn.appendChild(document.createTextNode('X'));
    list.appendChild(btn);
    let parent=document.getElementById("items");
    parent.appendChild(list);
   
});



list.addEventListener("click",(e)=>{
    if(e.target.innerText=="X"){
        if(confirm("are you sure ?")){

            e.target.parentNode.parentNode.removeChild(e.target.parentNode);
          
        }
    }
     })

    let search=document.getElementById("filter");
          let tex=search.value;
          console.log(tex);
    search.addEventListener("input",(e)=>{
       var text = e.target.value.toLowerCase();
        // Get lis
        console.log(text);
        var items = list.getElementsByTagName('li');
        // Convert to an array
        Array.from(items).forEach(function(item){
          var itemName = item.firstChild.textContent;
          console.log(itemName);
          if(itemName.toLowerCase().indexOf(text) ==0){
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
    });
     
