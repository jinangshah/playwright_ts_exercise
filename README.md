## Project Overview
This project is a test automation framework using **Playwright** and **Cucumber** for end-to-end (E2E) testing. It supports test execution, reporting, and rerun mechanisms.

## Prerequisites
- Node.js (>= 16.x)
- Playwright
- TypeScript
- Cucumber.js

## Installation

npm install

## Running Tests

### 1. Run All Tests
npm test

### 2. Run Tests with Tags
npm run test:tags -- "@your-tag"

### 3. Rerun Failed Tests
npm run failed:test

### 4. Generate Reports
npm run report

### 5. Dry Run Tests
npm run dry:test

## Project Structure
📦 TEST_AUTOMATION_EXERCISE
 ┣ 📂 .vscode                # VS Code workspace settings
 ┣ 📂 data                   # Test data files
 ┣ 📂 features               # Gherkin feature files
 ┃ ┣ 📜 project.feature      # Example feature file
 ┣ 📂 src                    # Core automation scripts
 ┃ ┣ 📂 support              # Hooks, utilities, and configurations
 ┃ ┃ ┣ 📜 hooks.ts           # Cucumber hooks
 ┃ ┃ ┣ 📜 utils.ts           # Utilities files 
 ┃ ┃   📂 web                # Web-related utilities
 ┃ ┃   ┣ 📂 commonFunctions  # Reusable helper functions
 ┃ ┃   ┣ 📂 pages            # Page object models (POM)
 ┃ ┃   ┣ 📂 steps            # Step definitions for Cucumber
 ┣ 📂 test-results           # Generated test reports
 ┣ 📜 .env                   # Environment variables
 ┣ 📜 .gitignore             # Ignored files in Git
 ┣ 📜 @rerun.txt             # Stores failed test cases for rerun
 ┣ 📜 cucumber.js            # Cucumber configuration
 ┣ 📜 Jenkinsfile            # CI/CD configuration for Jenkins
 ┣ 📜 package-lock.json      # Dependency lock file
 ┣ 📜 package.json           # Project dependencies & scripts
 ┣ 📜 README.md              # Project documentation
 ┣ 📜 tsconfig.json          # TypeScript configuration
