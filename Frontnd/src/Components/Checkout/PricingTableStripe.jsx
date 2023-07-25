import React, { useEffect } from 'react';

const PricingTable = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/pricing-table.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return React.createElement('stripe-pricing-table', {
    'pricing-table-id': 'prctbl_1NAKfqDLdJ0Jbl6zNeljK5Bs',
    'publishable-key': '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',
  });
};
export default PricingTable;

// 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
// pk_live_51NAIAqDLdJ0Jbl6zhRyhDsvkStJBGWPsetBNUzXuebRrPt8nbGGXQMsGVxtzejAzI1aLY0sp82AXvdIhIEhJARu200ZyeDN7Ws
