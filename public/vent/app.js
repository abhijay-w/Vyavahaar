var firebaseConfig = {
    apiKey: "AIzaSyCdTxcXKZduVB3m_YdHoxKYsXxPPppzWI4",
    authDomain: "vyavahaar-mentalhealthcare.firebaseapp.com",
    databaseURL: "https://vyavahaar-mentalhealthcare-default-rtdb.firebaseio.com",
    projectId: "vyavahaar-mentalhealthcare",
    storageBucket: "vyavahaar-mentalhealthcare.appspot.com",
    messagingSenderId: "1088638899783",
    appId: "1:1088638899783:web:0244785d45dea7132dc362",
    measurementId: "G-1T7PTWPJCR"
};
//   // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var postRef = firebase.database().ref('posts');

// get post and display
postRef.limitToLast(5).on('value', (snapshot) => {
    var posts = snapshot.val();
    var postsKey = Object.keys(posts);

    //ensure only updated element are displayed
    if (document.querySelector('#demo').innerHTML != "") {
        document.querySelector('#demo').innerHTML = "";
    }
    for (var i = postsKey.length - 1; i >= 0; i--) {
        var element = postsKey[i];
        var description = posts[element].des;

        var postId = element;
        var commtId = "cmm" + element;
        var formId = "frm" + element;
        var date = posts[element].date;
        var time = posts[element].time;
        document.querySelector('#demo').innerHTML += `
        <div class="post" >
            <p class = "meta">Anonymous</p>
            <p class = "meta">${date}</p>
            <p class = "meta">${time}</p>
            <p class="postcontent"onClick = "expand(this)">${description}</p>
            <p style = "font-weight: bold;margin : 1rem 0;">Comments</p>
            <div >
                <div class="commentForm">
                    
                        <input class = "commentinp" type="text"  id = "${commtId}" name="comment" placeholder="Add a comment...">
                        <button class = "sendbtn" id = "${postId}" onClick = "sendComment(this)">send</button>
                </div>
                
                <div id= "${formId}"></div>
            </div>
            
           
        </div>
        
        `

        if (posts[element].comments != null) {
            var cmmnt = posts[element].comments;
            var cmmntKey = Object.keys(cmmnt);
            displayCmmnt(cmmntKey, formId, cmmnt);
        }

    }


});
// document.getElementById('thought').addEventListener('submit', onSubmit);

function sendComment(element) {
    var postId = element.id;
    var content = element.previousElementSibling.value;
    var date = getDate();
    firebase.database().ref('posts/' + postId + '/comments').push().set({
        content: content,
        date: date
    });


}

// submit post

function onSubmit(e) {
    // e.preventDefault();
    // console.log(e);
    var vale = e.previousElementSibling.value;

    console.log(vale);
    // // console.log(vale);
    var dats = getDate();
    var time = getTime();
    postRef.push().set({ des: vale, date: dats, time: time });
    // // document.querySelector('#demo').innerHTML = "";
    swal("Posted", "Hope that helped you", "success");
    document.getElementById("myModal").style.display = "none";
}

// display comments
function displayCmmnt(array, form, cmmt) {
    var formId = "#" + form;
    array.forEach(element => {
        document.querySelector(formId).innerHTML += `
            <div class = "comments">
                <p class="meta cmtmeta">${cmmt[element].date}</p>
                <p> ${cmmt[element].content}</p>
            </div>
        `
    });
}

//utiltiy function
function getDate() {
    var date = new Date();

    var dats = date.toLocaleString('en-US', {
        weekday: 'short', // long, short, narrow
        day: 'numeric', // numeric, 2-digit
        year: 'numeric', // numeric, 2-digit
        month: 'long', // numeric, 2-digit, long, short, narrow;
    }).toString();
    return dats;
}

function getTime() {
    var date = new Date();
    var time = date.toLocaleString('en-US', {
        hour: 'numeric', // long, short, narrow
        minute: 'numeric', // numeric, 2-digit
        second: 'numeric', // numeric, 2-digit

    }).toString();
    return time;
}

function expand(elem) {

    if (elem.nextElementSibling.style.display == "block") {
        elem.nextElementSibling.style.display = "none";
    } else {
        elem.nextElementSibling.style.display = "block";
    }


    // elem.childNodes[5].style.display = "block";
}

// pop up
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("writebtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}