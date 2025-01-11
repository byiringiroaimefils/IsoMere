# IsoMere Frontend Documentation

## Overview
Frontend application for IsoMere, a children's story platform built with React, TypeScript, and Tailwind CSS. The application provides interfaces for stories, proverbs, and biblical stories with user authentication.

## Tech Stack
- React 18
- TypeScript
- Tailwind CSS
- Vite
- Clerk (Authentication)
- CKEditor 5
- Axios
- React Router DOM

## Project Structure
```
src/
├── Components/
│   ├── Forms/           # Form components for content creation
│   ├── Pages/           # Page components
│   ├── Service/         # Service-related components
│   ├── Top & View/      # Components for viewing content
│   ├── NavBar.tsx       # Navigation component
│   └── ...
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## Setup & Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with required environment variables:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
VITE_API_URL=your_backend_url
```

4. Start development server:
```bash
npm run dev
```

## Key Features

### Authentication
- User authentication handled by Clerk
- Protected routes for authenticated users
- Role-based access control (Admin/User)

### Content Management
- Create, read, update, and delete stories
- Rich text editing with CKEditor
- Image upload support
- Content categorization

### Subscription Plans
Three subscription tiers:
1. No subscription (Free)
   - View-only access
2. 3-month subscription ($0.50)
   - View, add, update, delete
   - 2 articles per month
3. 12-month subscription ($1.50)
   - Unlimited access and articles

## Components

### NavBar
- Responsive navigation
- Dynamic menu based on authentication state
- Admin controls for authorized users

### Forms
- `FormStory.tsx`: Story creation form
- `FormProverb.tsx`: Proverb creation form
- `FormBiblical.tsx`: Biblical story creation form
- Form validation and error handling

### Content Views
- Responsive grid layouts
- Infinite scroll/pagination
- Content filtering and sorting
- Interactive content expansion

## API Integration

### Endpoints
```typescript
const API_BASE_URL = 'https://babystory-server.onrender.com';

// Stories
GET    /stories
POST   /story
PUT    /EditStory/:id
DELETE /deleteStory/:id

// Proverbs
GET    /proverbs
POST   /proverb
PUT    /EditProverb/:id
DELETE /deleteProverb/:id

// Biblical Stories
GET    /selectBiblical
POST   /InsertBiblical
PUT    /EditBiblical/:id
DELETE /deleteBStory/:id
```

## Styling
- Tailwind CSS for responsive design
- Custom components with consistent styling
- Dark/light mode support
- Mobile-first approach

## State Management
- React hooks for local state
- Context API for global state
- Clerk for authentication state

## Performance Optimization
- Lazy loading of components
- Image optimization
- Caching strategies
- Code splitting

## Error Handling
- Form validation
- API error handling
- User feedback
- Error boundaries

## Development

### Scripts
```json
{
  "dev": "vite --port 8000",
  "build": "tsc && vite build",
  "lint": "eslint . --ext ts,tsx",
  "preview": "vite preview"
}
```

### Code Style
- ESLint configuration
- TypeScript strict mode
- Consistent component structure
- Proper type definitions

## Testing
- Component testing with React Testing Library
- E2E testing with Cypress
- API mocking and integration tests

## Deployment
1. Build the application:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting service

## Contributing
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
