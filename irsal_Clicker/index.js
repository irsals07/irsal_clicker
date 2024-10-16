// This is the title 
document.title = "Student Counter"



let count = 0
function increment(){
    count = count+1
    //console.log(count)
    document.getElementById("count-el").innerText = count
}