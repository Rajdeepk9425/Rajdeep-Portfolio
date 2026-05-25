
  
var typed = new Typed('#text', {
 strings: ["Java Full Stack Developer","Backend Developer","Spring Boot Developer","Microservices Enthusiast","Video creater"],
   typeSpeed: 100,
   backSpeed: 50,
   backDelay:10,
   loop: true
});

var body = document.querySelector("body");
var darkbtn = document.querySelector("#mode");
var nav = document.querySelector("nav");
var head = document.querySelector("#head-profile");
var txt = document.querySelector("#text");
var About = document.querySelector("#About-section");
var Abt_title = document.querySelector("#about-tittle");
var abt_dtl = document.querySelector("#abt-dtl");
var myservices = document.querySelector("#myservices-section");
var services_title = document.querySelector("#services-title");
var service_1 = document.querySelector("#service-1");
var service_2 = document.querySelector("#service-2");
var service_3 = document.querySelector("#service-3");
var service_1span= document.querySelector("#service-1 span");
var service_2span= document.querySelector("#service-2 span");
var service_3span= document.querySelector("#service-3 span");
var myskills_section= document.querySelector("#myskills-section");
var skills_title= document.querySelector("#skills-title");
var skills_section_h4= document.querySelector("#myskills-section h4");
var html = document.querySelector("#html");
var css = document.querySelector("#css");
var js = document.querySelector("#js");
var bootstrap = document.querySelector("#bootstrap");
var react = document.querySelector("#react");
var react_native = document.querySelector("#react-native");
var ph_bar = document.querySelector("#professional-skills");
var th = document.querySelector("#th");
var Contacts_us_section = document.querySelector("#Contacts-us-section");
var contact_title = document.querySelector("#contact-title");
var contact_me = document.querySelector("#contact-me");


count = 0;

darkbtn.addEventListener("click",function(){
  if(count==0){
    body.style.backgroundColor='white';
    About.style.backgroundColor='white';
    About.style.color='black';
    Abt_title.style.color='black';
    abt_dtl.style.color='black';
    myservices.style.backgroundColor='white';
    services_title.style.color='black';
    head.style.color='black';
    txt.style.color='red';
    nav.style.backgroundColor='white';
    darkbtn.src='dark mode.jpg';
    service_1.style.backgroundColor='whitesmoke';
    service_2.style.backgroundColor='whitesmoke';
    service_3.style.backgroundColor='whitesmoke';
    service_1span.style.color='black';
    service_2span.style.color='black';
    service_3span.style.color='black';
    myskills_section.style.backgroundColor='white';
    skills_title.style.color='black';
    html.style.color='black';
    css.style.color='black';
    js.style.color='black';
    bootstrap.style.color='black';
    react.style.color='black';
    react_native.style.color='black';
    ph_bar.style.color='black';
    th.style.color='black';
    Contacts_us_section.style.backgroundColor='white';
    contact_title.style.color='black';
    contact_me.style.color='black';
    
    
    count=1;
  }
  else{
    body.style.backgroundColor='#212529';
    About.style.backgroundColor='#212529';
    About.style.color='white';
    Abt_title.style.color='white';
    abt_dtl.style.color='white';
    myservices.style.backgroundColor='#212529';
    services_title.style.color='white';
    head.style.color='white';
    txt.style.color='#0ef';
    nav.style.backgroundColor='#212529';
    darkbtn.src='light mode.png';
    service_1.style.backgroundColor='#001b29';
    service_2.style.backgroundColor='#001b29';
    service_3.style.backgroundColor='#001b29';
    service_1span.style.color='white';
    service_2span.style.color='white';
    service_3span.style.color='white';
    myskills_section.style.backgroundColor='#212529';
    skills_title.style.color='white';
    html.style.color='white';
    css.style.color='white';
    js.style.color='white';
    bootstrap.style.color='white';
    react.style.color='white';
    react_native.style.color='white';
    ph_bar.style.color='white';
    th.style.color='white';
    Contacts_us_section.style.backgroundColor='#212529';
    contact_title.style.color='white';
    contact_me.style.color='white';
    count=0;
  }
})



