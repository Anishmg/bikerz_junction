const language = {
    en: {
      navbar: {
        home: 'Home',
        about: 'About',
        products: 'Products',
        contact: 'Contact',
        searchPlaceholder: 'Search Products...',
        searchButton: 'Search'
      },
      main: {
        welcomeTitle: 'Welcome to The Bikerz Junction!',
        welcomeText: 'Here at The Bikerz Junction, we offer a wide range of high-quality Bike Accessories for every rider. From cruisers to sports bikes, we have it all!'
      },
      footer: {
        rights: '© 2023 Motorbike Shop. All rights reserved.',
        connectTitle: 'Connect With Us'
      }
    },
    es: {
      navbar: {
        home: 'Inicio',
        about: 'Acerca de',
        products: 'Productos',
        contact: 'Contacto',
        searchPlaceholder: 'Buscar productos...',
        searchButton: 'Buscar'
      },
      main: {
        welcomeTitle: '¡Bienvenido a The Bikerz Junction!',
        welcomeText: 'Aquí en The Bikerz Junction, ofrecemos una amplia gama de Accesorios de moto de alta calidad para cada piloto. ¡Desde cruceros hasta motos deportivas, lo tenemos todo!'
      },
      footer: {
        rights: '© 2023 Motorbike Shop. Todos los derechos reservados.',
        connectTitle: 'Conéctate con nosotros'
      }
    }
  };
  
  // set default language to english
  let lang = language.en;
  
  // function to change language
  function setLanguage(lng) {
    // check if the selected language exists in the language object
    if (language[lng]) {
      // set the lang variable to the selected language
      lang = language[lng];
      // update the navbar
      updateNavbar();
      // update the main content
      updateMain();
      // update the footer
      updateFooter();
    }
  }
  
  // function to update the navbar
  function updateNavbar() {
    const homeLink = document.querySelector('.nav-link:nth-of-type(1)');
    const aboutLink = document.querySelector('.nav-link:nth-of-type(2)');
    const productsLink = document.querySelector('.nav-link:nth-of-type(3)');
    const contactLink = document.querySelector('.nav-link:nth-of-type(4)');
    const searchInput = document.querySelector('.search-form input[type="text"]');
    const searchButton = document.querySelector('.search-form button[type="submit"]');
  
    homeLink.textContent = lang.navbar.home;
    aboutLink.textContent = lang.navbar.about;
    productsLink.textContent = lang.navbar.products;
    contactLink.textContent = lang.navbar.contact;
    searchInput.placeholder = lang.navbar.searchPlaceholder;
    searchButton.textContent = lang.navbar.searchButton;
  }
  
  // function to update the main content
  function updateMain() {
    const welcomeTitle = document.querySelector('main h2');
    const welcomeText = document.querySelector('main p');
  
    welcomeTitle.textContent = lang.main.welcomeTitle;
    welcomeText.textContent = lang.main.welcomeText;
  }
  
  // function to update the footer
  function updateFooter() {
    const rightsText = document.querySelector('footer p');
    const connectTitle = document.querySelector('footer h2');
  
    rightsText.textContent = lang.footer.rights;
    connectTitle.textContent = lang.footer.connectTitle;
  }
  
  // initialize the language to english
  setLanguage('en');
  