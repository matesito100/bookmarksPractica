   // Listen for form submit
   document.getElementById('myForm').addEventListener('submit', saveBookmark);

//TODO: Save Bookmark
function saveBookmark(e){
    // Get form values
    var siteName =document.getElementById('siteName').value;
    var siteUrl =document.getElementById('siteUrl').value;

    var bookmark = {
        name: siteName,
        url: siteUrl
    }
}

//TODO: Local Storage Test
//     localStorage.setItem('test', 'hola mundo');
//     console.log(localStorage.getItem('test'));
//     localStorage.removeItem('test');
//     console.log(localStorage.getItem('test'));

//TODO: Test if bookmark is null
if (localStorage.getItem('bookmarks') == null) {
    //TODO: Init array
    var bookmarks = [];
    //TODO: Add to array
    bookmarks.push(bookmark);
    //TODO: Set to LocalStorage
    localStorage.setItem('bookmarks', JSON.stringify (bookmarks));
} else {
    //TODO: Get bookmarks from LocalStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //TODO: Add bookmark to array
    bookmarks.push(bookmark);
    // Re-set back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}
    // Prevent form from submitting
    e.preventDefault();


// Fentch bookmarks
function fetchBookmarks(){
    // Get bookmarks from LocalStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Get output id
    var bookmarksResults =document.getElementById('bookmarksResults');
    // Build output
    bookmarksResults.innerHTML = '';
    for(var i = 0; i < bookmarks.length; i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarksResults.innerHTML += name;

    }
}
