# AI Rules for Girish - Portfolio Application

This document outlines the technical stack, component usage guidelines, and best practices for developing this application.

## Tech Stack Overview

*   **React & Next.js:** The application is built using React for the UI, leveraging Next.js for its framework capabilities, including file-system routing and server-side rendering (though currently configured for static export).
*   **TypeScript:** All code is written in TypeScript for type safety and improved developer experience.
*   **Tailwind CSS:** Styling is exclusively handled using Tailwind CSS for utility-first, responsive design.
*   **Shadcn/ui:** Pre-built, customizable UI components from Shadcn/ui are used to ensure a consistent and accessible design system.
*   **Zustand:** A lightweight and fast state management library used for global application state, particularly for managing window states and themes.
*   **Framer Motion:** Utilized for smooth and engaging animations throughout the user interface.
*   **Lucide React:** Provides a comprehensive set of customizable SVG icons.
*   **React RND:** Enables the draggable and resizable window functionality, mimicking a desktop environment.
*   **React Hook Form & Zod:** Used together for robust form management and schema-based validation.

## Library Usage Rules

*   **UI Components:**
    *   Always prioritize using components from `components/ui/` (Shadcn/ui).
    *   If a required component is not available in `components/ui/` or needs significant custom behavior, create a new component in `src/components/` and style it with Tailwind CSS. **Do not modify existing files within `components/ui/`**.
*   **Styling:**
    *   All styling must be done using Tailwind CSS classes. Avoid inline styles or separate CSS files unless absolutely necessary for global styles (like `app/globals.css`).
*   **State Management:**
    *   For global application state (e.g., window management, theme), use Zustand as demonstrated in `lib/store.ts`.
    *   For local component state, use React's `useState` and `useReducer` hooks.
*   **Animations:**
    *   Use Framer Motion for all animations and transitions to maintain consistency and performance.
*   **Icons:**
    *   Use icons from the `lucide-react` library.
*   **Window Management:**
    *   The `react-rnd` library is used for the draggable and resizable window behavior. Ensure new windows or modifications adhere to the `WindowWrapper` component structure.
*   **Forms:**
    *   For any forms, use `react-hook-form` for form state and validation, paired with `zod` for schema definition.
*   **Theming:**
    *   The `next-themes` library is integrated for dark/light mode toggling. Utilize the `isDarkMode` state from `useWindowStore` for conditional styling.
*   **Routing:**
    *   This application uses Next.js's file-based routing system (e.g., `app/page.tsx`). Navigation within the application is primarily handled by opening and managing "windows" via the `useWindowStore` context, rather than traditional client-side routing like React Router.

## Where to Pass API Keys

API keys and other sensitive credentials should **never be hardcoded** directly into your application's source code, especially in client-side files.

For this Next.js application, you should use **Environment Variables**:

1.  **Create a `.env.local` file** in the root directory of your project (next to `package.json`).
2.  **Add your API keys** to this file.
    *   For API keys that need to be exposed to the browser (client-side), prefix them with `NEXT_PUBLIC_`.
        ```
        NEXT_PUBLIC_YOUR_API_KEY=your_public_api_key_here
        ```
    *   For API keys that should only be accessible on the server-side (e.g., for backend API calls if you were to add server functions), do not prefix them.
        ```
        YOUR_SECRET_API_KEY=your_secret_api_key_here
        ```
3.  **Access them in your code:**
    *   In client-side components (files with `'use client'`), you can access `NEXT_PUBLIC_` variables directly:
        ```typescript
        const apiKey = process.env.NEXT_PUBLIC_YOUR_API_KEY;
        ```
    *   In server-side code (e.g., Next.js API routes or `getServerSideProps`), you can access both prefixed and non-prefixed variables:
        ```typescript
        const secretKey = process.env.YOUR_SECRET_API_KEY;
        ```

Remember to restart your development server after adding or modifying `.env.local` files for the changes to take effect.