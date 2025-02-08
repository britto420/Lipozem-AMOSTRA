import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu, X, Zap, Battery, Utensils, Atom as Stomach, Sprout } from 'lucide-react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Returns from './pages/Returns';
import Shipping from './pages/Shipping';
import Disclaimer from './pages/Disclaimer';
import References from './pages/References';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleBuyNow = () => {
    window.location.href = "https://buygoods.com/secure/checkout.html";
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const faqs = [
    {
      question: "Is Lipozem Safe to Use?",
      answer: "Absolutely. Lipozem is made with 100% natural ingredients and is manufactured in the USA in an FDA-registered facility that follows Good Manufacturing Practices (GMP). However, as with any supplement, it's a good idea to consult your healthcare provider before starting."
    },
    {
      question: "How Long Will It Take to See Results?",
      answer: "Many users report feeling more energetic and experiencing reduced cravings within the first week. For optimal weight loss results, we recommend using Lipozem consistently for at least 90-180 days, combined with a healthy diet and lifestyle."
    },
    {
      question: "Will I Need to Follow a Strict Diet or Exercise?",
      answer: "While Lipozem works effectively on its own, combining it with a balanced diet and regular physical activity can enhance your results. You don't need to follow any extreme diet or exercise regimen."
    },
    {
      question: "Can I Use Lipozem with Other Supplements?",
      answer: "Lipozem is generally safe to use with other supplements. However, we recommend consulting with your healthcare provider before combining supplements, especially if you're taking any medications."
    },
    {
      question: "How Many Bottles Should I Order?",
      answer: "For best results, we recommend the 6-bottle package (180-day supply). This ensures you have enough Lipozem to achieve your weight loss goals and take advantage of our biggest discount."
    },
    {
      question: "What If Lipozem Doesn't Work for Me?",
      answer: "We stand behind our product with a 180-day money-back guarantee. If you're not completely satisfied with your results, simply return the bottles (even if empty) for a full refund."
    },
    {
      question: "How Fast Will I Receive My Order?",
      answer: "Orders are typically processed within 24 hours and shipped via USPS Priority Mail. US customers usually receive their order within 3-5 business days. International shipping may take 7-14 business days."
    },
    {
      question: "What's the Best Way to Take Lipozem?",
      answer: "Take two capsules daily with water, preferably in the morning before breakfast. For optimal results, maintain consistent daily use."
    }
  ];

  const scientificReferences = [
    {
      title: "Beta-Hydroxybutyrate: Its Role in Fat Metabolism and Weight Loss",
      authors: "Cahill GF Jr.",
      journal: "Metabolic Studies",
      year: "2017"
    },
    {
      title: "Ketogenic Diets and Their Effectiveness in Promoting Weight Loss",
      authors: "Paoli A, et al.",
      journal: "Nutrition & Metabolism",
      year: "2014"
    },
    {
      title: "Exogenous Ketones and Fat Burning: Insights into Weight Loss",
      authors: "Stubbs BJ, et al.",
      journal: "Obesity Research & Clinical Practice",
      year: "2018"
    },
    {
      title: "The Role of Magnesium in Metabolism and Weight Reduction",
      authors: "DiNicolantonio JJ, O'Keefe JH",
      journal: "Open Heart",
      year: "2018"
    },
    {
      title: "Calcium Intake and Fat Loss: Mechanisms and Evidence",
      authors: "Zemel MB",
      journal: "International Journal of Obesity",
      year: "2004"
    },
    {
      title: "Sodium's Impact on Weight Regulation and Water Retention",
      authors: "He FJ, MacGregor GA",
      journal: "Journal of Human Nutrition and Dietetics",
      year: "2018"
    },
    {
      title: "The Appetite-Suppressing Effects of Ketosis: Beta-Hydroxybutyrate's Role",
      authors: "Gibson AA, et al.",
      journal: "Appetite",
      year: "2015"
    },
    {
      title: "Ketone Bodies as a Fuel Source: Implications for Weight Management",
      authors: "Volek JS, Phinney SD",
      journal: "Journal of Nutrition and Metabolism",
      year: "2012"
    },
    {
      title: "Intermittent Fasting and Ketosis: Effects on Fat Loss",
      authors: "Mattson MP, et al.",
      journal: "New England Journal of Medicine",
      year: "2019"
    },
    {
      title: "Low-Carb Diets and Weight Loss: A Comprehensive Review",
      authors: "Brehm BJ, et al",
      journal: "Journal of Clinical Endocrinology & Metabolism",
      year: "2003"
    }
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="fixed top-0 w-full bg-[#6B8E23] py-4 px-6 flex justify-between items-center z-50">
              <div className="flex items-center">
                <img 
                  src="https://www.lipozem.com/assets/main/img/logo.png" 
                  alt="Lipozem Logo" 
                  className="h-8"
                />
              </div>
              
              {/* Menu Desktop */}
              <nav className="hidden md:flex space-x-8 items-center">
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-white hover:text-yellow-300 transition-colors"
                >
                  About Lipozem
                </button>
                <button 
                  onClick={() => scrollToSection('ingredients')} 
                  className="text-white hover:text-yellow-300 transition-colors"
                >
                  Ingredients
                </button>
                <button 
                  onClick={() => scrollToSection('faq')} 
                  className="text-white hover:text-yellow-300 transition-colors"
                >
                  FAQ
                </button>
                <button 
                  onClick={handleBuyNow}
                  className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 transition-all transform hover:scale-105"
                >
                  Order Now
                </button>
              </nav>

              {/* Botão Menu Mobile */}
              <button 
                className="md:hidden text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Menu Mobile */}
              <div className={`fixed inset-y-0 left-0 w-full bg-[#6B8E23] transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                <div className="flex flex-col items-center pt-20 space-y-6">
                  <button 
                    onClick={() => scrollToSection('about')} 
                    className="text-white text-xl hover:text-yellow-300 transition-colors"
                  >
                    About Lipozem
                  </button>
                  <button 
                    onClick={() => scrollToSection('ingredients')} 
                    className="text-white text-xl hover:text-yellow-300 transition-colors"
                  >
                    Ingredients
                  </button>
                  <button 
                    onClick={() => scrollToSection('faq')} 
                    className="text-white text-xl hover:text-yellow-300 transition-colors"
                  >
                    FAQ
                  </button>
                  <button 
                    onClick={handleBuyNow}
                    className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg w-3/4 hover:bg-yellow-500 transition-all transform hover:scale-105"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </header>

            {/* Hero Section */}
            <section id="about" className="hero-bg pt-24 relative bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: "url('/img/hero-banner.png')", 
                backgroundSize: "cover", 
                backgroundPosition: "top center", 
                backgroundRepeat: "no-repeat", 
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center"
              }}>
              <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center h-full">
                <div className="md:w-1/2 text-white">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Discover How Lipozem Can Support <span className="text-yellow-300">Healthy Weight Loss</span>
                  </h1>
                  <p className="text-xl mb-8">Finally, The Easiest Way To Achieve Your Dream Body</p>
                  <button
                    onClick={handleBuyNow}
                    className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-all transform hover:scale-105"
                  >
                    BUY NOW
                  </button>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0">
                  <img 
                    src="https://www.lipozem.com/assets/pages/home/img/product-home.png"
                    alt="Lipozem Bottle"
                    className="w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gray-50">
              <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-4">Activate Your Natural And</h2>
                <h3 className="text-3xl font-bold text-center text-[#6B8E23] mb-12">Healthy Weight Control</h3>
                <p className="text-center text-lg mb-12">
                  Lipozem is the powerful formula that works with your body to burn fat efficiently and naturally.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <Zap className="w-12 h-12 text-yellow-400" />,
                      title: "Boosts Fat Loss",
                      description: "Targets those hard-to-lose areas, especially around your belly, hips, and thighs."
                    },
                    {
                      icon: <Battery className="w-12 h-12 text-yellow-400" />,
                      title: "Boosts Your Metabolism",
                      description: "Helps you burn more calories, even while you're at rest."
                    },
                    {
                      icon: <Utensils className="w-12 h-12 text-yellow-400" />,
                      title: "Curbs Your Appetite",
                      description: "Reduces cravings and keeps you feeling fuller for longer."
                    },
                    {
                      icon: <Zap className="w-12 h-12 text-yellow-400" />,
                      title: "Provides Steady Energy",
                      description: "Say goodbye to fatigue and feel more active and motivated all day."
                    },
                    {
                      icon: <Stomach className="w-12 h-12 text-yellow-400" />,
                      title: "Supports Healthy Digestion",
                      description: "Promotes gut health, helping with overall weight management."
                    },
                    {
                      icon: <Sprout className="w-12 h-12 text-yellow-400" />,
                      title: "100% Natural and Safe",
                      description: "Made with ingredients your body recognizes and uses effectively."
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md hover-float">
                      <div className="flex justify-center mb-4">{benefit.icon}</div>
                      <h4 className="text-xl font-bold text-center mb-2">{benefit.title}</h4>
                      <p className="text-center text-gray-600">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Ingredients Section */}
            <section id="ingredients" className="py-20 bg-white">
              <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Unleash the Power of Science-Backed <span className="text-[#6B8E23]">Ingredients for Fat Loss</span>
                </h2>
                <p className="text-center text-lg mb-12">
                  The formula of <span className='font-bold'>Lipozem</span> blends advanced ingredients that work to enhance your metabolism.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Magnesium Beta Hydroxybutyrate (BHB)",
                      description: "Provides clean energy and supports your body in burning fat instead of carbs.",
                      image: "https://www.lipozem.com/assets/pages/home/img/magnesium-bhb.jpg"
                    },
                    {
                      title: "Calcium Beta Hydroxybutyrate (BHB)",
                      description: "Assists in the fat-burning process, making it easier for your body to shed pounds.",
                      image: "https://www.lipozem.com/assets/pages/home/img/calcium-bhb.jpg"
                    },
                    {
                      title: "Sodium Beta Hydroxybutyrate (BHB)",
                      description: "Offers a steady source of energy, keeping you focused and active throughout the day.",
                      image: "https://www.lipozem.com/assets/pages/home/img/sodium-bhb.jpg"
                    }
                  ].map((ingredient, index) => (
                    <div key={index} className="ingredient-card">
                      <div className="overflow-hidden">
                        <img 
                          src={ingredient.image} 
                          alt={ingredient.title}
                          className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3">{ingredient.title}</h3>
                        <p className="text-gray-600">{ingredient.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 bg-[#6B8E23] text-white">
              <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-4">
                  Claim Your Discounted Lipozem Now
                </h2>
                <h3 className="text-3xl font-bold text-center text-yellow-400 mb-12">
                  While Supplies Last!
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Try Two",
                      subtitle: "60 Days, 2 Bottles",
                      price: 79,
                      savings: 200,
                      total: 158,
                      shipping: 9.99,
                      isPopular: false,
                      image: "https://www.lipozem.com/assets/main/products/img/img-2-bottles.webp"
                    },
                    {
                      title: "Best Value!",
                      subtitle: "180 Days, 6 Bottles",
                      price: 49,
                      savings: 780,
                      total: 294,
                      shipping: 0,
                      isPopular: true,
                      image: "https://www.lipozem.com/assets/main/products/img/img-6-bottles.webp"
                    },
                    {
                      title: "Good Value",
                      subtitle: "90 Days, 3 Bottles",
                      price: 69,
                      savings: 360,
                      total: 207,
                      shipping: 0,
                      isPopular: false,
                      image: "https://www.lipozem.com/assets/main/products/img/img-3-bottles.webp"
                    }
                  ].map((plan, index) => (
                    <div 
                      key={index} 
                      className={`product-card hover-float ${plan.isPopular ? 'featured' : 'regular'} rounded-lg overflow-hidden`}
                    >
                      <div className={`p-6 ${plan.isPopular ? 'bg-yellow-400 text-black' : 'bg-white text-black'}`}>
                        <h3 className="text-2xl font-bold text-center">{plan.title}</h3>
                        <p className="text-center">{plan.subtitle}</p>
                      </div>
                      <div className="p-6 bg-white text-black">
                        <div className="mb-6 flex justify-center">
                          <img 
                            src={plan.image} 
                            alt={plan.title} 
                            className="w-48 sm:w-60 md:w-72 lg:w-80 xl:w-96 h-auto object-contain" 
                          />
                        </div>
                        <div className="text-center mb-4">
                          <span className="text-5xl font-bold">${plan.price}</span>
                          <span className="text-gray-600">/bottle</span>
                        </div>
                        <ul className="space-y-4 mb-6">
                          <li className="flex items-center justify-center">
                            <span className="text-green-500 mr-2">✓</span>
                            YOU SAVE ${plan.savings}!
                          </li>
                          {plan.isPopular && (
                            <li className="flex items-center justify-center">
                              <span className="text-green-500 mr-2">✓</span>
                              BIGGEST DISCOUNT
                            </li>
                          )}
                          <li className="flex items-center justify-center">
                            <span className="text-green-500 mr-2">✓</span>
                            180 DAYS GUARANTEE
                          </li>
                        </ul>
                        <button
                          onClick={handleBuyNow}
                          className={`w-full py-3 rounded-md font-bold ${
                            plan.isPopular 
                              ? 'bg-orange-500 text-white hover:bg-orange-600' 
                              : 'bg-yellow-400 text-black hover:bg-yellow-500'
                          }`}
                        >
                          BUY NOW
                          {plan.isPopular ? ' - Best Offer!' : plan.price === 79 ? ' - Basic Offer' : ' - Good Offer'}
                        </button>
                        <div className="mt-4 text-center">
                          <p>
                            Total: <span className="line-through">${plan.total + plan.savings}</span> ${plan.total}
                          </p>
                          <p className="text-sm">
                            {plan.shipping === 0 ? '+ FREE SHIPPING' : `+$${plan.shipping} SHIPPING`}
                          </p>
                          <div className="mt-2">
                            <img 
                              src="https://www.lipozem.com/assets/main/products/img/cards.png" 
                              alt="Payment Methods"
                              className="h-6 mx-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Seção de Satisfação Garantida */}
                <div className="max-w-4xl mx-auto mt-16 bg-white rounded-lg p-8">
                  <div className="flex justify-center mb-6">
                    <img 
                      src="https://www.lipozem.com/assets/pages/home/img/guarantee-seal.webp"
                      alt="100% Satisfaction Guarantee"
                      className="w-32 h-32"
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-center text-black mb-2">
                    100% Satisfaction or Your Money Back
                  </h2>
                  <h3 className="text-2xl font-semibold text-center text-[#6B8E23] mb-6">
                    180-Day Guarantee
                  </h3>
                  <p className="text-gray-700 text-center">
                    We're so confident you'll achieve incredible results that we back Lipozem with a 100% satisfaction guarantee for 180 days. Start using it as soon as it arrives, and within days, you may notice an increase in energy, a clearer mind, and reduced cravings. As you continue your journey, you could start to see gradual weight loss and a reduction in stubborn fat, making it the perfect time to track your progress. If after several weeks or even months you're not completely satisfied, we'll refund your money in full. With Lipozem, you're truly in control of your weight loss journey.
                  </p>
                  
                  {/* Correção das imagens para responsividade */}
                  <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
                    <img src="https://www.lipozem.com/assets/pages/home/img/gmp.png" alt="GMP Certified" className="h-20 md:h-24" />
                    <img src="https://www.lipozem.com/assets/pages/home/img/fda.png" alt="FDA Approved" className="h-20 md:h-24" />
                    <img src="https://www.lipozem.com/assets/pages/home/img/nat.png" alt="100% Natural" className="h-20 md:h-24" />
                    <img src="https://www.lipozem.com/assets/pages/home/img/usa.png" alt="Made in USA" className="h-20 md:h-24" />
                    <img src="https://www.lipozem.com/assets/pages/home/img/gmo.png" alt="GMO Free" className="h-20 md:h-24" />
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-20 bg-[#6B8E23]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <span className="text-2xl">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 border-t">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section com novos estilos */}
      <section className="py-20 bg-[#6B8E23] text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Claim Your Discounted Lipozem Now
          </h2>
          <h3 className="text-3xl font-bold text-center text-yellow-400 mb-12">
            While Supplies Last!
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Try Two",
                subtitle: "60 Days, 2 Bottles",
                price: 79,
                savings: 200,
                total: 158,
                shipping: 9.99,
                isPopular: false,
                image: "https://www.lipozem.com/assets/main/products/img/img-2-bottles.webp"
              },
              {
                title: "Best Value!",
                subtitle: "180 Days, 6 Bottles",
                price: 49,
                savings: 780,
                total: 294,
                shipping: 0,
                isPopular: true,
                image: "https://www.lipozem.com/assets/main/products/img/img-6-bottles.webp"
              },
              {
                title: "Good Value",
                subtitle: "90 Days, 3 Bottles",
                price: 69,
                savings: 360,
                total: 207,
                shipping: 0,
                isPopular: false,
                image: "https://www.lipozem.com/assets/main/products/img/img-3-bottles.webp"
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`product-card hover-float ${plan.isPopular ? 'featured' : 'regular'} rounded-lg overflow-hidden`}
              >
                <div className={`p-6 ${plan.isPopular ? 'bg-yellow-400 text-black' : 'bg-white text-black'}`}>
                  <h3 className="text-2xl font-bold text-center">{plan.title}</h3>
                  <p className="text-center">{plan.subtitle}</p>
                </div>
                <div className="p-6 bg-white text-black">
                  <div className="mb-6 flex justify-center">
                    <img 
                      src={plan.image} 
                      alt={plan.title} 
                      className="w-48 sm:w-60 md:w-72 lg:w-80 xl:w-96 h-auto object-contain" 
                    />
                  </div>
                  <div className="text-center mb-4">
                    <span className="text-5xl font-bold">${plan.price}</span>
                    <span className="text-gray-600">/bottle</span>
                  </div>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-center justify-center">
                      <span className="text-green-500 mr-2">✓</span>
                      YOU SAVE ${plan.savings}!
                    </li>
                    {plan.isPopular && (
                      <li className="flex items-center justify-center">
                        <span className="text-green-500 mr-2">✓</span>
                        BIGGEST DISCOUNT
                      </li>
                    )}
                    <li className="flex items-center justify-center">
                      <span className="text-green-500 mr-2">✓</span>
                      180 DAYS GUARANTEE
                    </li>
                  </ul>
                  <button
                    onClick={handleBuyNow}
                    className={`w-full py-3 rounded-md font-bold ${
                      plan.isPopular 
                        ? 'bg-orange-500 text-white hover:bg-orange-600' 
                        : 'bg-yellow-400 text-black hover:bg-yellow-500'
                    }`}
                  >
                    BUY NOW
                    {plan.isPopular ? ' - Best Offer!' : plan.price === 79 ? ' - Basic Offer' : ' - Good Offer'}
                  </button>
                  <div className="mt-4 text-center">
                    <p>
                      Total: <span className="line-through">${plan.total + plan.savings}</span> ${plan.total}
                    </p>
                    <p className="text-sm">
                      {plan.shipping === 0 ? '+ FREE SHIPPING' : `+$${plan.shipping} SHIPPING`}
                    </p>
                    <div className="mt-2">
                      <img 
                        src="https://www.lipozem.com/assets/main/products/img/cards.png" 
                        alt="Payment Methods"
                        className="h-6 mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
          </section>

            {/* Scientific References */}
            <section className="py-20 bg-white">
              <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Scientific References</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {scientificReferences.map((ref, index) => (
                    <div key={index} className="text-sm text-gray-600">
                      {index + 1}. "{ref.title}" - {ref.authors} ({ref.journal})
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-12">
              <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-center gap-4 text-center mb-8">
                  <a href="/contact" className="hover:text-yellow-300 whitespace-nowrap">Contact</a>
                  <a href="/terms" className="hover:text-yellow-300 whitespace-nowrap">Terms</a>
                  <a href="/privacy" className="hover:text-yellow-300 whitespace-nowrap">Privacy</a>
                  <a href="/returns" className="hover:text-yellow-300 whitespace-nowrap">Return Policy</a>
                  <a href="/shipping" className="hover:text-yellow-300 whitespace-nowrap">Shipping</a>
                  <a href="/disclaimer" className="hover:text-yellow-300 whitespace-nowrap">Disclaimer</a>
                  <a href="/references" className="hover:text-yellow-300 whitespace-nowrap">References</a>
                </div>
                
                <div className="max-w-4xl mx-auto text-center text-sm space-y-6">
                  <p>
                    Statements on this website have not been evaluated by the Food and Drug Administration. 
                    Products are not intended to diagnose, treat, cure or prevent any disease.
                  </p>
                  <p>
                    The website's content and the product for sale is based upon the author's opinion and is provided solely on an "AS IS" and "AS AVAILABLE" basis. 
                    You should do your own research and confirm the information with other sources when searching for information regarding health issues 
                    and always review the information carefully with your professional health care provider before using any of the protocols presented on this 
                    website and/or in the product sold here.
                  </p>
                  <p>
                    Some names and personal identifying information on this site have been changed to protect the privacy of individuals.
                  </p>
                  <p>
                    © Lipozem Research {new Date().getFullYear()}. All Rights Reserved.
                  </p>
                </div>

                <div className="mt-8 flex flex-col justify-center items-center space-y-4 border-t border-gray-800 pt-8">
  <img 
    src="https://www.buygoods.com/images/buygoods_black.png" 
    alt="BuyGoods Logo"
    className="h-16"
  />
  <p className="text-xs max-w-2xl text-gray-400 text-center">
    BuyGoods is the retailer of this product. BuyGoods is a registered trademark of BuyGoods, a Delaware 
    corporation located at 1201 N Orange Street Suite #7223, Wilmington, DE, 19801, USA and used by 
    permission. BuyGoods role as retailer does not constitute an endorsement, approval or review of this product 
    or any claim, statement or opinion used in promotion of this product.
  </p>
</div>

              </div>
            </footer>
          </div>
        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/references" element={<References />} />
      </Routes>
    </Router>
  );
}

export default App;