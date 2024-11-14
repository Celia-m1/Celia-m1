function validation (){
    var valid=true;
    var title = document.getElementById('title').value ;
    var author = document.getElementById('author').value ;
    var condition= document.getElementById('condition').value ;
    var edition= document.getElementById('edition').value ;
    var year = document.getElementById('year').value ;
    var language = document.getElementById('language').value ;
    var pages = document.getElementById('pages').value ;
    var summary = document.getElementById('summary').value ;
    var price = document.getElementById('price').value ;

    if (title==""){
        document.getElementById('titlee').innerHTML="**Please write title in the box**";
        valid=false;
    }else{
        document.getElementById('titlee').innerHTML="";
        
    }
    if (author==""){
        document.getElementById('authorr').innerHTML="**Please write the name of the author in the box**";
        valid=false;
    }else{
        document.getElementById('authorr').innerHTML="";
        
    }
    if (condition==""){
        document.getElementById('conditionn').innerHTML="**Please write condition in the box**";
        valid=false;
    }else{
        document.getElementById('conditionn').innerHTML="";
    }
    if (edition==""){
        document.getElementById('editionn').innerHTML="**Please write title in the box**";
        valid=false;
    }else{
        document.getElementById('editionn').innerHTML="";
    }
    if (year==""){
        document.getElementById('yearr').innerHTML="**Please write the year of publication in the box**";
        valid=false;
    }else{
        document.getElementById('yearr').innerHTML="";
    }
    if (year.length!=4){
        document.getElementById('yearr').innerHTML="**Please enter a correct year**";
    }
    if (language==""){
        document.getElementById('languagee').innerHTML="**Please write the language in the box**";
        valid=false;
    }else{
        document.getElementById('languagee').innerHTML="";
    }
    if (pages==""){
        document.getElementById('pagess').innerHTML="**Please write number of pages in the box**";
        valid=false;
    }else{
        document.getElementById('pagess').innerHTML="";
    }

    if (summary==""){
        document.getElementById('summaryy').innerHTML="**Please write the summary  in the box**";
        valid=false;
    }else{
        document.getElementById('summaryy').innerHTML="";
    }
    if (price==""){
        document.getElementById('pricee').innerHTML="**Please write the price in the box**";
        valid=false;
    }else{
        document.getElementById('pricee').innerHTML="";
    }
    if (price.length>4){
        document.getElementById('pricee').innerHTML="**The price is not reasonable**";
        valid=false;
    
    }
    return valid;
}
function handleSubmit() {
    if (validation()){
    
    playAudiosucces();
    setTimeout(transformButtonToDone, 1000);

}else{
    playAudiofail();

}
}

function playAudiofail(){
    const audio= new Audio();
    audio.src ="../images/fail.wav";
    audio.play();
}
function playAudiosucces(){
    const audio= new Audio();
    audio.src ="../images/click.wav";
    audio.play();
}
function transformButtonToDone(){
    const submitButton =document.getElementById('submitButton');
    submitButton.innerHTML="✅ Done"
    submitButton.disabled = true;
}