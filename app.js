/**
 * Define Global Variables
 * 
*/

// Navbar list global variable
const navbarList = document.getElementById("navbar__list");
// Sections global variable
const sections = document.querySelectorAll("section");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Build the nav

const navItems = ["Section 1", "Section 2", "Section 3", "Section 4"];

    // This function builds the navigation menu
    function buildNavigationMenu() {
        navbarList.innerHTML="";
    
    
    // Loop over navItems
    navItems.forEach((item, index) => {

        const listItem = document.createElement("li");
        const anchor = document.createElement("a");
        
        // Placeholder for the "li" link
        anchor.href = "#";
        // Sets the text content of the anchor to match the items within the navItem array
       anchor.textContent = item;
        // Adds the anchor tag to the list item
       listItem.appendChild(anchor);


    // Append all elements to the navBarItems
    navbarList.appendChild(listItem); 

    // Attach click event listener to each anchor
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
    

    // Generate section ID based on index
    const sectionId = `section${index + 1}`;
    
    // Scroll to the section
    const section = document.getElementById(sectionId);

    if(section) {

    section.scrollIntoView({behavior: "smooth", block: "center"});
    }
  });
 });
}

// Add class 'active' to section when near top of viewport

function setActiveSection() {

    sections.forEach((section, index) => {
    // Get position information of the element section
    const bounding = section.getBoundingClientRect();
    
    // Get a specific navItem based of its index
    const navItem = document.querySelectorAll("#navbar__list li")[index];   
    
    if(bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
            
            section.classList.add("active");
            navItem.classList.add("active");

    // For mobile screens
    } else if(bounding.top < 0 && bounding.bottom > window.innerHeight) {

            section.classList.add("active");
            navItem.classList.add("active");

    } else {

            section.classList.remove("active");
            navItem.classList.remove("active");
    
  } 
 });
}

buildNavigationMenu();



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Listen for scroll event and update active section based on scroll
    window.addEventListener("scroll", setActiveSection);

//* End Events







   

   


                

 
    





