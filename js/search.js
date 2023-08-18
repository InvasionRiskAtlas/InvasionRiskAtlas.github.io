
//Image gallery searcher//

function search(){
    let filter = document.getElementById("find").value.toLowerCase();

    let item = document.querySelectorAll(".species");

    let l = document.getElementsByTagName("h5");

    for(var i = 0; i <=l.length; i++){
        let a = item[i].getElementsByTagName("h5")[0];

        let value = a.innerHTML || a.innerText || a.textContent;

        if(value.toLowerCase().indexOf(filter) > -1) {
            item[i].style.display="";
        }
        else
        {
            item[i].style.display="none";
        }
    }

}
