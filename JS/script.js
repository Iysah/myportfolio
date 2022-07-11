

// TYPE-WRITER EFFECT
  const textDisplay = document.querySelector('#type');
  const phrases = ['Frontend Developer.', 'Ui/Ux Designer.', 'Logo & Brand Designer.'];
  let i = 0
  let j = 0
  let currrentPhrases = []
  let isDeleting = false 
  let isEnd = false

  function loop () {
      isEnd = false
      textDisplay.innerHTML = currrentPhrases.join('')


      if (i < phrases.length) {
          // Add the letters
        if (!isDeleting && j <= phrases[i].length) {
            currrentPhrases.push(phrases[i][j])
            j++
            textDisplay.innerHTML = currrentPhrases.join('')
        }
        
        // Removing the letters
        if(isDeleting && j <=phrases[i].length) {
            currrentPhrases.pop(phrases[i][j])
            j--
            textDisplay.innerHTML = currrentPhrases.join('')
        }

        if (j == phrases[i].length) {
            isDeleting = true
            isEnd = true
        }

        if (isDeleting && j === 0) {
            currrentPhrases = []
            isDeleting = false
            i++
            if(i == phrases.length) {
                i = 0 
            }
        }
      }
      const speedUp = Math.random() * (80 - 60) + 60
      const normalSpeed = Math.random() * (300 - 200) + 200
      const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed
      setTimeout(loop, time)
  }

  loop();



    // MENU SHOW Y HIDDEN
    const navMenu = document.querySelector('#nav-menu'), 
    navToggle = document.querySelector('#nav-toggle'),
    navClose = document.querySelector('#nav-close');


    // MENU SHOW 
    // Run if constant exists
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        });
    }



    /* ============ MENU HIDDEN ==========*/
    // Run if constant exists
    if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    });
    } 

    /*==================== REMOVE MENU MOBILE ====================*/
    const navLink = document.querySelectorAll('.nav__link')
    

    function linkAction(){
        const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

    /*========== SKILLS ================*/
    const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

    function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i] = 'skills__content skills__close';
    }

    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    } else if (itemClass === 'skills__content skills__open') {
        this.parentNode.className = 'skills__content skills__close'
    }
    }

    skillsHeader.forEach((el) => {
        el.addEventListener('click', toggleSkills)
    });

    /*  =============== QUALIFICATION TABS ================ */
    const tabs = document.querySelectorAll('[data-target'),
    tabContents = document.querySelectorAll('[data-content');

  tabs.forEach(tab =>{
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        });
        target.classList.add('qualification__active');

        tab.forEach(tab =>{
            tab.classList.remove('qualification__active');
        });
        tab.classList.add('qualification__active');
    });
  });


    // / Scrollreveal
    ScrollReveal().reveal('.header');
    ScrollReveal().reveal('.home', { delay: 500 }); 
    // about skills qualification services portfolio testimonial project contact footer
    ScrollReveal().reveal('.about', { delay: 1000 });
    ScrollReveal().reveal('.skills', { delay: 1000 });
    ScrollReveal().reveal('.qualification', { delay: 1000 });
    ScrollReveal().reveal('.services', { delay: 1000 });
    ScrollReveal().reveal('.portfolio', { delay: 1200 });
    ScrollReveal().reveal('.testimonial', { delay: 1000 });
    ScrollReveal().reveal('.project', { delay: 1100 });
    ScrollReveal().reveal('.contact', { delay: 1000 });
    ScrollReveal().reveal('.footer', { delay: 500 });

    /* ================= MODAL ===================== */

    const modalViews = document.querySelectorAll('.services__modal'),
     modalBtns = document.querySelectorAll('.services__button'),
     modalCloses = document.querySelectorAll('.services__modal-close');

    let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active_modal')
    }

    modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener('click', () =>{
        modal(i)
    });
    });

    modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active_modal')
        });
    });
    });


    
   
   /* SCROLL BEHAVIOUR */
   const sections = document.querySelectorAll|('section[id]');

   function scrollActive() {
       const scrollY = window.pageYOffset

       sections.forEach(current =>{
           const sectionHeight = current.offsetHeight;
           const sectionTop = current.offsetTop - 50;
           sectionId = current.getAttribute('id')

           if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
               document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add(active-link);
           } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove(active-link);
           }
       });
   }
   window.addEventListener('scroll', scrollActive);

   /* ========== CHANGE BACKGROUND HEADER =========== */
   function scrollHeader() {
       const nav = document.querySelector('#header');
       // When the scroll is greater than 200 viewport height, add the scroll-header class

       if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
   }
   window.addEventListener('scroll', scrollHeader);


   /* ====== SHOW SCROLL UP ====== */
   function scrollUp() {
       const scrollUp = document.querySelector('#scroll-up');
       // When th scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll
       if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
   }
   window.addEventListener('scroll', scrollUp)

   /* ========= DARK LIGHT THEME ======= */
   const themeButton = document.querySelector('#theme-button')
   const darkTheme = 'dark-theme'
   const iconTheme = 'uil-sun'

   // Previously
   const selectedTheme = localStorage.getItem('selected-theme')
   const selectedIcon = localStorage.getItem('selected-icon')

   //we obtain
   const getcurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
   const getcurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

   // we 
   if (selectedTheme) {
       //
       document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
       themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
   }

   // Activate
   themeButton.addEventListener('click', () => {
       // Add
       document.body.classList.toggle(darkTheme)
       themeButton.classList.toggle(iconTheme)
       // We save the theme
       localStorage.setItem('selected-theme', getcurrentTheme())
       localStorage.setItem('selected-icon', getcurrentIcon())

   });
