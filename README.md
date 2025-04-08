
# Data Viz Platform - Technical Assessment

### Login Screen
![image](https://github.com/user-attachments/assets/f18e82eb-3f9b-495b-bec1-8ceb66857eab)

### Dashboard
![image](https://github.com/user-attachments/assets/07f8065f-81e7-4d24-a685-5bb139ba94ab)

### Edit Variable Slide Over
![image](https://github.com/user-attachments/assets/8dd7917d-9042-4cd3-9e3f-6ea049431dd7)

### Responsive

#### Tablet
![image](https://github.com/user-attachments/assets/aebfa002-3b55-496f-bf18-3969b8dc5b79)

#### Mobile
![image](https://github.com/user-attachments/assets/75089bc0-05a4-47da-966f-c3cdc15fdfc4)




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
