// ******** THINGS WE STILL NEED TO DO ********
// 1. add friend/delete friend button => added on side? can move it to profile maybe? or on profile side bar
// 2. like button/functionality => added button, need functionality still id = liked_song_button
// 3. maybe find something to add to the left side of the screen that is kind of empty =>can change back if want
// 4. implement sign up features for users like we did in class => should be working - might need db for more then email & password

// 5. make the navbar-burger work to show the navbar content when clicked => DONE can change colors etc.
// 6. figure out how to upload user image for profile/song post
// 7. functionability with only showing friends posts
// 8. ???
//  Anything else you can think of adding for now?'


// I added a bunch of functionality with js. You will have to sign up again with a new account because i stored the users in a collection
// Somg things I got working:
// Add friends bar
// showing posts of friends
// welcoming user
// showing post was successfuly added
// Some things to still work on:
// design/layout
// removing friends
// links for profile
// error messages for when user adds wrong ufser, bad info
// update profile info?
// making sure site looks good on mobile


let loggedoutlinks = document.querySelectorAll(".loggedout");
let loggedinlinks = document.querySelectorAll(".loggedin");

let userFriends = [];

function configureNav(user) {
    if (user) {
        // show all logged in links
        loggedinlinks.forEach((link) => {
            link.classList.remove("is-hidden");
        })
        loggedoutlinks.forEach((link) => {
            link.classList.add("is-hidden");
        })

    } else {
        // no user is passed to function (signed out)
        // show all logged out links
        // hide all logged in links
        loggedinlinks.forEach((link) => {
            link.classList.add("is-hidden");
        })
        loggedoutlinks.forEach((link) => {
            link.classList.remove("is-hidden");
        })
    }
}

// const all_posts = []; //stores all posts from users
// const users = [];

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

    let already_user = false;
    db.collection("Users").get().then((data) =>{
        if (data.docs.data().username == username) {
            alert("there is already a user with this username, please pick a new one")
            already_user = true;
        }
    })

    if (password != password2) {
        // we need to make sure the two passwords match or throw an error
        // might have to do some exception handling
    }
    if (!already_user) {


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
    }

})


function welcome_user() {
    let content = document.querySelector("#welcome_content")
    //specifically gets user info to greet user
    db.collection("Users").get().then((data) => {
        let userdata = data.docs;
        userdata.forEach((user) => {
            if (user.data().id == auth.currentUser.uid) {
                content.innerHTML = `
                Welcome ${user.data().fName} ${user.data().lName} to <br><b><i><span style="font-family:'Helvetica Neue', serif; color:lightseagreen">Cypher Songs</span></i></b>
            `
                showFeed();
                showFriends();
                showProfileSummary();
            }
        })
    })
}

//TABS on Profile
// Info and Friends
let info_tab = document.querySelector('#info_tab');
let friends_tab = document.querySelector('#friends_tab');
let info_tabHTML = ``;
let friends_tabHTML = ``;
getData().then((data) => {
    info_tabHTML += ` <p><b>Name: </b> ${firstName} ${lastName}</p>`;
    info_tabHTML += ` <p><b>Username:</b> ${username}</p>`;
    info_tabHTML += `<p><b>Email:</b> ${email}</p>`;
    info_tab.innerHTML = info_tabHTML;

    friends.forEach(f => {
        friends_tabHTML += `<p> <b>Name:</b> ${f.fName} ${f.lName} <b>Username:</b> ${f.username} </p>`;
        friends_tab.innerHTML = friends_tabHTML;
    });

})
// Post of profile tab



// prolly need to put this in a function then call it from show feed
function tabInfo() {
    let post_tab = document.querySelector('#post_tab');
    let post_tabHTML = ``;
    db.collection("Songs").get().then((data) => {
        let songdata = data.docs;
        let count = 0;
        songdata.forEach((s) => {
            if (s.data().user == auth.currentUser.uid) {
                count += 1;
                post_tabHTML += `<p>${count}: ${s.data().name} by ${s.data().artist}</p>`
            }
            // post_tab.innerHTML = post_tabHTML;

        })
        if (count == 0) {
            post_tabHTML += `<p> You havent posted any songs! </p>`;
        }
        post_tab.innerHTML = post_tabHTML;

    })

    let liked_song_button = document.querySelectorAll('#liked_song_button');
    for (let i = 0; i < liked_song_button.length; i++) {
        console.log(liked_song_button[i]);
        liked_song_button[i].addEventListener('click', function () {
            console.log('hello');
        })
    }
}


// liked_song_button.forEach((btn) =>{
//     console.log("Hello: ",btn.parentNode.id);
//     let button= document.querySelector('#liked_song_button');
//     btn.addEventListener('click', (e)=>{
//         console.log("HELLOOOOO");
//     })
// })


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
            welcome_user();
        })
        .catch((e) => {
            let login_error = document.querySelector('#login_error');
            login_error.innerHTML = `<p>${e.message}</p>`;
        })


})



// sign out
let signoutbtn = document.querySelector('#sign_out_button');
signoutbtn.addEventListener('click', () => {
    auth.signOut()
        .then((msg) => {
            console.log("user signed out");
        })
})

let username = "";
let firstName = "";
let lastName = "";
let emaiil = "";
let friends = [];

async function getData() {
    return await db.collection("Users").get().then((data) => {
        let userdata = data.docs;
        userdata.forEach((findUser) => {
            if (findUser.data().id == auth.currentUser.uid) {
                email = findUser.data().email;
                friends = findUser.data().friends;
                username = findUser.data().username;
                firstName = findUser.data().fName;
                lastName = findUser.data().lName;
            }
        })
        return "";
    })
}

async function getFriends() {
    return await db.collection("Users").get().then((data) => {
        let userdata = data.docs;
        let user_friends = [];
        userdata.forEach((findUser) => {
            if (findUser.data().id == auth.currentUser.uid) {
                user_friends = findUser.data().friends;
            }
        })
        return user_friends;
    })
}

// shows user feed of friends posts
function showFeed() {

    let content = document.querySelector('#main-content'); //find man content area

    db.collection("Songs").get().then((data) => { //goes through every song in database to find friends of user

        let songdata = data.docs;
        let content_html = "";

        getFriends().then((friends) => { //calls method to return array of user friends
            num_songs_to_show = 10;
            num_shown = 0;
            let friend_posts_array = [];
            friends.forEach((friend) => { //goes through each user friend to posts every friend's song
                // WE WILL NEED TO LIMIT HOW MANY FRIEND POSTS ARE SHOWN AND THE ORDER

                songdata.forEach((song) => {

                    post = song.data();
                    post.id = song.id;
                    if (friend.username == song.data().username) {
                        friend_posts_array.push(post);
                    }
                })

            })

            let sorted_array = [];
            while (friend_posts_array.length > 0) {
                let max = friend_posts_array[0];

                friend_posts_array.forEach((friend_post) => {
                    if (friend_post.date.seconds > max.date.seconds) {
                        max = friend_post;
                    }
                })
                sorted_array.push(max);
                friend_posts_array.splice(friend_posts_array.indexOf(max), 1);
            }

            num_to_show = 10;
            if (sorted_array.length < num_to_show) {
                num_to_show = sorted_array.length;
            }

            for (let i = 0; i < num_to_show; i++) {
                content_html += `
        <div id = "${i}" class="card mb-6">
            <div class="card-image">
                <div class="image is-3by2">
                    <img src="${sorted_array[i].image}" alt="">
                </div>
            </div>
            <div class="media mb-0">
                <div class="media-left">
                    <div class="image is-96x96">
                        <img src="images/smallLogo.png" alt="">
                    </div>
                </div>
                <div class="media-content">
                    <div class="title">${sorted_array[i].firstName} ${sorted_array[i].lastName}</div>
                    <div class="subtitle">@${sorted_array[i].username}</div>
                </div>

                <div class="media-right">
                <div class="column is-2 has-text-centered mt-5">
                    <button id="liked_song_button" class="button is-outlined is-rounded"
                        style="background-color: lightseagreen;"><i class="far fa-heart"></i><b>
                            </b></button>
                </div>

            </div>    


            </div>
            <div class="card-content has-text-centered">
                <ul>
                    <li><a href="${sorted_array[i].link}" target="_blank">${sorted_array[i].name}</a></li>
                    <li><i>${sorted_array[i].artist}</i></li>
                    <li>Date Posted: ${sorted_array[i].month}/${sorted_array[i].day}/${sorted_array[i].year} @
                     ${sorted_array[i].hour}:${sorted_array[i].minutes} ${sorted_array[i].clock}</li>
                </ul>
            </div>

        </div>
    `
            }

            content.innerHTML = content_html;
        })
    })
}

psb.addEventListener('click', (e) => {
    e.preventDefault();

    let name = document.querySelector("#name").value;
    let artist = document.querySelector('#artist').value;
    let songImage = document.querySelector('#song-image').value;
    let songLink = document.querySelector('#song-link').value;

    getData().then((e) => {
        let song_content = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            user: auth.currentUser.uid,
            name: name,
            artist: artist,
            image: songImage,
            link: songLink,
            date: new Date(),
            month: (new Date()).getMonth(),
            day: (new Date()).getDate(),
            year: (new Date()).getFullYear(),
            hour: (new Date()).getHours(),
            minutes: (new Date()).getMinutes(),
            clock: "a.m."
        }

        if (song_content.hour > 12) {
            song_content.hour = song_content.hour % 12;
            song_content.clock = "p.m."
        }
        if (song_content.hour == 12) {
            song_content.clock = "p.m."
        }
        if (song_content.hour == 0) {
            song_content.hour = 12;
            song_content.clock = "a.m."
        }
        if (song_content.minutes < 10) {
            song_content.minutes = "0" + song_content.minutes;
        }


        db.collection("Songs").add(song_content).then((data) => {
            alert("Song added to database");
        })

        showFeed();
    })
    post_modal.classList.remove('is-active'); //exits modal
})

function showFriends() {
    let friend_list = document.querySelector("#friends_list");
    let friends_html = "";

    getFriends().then((friends) => {
        friend_list.innerHTML = "";
        friends.forEach((friend) => {
            friends_html = `<h1><a class="has-text-centered is-size-5" style="text-decoration:none" 
            id="${friend.username}"><b>${friend.fName} ${friend.lName}</b></a></h1>`
            friends_html += `<h4>Username: ${friend.username}</h4>`
            friend_list.innerHTML += friends_html;
        })
    })
}

show_posts.addEventListener('click', (e) => {
    let content = document.querySelector('#main-content');
    content.innerHTML = "";
    showFeed();
})

function showProfileSummary() {
    //let profile_summary = document.querySelector("#profile_summary");
    let my_profile_info_button = document.querySelector('#my_profile_info_button');
    let my_profile_friends_button = document.querySelector('#my_profile_friends_button');
    let my_profile_posts_button = document.querySelector('#my_profile_posts_button');
    let my_posts_button = document.querySelector('#my_posts_button');
    //let my_profile_likes_button = document.querySelector('#my_profile_likes_button');
    my_posts_button.addEventListener('click', (e) => {
        let found_user = false;
        let content = document.querySelector('#main-content');
        content.innerHTML = "";
        db.collection("Songs").get().then((data) => {
            user_data = data.docs;
            user_data.forEach((song) => {
                if (song.data().user == auth.currentUser.uid) {
                    found_user = true;
                    content.innerHTML += `
                    <div id = "${song.id}" class="card mb-6">
                        <div class="card-image">
                            <div class="image is-3by2">
                                <img src="${song.data().image}" alt="">
                            </div>
                        </div>
                        <div class="media mb-0">
                            <div class="media-left">
                                <div class="image is-96x96">
                                    <img src="images/smallLogo.png" alt="">
                                </div>
                            </div>
                            <div class="media-content">
                                <div class="title">${song.data().firstName} ${song.data().lastName}</div>
                                <div class="subtitle">@${song.data().username}</div>
                            </div>

                            <div class="media-right">
                            <div class="column is-2 has-text-centered mt-5">
                                <button id="liked_song_button" class="button is-outlined is-rounded"
                                    style="background-color: lightseagreen;"><i class="far fa-heart"></i><b>
                                        </b></button>
                            </div>
                        </div>    


                        </div>
                        <div class="card-content has-text-centered">
                            <ul>
                                <li><a href="${song.data().link}" target="_blank">${song.data().name}</a></li>
                                <li><i>${song.data().artist}</i></li>
                                <li>Date Posted: ${song.data().month}/${song.data().day}/${song.data().year} @
                                 ${song.data().hour}:${song.data().minutes} ${song.data().clock}</li>
                            </ul>
                        </div>
    
                    </div>
                    `
                }

            })
            if (!found_user) {
                content.innerHTML = `<p class="has-text-centered"> You have not posted any songs</p>`
            }
        })

    })

    getData().then((e) => {
        my_profile_info_button.innerHTML = `${firstName} ${lastName}`;
        getFriends().then((friend) => {
            my_profile_friends_button.innerHTML = `${friend.length} Friends`;
            // ADD MORE to SIDE - NEED to FIgure out likes and number of posts
        })
        db.collection('Songs').get().then((data) => {
            let num_posts = data.docs;
            let count = 0;
            num_posts.forEach((s) => {
                if (s.data().user == auth.currentUser.uid) {
                    count += 1;
                }
            })
            my_profile_posts_button.innerHTML = `Number of posts: ${count} posts`;
        })
    });
}




// keep track of user authentication (signed in or signed out)
auth.onAuthStateChanged((user) => {
    let logged_out = document.querySelector("#logged_out")
    let logged_in = document.querySelector("#logged_in")
    if (user) {
        console.log("signed in");
        configureNav(user); //changes navbar
        welcome_user();
        tabInfo();
        logged_in.classList.remove("is-hidden");
        logged_out.classList.add("is-hidden")
    } else {
        console.log("not signed in");
        configureNav(); //changes navbar
        let welcome_content = document.querySelector("#welcome_content")
        welcome_content.innerHTML = `
                Welcome to <br><b><i><span style="font-family:'Helvetica Neue', serif; color:lightseagreen">Cypher Songs</span></i></b>
            `
        logged_in.classList.add("is-hidden")
        logged_out.classList.remove("is-hidden");
    }
});


// find friend lookup form
let add_friend_form = document.querySelector("#add_friends");

add_friend_form.addEventListener('submit', (e) => {
    e.preventDefault();


    // lookup value of friend username
    let friend_username = document.querySelector("#friend_username").value;

    // goes through users in database to find both users (main and new friend)
    db.collection("Users").get().then((data) => {

        let already_friends = false; //prevents adding same friend twice
        let main_user = []; //current user data

        let userdata = data.docs;

        // find data for current user
        // also specifically finds id just to have
        userdata.forEach((user) => {
            if (auth.currentUser.uid == user.data().id) {
                main_user = user;
                main_user_id = db.collection("Users").doc(user.id);
            }
        })

        // looks for new friend to be added
        let found_friend = false;
        let new_friend = [];
        userdata.forEach((user) => {
            if (friend_username == user.data().username) {
                found_friend = true;
                new_friend = user;
                new_friend_id = db.collection("Users").doc(user.id);

                // can't add self as friend
                if (user.data().id == auth.currentUser.uid) {
                    alert("cannot follow self");
                    already_friends = true;
                }
            }
        })

        if (found_friend) { //makes sure there is a friend to be added

            if (new_friend.data().friends.length != 0 && main_user.data().friends.length != 0) {

                // checks if friend is already in friends array (don't add twice)
                new_friend.data().friends.forEach((friend) => {
                    if (friend.username == main_user.data().username) {
                        already_friends = true;
                        console.log("already following");
                    }
                })
            }

            //pushes friend to past friends and then add new friends array to user info
            if (!already_friends) {
                // let temp_friends = new_friend.data().friends;
                // temp_friends.push(main_user.data());
                // updateInfo(new_friend_id, temp_friends);


                new_friends = main_user.data().friends;
                new_friends.push(new_friend.data());
                updateInfo(main_user_id, new_friends);
                alert("You are now following: " + new_friend.data().username);
            } else {
                alert("You are already following: " + new_friend.data().username);
            }
        } else {
            alert("User is not in our database!")
        }
        add_friend_form.reset();
        showFeed();
        showFriends();
        showProfileSummary();
    })
})

let remove_friend_form = document.querySelector('#remove_friends');

remove_friend_form.addEventListener('submit', (e) => {
    e.preventDefault();

    let remove_username = document.querySelector('#remove_username').value;
     db.collection("Users").get().then((data) =>{
        let main_user = []; //current user data

        let userdata = data.docs;

        // find data for current user
        // also specifically finds id just to have
        userdata.forEach((user) => {
            if (auth.currentUser.uid == user.data().id) {
                main_user = user;
                main_user_id = db.collection("Users").doc(user.id);
            }
        })
        let removed = false;
        let new_friends = main_user.data().friends
        if (main_user.data().friends.length != 0) {
            for (let i = 0; i<main_user.data().friends.length; i++) {              
                if (main_user.data().friends[i].username == remove_username) {
                    removed = true;
                    new_friends.splice(i, 1);
                    updateInfo(main_user_id, new_friends)
                    alert(`User with username: "${remove_username}" has been removed from your friends list`)
                }
            }
        }
        if (removed){
            alert(`User with username: "${remove_username}" has been removed from your friends list`)
        } else{
            alert(`Unable to remove "${remove_username}"`)
        }
        remove_friend_form.reset();
        showFeed();
        showFriends();
        showProfileSummary();

     })
})

let friend_posts = document.querySelector("#search_friends");

friend_posts.addEventListener('submit', (e) =>{
    e.preventDefault();

    let search_name = document.querySelector('#search_username').value;

    // db.collection("Users").get().then((data) => {
    //     if(search_name = data.docs.data().username)
    // })

    db.collection("Songs").get().then((data) => {
        let user_data = data.docs;
        let content = document.querySelector('#main-content');
        content.innerHTML = "";
        let has_songs = false;
        user_data.forEach((song) =>{
            if (song.data().username == search_name){
                has_songs = true;
                content.innerHTML += `
                    <div id = "${song.id}" class="card mb-6">
                        <div class="card-image">
                            <div class="image is-3by2">
                                <img src="${song.data().image}" alt="">
                            </div>
                        </div>
                        <div class="media mb-0">
                            <div class="media-left">
                                <div class="image is-96x96">
                                    <img src="images/smallLogo.png" alt="">
                                </div>
                            </div>
                            <div class="media-content">
                                <div class="title">${song.data().firstName} ${song.data().lastName}</div>
                                <div class="subtitle">@${song.data().username}</div>
                            </div>

                            <div class="media-right">
                            <div class="column is-2 has-text-centered mt-5">
                                <button id="liked_song_button" class="button is-outlined is-rounded"
                                    style="background-color: lightseagreen;"><i class="far fa-heart"></i><b>
                                        </b></button>
                            </div>
                        </div>    


                        </div>
                        <div class="card-content has-text-centered">
                            <ul>
                                <li><a href="${song.data().link}" target="_blank">${song.data().name}</a></li>
                                <li><i>${song.data().artist}</i></li>
                                <li>Date Posted: ${song.data().month}/${song.data().day}/${song.data().year} @
                                 ${song.data().hour}:${song.data().minutes} ${song.data().clock}</li>
                            </ul>
                        </div>
    
                    </div>
                    `
            }
        })
        if (!has_songs) {
            content.innerHTML = `<h1 class="is-size-4 has-text-centered">There are no songs posts associated with ${search_name}</h1>`
                }

    })
    friend_posts.reset();
})


// creates a new friends with the new friend the user added
function updateInfo(id, data) {
    return id.update({
            friends: data
        })
        .then(() => {
            console.log("Document successfully updated!");
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
}