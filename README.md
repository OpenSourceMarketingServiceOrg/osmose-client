# Welcome to Osmose!
## An Email Notification and Marketing Tool that runs in AWS's Permanent Free Tier

You read that right, this application runs for free (well, almost) in AWS's permanent free tier. An email tool that you can run in your existing AWS systems that compares to MailChimp, Exact Target, and Adobe Campaigns.

This project is the SPA portion of the application. It was built using Vue-cli.

The other projects:
* [osmose-serverless](https://github.com/OpenSourceMarketingServiceOrg/osmose-serverless) - Lambda Functions with Serverless Framework
* [osmose-self-signup](https://github.com/OpenSourceMarketingServiceOrg/osmose-self-signup) - Vuejs components that allow the recipients to signup for emails, and edit their account.
* [osmose-email-engine](https://github.com/OpenSourceMarketingServiceOrg/osmose-email-engine) - A Javascript component that handles sending the S.E.S.

### Setup Steps

1. Run `npm install`
2. Place your api routes in `config/osmose.js`
3. `npm start`
