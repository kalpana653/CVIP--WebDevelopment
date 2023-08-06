function add(){
    let htmlcode=document.getElementById("htmlCode").value;
    let csscode=document.getElementById("cssCode").value;
    let jscode=document.getElementById("jsCode").value;
    let output=document.getElementById("output");

    output.contentDocument.body.innerHTML=htmlcode +"<style>" + csscode +"</style>";
    output.contentWindow.eval(jscode);
}