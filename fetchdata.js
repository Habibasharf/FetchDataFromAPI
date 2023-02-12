// let allPosts ;
// let saveAllPosts;

// (async function DisplayAllPosts(){
// allPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
//  saveAllPosts= await allPosts.json();

// localStorage.setItem("allPost" , JSON.stringify(saveAllPosts));

// })();

//Get data and display in table 

let x = document.querySelector("tbody");
let allObjects = JSON.parse(localStorage.getItem("allPost"));
                    allObjects.forEach((post) => {
                    x.innerHTML+=`
                    <tr >
                        <td style="width:80px;" id ="tdID"><button id="delete" onclick="DeleteFunction(this)"><i class="fa fa-close" ></i></button>
                            ${post.id}</td>
                        <td style="width:80px;">${post.userId}</td>
                        <td>${post.title}</td>
                        <td>${post.body}</td>
                        </tr>`;  })

//Delate Function

let DeleteFunction=(deleteBtn)=>{
   let trParent=deleteBtn.parentNode.parentNode;
       trParent.parentNode.removeChild(trParent);
}
//Search function
function SearchFunction() {
    // Declare variables
    let  inputVariable, searchdata, tableData, tr, td, i, txtValue;
    inputVariable = document.querySelector("input");
    searchdata = inputVariable.value;
    tableData = document.getElementById("mytable");
    tr = tableData.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 1; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.indexOf(searchdata) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }


  //Sort function
  function SortFunction(f) {
    let tableData, i, x, y;
    tableData = document.getElementById("mytable");
    let flag = true;
 

    // Run loop until no switching is needed
    while (flag) {
        flag = false;
        let rows = tableData.rows;
     
        // Loop to go through all rows
        for (i = 1; i < (rows.length - 1); i++) {
            var Switch = false;
           
            // Fetch 2 elements that need to be compared
            x = rows[i].getElementsByTagName("td")[f];
            y = rows[i + 1].getElementsByTagName("td")[f];
            
            // Check if 2 rows need to be switched
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase())
                {
  
                // If yes, mark Switch as needed and break loop
                Switch = true;
                break;
            }
        }
        if (Switch) {
            // Function to switch rows and mark switch as completed
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            flag = true;
        }
    }
        
    
}

let optionsFunction=()=>{

    let selectOption = document.querySelector("select");

    selectOption.addEventListener('change', function() {
        if (this.value == "body") {
            SortFunction(3);
        }
        else if(this.value=="title"){
            SortFunction(2);
        }
    });

   
}