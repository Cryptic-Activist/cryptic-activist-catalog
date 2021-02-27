import React, { FC } from 'react';

import Hero from '../components/page/Home/Hero';
import FindOffer from '../components/page/Home/FindOffer';
import WhatYouCanDo from '../components/page/Home/WhatYouCanDo';

const Home: FC = () => {
  return (
    <>
      <Hero />
      <FindOffer />
      <WhatYouCanDo />
    </>
  );
};

export default Home;
