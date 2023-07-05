import React, { useEffect } from 'react';

const HubSpotForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//js.hsforms.net/forms/embed/v2.js';

    document.body.appendChild(script);

    const timeout = setTimeout(() => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '40146263',
          formId: 'b76956f8-4d83-4370-91da-9fabce5f9764'
        });
      }
    }, 2000); // Adjust the delay as needed

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <div id="hubspot-form"></div>;
};

export default HubSpotForm;
