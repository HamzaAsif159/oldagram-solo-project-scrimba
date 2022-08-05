const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


/* html elements */
const slides = document.getElementById("carousel-item");
let profilePic = document.getElementById("profile-pic");
let profileName = document.getElementById("profile-name");
let profileLocation = document.getElementById("profile-location");
let postImg = document.getElementById("post-image");
let heartIcon = document.getElementById("heart-icon");
let like = document.getElementById("likes");
let profileUsername = document.getElementById("profile-username");
let words = document.getElementById("caption");

/* set variables */
let slidePos = 0;
const totalSlides = posts.length;
let likesCount;

document.getElementById("carousel-button-next").addEventListener('click', moveToNextSlide);
document.getElementById("carousel-button-prev").addEventListener('click', moveToPrevSlide);

/* adding eventlistner for likes */
heartIcon.addEventListener('click', () => {

    console.log("clicked!");
    likesCount++;
    like.textContent = `${likesCount}` + " likes";
});


function renderPost(){
    likesCount = `${posts[slidePos].likes}`;
    like.textContent = `${posts[slidePos].likes}` + " likes";
    like.classList.add("bold");
    profilePic.src = posts[slidePos].avatar;
    profileName.textContent = `${posts[slidePos].name}`;
    profileLocation.textContent = `${posts[slidePos].location}`;
    postImg.src = posts[slidePos].post;
    profileUsername.textContent = `${posts[slidePos].username}`;
    words.textContent = `${posts[slidePos].comment}`
    
}
renderPost()

function moveToNextSlide(){

    if(slidePos === totalSlides - 1) {
        slidePos = 0;
    }
    else {
        slidePos++;
    }
    renderPost();
}

function moveToPrevSlide() {
    if(slidePos === 0) {
        slidePos = totalSlides - 1;
    }
    else {
        slidePos--;
    }
    renderPost();
}