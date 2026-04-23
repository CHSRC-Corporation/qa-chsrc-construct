# qa-chsrc-construct

This repository contains the quality assurance and end-to-end testing suite for the CHSRC Construct frontend application.

## Cypress E2E Testing Implementation

The tests run locally against the frontend application, without Docker.

### Infrastructure

- **Vite**: Serves the application on port 3000 during local development.
- **Cypress**: Runs the end-to-end test suite against `http://localhost:3000`.

### Test Coverage

The test suite covers the primary user flows:

- **User Creation Page**: Validates the presence of all required input fields (Name, Email, Password), action buttons, and form validation logic.
- **About Page**: Validates successful navigation to the `/sobre` route and correct rendering of page content.
- **Layout & Responsiveness**: Verifies the application header and ensures elements are correctly displayed on mobile and tablet viewports.

## How to Run

### Prerequisites

- Node.js 20+ and npm installed on your machine.

### Execution Steps

1. Clone the repository.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the application:

   ```bash
   npm run dev
   ```

4. Run the E2E tests in another terminal:

   ```bash
   npm run cy:run
   ```

## Project Structure

- `vite.config.ts`: Vite application configuration.
- `cypress.config.cjs`: Cypress configuration file.
- `cypress/e2e/specs/`: Contains the test specifications.
