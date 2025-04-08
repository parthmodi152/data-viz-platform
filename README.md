
# Visual Insight Flow - Technical Assessment

## Setup Instructions

1. Clone the repository
2. Run `npm install`
3. Configure environment variables:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. Run `npm run dev` to start the application

## Features Implemented

- Interactive dashboard with charging station data visualization
- Graph section with responsive line charts using Recharts
- KPI cards displaying key performance metrics
- Scenario comparison section
- Mobile, tablet, and desktop responsive layouts
- Authentication with Supabase (email and Google OAuth)
- Variable editing panel (UI implementation)

## Technical Decisions

- **State Management**: Zustand for lightweight, hook-based store management
- **Data Visualization**: Recharts for customizable React-based charts
- **Styling**: Tailwind CSS for utility-first, responsive design
- **Authentication**: Supabase Auth for secure, scalable authentication
- **Routing**: React Router for client-side navigation

## Known Limitations

- Uses dummy data throughout the application
- Selecting/deselecting variables doesn't update the dashboard
- No actual API integration - could implement mock API calls
- Limited test coverage

## Time Spent

Approximately 5-6 hours

## Local Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Application will be available at http://localhost:3000
