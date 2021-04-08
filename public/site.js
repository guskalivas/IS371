// post button
var make_a_post = document.querySelector("#post_button");
var post_modal = document.querySelector("#make_a_post_modal");
make_a_post.addEventListener('click', function() {
    
    post_modal.classList.add('is-active');
})

// can't get out of this modal without refreshing the page - NEED TO FIX
var modalbg_post = document.querySelector("#modalbg_post");
modalbg_post.addEventListener('click', function() {
    post_modal.classList.remove('is-active');
})


// profile button
var my_profile_button = document.querySelectorAll("#my_profile_button");
console.log(my_profile_button);
for (const button of my_profile_button){
    button.addEventListener('click', function() {
        var my_profile_modal = document.querySelector("#my_profile_modal");
        my_profile_modal.classList.add('is-active');
})
}

var modalbg_profile = document.querySelector("#modalbg_profile");
modalbg_profile.addEventListener('click', function() {
    my_profile_modal.classList.remove('is-active');
})



// login button
var my_login_button = document.querySelector("#loginbutton");
my_login_button.addEventListener('click', function () {
    var my_login_modal = document.querySelector("#my_login_modal");
    my_login_modal.classList.add('is-active');
})

var modalbg_login = document.querySelector("#modalbg_login");
modalbg_login.addEventListener('click', function () {
    my_login_modal.classList.remove('is-active');
})


// sign up button
var my_sign_up_button = document.querySelector("#sign_up_button");
my_sign_up_button.addEventListener('click', function () {
    var my_sign_up_modal = document.querySelector("#my_sign_up_modal");
    my_sign_up_modal.classList.add('is-active');
})

var modalbg_sign_up = document.querySelector("#modalbg_sign_up");
modalbg_sign_up.addEventListener('click', function () {
    my_sign_up_modal.classList.remove('is-active');
})



// contact button
var my_contact_button = document.querySelector("#contact_button");
my_contact_button.addEventListener('click', function () {
    var my_contact_modal = document.querySelector("#my_contact_modal");
    my_contact_modal.classList.add('is-active');
})

var modalbg_contact = document.querySelector("#modalbg_contact");
modalbg_contact.addEventListener('click', function () {
    my_contact_modal.classList.remove('is-active');
})


//This doesnt work theres an error on it canot set property 'onsubmit' of null
// document.getElementById(search_form).onsubmit = function () {
//     window.location = 'http://www.google.com/search?q=site:yoursitename.com ' + document.getElementById(
//         "value_search").value;
//     return false;
// }



// posting a song and updating main page content
let psb=document.querySelector('#psb');

psb.addEventListener('click', (e) => {
    e.preventDefault();

    let name = document.querySelector("#name").value;
    let artist = document.querySelector('#artist').value;
    let songImage = document.querySelector('#song-image').value;
    let songLink = document.querySelector('#song-link').value;
    
    console.log(name);

    if (name != "" && artist != "" && songLink != "" && songImage != ""){ //make sure user enters enough info
    let temp = document.querySelector('#main-content').innerHTML;
    let content = document.querySelector('#main-content');
   
    // post template
    let newSong = `
    <div class="card mb-6">
                    <div class="card-image">
                        <div class="image is-3by2">
                            <img src="${songImage}" alt="">
                        </div>
                    </div>
                    <div class="media mb-0">
                        <div class="media-left">
                            <div class="image is-96x96">
                                <img src="images/smallLogo.png" alt="">
                            </div>
                        </div>
                        <div class="media-content">
                            <div class="title">Mason Guell</div>
                            <div class="subtitle">@mason</div>
                        </div>
                    </div>
                    <div class="card-content has-text-centered">
                        <ul>
                            <li><a href="${songLink}" target="_blank">${name}</a></li>
                            <li><i>${artist}</i></li>
                        </ul>
                    </div>

                </div>
    `
    content.innerHTML = newSong; //puts new song first on timeline
    content.innerHTML += temp; //adds back all other songs
    }
    
    
    post_modal.classList.remove('is-active'); //exits modal
})

// var profile_info_tab = document.querySelector('#profile_info_tab');
// profile_info_tab.addEventListener('click', function(){
//     var info = document.querySelector('#Info');
//     console.log(info);
//     info.classList.remove("is-hidden");
//     info.classList.add("is-active");
//     info.classList.remove("is-active");
// })

// var profile_friend_tab = document.querySelector('#profile_friend_tab');
// profile_friend_tab.addEventListener('click', function(){
//     var Friends = document.querySelector('#Friends');
//     console.log(Friends);
//     Friends.classList.remove("is-hidden");
//     Friends.classList.add("is-active");
// })

function openPage(evt, pageName) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
     tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("is-hidden", " is-active");
  }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.classList += " is-active"
  }
 