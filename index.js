let myLead=[];
const inputEl=document.getElementById("input-el");
const inputBtn=document.getElementById("input-btn");
const ulEl=document.getElementById("ul-el");
let deleteBtn=document.getElementById("delete-btn");
let tabBtn=document.getElementById("tab-btn");
leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLead"));
if(leadsFromLocalStorage){
    myLead=leadsFromLocalStorage;
    render();
}
const tab=[{"url":"www.amna.com"}];//tabs will appear like this
tabBtn.addEventListener("click",function(){
    //Grab URL of current tab!
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLead.push(tabs[0].url);
        localStorage.setItem("myLead",JSON.stringify(myLead));
        render();      
    });

});

deleteBtn.addEventListener("dblclick",function (){
    myLead=[];
    localStorage.clear();
    render();
});
inputBtn.addEventListener("click",function(){
    myLead.push(inputEl.value);
    inputEl.value="";
    localStorage.setItem("myLead",JSON.stringify(myLead));
    render();
});
function render(){
let listItems="";
for(let i=0;i<myLead.length;i++){
    listItems+=`<li> 
    <a 
    href='${myLead[i]}' target='_blank'>${myLead[i]} 
    </a>
    </li>`;
}
ulEl.innerHTML=listItems;
}
