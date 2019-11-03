
let submit = document.getElementById('btn');
let formArr = new Array();
let formId;
let elementName;
let menteeData = "mentee.csv";
let data;
let headerArr = new Array();
let Timestamp = 0;
let ID = Math.random();



headerArr = [
"ID","Timestamp","Full Name","What is your age?","Your Year Up email address?","What LC are you a member of?","Learning Track","Are you interested in joining the Mentor Program?","If you answered NO, I am not interested in joining the Mentor Program, please briefly explain why?","Best phone number to reach you at:","In what city do you live?","Do you have access to a car?","Career field interest","What industries interest you?","Are you currently a parent or caretaker to someone?","What are you looking to gain from mentorship?","Please list the neighborhoods","areas of the city, and suburbs that are convenient locations for you to meet with your mentor.","Are there any communities/groups that you are a part of or are passionate about that you want your mentor to know? (Ex: LGBQT, Religious/Faith, etc.)","What skills, interests, hobbies, or talents would you like to share with your mentor?","Do you foresee any challenges that would make it difficult to meet with your mentor?","What are the top 1-3 priorities you would like us to consider when matching you to a mentor?","What would you want your mentor to know about you before you meet?","Please share the link to your LinkedIn profile."	
]	
submit.addEventListener("click", function () {
    event.preventDefault;
    document.getElementById("mentee_form").style.display = "none";

    // console.log(data);
    hardcoded();

function hardcoded()
{
 console.log(document.getElementById('form_element_2'));
 data= 
 {

        
    "ID":Math.random(),

    "Timestamp": 0,

    "Full Name":document.getElementById('form_element_2').value,

    "What is your age?":document.getElementById('form_element_3').value,

    "Your Year Up email address?":document.getElementById('form_element_4').value,

    "What LC are you a member of?":document.getElementById('form_element_5').value,
    "Learning Track":document.getElementById('form_element_6').value,
    "Are you interested in joining the Mentor Program?":   document.getElementById('form_element_7').value,
    "If you answered NO, I am not interested in joining the Mentor Program, please briefly explain why?":   document.getElementById('form_element_8').value,
    "Best phone number to reach you at:":  document.getElementById('form_element_9').value,
    "In what city do you live?":   document.getElementById('form_element_10').value,
    "Do you have access to a car?":  document.getElementById('form_element_11').value,
    "Career field interest":   document.getElementById('form_element_12').value,
    "What industries interest you?":  document.getElementById('form_element_13').value,
    "Are you currently a parent or caretaker to someone?":   document.getElementById('form_element_14').value,
    "What are you looking to gain from mentorship?":  document.getElementById('form_element_15').value,
    "Please list the neighborhoods":   document.getElementById('form_element_16').value,
    "areas of the city, and suburbs that are convenient locations for you to meet with your mentor.":  document.getElementById('form_element_17').value,
    "Are there any communities/groups that you are a part of or are passionate about that you want your mentor to know? (Ex: LGBQT, Religious/Faith, etc.)":   document.getElementById('form_element_18').value,
    "What skills, interests, hobbies, or talents would you like to share with your mentor?":   document.getElementById('form_element_19').value,
    "Do you foresee any challenges that would make it difficult to meet with your mentor?":  document.getElementById('form_element_20').value,
    "What are the top 1-3 priorities you would like us to consider when matching you to a mentor?":  document.getElementById('form_element_21').value,
    "What would you want your mentor to know about you before you meet?": document.getElementById('form_element_22').value,
    "Please share the link to your LinkedIn profile.":  document.getElementById('form_element_23').value,
 }
 sendData(data);
}


    // let name = document.getElementById('form_element_0');
    // console.log(name);
    // data =
    //     {
    //         "Timestamp": "7/16/2019 11:28",
    //         "First Name": name.value,
    //         "Last Name": "Brandon",
    //         "Did you mentor a Year Up student previously?": "No.",
    //         "Preferred email address:": "afbrandon1@gmail.com",
    //         "What was the name of your previous mentee?": "",
    //         "How would you rate your previous mentor match from 1 (complete mismatch) to 10 (perfect match)?": "",
    //         "Please provide one piece of feedback about your mentoring experience.": "",
    //         "Are you at least 25 years of age?": "Yes",
    //         "Do you have at least 3 years of professional work experience?": "Yes",
    //         "Are you able to commit to 6 months of supporting your mentee?": "Yes",
    //         "Gender": "Male",
    //         "Work phone": "408-467-2210",
    //         "Personal phone": "510-390-4823",
    //         "In what city do you live?": "San Ramon",
    //         "In what city do you work?": "San Jose",
    //         "Employer": "RESA Power",
    //         "Job title": "CCCM (Certified Call Center Manager)",
    //         "Ethnicity (check all that apply)": "White",
    //         "What is your primary address": "330 MEADOWOOD CIR, San Ramon, CA. 94583",
    //         "How did you hear about Year Up mentoring?": "LinkedIn",
    //         "Why do you want to be a mentor through Year Up?": "I have mentored and coached prior colleagues and at risk youth. I find paying it forward very rewarding, while also assisting in shaping and creating a positive influence in a mentee's life.",
    //         "What skills, interests, hobbies, or talents would you like to share with your mentee?": "Creating stellar service, management, and leadership.",
    //         "City to meet": "San Jose;Palo Alto",
    //         "Convinient neigbourhood": "Palo alto - in midtown",
    //         "What (if any) mentoring experience do you have?": "I have over 10 years of mentoring business leaders, managers/supervisors, along with at risk youth.",
    //         "Are there any communities/groups that you are a part of or are passionate about that you want your mentee to know? (Ex: LGBQT, Religious/Faith, Staff Resource Groups, etc.)": "",
    //         "Highest Level of Education Completed": "High school diploma/GED",
    //         "What industries have you worked in?": "Automotive; Electric Utilities; Oil; Gas; Technology; Telecommunications; Other",
    //         "Do you have any experience/knowledge in the following fields?  (these are the learning track options for Year Up students)": "Project Management; Quality Assurance",
    //         "What would you want your mentee to know about you before you meet?": "",
    //         "Do you have a LinkedIn profile link that you can share with us? Please paste the link below for us.": "www.linkedin.com/in/adam-brandon-1422b482",
    //         "Fun Fact/s about yourself": "I was voted class comedian 3 years in a row in junior high school. So yet I do love to have laugh and have fun.",
    //         "Please rate your preferred campus, keeping in mind that mentees may intern in areas outside of the campus' city.   [WAITLIST ONLY - Silicon Valley Campus, San Jose]": "First Choice",
    //         "Please rate your preferred campus, keeping in mind that mentees may intern in areas outside of the campus' city.   [Diablo Valley College, Pleasant Hill]": "Second Choice",
    //         "Please rate your preferred campus, keeping in mind that mentees may intern in areas outside of the campus' city.   [WAITLIST ONLY - San Francisco Campus, San Francisco ]": "N/A",
    //         "Do you need at attend a New Mentor Orientation?": "Please send me the available mentor orientation dates",
    //         "Follow Up": "Yes"

    //     }

    // sendData(data);


    // if form_element_value = null,stop
    //or less then the total number

});
// console.log(data);

function sendData(data) {
    console.log(data);
    // create xhr object
    var xhr = new XMLHttpRequest();
    console.log(xhr);

    //open function
    xhr.open('POST', 'http://localhost:5000/submitted', true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(data));

}






// {
//     "Timestamp": "7/11/2019 15:19:24",
//     "Full Name": "Agustin Cortes",
//     "What is your age?": "21",
//     "Your Year Up email address?": "acortes@sfo.yearup.org",
//     "What LC are you a member of?": "LC Courage",
//     "Learning Track": "Project Management",
//     "Are you interested in joining the Mentor Program?": "Yes, sign me up!",
//     "Best phone number to reach you at:": "8318017220",
//     "In what city do you live?": "Hollister",
//     "Do you have access to a car?": "Yes",
//     "Career field interest": "Entrepreneurship + Tech",
//     "What industries interest you?": "Tech, neurology, psychology, marketing, E-commerce",
//     "Are you currently a parent or caretaker to someone?": "No",
//     "What are you looking to gain from mentorship?": "Extremely competent individual to share wisdom and keep me accountable",
//     "Please list the neighborhoods, areas of the city, and suburbs that are convenient locations for you to meet with your mentor.": "I can come to San Jose. Meeting at year up would be ideal",
//     "Are there any communities/groups that you are a part of or are passionate about that you want your mentor to know? (Ex: LGBQT, Religious/Faith, etc.)": "Some one who reads a lot of books",
//     "What skills, interests, hobbies, or talents would you like to share with your mentor?": "books",
//     "Do you foresee any challenges that would make it difficult to meet with your mentor?": "Location",
//     "What are the top 1-3 priorities you would like us to consider when matching you to a mentor?": "Experienced, wise, and knowledgeable ",
//     "What would you want your mentor to know about you before you meet?": "I am an autodidact that is very curious about many aspects of life. My long term vision is to become an entrepreneur in the technology field",
//     "Please share the link to your LinkedIn profile.": "https://www.linkedin.com/in/agustin-cortes-link/"
// }

// "Timestamp", "First Name", "Last Name","Did you mentor a Year Up student previously?","Preferred email address:","What was the name of your previous mentee?","How would you rate your previous mentor match from 1 (complete mismatch) to 10 (perfect match)?","Please provide one piece of feedback about your mentoring experience.","Are you at least 25 years of age?","Do you have at least 3 years of professional work experience?","Are you able to commit to 6 months of supporting your mentee?","Gender","Work phone","Personal phone","In what city do you live?","In what city do you work?","Employer","Job title","Ethnicity (check all that apply)","What is your primary address	How did you hear about Year Up mentoring?","Why do you want to be a mentor through Year Up?", "What skills, interests, hobbies, or talents would you like to share with your mentee?","City to meet","City to meet", "Convinient neigbourhood","What (if any) mentoring experience do you have?","Are there any communities/groups that you are a part of or are passionate about that you want your mentee to know?(Ex: LGBQT, Religious/Faith, Staff Resource Groups, etc.)","Highest Level of Education Completed", "What industries have you worked in?","Do you have any experience/knowledge in the following fields? (these are the learning track options for Year Up students)","What would you want your mentee to know about you before you meet?","Do you have a LinkedIn profile link that you can share with us?","Please paste the link below for us.","Fun Fact/s about yourself","Please rate your preferred campus, keeping in mind that mentees may intern in areas outside of the campus' city.   [WAITLIST ONLY - Silicon Valley Campus, San Jose]	Please rate your preferred campus, keeping in mind that mentees may intern in areas outside of the campus' city.   [Diablo Valley College, Pleasant Hill]	Please rate your preferred campus, keeping in mind that mentees may intern in areas outside of the campus' city. [WAITLIST ONLY - San Francisco Campus, San Francisco ]","Do you need at attend a New Mentor Orientation?","Follow Up"]