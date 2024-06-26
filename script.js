const navMenu = document.getElementById("nav-menu");
          navToggle = document.getElementById("nav-toggle");
          navClose = document.getElementById("nav-close")

          
          console.log("hi")
          if(navToggle){
                    navToggle.addEventListener("click", () => {
                              navMenu.classList.add("show-menu")
                    })
          }

          if(navClose){
                    navClose.addEventListener("click", () => {
                              navMenu.classList.remove("show-menu")
                    })
          }

          // Remove Menu Mobile 

          const navLink = document.querySelectorAll(".nav__link")

          const linkAction = () => {
                   const navMenu = document.getElementById("nav-menu")
                   navMenu.classList.remove("show-menu")
          }
          navLink.forEach(n => n.addEventListener("click", linkAction))

          // Add Shadow Header
          const shadoHeader = () => {
                    const header = document.getElementById("header")
                   this.scrollY >= 50 ? header.classList.add("shadow-header") : 
                                        header.classList.remove("shadow-header")
          }

          window.addEventListener("scroll", shadoHeader)

          // show scroll up

          const scrollUp = () => {
                    const scrollUp = document.getElementById("scroll-up")
                    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll") :
                                         scrollUp.classList.remove("show-scroll")
          }

          window.addEventListener("scroll", scrollUp)

          // show scroll roll
          const sections = document.querySelectorAll("section[id]")

          const scrollActive = () => {
                              const scrollDown = window.scrollY

                              sections.forEach(current => {
                                        const sectionHeight = current.offsetHeight,
                                        sectionTop = current.offsetTop -58,
                                        sectionId = current.getAttribute("id"),
                                        sectionClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]");

                                        if(scrollDown > sectionTop &&  scrollDown <= sectionTop + sectionHeight){
                                                 sectionClass.classList.add("active__Link");
                                        } else{
                                                  sectionClass.classList.remove("active__Link");
                                        }
                              })
          }
          window.addEventListener('scroll' , scrollActive)

          // Script Reveal
       const sr = ScrollReveal ({
                 origin: 'top',
                 distance: '60px',
                 duration: 2500,
                 delay: 300,
       })

       sr.reveal('.home__data, .footer')
       sr.reveal('.home__dish', {delay: 500, distance: '100px', origin: 'bottom'})
       sr.reveal('.home__burger', {delay: 1200, distance: '100px', duration: 1500})
       sr.reveal('.home__ingredient', {delay: 1600, interval: 100})
       sr.reveal('.recipe__img, .delivery__img, .contact__image', {origin: 'left'})
       sr.reveal('.recipe__data, .delivery__data, .contact__data', {origin: 'right'})
       sr.reveal('.popular__card', {interval: 100})