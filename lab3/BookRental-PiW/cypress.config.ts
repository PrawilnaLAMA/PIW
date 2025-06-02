import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://piwo-a18af.firebaseapp.com/',
    supportFile: false,
  },
});