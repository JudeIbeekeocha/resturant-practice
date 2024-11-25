import "./styles/about.css";

export function renderAboutPage(){
    const aboutHTML =`
    <div class="about-content">
        <div class="description">
          <h2>Welcome to <span id="agr">Le Jardin Étoilé</span></h2>
          <p>
            Nestled in the heart of downtown, Le Jardin Étoilé is a fine dining
            experience that blends modern culinary techniques with timeless
            flavors. Our chefs use only the freshest, locally sourced
            ingredients to craft dishes that delight both the palate and the
            soul. Whether you're celebrating a special occasion, enjoying a
            romantic evening, or simply indulging your love of exquisite food,
            Le Jardin Étoilé is the perfect destination.
          </p>
          <h3>Our Vision</h3>
          <p>
            At Le Jardin Étoilé, we believe that dining is not just about
            eating—it's about creating moments that linger in your memory. From
            our carefully curated menu to the warm and inviting ambiance, every
            detail is designed to offer you an unforgettable experience.
          </p>
        </div>

        <div class="hours">
          <h2>Hours of Operation</h2>
          <ul>
            <li><strong>Monday to Thursday:</strong> 5:00 PM - 10:00 PM</li>
            <li><strong>Friday & Saturday:</strong> 5:00 PM - 11:00 PM</li>
            <li><strong>Sunday:</strong> Closed</li>
          </ul>
        </div>

        <div class="contact">
          <h2>Contact Us</h2>
          <p><strong>Phone:</strong> (555) 123-4567</p>
          <p><strong>Email:</strong> contact@lejardinetoile.com</p>
        </div>
        
        <div class="location">
          
          <h2>Location</h2>
          <p>123 Starry Lane</p>
          <p>Downtown Cityville, 12345</p>
          <p>Testing changes</p>
        </div>
      </div>

    `
    const contentPage = document.querySelector('#content')

    contentPage.innerHTML = aboutHTML
}