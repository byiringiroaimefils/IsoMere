# IsoMere - Children's Story Platform Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [User Guide](#user-guide)
3. [System Architecture](#system-architecture)
4. [Technical Details](#technical-details)
5. [Installation Guide](#installation-guide)

## Introduction

### About IsoMere
IsoMere is a comprehensive children's story platform designed to provide educational and entertaining content through stories, proverbs, and biblical narratives. The platform offers different subscription tiers to accommodate various user needs.

### Key Features
- Story reading and management
- Proverb collections
- Biblical stories
- User authentication
- Subscription management
- Content creation tools

## User Guide

### Getting Started

#### Account Creation
1. Visit the IsoMere homepage
2. Click "Create Account"
3. Fill in required information
4. Verify your email

#### Subscription Plans
- **Free Tier**
  - View-only access to all content
  - No creation privileges

- **3-Month Subscription ($0.50)**
  - Full access to content
  - Create up to 2 articles per month
  - Edit and delete capabilities
  - Duration: 3 months

- **Annual Subscription ($1.50)**
  - Unlimited article creation
  - Full platform access
  - Premium features
  - Duration: 12 months

### Using the Platform

#### Reading Content
1. Browse stories on the homepage
2. Use categories to filter content
3. Click on stories to read full content
4. Access proverbs and biblical stories through navigation menu

#### Creating Content (Subscribed Users)
1. Navigate to content creation section
2. Choose content type (Story/Proverb/Biblical)
3. Fill in required fields
4. Add images (if applicable)
5. Submit for publication

#### Managing Content
1. Access your content through dashboard
2. Edit or delete as needed
3. Monitor engagement statistics

## System Architecture

### Frontend Architecture
- React 18 with TypeScript
- Tailwind CSS for styling
- Clerk for authentication
- CKEditor for rich text editing

### Backend Architecture
- Node.js with Express
- MongoDB database
- RESTful API design
- JWT authentication

### Database Schema

#### Stories Collection
```javascript
{
  Title: String,
  Author: String,
  image: String,
  Description: String,
  timestamps: true
}
```

#### Proverbs Collection
```javascript
{
  TitleofProverb: String,
  Author: String,
  Proverb: String,
  timestamps: true
}
```

## Technical Details

### API Endpoints

#### Stories
```
GET    /stories         - Get all stories
POST   /story          - Create new story
PUT    /EditStory/:id  - Update story
DELETE /deleteStory/:id - Delete story
```

#### Proverbs
```
GET    /proverbs         - Get all proverbs
POST   /proverb         - Create proverb
PUT    /EditProverb/:id  - Update proverb
DELETE /deleteProverb/:id - Delete proverb
```

### Security Features
- CORS protection
- Input validation
- Rate limiting
- Secure authentication
- Data encryption

## Installation Guide

### Prerequisites
- Node.js (v14+)
- MongoDB
- npm/yarn
- Git

### Frontend Setup
```bash
# Clone repository
git clone https://github.com/byiringiroaimefils/IsoMere/tree/main/FrontEnd

# Install dependencies
cd frontend
npm install

# Configure environment
cp .env.example .env
# Add required environment variables

# Start development server
npm run dev
```

### Backend Setup
```bash
# Clone repository
git clone https://github.com/byiringiroaimefils/IsoMere/tree/main/BackEnd

# Install dependencies
cd backend
npm install

# Configure environment
cp .env.process .env
# Add required environment variables
npm install
# Start server
npm run dev
```

### Environment Variables

#### Frontend
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
VITE_API_URL=your_backend_url
```

#### Backend
```env
MONGODB_URI=your_mongodb_uri
PORT=3001
FRONTEND_URL=http://localhost:8000
```

## Troubleshooting

### Common Issues

1. **Connection Errors**
   - Check MongoDB connection
   - Verify environment variables
   - Confirm port availability

2. **Authentication Issues**
   - Verify Clerk configuration
   - Check token expiration
   - Confirm user permissions

3. **Content Creation Problems**
   - Validate input data
   - Check file size limits
   - Verify subscription status

### Support
For technical support:
- Email: support@isomere.com
- Documentation: docs.isomere.com
- GitHub Issues: [repository-url]/issues

## Updates and Maintenance

### Version History
- v1.0.0 - Initial Release
  - Basic story functionality
  - User authentication
  - Subscription system

### Planned Features
- Audio stories
- Interactive storytelling
- Mobile application
- Offline access

## Contributing
We welcome contributions! Please see our contributing guidelines for more information.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
