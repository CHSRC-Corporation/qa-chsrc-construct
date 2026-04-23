# Cypress E2E Testing - CHSRC Construct

This project implements end-to-end (E2E) testing for the CHSRC Construct frontend using Cypress. To ensure compatibility across different environments and avoid Node.js version conflicts, the testing infrastructure is fully containerized using Docker.

## Implementation Details

### Infrastructure
- **Docker**: Used to provide a consistent Node.js 20 environment.
- **Docker Compose**: Manages two services:
  - `app`: Builds and serves the application on port 3000.
  - `cypress`: Runs the Cypress test suite against the `app` service.

### Test Coverage
The current test suite covers the primary user flows:
- **User Creation Page**: Validates the presence of all required input fields (Name, Email, Password) and the action button.
- **About Page**: Validates successful navigation to the `/sobre` route and correct rendering of page content.

## How to Run

### Prerequisites
- Docker and Docker Compose installed on your machine.

### Execution Steps
1. Clone the repository.
2. Start the application service:
   ```bash
   docker compose up -d app
   ```
3. Run the E2E tests:
   ```bash
   docker compose run cypress
   ```

## Project Structure
- `Dockerfile`: Application container configuration.
- `docker-compose.yml`: Orchestration for app and testing services.
- `cypress.config.cjs`: Cypress configuration file.
- `cypress/e2e/specs/`: Contains the test specifications.
