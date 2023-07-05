import React from 'react';

const HubSpotForm = () => {
  return (
    <>
      <script
        type="text/javascript"
        src="//js.hsforms.net/forms/embed/v2.js"
        async
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            hbspt.forms.create({
              region: "na1",
              portalId: "40146263",
              formId: "b76956f8-4d83-4370-91da-9fabce5f9764"
            });
          `,
        }}
      async ></script>
    </>
  );
};

export default HubSpotForm;
