//load upcoming space into the peopelSpaces div on index.html
//load personalized people course based on users info, else bring up login dialog on index.
// change txt peoople notes to username note.

//listen to note clicked after notes have been loaded 
document.addEventListener('DOMContentLoaded', function() {
    // Get the element with the class 'scroll-item2'
    var scrollItem = document.querySelector('.scroll-item2');

    // Add a click event listener to the element
    scrollItem.addEventListener('click', function() {
        // Redirect to 'notes.html' when the element is clicked
        window.location.href = './pages/notes.html';
    }); 
});


document.addEventListener('DOMContentLoaded', function() {
    // Get the element with the class 'scroll-item2'
    var scrollItem = document.querySelector('.scroll-item');

    // Add a click event listener to the element
    scrollItem.addEventListener('click', function() {
        // Redirect to 'notes.html' when the element is clicked
        window.location.href = './pages/leetspace.html';
    }); 
});




if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }