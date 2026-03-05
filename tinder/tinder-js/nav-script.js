// Retrieved from Google AI Search Generated Code Retrieved from:

// https://www.thomasledoux.be/blog/highlighting-navigation-items-on-scroll#:~:text=So%20I%20decided%20to%20write,%7D);%20%7D%2C%20options);%20observer.
// https://dev.to/maciekgrzybek/create-section-navigation-with-react-and-intersection-observer-fg0#:~:text=The%20one%20that%20will%20highlight%20the%20correct,element%20will%20show%20up%20in%20the%20viewport.


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

const observerOptions = {
  root: null,
  threshold: 0.6
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;

      navLinks.forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));