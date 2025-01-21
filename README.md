# Remote App (Micro-Frontend)

This is the **Remote App** of a micro-frontend architecture using Webpack Module Federation. It exposes components/modules that can be consumed by a **Host App**.

## Features

- Exposes a `RemoteComponent` for consumption by other apps.
- Uses Webpack 5 with Module Federation for integration.
- Shared dependencies to minimize duplication and ensure consistency.


## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v8 or higher)
- A modern browser (Chrome, Firefox, etc.)

## Project Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/remote-app.git
   cd remote-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3001
   ```

## Configuration

### Webpack Module Federation
The Remote App uses Webpack's Module Federation Plugin to expose components/modules.

**Key Configuration:**
- `name`: Unique identifier for the app (e.g., `remoteApp`).
- `filename`: Name of the file that contains the module definitions (`remoteEntry.js`).
- `exposes`:
  ```javascript
  exposes: {
    './RemoteComponent': './src/RemoteComponent',
  },
  ```
  Exposes the `RemoteComponent` module for consumption.

- **Shared Dependencies**:
  Ensures React and React DOM are shared across micro-frontends to prevent duplication.

## Deployment

This project is deployed using GitHub Pages.

### Steps to Deploy:
1. Build the app:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

3. The app will be available at:
   ```
   https://username.github.io/remote-app/
   ```

## Project Structure

```
remote-app/
├── public/
│   ├── index.html          # HTML template
├── src/
│   ├── components/
│   │   └── RemoteComponent.jsx  # Exposed remote component
│   ├── index.js            # Entry point
├── package.json            # Project metadata and scripts
├── webpack.config.js       # Webpack configuration
```

## Scripts

- `npm start` - Runs the development server.
- `npm run build` - Builds the app for production.
- `npm run deploy` - Deploys the app to GitHub Pages.

## Dependencies

### Core
- `react` (v18.2.0)
- `react-dom` (v18.2.0)

### DevDependencies
- `webpack` (v5.x)
- `webpack-dev-server` (v5.x)
- `webpack-cli` (v6.x)
- `html-webpack-plugin` (v5.x)
- `babel-loader` (v9.x)
- `gh-pages` (v5.x)

## Troubleshooting

### Common Issues

1. **Host App Cannot Load Remote Module**
   - Ensure the `remoteEntry.js` file is correctly deployed.
   - Check the `remoteEntry.js` URL in the Host App's `webpack.config.js`.

2. **Version Mismatch**
   - React versions must match across the Host and Remote Apps.
   - Verify shared dependency versions in `package.json`.

3. **GitHub Pages Not Reflecting Changes**
   - Ensure the `gh-pages` branch is selected in the GitHub Pages settings.
   - Re-run `npm run deploy` after making changes.
