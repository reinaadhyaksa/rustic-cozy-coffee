import { useEffect } from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    })
  }, [])

  const toggleMobileMenu = () => {
    const menu = document.getElementById('mobile-menu')
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')
  }

  return (
    <div className="bg-amber-50 font-quicksand overflow-x-hidden">
      {/* Navigation */}
      <nav className="bg-amber-900 text-amber-50 p-4 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-dancing-script font-bold">Rustic & Cozy</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-amber-200 transition">Home</a>
            <a href="#about" className="hover:text-amber-200 transition">Our Story</a>
            <a href="#menu" className="hover:text-amber-200 transition">Menu</a>
            <a href="#gallery" className="hover:text-amber-200 transition">Gallery</a>
            <a href="#contact" className="hover:text-amber-200 transition">Visit Us</a>
          </div>
          <button className="md:hidden" onClick={toggleMobileMenu}>
            <FiMenu className="h-6 w-6" />
          </button>
        </div>
        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden flex-col absolute top-16 left-0 right-0 bg-amber-900 p-4 space-y-4 md:hidden">
          <a href="#home" className="hover:text-amber-200 transition" onClick={toggleMobileMenu}>Home</a>
          <a href="#about" className="hover:text-amber-200 transition" onClick={toggleMobileMenu}>Our Story</a>
          <a href="#menu" className="hover:text-amber-200 transition" onClick={toggleMobileMenu}>Menu</a>
          <a href="#gallery" className="hover:text-amber-200 transition" onClick={toggleMobileMenu}>Gallery</a>
          <a href="#contact" className="hover:text-amber-200 transition" onClick={toggleMobileMenu}>Visit Us</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-amber-800 bg-opacity-50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80')] bg-cover bg-center opacity-70"></div>
        <div className="container mx-auto text-center relative z-10 px-4" data-aos="fade-up">
          <h1 className="text-5xl md:text-7xl font-bold text-amber-50 mb-6 font-dancing-script">Rustic & Cozy</h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-2xl mx-auto">Where every cup tells a story and every moment feels like home</p>
          <a href="#menu" className="bg-amber-700 hover:bg-amber-600 text-amber-50 px-6 py-3 rounded-full transition shadow-lg inline-block">Explore Our Menu</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-amber-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-12 font-dancing-script" data-aos="fade-up">Our Story</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2" data-aos="fade-right">
              <img src="https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80" alt="Coffee beans" className="rounded-lg shadow-xl w-full h-auto max-h-96 object-cover" />
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <p className="text-amber-800 mb-4 text-lg">Founded in 2015, Rustic & Cozy began as a dream to create a space where coffee lovers could feel completely at home.</p>
              <p className="text-amber-800 mb-4 text-lg">We source our beans directly from small farmers around the world, ensuring ethical practices and exceptional quality in every cup.</p>
              <p className="text-amber-800 mb-6 text-lg">Our baristas are trained not just in coffee craft, but in creating genuine connections with every customer who walks through our doors.</p>
              <div className="bg-amber-700 text-amber-50 p-4 rounded-lg shadow-inner max-w-md mx-auto md:mx-0">
                <p className="italic font-dancing-script text-xl">"Coffee is more than a drink - it's an experience, a moment of comfort in your day."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-12 font-dancing-script" data-aos="fade-up">Our Menu</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Coffee Menu */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-700" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-bold text-amber-900 mb-4 font-dancing-script">Coffee Selection</h3>
              <div className="space-y-4">
                <div className="border-b border-amber-100 pb-4">
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-amber-800">Ethiopian Yirgacheffe</h4>
                    <span className="text-amber-700">$4.50</span>
                  </div>
                  <p className="text-amber-600 text-sm">Floral notes with citrus undertones</p>
                </div>
                <div className="border-b border-amber-100 pb-4">
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-amber-800">Colombian Supremo</h4>
                    <span className="text-amber-700">$4.00</span>
                  </div>
                  <p className="text-amber-600 text-sm">Rich caramel and nutty flavors</p>
                </div>
                <div className="border-b border-amber-100 pb-4">
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-amber-800">Sumatra Mandheling</h4>
                    <span className="text-amber-700">$4.75</span>
                  </div>
                  <p className="text-amber-600 text-sm">Earthy with chocolatey depth</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-amber-800">House Blend</h4>
                    <span className="text-amber-700">$3.75</span>
                  </div>
                  <p className="text-amber-600 text-sm">Balanced and smooth everyday coffee</p>
                </div>
              </div>
            </div>
            
            {/* Espresso Menu */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-700" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-bold text-amber-900 mb-4 font-dancing-script">Espresso Drinks</h3>
              <div className="space-y-4">
                <div className="border-b border-amber-100 pb-4">
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-amber-800">Espresso</h4>
                    <span className="text-amber-700">$2.50</span>
                  </div>
                  <p className="text-amber-600 text-sm">Single or double shot</p>
                </div>
                <div className="border-b border-amber-100 pb-4">
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-amber-800">Cappuccino</h4>
                    <span className="text-amber-700">$4.00</span>
                  </div>
                  <p className="text-amber-600 text-sm">Classic espresso with steamed milk</p>
                </div>
                <div className="border-b border-amber-100 pb-4">
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-amber-800">Latte</h4>
                    <span className="text-amber-700">$4.50</span>
                  </div>
                  <p className="text-amber-600 text-sm">Creamy espresso with velvety milk</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-amber-800">Mocha</h4>
                    <span className="text-amber-700">$5.00</span>
                  </div>
                  <p className="text-amber-600 text-sm">Chocolate-infused espresso delight</p>
                </div>
              </div>
            </div>
            
            {/* Pastries Menu */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-700" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-2xl font-bold text-amber-900 mb-4 font-dancing-script">Homemade Pastries</h3>
              <div className="space-y-4">
                <div className="border-b border-amber-100 pb-4">
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-amber-800">Croissant</h4>
                    <span className="text-amber-700">$3.50</span>
                  </div>
                  <p className="text-amber-600 text-sm">Buttery and flaky</p>
                </div>
                <div className="border-b border-amber-100 pb-4">
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-amber-800">Cinnamon Roll</h4>
                    <span className="text-amber-700">$4.00</span>
                  </div>
                  <p className="text-amber-600 text-sm">Freshly baked with cream cheese icing</p>
                </div>
                <div className="border-b border-amber-100 pb-4">
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-amber-800">Blueberry Muffin</h4>
                    <span className="text-amber-700">$3.75</span>
                  </div>
                  <p className="text-amber-600 text-sm">Packed with fresh blueberries</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-amber-800">Scone</h4>
                    <span className="text-amber-700">$3.25</span>
                  </div>
                  <p className="text-amber-600 text-sm">Choose from cranberry or chocolate chip</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-amber-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-12 font-dancing-script" data-aos="fade-up">Our Space</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="overflow-hidden rounded-lg shadow-md" data-aos="zoom-in">
              <img src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80" alt="Coffee shop interior" className="w-full h-48 md:h-64 object-cover hover:scale-105 transition duration-500" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md" data-aos="zoom-in" data-aos-delay="100">
              <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80" alt="Coffee preparation" className="w-full h-48 md:h-64 object-cover hover:scale-105 transition duration-500" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md" data-aos="zoom-in" data-aos-delay="200">
              <img src="https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-1.2.1&auto=format&fit=crop&w=2071&q=80" alt="Cozy seating area" className="w-full h-48 md:h-64 object-cover hover:scale-105 transition duration-500" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md" data-aos="zoom-in" data-aos-delay="100">
              <img src="https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" alt="Coffee beans closeup" className="w-full h-48 md:h-64 object-cover hover:scale-105 transition duration-500" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md" data-aos="zoom-in" data-aos-delay="200">
              <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" alt="Barista making coffee" className="w-full h-48 md:h-64 object-cover hover:scale-105 transition duration-500" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md" data-aos="zoom-in" data-aos-delay="300">
              <img src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" alt="Coffee on wooden table" className="w-full h-48 md:h-64 object-cover hover:scale-105 transition duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-amber-800 text-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-dancing-script" data-aos="fade-up">What Our Customers Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-amber-700 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-xl font-bold mr-4">JD</div>
                <div>
                  <h4 className="font-semibold">Jamie D.</h4>
                  <div className="flex text-amber-300">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
              </div>
              <p className="italic">"The Ethiopian Yirgacheffe here is unlike any coffee I've tasted elsewhere. The atmosphere makes it my favorite place to work remotely."</p>
            </div>
            
            <div className="bg-amber-700 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-xl font-bold mr-4">SM</div>
                <div>
                  <h4 className="font-semibold">Sarah M.</h4>
                  <div className="flex text-amber-300">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
              </div>
              <p className="italic">"I come for the coffee but stay for the ambiance. The cinnamon rolls are to die for! Feels like visiting a friend's cozy living room."</p>
            </div>
            
            <div className="bg-amber-700 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-xl font-bold mr-4">TP</div>
                <div>
                  <h4 className="font-semibold">Thomas P.</h4>
                  <div className="flex text-amber-300">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
              </div>
              <p className="italic">"As a coffee purist, I appreciate their attention to detail in brewing methods. The baristas are knowledgeable and passionate."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-12 font-dancing-script" data-aos="fade-up">Visit Us</h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-md mb-8" data-aos="fade-right">
                <h3 className="text-2xl font-bold text-amber-900 mb-4 font-dancing-script">Location</h3>
                <p className="text-amber-800 mb-4">123 Woodland Avenue<br />Greenville, SC 29601</p>
                <p className="text-amber-800">Parking available in the rear</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-right" data-aos-delay="100">
                <h3 className="text-2xl font-bold text-amber-900 mb-4 font-dancing-script">Hours</h3>
                <div className="space-y-2 text-amber-800">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>7:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-2xl font-bold text-amber-900 mb-4 font-dancing-script">Get In Touch</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-amber-800 mb-1">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-amber-800 mb-1">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-amber-800 mb-1">Message</label>
                    <textarea id="message" rows="4" className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
                  </div>
                  <button type="submit" className="bg-amber-700 hover:bg-amber-600 text-amber-50 px-6 py-3 rounded-full transition shadow-lg">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-dancing-script font-bold">Rustic & Cozy</h2>
              <p className="text-amber-200">Coffee House since 2015</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-amber-200 hover:text-amber-50 transition">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-amber-200 hover:text-amber-50 transition">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-amber-200 hover:text-amber-50 transition">
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-6 pt-6 text-center text-amber-200">
            <p>&copy; 2023 Rustic & Cozy Coffee House. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App