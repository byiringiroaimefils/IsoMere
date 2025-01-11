# IsoMere Backend API Documentation

## Overview
Backend API for IsoMere, a children's story platform providing endpoints for stories, proverbs, and biblical stories management.

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

## Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm/yarn

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies: `npm install`
4. Set up environment variables (see below)
5. Start the server: `npm start`

## API Endpoints

### Stories API
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/story` | Create new story |
| GET | `/story/:id` | Get story by ID |
| GET | `/Stories` | Get all stories |
| DELETE | `/deleteStory/:id` | Delete story by ID |
| PUT | `/EditStory/:id` | Update story by ID |

### Proverbs API
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/proverb` | Create new proverb |
| GET | `/proverb/:id` | Get proverb by ID |
| GET | `/proverbs` | Get all proverbs |
| DELETE | `/deleteProverb/:id` | Delete proverb by ID |
| PUT | `/EditProverb/:id` | Update proverb by ID |

### Biblical Stories API
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/InsertBiblical` | Create new biblical story |
| GET | `/selectBiblical` | Get all biblical stories |
| GET | `/selectByIdB/:id` | Get biblical story by ID |
| DELETE | `/deleteBStory/:id` | Delete biblical story by ID |
| PUT | `/EditBiblical/:id` | Update biblical story by ID |

## Data Models

### Story Schema
```javascript
{
  Title: String (required),
  Author: String (required),
  image: String (required),
  Decription: String (required),
  timestamps: true
}
```

### Proverb Schema
```javascript
{
  TitleofProverb: String (required),
  Author: String (required),
  Proverb: String (required),
  timestamps: true
}
```

### Biblical Story Schema
```javascript
{
  Title: String (required),
  Author: String (required),
  image: String (required),
  Decription: String (required),
  timestamps: true
}
```

## Error Handling
- 400: Bad Request - Missing required fields
- 500: Server Error - Database operation failure

## Security
- CORS enabled with specific origin
- Environment variables for sensitive data
- Input validation on all endpoints

## Development
```bash
# Run in development mode with hot reload
npm run dev

# Run in production mode
npm start
```

## Database Connection
The application uses MongoDB Atlas. Connection is managed through the `connectDB` function in `DB.js`.

## Contributing
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## License
This project is licensed under the MIT License. See the LICENSE file for more details.


