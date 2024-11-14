function validation(){
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var mobilephone = document.getElementById('mobilephone').value;
    var location = document.getElementById('location').value;
    
    if (username==""){
        document.getElementById('usernamee').innerHTML="**Please write your username in the box**";
    }
    if (email==""){
        document.getElementById('emaill').innerHTML="**Please write your email in the box**";
    }
    if (mobilephone==""){
        document.getElementById('mobilephonee').innerHTML="**Please write your phone number in the box**";
    }
    if (location==""){
        document.getElementById('locationn').innerHTML="**Please write your location in the box**";
    }
}