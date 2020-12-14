require('dotenv').config();

export const environment = {
  production: false,
  CONTACT_API_URL: process.env.CONTACT_API_URL,
};
