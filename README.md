# POS System

A Point of Sale (POS) system for managing services and cart functionalities, built with React and a JSON server for the backend.

## Features

- Add, remove, increment, and decrement items in the cart.
- Filter services by price.
- Search services by name or description.
- View a detailed receipt after checkout.

---

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [JSON Server](https://github.com/typicode/json-server) installed globally or locally as a dev dependency.

---

### Step 1: Clone the Repository

Open a terminal and run these commands:

```bash
git clone <repository-url>
cd pos-system

```
### Step 2: Setup the Backend (JSON Server)
Navigate to the backend folder:

```bash
cd backend
npx json-server --watch db.json --port 5000

```
### Step 3: Setup the Frontend (React Application)
Navigate to the frontend folder:

```bash
cd frontend
npm install
npm start
```
The application will be accessible at http://localhost:3000.
