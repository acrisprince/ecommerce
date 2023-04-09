import React from 'react';

import { client } from '../lib/client';
import { ApplePhone, FooterBanner, HeroBanner } from '../components';

const AppleMobile = ({ applephones, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h2>Apple Smart Phones</h2>
      <p> Iphones and Ipads</p>
    </div>

    <div className="products-container">
      {applephones?.map((applephone) => <ApplePhone key={applephone._id} applephone={applephone} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "applephone"]';
  const applephones = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { applephones, bannerData }
  }
}

export default AppleMobile;
