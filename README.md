## API Service 

### Overview
The API Service is responsible for providing an API with JWT authentication.  The authentication mechanism implemented in the service utilizes JWTs created from a PEM file for enhanced security.

### Features
- JWT authentication for secure communication.
- `/login` endpoint generates a JWT with a 10-minute expiration time.
- API routes are handled by the `test` router in `routes/api.route`.
- Error handling for 404 and 500 HTTP status codes.

### Prerequisites
- Node.js
- npm (Node package manager)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/alyona-shirpal/auth-test-jwk.git
   

2. ``npm install``
3. ``npm run start``

