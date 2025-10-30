import React from 'react';
import {
  Header,
  Hero,
  DozeeVS,
  Science,
  EasySetup,
  Features,
  Benefits,
  FAQs,
  Impact,
  DownloadBrochure,
  Footer,
} from './components/sections';
import contentData from './data/content.json';

function App() {
  return (
    <div className="font-titillium">
      <Header data={contentData.header} />
      <Hero data={contentData.hero} />
      <DozeeVS data={contentData.dozeeVS} />
      <Science data={contentData.science} />
      <EasySetup data={contentData.easySetup} />
      <Features data={contentData.features} />
      <Benefits data={contentData.benefits} />
      <FAQs data={contentData.faqs} />
      <Impact data={contentData.impact} />
      <DownloadBrochure data={contentData.downloadBrochure} />
      <Footer data={contentData.footer} />
    </div>
  );
}

export default App;



