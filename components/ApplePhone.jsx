import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const ApplePhone = ({ applephone: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/applephone/${slug.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">GH₵{price}</p>
        </div>
      </Link>
    </div>
  )
}

export default ApplePhone