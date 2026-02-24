


// import Navbar       from './components/Navbar';
// import Hero         from './components/Hero';
// import About        from './components/About';
// import Industries   from './components/Industries';
// import CFDSection   from './components/CFDSection';
// import SugarIndustry from './components/SugarIndustry';
// import FEASection   from './components/FEASection';
// import ValueDelivered from './components/ValueDelivered';
// import Platforms    from './components/Platforms';
// import Contact      from './components/Contact';
// import Footer       from './components/Footer';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       <Industries />
//       <CFDSection />
//       <SugarIndustry />
//       <FEASection />
//       {/* <ValueDelivered /> */}
//       {/* <Platforms /> */}
//       <Contact />
//       <Footer />
//     </>
//   );
// }

// export default App;

import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import About           from './components/About';
import Industries      from './components/Industries';
import CFDSection      from './components/CFDSection';
import SugarIndustry   from './components/SugarIndustry';
import FEASection      from './components/FEASection';

import Contact         from './components/Contact';
import Footer          from './components/Footer';
import ScrollGear      from './components/ScrollGear';

function App() {
  return (
    <>
      {/* Fixed floating gear — scroll drives rotation */}
      <ScrollGear side="right" size={200} />

      <Navbar />
      <Hero />
      <About />
      <Industries />
      <CFDSection />
      <SugarIndustry />
      <FEASection />
      {/* <ValueDelivered />
      <Platforms /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;