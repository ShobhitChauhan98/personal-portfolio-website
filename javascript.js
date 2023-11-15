//===================================================================
//about section readmore and readless button
//Get a about-section
let about = document.getElementById("about-section");

//get a  span tag from a about sections;
let span = about.getElementsByTagName("span");

//get a readmore button from about section
let readMoreBtn = about.getElementsByTagName("button");

//Add a readmore or readless functionality
//create a function for readmore or readless about-content
function readMr(event){
    event.stopPropagation();
    if(span[1].style.display=="none"){
        span[1].style.display="inline";
        readMoreBtn[0].innerText="Read Less"
    }
    else{
        span[1].style.display="none";
        readMoreBtn[0].innerText="Read More"
    }
}

//Add a event in about-section readmore button
readMoreBtn[0].addEventListener("click",readMr,false);




//===================================================================
//Skill section readmore and readless button
//Get a Skill-section
//get a skill-section
let skill = document.getElementById("skill-section");

//get a all span tag from a skill sections
let skillSpan = skill.getElementsByTagName("span");

//get a readmore button from skill section
let skillReadBtn = skill.getElementsByTagName("button");


//Add a readmore or readless functionality
//create a function for readmore or readless skill-content
function skillRead(event){
    event.stopPropagation();
    if(skillSpan[1].style.display=="none"){
        skillSpan[1].style.display="inline";
        skillReadBtn[0].innerText="Read Less"
    }
    else{
        skillSpan[1].style.display="none";
        skillReadBtn[0].innerText="Read More"
    }
}

//Add a event in skill-section readmore button
skillReadBtn[0].addEventListener("click",skillRead,false);



//===================================================================
//Service section readmore button

//get a service-section
let service = document.getElementById("service-section");

//get a span tag in service-section
let spans = service.querySelectorAll(".comman-span");

//get a button 
let buttons = service.querySelectorAll(".commna-readmoreBtn");

//create a function
function serviceRead1(event){
    event.stopPropagation();
    if(spans[0].style.display=="none"){
        spans[0].style.display="inline";
        buttons[0].innerText="Read Less";
    }
    else{
        spans[0].style.display="none";
        buttons[0].innerText="Read More"
    }
}

buttons[0].addEventListener("click",serviceRead1,false);

//create a function
function serviceRead2(event){
    event.stopPropagation();
    if(spans[1].style.display=="none"){
        spans[1].style.display="inline";
        buttons[1].innerText="Read Less";
    }
    else{
        spans[1].style.display="none";
        buttons[1].innerText="Read More"
    }
}

buttons[1].addEventListener("click",serviceRead2,false);


//create a function
function serviceRead3(event){
    event.stopPropagation();
    if(spans[2].style.display=="none"){
        spans[2].style.display="inline";
        buttons[2].innerText="Read Less";
    }
    else{
        spans[2].style.display="none";
        buttons[2].innerText="Read More"
    }
}

buttons[2].addEventListener("click",serviceRead3,false);


//===================================================================
//Email sending function using smpt.js library
function sendEmail() {
    //selectors
    const fullName = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    const mobileNo = document.getElementById("Mobile Number").value;
    const subject = document.getElementById("Email Subject").value;
    const message = document.getElementById("Message").value;

    const body = `Client Name = ${fullName} 
    <br> Email =  ${email} 
    <br> Mobile Number = ${mobileNo} 
    <br> Message = ${message}`;
    
    Email.send({
        SecureToken:"1b851e24-e5e3-47de-9990-68608ec07ff6",
        To: 'thakurshobhit1100@gmail.com',
        From:'thakurshobhit1100@gmail.com',
        Subject: subject,
        Body: body
    }).then(
        message => {
            if(message=='OK'){
                alert(`Thank you for contacting me ${fullName}`);
            }

            else{
                alert('Sorry!, please check your details')
            }
        }
    );

}




//===================================================================
