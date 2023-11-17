document.addEventListener('DOMContentLoaded', function() {
    // Get the element with the class 'scroll-item2'
    var scrollItem = document.querySelector('.notefab');

    // Add a click event listener to the element
    scrollItem.addEventListener('click', function() {
        // Redirect to 'notes.html' when the element is clicked
        window.location.href = './test.html';
    }); 
});






