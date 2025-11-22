# API LESSONS

## React + Vite Configuration
- npm create vite@latest react --template-react
- TailwindCSS for styling - npm install tailwindcss @tailwindcss/vite
- Include the tailwindcss in vite.config.js
- Code example below
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  import tailwindcss from '@tailwindcss/vite'
  
  // https://vite.dev/config/
  export default defineConfig({
    plugins: [react(),tailwindcss()],
  })

  ## API Approach
  - Used built in "Fetch" to practice on small project
  - Used method such as POST, GET, PUT, DELETE mimicking a backend server
  - User can add, delete, reload page
  - Implemented API consuming using "https://jsonplaceholder.typicode.com/users" for real time practice
  - Use try-catch block to handle errors
  - Since practice I intend to use async approach for promising sake.
  - For best practice and industry, I made use of third party API "AXIOS"
  - Used the following to install axios
    npm install axios [Node Package Manager]
    yarn add axios
    bower install axios
    pnpm add axios
   <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> [Don't use for production-ready app]