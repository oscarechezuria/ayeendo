/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  env: {
    NEXT_PUBLIC_FIREBASE_API_KEY: "AIzaSyCfeDWKgxfhveEob0yGe9J2NvdPpT-p0Zc",
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: "ayeendo-9487f.firebaseapp.com",
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: "ayeendo-9487f",
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: "ayeendo-9487f.appspot.com",
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: "1089667891873",
    NEXT_PUBLIC_FIREBASE_APP_ID: "1:1089667891873:web:68ea005ffff36c0df026e0",
  },
};

module.exports = nextConfig;
