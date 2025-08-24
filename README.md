# Personal Dashboard Website

A professional, dashboard-style personal website built with React and Tailwind CSS. This site showcases personal information, experience, skills, projects, education, and contact information in a clean, modern interface with light and dark mode support.

## Features

- 📱 Responsive design for desktop, tablet, and mobile
- 🌓 Light and dark mode toggle
- 🎨 Modern dashboard UI with cards, grids, and clean typography
- 📊 Skills visualization with progress bars
- 📜 Experience timeline showcasing professional history
- 📁 Project portfolio with hover effects
- 📧 Contact form (static demonstration)
- 🔗 Social media links and contact information
- 📥 Resume download button

## Tech Stack

### Frontend
- React with Vite for fast development
- Tailwind CSS for styling
- React Icons for high-quality icons
- React Scroll for smooth scrolling

### Backend
- .NET 8.0 Web API
- Azure Cosmos DB for contact form data storage

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Navigate to the project directory
   ```
   cd mysite
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the frontend development server
   ```
   npm run dev
   ```

4. In another terminal, start the backend API server
   ```
   cd api
   dotnet run
   ```

5. Open your browser and visit `http://localhost:5173`

### Building for Production

```
npm run build
```

The build output will be in the `dist` folder, ready to be deployed to any static site hosting service like GitHub Pages, Netlify, or Vercel.

## Customization

- Replace placeholder content with your personal information in the sections files
- Modify the sections in `src/sections/` to add, remove, or edit content
- Update the color scheme in `tailwind.config.js` to match your personal brand
- Add your own profile picture in the Hero section (replace the placeholder URL)
- Update links to your social media and GitHub profiles

## Deployment

### Frontend
The frontend can be deployed to any static site hosting service:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- Azure Static Web Apps

### Backend
The backend API is configured for deployment to Azure App Service using GitHub Actions.

### Azure Deployment Configuration

1. **Required GitHub Secrets**
   
   To deploy successfully with the GitHub workflow, add these secrets to your repository:
   
   - `AZURE_WEBAPP_NAME`: The name of your Azure Web App for the backend API
   - `AZURE_WEBAPP_PUBLISH_PROFILE`: The publish profile from your Azure Web App
   - `AZURE_WEBAPP_URL`: The URL of your deployed backend API (e.g., https://your-api.azurewebsites.net)

2. **Azure App Service Configuration**
   
   After deployment, ensure the App Service has these application settings:
   
   - `CosmosDb:AccountEndpoint`: Your Cosmos DB endpoint URL
   - `CosmosDb:AccountKey`: Your Cosmos DB primary key
   - `CosmosDb:DatabaseName`: "MySiteDb" (or your chosen name)
   - `CosmosDb:ContainerName`: "GetInTouchTable" (or your chosen name)

3. **Azure Static Web Apps Configuration**
   
   Configure your Static Web App to route API requests to your App Service:
   
   - Add a route in the Static Web App configuration: `/api/*` → your App Service URL
