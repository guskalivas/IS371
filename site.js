// ******** THINGS WE STILL NEED TO DO ********
// 1. add friend/delete friend button => added on side? can move it to profile maybe? or on profile side bar
// 2. like button/functionality => added button, need functionality still id = liked_song_button
// 3. maybe find something to add to the left side of the screen that is kind of empty =>can change back if want
// 4. implement sign up features for users like we did in class => should be working - might need db for more then email & password

// 5. make the navbar-burger work to show the navbar content when clicked => DONE can change colors etc.
// 6. figure out how to upload user image for profile/song post
// 7. functionability with only showing friends posts
// 8. ???
//  Anything else you can think of adding for now?

const all_posts = []; //stores all posts from users
const users = [];

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

// NAVBar Burger 

document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
                $target.style.backgroundColor = "black";

                //$target.classList.add('has-text-black', 'has-text-weight-bold');

            });
        });
    }
});

let signupbtn = document.querySelector('#sign_up_button');
let signupModal = document.querySelector('#my_sign_up_modal');
let signupModalBg = document.querySelector('#modalbg_sign_up');
let signup_form = document.querySelector('#signup_form');


// Signup
signup_form.addEventListener('submit', (e) => {

    e.preventDefault();
    // grab email/pass
    let email = document.querySelector('#signup_username').value;
    let password = document.querySelector('#signup_password').value;
    let password2 = document.querySelector('#signup_password2').value;

    let fName = document.querySelector("#first_name").value;
    let lName = document.querySelector("#last_name").value;
    let username = document.querySelector("#user_name").value;


    if (password != password2) {
        // we need to make sure the two passwords match or throw an error
        // might have to do some exception handling
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {

            console.log('user created successfully');

            // we should ask for this information so we can display it on the user profile
            user = {
                fName: fName,
                lName: lName,
                username: username,
                id: userCredential.user.uid,
                email: email,
                friends: []
            };

            db.collection("Users").add(user).then((data) => {
                console.log("User added to database");
            })
            //close modal
            signupModal.classList.remove('is-active');
            //rest form
            signup_form.reset();

        })
        .catch((e) => {
            let signup_error = document.querySelector('#signup_error');
            signup_error.innerHTML = `<p>${e.message}</p>`;
        })


})


// sign in 
let login_form = document.querySelector('#login_form');
login_form.addEventListener('submit', (e) => {
    e.preventDefault();
    let email_ = document.querySelector('#login_username').value;
    let password_ = document.querySelector('#login_password').value;
    auth.signInWithEmailAndPassword(email_, password_)
        .then((userCredentials) => {
            console.log(userCredentials.user.email + " with the id " + userCredentials.user.uid + " is logged in");
            // user_id = userCredentials.user.uid;
            my_login_modal.classList.remove('is-active');
            login_form.reset();
        })
        .catch((e) => {
            let login_error = document.querySelector('#login_error');
            login_error.innerHTML = `<p>${e.message}</p>`;
        })

})


// // sign out
let signoutbtn = document.querySelector('#sign_out_button');
signoutbtn.addEventListener('click', () => {
    console.log(user_id);
    auth.signOut()
        .then((msg) => {
            console.log("user signed out");
        })
})

let username = "";
let firstName = "";
let lastName = "";

db.collection("Users").get().then((data) => {
    let userdata = data.docs;
    userdata.forEach((findUser) => {
        if (findUser.data().id == auth.currentUser.uid) {
            username = findUser.data().username;
            firstName = findUser.data().fName;
            lastName = findUser.data().lName;
        }
    })
})

function showFeed() {
    let content = document.querySelector('#main-content');
    db.collection("Songs").get().then((data) => {
        let songdata = data.docs;
        let content_html = "";
        songdata.forEach((findUserSongs) => {
            post = findUserSongs.data();
            if (findUserSongs.data().user == auth.currentUser.uid) {
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
                                        <div class="title">${post.firstName} ${post.lastName}</div>
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
                }
        })
        content.innerHTML = content_html; //puts new song first on timeline
    })
}

psb.addEventListener('click', (e) => {
    e.preventDefault();

    let name = document.querySelector("#name").value;
    let artist = document.querySelector('#artist').value;
    let songImage = document.querySelector('#song-image').value;
    let songLink = document.querySelector('#song-link').value;

    let song_content = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        user: auth.currentUser.uid,
        id: all_posts.length,
        name: name,
        artist: artist,
        image: songImage,
        link: songLink,
        date: new Date()
    }

    db.collection("Songs").add(song_content).then((data) => {
        console.log("Song added to database");
    })

    showFeed();
    
    post_modal.classList.remove('is-active'); //exits modal
})

auth.onAuthStateChanged((user) => {
    if (user) {
        showFeed();
        console.log("signed in");
    } else {
        console.log("not signed in");
    }
});