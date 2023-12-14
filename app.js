/**
 * Define Global Variables
 * 
*/

// Navbar list global variable
const navbarList = document.getElementById("#navbar__list");
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

    });
}

    // Append all elements to the navBarItems
    navBarList.appendChild(listItem); 

    // Attach click event listener to each anchor
    anchor.addEventListener("click", function(event) {
        event.preventDefault();

    // Generate section ID based on index
    const sectionId = `section${index + 1}`;
    
    // Scroll to the section
    const section = document.getElementById(sectionId);

    if(section) {

    section.scrollIntoView({behavior: "smooth"});
    
    };
  });
 

buildNavigationMenu();


// Add class 'active' to section when near top of viewport

function setActiveSection() {

    sections.forEach((section, index) => {
        // Get position information of the element section
        const bounding = section.getBoundingClientRect();
        // Get a specific navItem based of its index
        const navItem = document.querySelectorAll("#navbar__list li")[index];
            
            if(bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
                section.classList.add("your-active-class");
                navItem.classList.add("active-nav-item");

                for(let i=0; i<sections.length; i++) {
                    if(i !== index) {
                        sections[i].classList.remove("your-active-class");

        const otherNavItem = document.querySelectorAll("#navbar__list li")[i];

        // Remove the class from the navItems so they are no longer highlighted
        otherNavItem.classList.remove("active-nav-item");
        }
     }
   } else {

        section.classList.remove("your-active-class");
        navItem.classList.remove("active-nav-item");
   }

// For small screens
if(bounding.top < 0) {
    section.classList.add("your-active-class");
    navItem.classList.add("active-nav-item");

    for(let i=0; i<sections.length; i++) {
        if(i !== index) {
            sections[i].classList.remove("your-active-class");

const otherNavItem = document.querySelectorAll("#navbar__list li")[i];
// Remove the class from the navItems so they are no longer highlighted
otherNavItem.classList.remove("active-nav-item");
        }
    }
} else {
    section.classList.remove("your-active-class");
    navItem.classList.remove("active-nav-item");
  };
 });
};

setActiveSection();



// Scroll to anchor ID using scrollTO event

const scroll = () => {

    const links = document.querySelectorAll("#menu__link");
    
    links.forEach(link => {
        link.addEventListener('click', () => {
            for(i=0; i<section; i++) {
                section[i].addEventListener("click", sectionScroll(link));
            };
        });
    });
};

scroll();


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 



// Scroll to section on link click



// Set sections as active

