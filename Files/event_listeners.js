                // Get references to the links in the navigation menu
                const homeLink = document.getElementById("home-link");
                const aboutLink = document.getElementById("about-link");
                const productsLink = document.getElementById("products-link");
                const contactLink = document.getElementById("contact-link");
                const kawasakiLink = document.getElementById("kawasaki-link");
                const yamahaLink = document.getElementById("yamaha-link");
                const ktmLink = document.getElementById("ktm-link");
                const pulsarLink = document.getElementById("pulsar-link");

                // Add event listeners to the links
                homeLink.addEventListener("click", () => {
                        window.location.href = "Files/home.html";
                });

                aboutLink.addEventListener("click", () => {
                        window.location.href = "Files/about.html";
                });

                productsLink.addEventListener("click", () => {
                        window.location.href = "Files/products.html";
                });

                contactLink.addEventListener("click", () => {
                        window.location.href = "Files/contact.html";
                });

                // Add event listeners to the brand links
                kawasakiLink.addEventListener("click", () => {
                        window.location.href = "Files/kawasaki.html";
                });
		
		yamahaLink.addEventListener("click", () => {
			window.location.href = "Files/yamaha.html";
		});

		pulsarLink.addEventListener("click", () => {
  			window.location.href = "Files/pulsar.html";
		});

		ktmLink.addEventListener("click", () => {
  			window.location.href = "Files/ktm.html";
 		});

// Add event listener to the Instagram logo image
		const instagramLogo = document.getElementById("instagram-logo");
		instagramLogo.addEventListener("click", () => {
			  window.location.href = "https://www.instagram.com/the_bikerz_junction/";  			
		});

		const whatsappLogo = document.getElementById("whatsapp-logo");
		whatsappLogo.addEventListener("click", () => {
  			window.location.href = "https://wa.me/918012312391";
		});
		const youtubeLogo = document.getElementById("youtube-logo");
		youtubeLogo.addEventListener("click", function() {
  			window.location.href = "https://www.youtube.com/channel/UCkWnB6p4-7QlAsvq8JdLs2g";
		});
		const locationLogo = document.getElementById("location-logo");
		locationLogo.addEventListener("click", () => {
			window.location.href = "https://www.google.com/maps/place/The+BikerZ+Junction/@13.1043158,80.1057703,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52631911d37185:0x104d390809118f8b!8m2!3d13.1043158!4d80.107959!16s%2Fg%2F11s7n0p9x8";
		});
		const facebookLogo = document.getElementById("facebook-logo");
		facebookLogo.addEventListener("click", () => {
  			window.location.href = "https://m.facebook.com/100081391343703/";
		});
