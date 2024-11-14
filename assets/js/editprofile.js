function validation(){
    var valid=true;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var mobilephone = document.getElementById('mobilephone').value;
    var location = document.getElementById('location').value;
    
    if (username==""){
        document.getElementById('usernamee').innerHTML="**Please write your username in the box**";
        valid=false;
    }else{
        document.getElementById('usernamee').innerHTML = "";
    }
    
    if (email==""){
        document.getElementById('emaill').innerHTML="**Please write your email in the box**";
        valid=false;
    }else{
        document.getElementById('emaill').innerHTML = "";
    }
    if (mobilephone==""){
        document.getElementById('mobilephonee').innerHTML="**Please write your phone number in the box**";
        valid=false;
    }else{
        document.getElementById('mobilephonee').innerHTML = "";
    }
    if(mobilephone.length!=10){
        document.getElementById('mobilephonee').innerHTML="**The number must contain exactly 10 digits** "
        valid=false;
    }else{if(mobilephone.length===10 && mobilephone[0]!='0'){
        document.getElementById('mobilephonee').innerHTML="**The phone number must start with 0**"
        valid=false;
    }else {
        document.getElementById('mobilephonee').innerHTML="";

    }}
    if (location==""){
        document.getElementById('locationn').innerHTML="**Please write your location in the box**";
        valid=false;
    }else{
        document.getElementById('locationn').innerHTML = "";
    }
    if (username.length<6){
        document.getElementById('usernamee').innerHTML="**the username must contain at least 6 characters**"
        valid=false;
    }
   
    
    return valid;

}
function validationemail(){
    var valid=false;
    var email = document.getElementById('email').value;
    var emailPattern = /^[A-Za-z._\-0-9]+@[A-Za-z]+\.[a-z]{2,4}$/;
    if(!email.match(emailPattern)){
        document.getElementById('emaill').innerHTML="**Please enter a valid email**";
        
    }else{
        document.getElementById('emaill').innerHTML = "";
        valid=true;
    }
    return valid;


}
function handleSubmit() {
    if (validation()&&validationemail()){
    
    playAudiosuccess();
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