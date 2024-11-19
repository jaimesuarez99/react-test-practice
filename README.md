# Login Form and User Card Component

This project is a React-based application that includes a login form and a user card component. It is designed for developers to practice testing with React Testing Library and Vitest. The application is built with Vite for fast and efficient development.

---

## Features

- **Login Form:**
  - A user authentication form with input validation.
  - Integration with `react-hook-form` and `zod` for schema-based validation.
- **User Card:**
  - Displays user information upon successful login.
  - Handles and displays error messages.
- **Testing Setup:**
  - Pre-configured with React Testing Library and Vitest for seamless testing.
  - Includes mock data for comprehensive test coverage.
- **Vite Integration:**
  - Ultra-fast build system optimized for modern web applications.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the App

1. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:5173`.

---

## Project Structure

```plaintext
src/
├── components/
│   ├── LoginForm/
│   │   ├── loginForm.style.css
│   │   └── LoginForm.tsx
│   ├── FormInput/
│   │   ├── formInput.style.css
│   │   └── FormInput.tsx
│   └── UserCard/
│       ├── userCard.style.css
│       └── UserCard.tsx
├── hooks/
│   └── useLogin.ts
├── models/
│   └── index.ts
├── __mock__/
│   └── index.ts
├── App.tsx
├── main.tsx
├── index.css
└── tests/
    └── LoginForm.test.tsx
```

- **`components/`**: Contains reusable components for the application.
- **`hooks/`**: Includes the custom `useLogin` hook.
- **`models/`**: Type definitions and schema validation logic.
- **`__mock__/`**: Mock data for tests.
- **`tests/`**: Unit and integration test files.

---

## Components Overview

### LoginForm Component

**File:** `src/components/LoginForm/LoginForm.tsx`

The `LoginForm` component is the main form for user authentication. It validates input data and handles API calls.

**Features:**

- Validates user input using `react-hook-form` and `zod`.
- Displays error messages for invalid inputs.
- Shows a loader during the login process.
- Renders the `UserCard` component on successful login.

### FormInput Component

**File:** `src/components/FormInput/FormInput.tsx`

A reusable input field component integrated with `react-hook-form`.

**Features:**

- Renders input fields with validation.
- Displays error messages for invalid inputs.

### UserCard Component

**File:** `src/components/UserCard/UserCard.tsx`

Displays user information after a successful login or an error message if the login fails.

**Features:**

- Dynamically displays user data or error messages.
- Uses a clean, accessible layout for user details.

---

## Custom Hook: useLogin

**File:** `src/hooks/useLogin.ts`

A custom React hook for managing login functionality.

**Features:**

- Tracks loading, error, and user data states.
- Handles API requests for user authentication.
- Uses `fetch` for server communication.

---

## Testing

### Running Tests

1. Run all tests:

   ```bash
   npm run test
   # or
   yarn test
   ```

2. Run tests in watch mode:

   ```bash
   npm run test:watch
   # or
   yarn test --watch
   ```

### Test Cases

**File:** `src/tests/LoginForm.test.tsx`

- Tests for the `LoginForm` component:
  - Renders the form correctly.
  - Displays error messages for invalid inputs.
  - Calls the `useLogin` hook on submission.
  - Displays a loader during API calls.
  - Renders the `UserCard` on successful login.

---

## Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the app for production.
- **`npm run preview`**: Preview the production build.
- **`npm run test`**: Run all tests.
- **`npm run test:watch`**: Run tests in watch mode.

---

## Configuration

### Vite Configuration

**File:** `vite.config.ts`

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./testingLibrary.setup.ts",
    globals: true,
  },
});
```

### Vitest Configuration

**File:** `vitest.config.ts`

```ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./testingLibrary.setup.ts",
    globals: true,
  },
});
```

---

## Contribution

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add your feature"
   ```

4. Push to your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Create a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For questions or suggestions, feel free to reach out:

- **GitHub:** [your-username](https://github.com/your-username)
- **Email:** <your-email@example.com>
