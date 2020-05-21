# portfolio-jerga-api
Api Server - Udemy course material


### 1. Run `npm install` to install all of the dependencies

### 2. in root folder create `env.development.local` file with following content:
```javascript
AUTH0_DOMAIN=YOUR_AUTH0_DOMAIN
AUTH0_CLIENT_ID=YOUR_AUTH0_CLIENT_ID
AUTH0_CLIENT_SECRET=YOUR_AUTH0_CLIENT_SECRET
AUTH0_REDIRECT_URI=http://localhost:3000/api/v1/callback
AUTH0_POST_LOGOUT_REDIRECT_URI=http://localhost:3000/
AUTH0_COOKIE_SECRET=SOME_UNIQUE_STRING //e.g. asd7ad9879d8a7d89adkabsdhjbasbdas98as7d>?{sd9a87dd8a7d9adad7a8d}
AUTH0_NAMESPACE=YOUR_AUTH0_NAMESPACE
AUTH0_AUDIENCE=YOUR_AUTH0_AUDIENCE

PORTFOLIO_API_URL=http://localhost:3001/api/v1
BASE_URL="http://localhost:3000"
```

### 3. run `npm run dev`
