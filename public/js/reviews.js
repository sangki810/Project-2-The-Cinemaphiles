var postBtn = document.getElementById('post-review');
var updateBtn = document.getElementById('post-review');
var deleteBtn = document.getElementById('post-review');


var submitReviewHandler = async (event) => {
    event.preventDefault();

    const content = document.getElementById('review-input').value.trim();

    if (content) {
        const response = await fetch('/api/review', {
            method: 'POST',
            body: JSON.stringify({ content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

postBtn
    .addEventListener('click',submitReviewHandler)