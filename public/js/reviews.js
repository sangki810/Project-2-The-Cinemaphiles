var postBtn = document.getElementById('post-review');
var updateBtn = document.getElementById('update-review');
var deleteBtn = document.getElementById('delete-review');


var submitReviewHandler = async (event) => {
    event.preventDefault();

    const content = document.getElementById('review-input').value.trim();
    console.log(content)
    if (content) {
        await fetch('/api/review', {
            method: 'POST',
            body: JSON.stringify({ content }),
            headers: { 'Content-Type': 'application/json' },
        });
        document.location.reload();
    }
};

// postBtn
//     .addEventListener('click', submitReviewHandler)


var submitReview = function () {

};
postBtn.addEventListener("click", submitReview);
      

var updateReview = function () {


};
updateBtn.addEventListener("click", updateReview);


var deleteReview = function () {

};
deleteBtn.addEventListener("click", deleteReview);