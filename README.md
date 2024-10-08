# E-Commerce Website

An e-commerce web application built with React, TypeScript, and Vite. This project allows users to browse products, search for items, and manage their shopping cart, all with efficient state management using Zustand.

## Table of Contents

-   [Overview](#overview)
-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
    -   [Running the Project](#running-the-project)
-   [Folder Structure](#folder-structure)
-   [Scripts](#scripts)
-   [Contributing](#contributing)

---

## Overview

This project is a fully functional e-commerce web application built using modern front-end technologies. Users can search for products and manage a shopping cart, with real-time updates using Zustand for state management.

## Features

-   Product listing.
-   Search functionality for products.
-   Add/remove products from the shopping cart.
-   Persist cart state across sessions using `localStorage`.
-   Responsive design with styled-components for custom styles.
-   Form validation using Yup.

## Technologies Used

-   **React**: For building the user interface.
-   **TypeScript**: For static type checking and better developer experience.
-   **Vite**: For fast development with a modern build setup.
-   **Zustand**: For state management, managing the shopping cart, and global state.
-   **Styled-components**: For styling components with tagged template literals.
-   **ESLint**: For code linting and formatting.
-   **Yup**: For schema-based form validation.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following tools installed:

-   [Node.js](https://nodejs.org/) (version 14 or higher)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/AHB-7/e-com.git
    cd e-com
    ```

2.  **Install dependencies:**

        ````bash
        npm install
        ```
        Or if you're using yarn:

        ```
        yarn install
        ```

### Running the Project

Once the dependencies are installed, you can run the project locally.

```
npm run dev

```

or

```
yarn dev
```

Then click on the localhost link: http://localhost:5173/

### Build the Project for Production

To build the app for production:

```
npm run build
```

or

```
yarn build
```

The production build will be created in the dist/ folder.

## Scripts

-   npm run dev: Starts the development server.
-   npm run build: Builds the app for production.
-   npm run lint: Runs ESLint to check for linting errors.
-   npm run format: Formats code using Prettier.
-   npm run preview: Previews the production build locally.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request.

## Steps:

Fork the repository.
Create a new branch for your feature or bugfix.
Make your changes and commit them with clear and descriptive messages.
Push your changes and submit a pull request.
