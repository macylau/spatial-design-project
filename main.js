// Function to toggle search input visibility
function toggleSearch() {
  var searchInput = document.getElementById("searchInput");
  if (searchInput.classList.contains("show")) {
    searchInput.classList.remove("show");
    // Perform search when the input is hidden
    performSearch(searchInput.value);
  } else {
    searchInput.classList.add("show");
    searchInput.focus();
  }
}

function performSearch(query) {
  if (query.trim() !== "") {
    window.location.href = `/search?query=${encodeURIComponent(query)}`;
  }
}

// For opening .reality file
var myLink = document.querySelector("#ar-link");
if(myLink.relList.supports("ar")) {
    myLink.style.display = "block";
    else {
        myLink.style.display = "none";
    }
}

//panorama
fullscreenTarget.addEventListener('click', event => {
  console.log('Image clicked!');
  try {
    fullscreenTarget.requestFullscreen();
  } catch (error) {
    console.error('Fullscreen request failed:', error);
  }
});


