# API Automation Test

![Jest](https://img.shields.io/badge/Tested_with-Jest-blue)
![Node.js](https://img.shields.io/badge/Powered_by-Node.js-green)
![TypeScript](https://img.shields.io/badge/Built_with-TypeScript-blue)

## Project Description
This project is an API automation testing framework designed to validate the functionality of an image upload API and a ZIP upload API. The tests are executed using Jest and TypeScript to ensure API reliability and correctness.

## Table of Contents
- [Installation and Setup](#installation-and-setup)
- [Running Tests](#running-tests)
- [Usage](#usage)

## Installation and Setup
To set up and run this project in **Visual Studio Code**, follow these steps:

1. Install [Node.js](https://nodejs.org/) from the official website.
2. Install TypeScript globally:
   ```sh
   npm install -g typescript
   ```
3. Open **Visual Studio Code** and navigate to project directory.
   ```sh
   cd /path/to/project
   ```
4. Open a terminal in VS Code (**View** > **Terminal** or `Ctrl + ~`).
5. Install project dependencies:
   ```sh
   npm install
   ```

## Running Tests
You can execute automated tests using Jest within **Visual Studio Code**:

1. Open **Visual Studio Code** and navigate to the project folder.
2. Open a new terminal inside VS Code.
3. Run the tests using the following commands:

- To run a specific test file:
  ```sh
  npx jest imageUpload.test.ts
  npx jest zipUpload.test.ts
  ```
- To run all tests:
  ```sh
  npm test
  ```

## Usage
The test covers two main functionalities:

### Image Upload API
| ID   | Scenario                                  | Expected Outcome |
|------|---------------------------------|-----------------|
| TS01 | Upload a valid image (JPG)       | Returns 200 status with an image URL |
| TS02 | Upload a non-image file (TXT)    | Returns an error message |
| TS03 | Upload no file                   | Returns an error message |
| TS04 | Upload a large image             | Returns an error message |

### Zip Upload API
| ID   | Scenario                                  | Expected Outcome |
|------|---------------------------------|-----------------|
| TS05 | Upload a valid ZIP with images  | Returns 200 status with multiple image URLs |
| TS06 | Upload an empty ZIP file        | Returns an error message |
| TS07 | Upload a non-ZIP file           | Returns an error message |
| TS08 | Upload a corrupted ZIP file     | Returns an error message |

---
This project runs using **Visual Studio Code** as the primary development environment.

## Bug Reports
Bug reports have been moved to **GitHub Issues** for proper tracking and resolution. Please check the repository's [Issues](https://github.com/YOUR_REPO/issues) section for details.

