// ******** THINGS WE STILL NEED TO DO ********
// 1. add friend/delete friend button
// 2. like button/functionality
// 3. maybe find something to add to the left side of the screen that is kind of empty
// 4. implement sign up features for users like we did in class
// 5. make the navbar-burger work to show the navbar content when clicked
// 6. figure out how to upload user image for profile/song post
// 7. functionability with only showing friends posts
// 8. ???
//  Anything else you can think of adding for now?

const all_posts = []; //stores all posts from users

// make a post button
var make_a_post = document.querySelector("#post_button");
var post_modal = document.querySelector("#make_a_post_modal");
make_a_post.addEventListener('click', function () {
    post_modal.classList.add('is-active');
})

// exit out of make a post modal
var modalbg_post = document.querySelector("#modalbg_post");
modalbg_post.addEventListener('click', function () {
    post_modal.classList.remove('is-active');
})

// profile button
var profile_modal = document.querySelector("#my_profile_modal");
var profile_button = document.querySelector("#my_profile_button");
profile_button.addEventListener('click', function () {
    profile_modal.classList.add('is-active');
})

// exit out of profile modal
// var modalbg_profile = document.querySelector("#modalbg_profile");
// modalbg_profile.addEventListener('click', function () {
//     profile_modal.classList.remove('is-active');
// })


// profile info button
var my_profile_info_button = document.querySelectorAll("#my_profile_info_button");
console.log(my_profile_info_button);
var profile_info = document.querySelector('#Info');
for (const button of my_profile_info_button) {
    button.addEventListener('click', function () {
        var my_profile_modal = document.querySelector("#my_profile_modal");
        my_profile_modal.classList.add('is-active');
        profile_info.classList.remove('is-hidden');
        profile_info.classList.add('is-active');
    })
}

// profile friends button
var my_profile_friends_button = document.querySelectorAll("#my_profile_friends_button");
console.log(my_profile_friends_button);
var profile_friends = document.querySelector('#Friends');
for (const button of my_profile_friends_button) {
    button.addEventListener('click', function () {
        var my_profile_modal = document.querySelector("#my_profile_modal");
        my_profile_modal.classList.add('is-active');
        profile_friends.classList.remove('is-hidden');
        profile_friends.classList.add('is-active');

    })
}

// profile posts button
var my_profile_posts_button = document.querySelectorAll("#my_profile_posts_button");
console.log(my_profile_posts_button);
var profile_posts = document.querySelector('#Posts');
for (const button of my_profile_posts_button) {
    button.addEventListener('click', function () {
        var my_profile_modal = document.querySelector("#my_profile_modal");
        my_profile_modal.classList.add('is-active');
        profile_posts.classList.remove('is-hidden');
        profile_posts.classList.add('is-active');

    })
}

// profile likes button
var my_profile_likes_button = document.querySelectorAll("#my_profile_likes_button");
console.log(my_profile_likes_button);
var profile_likes = document.querySelector('#Likes');
for (const button of my_profile_likes_button) {
    button.addEventListener('click', function () {
        var my_profile_modal = document.querySelector("#my_profile_modal");
        my_profile_modal.classList.add('is-active');
        profile_likes.classList.remove('is-hidden');
        profile_likes.classList.add('is-active');

    })
}


var modalbg_profile = document.querySelector("#modalbg_profile");
modalbg_profile.addEventListener('click', function () {
    profile_likes.classList.remove('is-active');
    profile_friends.classList.remove('is-active');
    profile_posts.classList.remove('is-active');
    profile_info.classList.remove('is-active');
    profile_likes.classList.add('is-hidden');
    profile_friends.classList.add('is-hidden');
    profile_posts.classList.add('is-hidden');
    profile_info.classList.add('is-hidden');
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



// posting a song and updating main page content
let psb = document.querySelector('#psb');

// submit song post action
psb.addEventListener('click', (e) => {
    e.preventDefault();

    let name = document.querySelector("#name").value;
    let artist = document.querySelector('#artist').value;
    let songImage = document.querySelector('#song-image').value;
    let songLink = document.querySelector('#song-link').value;


    // I made an array that stores all the songs people post
    // we will have to figure out how to get username and user info from the user
    
    let song_content = {
        username: "",
        user: "",
        id: all_posts.length,
        name: name,
        artist: artist,
        image: songImage,
        link: songLink
    }

    all_posts.push(song_content);

    const posts_to_show = [];

    for (let i = 0; i < 2; ++i) { //only shows two newest posts (arbitrary for how many posts we want to show)
        posts_to_show.push(all_posts[all_posts.length - i - 1]);
        if (all_posts.length == 1){
            break;
        }
    }

    // console.log(posts_to_show);

    // console.log(song_content);
    // console.log(all_posts);

    if (name != "" && artist != "" && songLink != "" && songImage != "") { //make sure user enters enough info
        // let temp = document.querySelector('#main-content').innerHTML;
        // let content = document.querySelector('#main-content');
        let content_html = "";

        posts_to_show.forEach((post) => {
            let newSong = `
                <div class="card mb-6">
                    <div class="card-image">
                        <div class="image is-3by2">
                            <img src="${post.image}" alt="">
                        </div>
                    </div>
                    <div class="media mb-0">
                        <div class="media-left">
                            <div class="image is-96x96">
                                <img src="images/smallLogo.png" alt="">
                            </div>
                        </div>
                        <div class="media-content">
                            <div class="title">${post.user}</div>
                            <div class="subtitle">@${post.username}</div>
                        </div>
                    </div>
                    <div class="card-content has-text-centered">
                        <ul>
                            <li><a href="${post.link}" target="_blank">${post.name}</a></li>
                            <li><i>${post.artist}</i></li>
                        </ul>
                    </div>

                </div>
            `
            content_html += newSong //adds song to main content
        })
        // post template
        content.innerHTML = content_html; //puts new song first on timeline
    }
    post_modal.classList.remove('is-active'); //exits modal
})


function openPage(evt, pageName) {

    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove('is-hidden');
        tabcontent[i].classList.add("is-active");
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