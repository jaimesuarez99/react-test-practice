# Login Form and User Card Testing Practice

## Description

This project is a simple React application featuring:

- A Login Form that handles user authentication.
- A User Card to display user details upon successful login.

The primary purpose of this project is to provide a starting point for developers to practice writing tests using React Testing Library and Vitest in a Vite-based setup. It includes:

- Form validation using react-hook-form and zod.
- API interactions with mock data.
- Preconfigured environment for testing React components.

## Features

- 🖋️ **Form Validation**: Validates inputs like username and password with react-hook-form and zod.
- 🧾 **Dynamic User Card**: Displays user information upon login success.
- 🔬 **Test-Friendly Setup**: Configured for React Testing Library and Vitest.
- 🚀 **Mock Support**: Includes mock data for testing (user data, API calls, errors).

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or later recommended)
- npm or yarn

### Installation

Clone this repository:

```bash
git clone https://github.com/your-username/login-form-testing-practice.git
Navigate to the project directory:

bash
cd login-form-testing-practice
Install dependencies:

bash
npm install
# or
yarn install
Start the development server:

bash
npm run dev
# or
yarn dev
The app will be available at http://localhost:5173.

Usage
Login Form
A form that collects username and password, validates inputs, and interacts with a mock login API.

Code Example:
tsx
Copiar código
<FormInput
  name="username"
  control={control}
  label="Username"
  type="text"
  error={errors.username}
/>

<FormInput
  name="password"
  control={control}
  label="Password"
  type="password"
  error={errors.password}
/>
User Card
Displays user details like name, email, and image after a successful login.

Code Example:
tsx
Copiar código
<UserCard userData={userData} error={error} />
Testing
Run Tests
This project includes preconfigured tests for React Testing Library and Vitest. Run tests with the following command:

bash
npm test
# or
yarn test
Test Coverage
To generate a test coverage report:

bash
npm test -- --coverage
# or
yarn test --coverage
Included Tests
Login Form Validation: Tests for required fields, invalid inputs, and successful submissions.

User Card Rendering: Tests for proper rendering of user details or error messages.

Custom Hook (useLogin): Tests for API calls, loading state, and error handling.

Folder Structure
<<<<<<< HEAD
plaintext
src/
├── components/
│   ├── LoginForm.tsx // Login form implementation
│   ├── FormInput.tsx // Reusable form input component
│   ├── UserCard.tsx // User card component
├── hooks/
│   ├── useLogin.ts // Custom hook for handling login logic
├── models/
│   ├── schema.ts // Zod validation schema for form inputs
│   ├── mocks.ts // Mock data for tests
├── test/
│   ├── components/
│   │   ├── loginForm.test.tsx // Tests for the LoginForm component
│   │   ├── userCard.test.tsx // Tests for the UserCard component
│   ├── hooks/
│       ├── useLogin.test.ts // Tests for the useLogin hook
├── App.tsx // Main app entry point
=======
scss
Copiar código
src/
├── components/
│   ├── LoginForm.tsx       // Login form implementation
│   ├── FormInput.tsx       // Reusable form input component
│   ├── UserCard.tsx        // User card component
├── hooks/
│   ├── useLogin.ts         // Custom hook for handling login logic
├── models/
│   ├── schema.ts           // Zod validation schema for form inputs
│   ├── mocks.ts            // Mock data for tests
├── test/
│   ├── components/
│   │   ├── loginForm.test.tsx   // Tests for the LoginForm component
│   │   ├── userCard.test.tsx    // Tests for the UserCard component
│   ├── hooks/
│       ├── useLogin.test.ts     // Tests for the useLogin hook
├── App.tsx                  // Main app entry point
>>>>>>> 30253aeb72b74ef606eb1a69729f2edb1d116e55
Mock Data
The project provides mock data for user information and API calls, located in src/models/mocks.ts. You can customize this data for testing purposes.

Example:
Mock User:

typescript
export const mockUser: User = {
  id: 2,
  username: "michaelw",
  email: "michael.williams@x.dummyjson.com",
  firstName: "Michael",
  lastName: "Williams",
  gender: "male",
  image: "https://dummyjson.com/icon/michaelw/128",
  accessToken: "...",
  refreshToken: "...",
};
Mock API URL:

typescript
export const urlReqMock = "https://dummyjson.com/auth/login";
Contributing
Contributions are welcome! If you want to improve the project or add new features, follow these steps:

Fork the repository.

Create a new branch:

bash
git checkout -b feature-name
Commit your changes:

bash
git commit -m "Add feature"
Push the branch and open a Pull Request.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

Contact
If you have any questions or feedback, feel free to reach out or open an issue on GitHub!
<<<<<<< HEAD


Let me know if you need any further adjustments! 😊
```
=======
>>>>>>> 30253aeb72b74ef606eb1a69729f2edb1d116e55
