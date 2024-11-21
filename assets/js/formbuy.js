function validation (){
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
    }
    if (author==""){
        document.getElementById('authorr').innerHTML="**Please write the name of the author in the box**";
    }
    if (condition==""){
        document.getElementById('conditionn').innerHTML="**Please write condition in the box**";
    }
    if (edition==""){
        document.getElementById('editionn').innerHTML="**Please write title in the box**";
    }
    if (year==""){
        document.getElementById('yearr').innerHTML="**Please write the year of publication in the box**";
    }
    if (language==""){
        document.getElementById('languagee').innerHTML="**Please write the language in the box**";
    }
    if (pages==""){
        document.getElementById('pagess').innerHTML="**Please write number of pages in the box**";
    }
    if (summary==""){
        document.getElementById('summaryy').innerHTML="**Please write the summary  in the box**";
    }
    if (price==""){
        document.getElementById('pricee').innerHTML="**Please write the price in the box**";
    }
}