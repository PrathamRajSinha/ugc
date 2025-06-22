import React, { useEffect, useState } from 'react';
import { Play, Instagram, Mail, Phone, Gift, Utensils, Plane, Smartphone, Camera, Star } from 'lucide-react';
import { ContactForm } from './components/ContactForm';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [showMoreFood, setShowMoreFood] = useState(false);
  const [showMoreTravel, setShowMoreTravel] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const smoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-inter overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in"
             style={{ transform: `translateY(${scrollY * -0.2}px)` }}>
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
              Pratham Raj Sinha
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Voiceover UGC creator for tech, food, grooming, travel & lifestyle brands
            </p>
          </div>
          
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <button onClick={() => smoothScroll('food')} className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center gap-2">
              <Utensils className="w-5 h-5 text-orange-500" />
              <span className="font-medium text-gray-800">Food & Lifestyle</span>
            </button>
            <button onClick={() => smoothScroll('travel')} className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center gap-2">
              <Plane className="w-5 h-5 text-blue-500" />
              <span className="font-medium text-gray-800">Travel & Hotels</span>
            </button>
            <button onClick={() => smoothScroll('contact')} className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center gap-2">
              <Mail className="w-5 h-5 text-green-500" />
              <span className="font-medium text-gray-800">Get In Touch</span>
            </button>
          </div>
          
          <div className="animate-bounce mt-16">
            <div className="w-8 h-8 border-2 border-gray-400 rounded-full mx-auto flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Food & Lifestyle Section */}
      <section id="food" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50" data-animate>
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.food ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Utensils className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Food & Lifestyle</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 text-lg">Aesthetic food styling and lifestyle content that makes mouths water</p>
          </div>
          
          {/* Food Video Samples */}
          <div className={`grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16 transition-all duration-1000 ${isVisible.food ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="group animate-slide-in-left">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                <video 
                  className="w-full aspect-[9/16] object-cover"
                  controls
                  poster="/src/assets/food/food-1.jpeg"
                >
                  <source src="/src/assets/videos/food-video-1.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">Restaurant Review</h3>
                <p className="text-gray-600">Aesthetic food presentation</p>
              </div>
            </div>
            
            <div className="group animate-slide-in-right">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                <img 
                  src="/src/assets/food/food-2.jpeg" 
                  alt="Cafe Experience" 
                  className="w-full aspect-[9/16] object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">Cafe Experience</h3>
                <p className="text-gray-600">Lifestyle & ambiance</p>
              </div>
            </div>
          </div>

          {/* Food Photo Gallery */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible.food ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].slice(0, showMoreFood ? 18 : 8).map((index, i) => (
                <div key={index} className="group relative animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                    <img 
                      src={`/src/assets/food/food-${index}.jpeg`}
                      alt={`Food styling ${index}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mb-16">
              <button
                onClick={() => setShowMoreFood(!showMoreFood)}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {showMoreFood ? 'Show Less' : 'View More Photos'}
              </button>
            </div>
          </div>

          {/* Food Rate Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Food & Lifestyle Packages</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Restaurant Review</h4>
                <div className="text-2xl font-bold text-orange-600 mb-3">₹1,500</div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 1 detailed food review video</li>
                  <li>• 5 aesthetic food photos</li>
                  <li>• Instagram story highlights</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white">
                <h4 className="text-lg font-bold mb-2">Cafe Package</h4>
                <div className="text-2xl font-bold mb-3">₹3,000</div>
                <ul className="space-y-2 text-sm">
                  <li>• 3 UGC videos (ambiance + food)</li>
                  <li>• 10 styled photos</li>
                  <li>• Menu highlight reel</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Barter Available</h4>
                <div className="text-lg font-bold text-emerald-600 mb-3">Product Exchange</div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Content for meals</li>
                  <li>• Long-term partnerships</li>
                  <li>• Social media coverage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel & Hotels Section */}
      <section id="travel" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50" data-animate>
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.travel ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Plane className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Travel & Hotels</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 text-lg">Wanderlust-inducing content that showcases destinations beautifully</p>
          </div>
          
          {/* Travel Video Samples */}
          <div className={`grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16 transition-all duration-1000 ${isVisible.travel ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="group animate-slide-in-left">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                <video 
                  className="w-full aspect-[9/16] object-cover"
                  controls
                  poster="/src/assets/travel/travel-1.jpeg"
                >
                  <source src="/src/assets/videos/travel-video-1.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">Hotel Experience</h3>
                <p className="text-gray-600">Luxury accommodation showcase</p>
              </div>
            </div>
            
            <div className="group animate-slide-in-right">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                <img 
                  src="/src/assets/travel/travel-2.jpeg" 
                  alt="Destination Guide" 
                  className="w-full aspect-[9/16] object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">Destination Guide</h3>
                <p className="text-gray-600">Travel tips & highlights</p>
              </div>
            </div>
          </div>

          {/* Travel Photo Gallery */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible.travel ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[3, 4, 5, 6, 7, 8, 9, 10, 11].slice(0, showMoreTravel ? 9 : 6).map((index, i) => (
                <div key={index} className="group relative animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                    <img 
                      src={`/src/assets/travel/travel-${index}.jpeg`}
                      alt={`Travel destination ${index}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mb-16">
              <button
                onClick={() => setShowMoreTravel(!showMoreTravel)}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {showMoreTravel ? 'Show Less' : 'View More Photos'}
              </button>
            </div>
          </div>

          {/* Travel Rate Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Travel & Hotel Packages</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Hotel Review</h4>
                <div className="text-2xl font-bold text-blue-600 mb-3">₹2,000</div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 1 comprehensive hotel tour</li>
                  <li>• Room & amenities showcase</li>
                  <li>• 8 professional photos</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white">
                <h4 className="text-lg font-bold mb-2">Destination Package</h4>
                <div className="text-2xl font-bold mb-3">₹4,500</div>
                <ul className="space-y-2 text-sm">
                  <li>• 5 travel videos</li>
                  <li>• 15 destination photos</li>
                  <li>• Travel guide content</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Collaboration</h4>
                <div className="text-lg font-bold text-emerald-600 mb-3">Stay Exchange</div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Content for accommodation</li>
                  <li>• Multi-platform coverage</li>
                  <li>• Long-term partnerships</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech & Grooming Section - Hidden until content is provided */}
      <section id="tech" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-indigo-50 hidden" data-animate>
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.tech ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Tech & Grooming</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 text-lg">Authentic reviews and unboxings that build trust and drive conversions</p>
          </div>
          
          {/* Tech Video Samples */}
          <div className={`grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16 transition-all duration-1000 ${isVisible.tech ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="group animate-slide-in-left">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                <video 
                  className="w-full aspect-video object-cover"
                  controls
                  poster="/src/assets/tech/tech-1.jpeg"
                >
                  <source src="/src/assets/videos/tech-video-1.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <Play className="w-8 h-8 text-purple-500 ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">Tech Unboxing</h3>
                <p className="text-gray-600">First impressions & setup</p>
              </div>
            </div>
            
            <div className="group animate-slide-in-right">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                <img 
                  src="/src/assets/tech/tech-2.jpeg" 
                  alt="Grooming Routine" 
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-indigo-500 ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">Grooming Routine</h3>
                <p className="text-gray-600">Product demonstration</p>
              </div>
            </div>
          </div>

          {/* Tech Photo Gallery */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 transition-all duration-1000 delay-300 ${isVisible.tech ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[3, 4, 5, 6, 7, 8, 9, 10].map((index, i) => (
              <div key={index} className="group relative animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 hover:rotate-2">
                  <img 
                    src={`/src/assets/tech/tech-${index}.jpeg`}
                    alt={`Tech product ${index}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                      <Camera className="w-6 h-6 text-purple-500" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Rate Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Tech & Grooming Packages</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Product Review</h4>
                <div className="text-2xl font-bold text-purple-600 mb-3">₹1,200</div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 1 detailed review video</li>
                  <li>• Unboxing experience</li>
                  <li>• 5 product photos</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl p-6 text-white">
                <h4 className="text-lg font-bold mb-2">Complete Package</h4>
                <div className="text-2xl font-bold mb-3">₹3,500</div>
                <ul className="space-y-2 text-sm">
                  <li>• 4 UGC videos</li>
                  <li>• Before/after content</li>
                  <li>• 10 styled photos</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Brand Partnership</h4>
                <div className="text-lg font-bold text-emerald-600 mb-3">Product Exchange</div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Content for products</li>
                  <li>• Honest reviews</li>
                  <li>• Multi-platform posts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 text-lg">Ready to create something amazing? Get in touch!</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <a href="https://instagram.com/thepratham.raj" className="group">
                  <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Instagram</h3>
                    <p className="text-gray-600 text-sm">@thepratham.raj</p>
                  </div>
                </a>
                
                <a href="mailto:prathamrajsinha@gmail.com" className="group">
                  <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600 text-sm">prathamrajsinha@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400">
            © 2025 Pratham Raj Sinha. Creating authentic content that converts.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;