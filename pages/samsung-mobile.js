import React from 'react';

import { client } from '../lib/client';
import { SamsungPhone, FooterBanner, HeroBanner } from '../components';

const SamsungMobile = ({ samsungphones, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h2>Samsung Smart Phones</h2>
      <p> Currrent Smart Phones</p>
    </div>

    <div className="products-container">
      {samsungphones?.map((samsungphone) => <SamsungPhone key={samsungphone._id} samsungphone={samsungphone} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "samsungphone"]';
  const samsungphones = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { samsungphones, bannerData }
  }
}

export default SamsungMobile;
