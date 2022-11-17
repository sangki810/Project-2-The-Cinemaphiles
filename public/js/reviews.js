const postBtn = document.getElementById('post-review');
const updateBtn = document.getElementById('update-review');
const deleteBtn = document.getElementById('delete-review');
console.log(deleteBtn)



// const submitReviewHandler = async (event) => {
//     event.preventDefault();
//     console.log('clicked on post btn');

//     const content = document.getElementById('review-input').value.trim();
//     console.log(content)
//     if (content) {
//         await fetch('/api/review', {
//             method: 'POST',
//             body: JSON.stringify({ content }),
//             headers: { 'Content-Type': 'application/json' },
//         });
//         document.location.reload();
//     }
// };

const updateReviewHandler = async (event) => {
    event.preventDefault();

if (event.target.hasAttribute('review.id')) {

    const id = event.target.getAttribute('review.id');
   
    const content = document.getElementById('update-review').value.trim();
    console.log(content)
    if (content) {
       const repsonse = await fetch(`/api/review/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ content }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response);
        if (response.ok) {
            
            document.location.reload();
        } 
}
}
};

// const deleteReviewHandler = async (event) => {
//     event.preventDefault();

//     if (event.target.hasAttribute('review.id')) {
//     const id = event.target.getAttribute('review.id');

//     const content = document.getElementById('delete-review').value.trim();
//     console.log(content)
//     if (content) {
//         await fetch(`/api/review/${id}`, {
//             method: 'DELETE',
//         });
//         document.location.reload();
//     }
//     }
// };


postBtn.addEventListener("click", async (event) => {
        event.preventDefault();
        console.log('clicked on post btn');
    
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
    }
        );

      
// updateBtn.addEventListener("click", updateReviewHandler);

deleteBtn.addEventListener("click", async (event) => {
        event.preventDefault();
        console.log('clicked');
        if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        console.log(id)
    
            await fetch(`/api/review/${id}`, {
                method: 'DELETE',
            });
                document.location.reload();
        }
        
     });