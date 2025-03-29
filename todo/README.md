# Todo App

A simple, responsive to-do list application built with modern web technologies.

## Tech Stack

- **Frontend**: React with TypeScript
- **Backend**: Node.js with Express
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS

## Features

- Two-section layout: Active tasks and Completed tasks
- Full CRUD functionality (Create, Read, Update, Delete tasks)
- Checkbox to mark tasks as complete
- Tasks move between sections when status changes
- Clean, responsive design optimized for all devices

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following content:
   ```
   REACT_APP_SUPABASE_URL=your_supabase_url
   REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Start the backend server (in a separate terminal):
   ```
   node server.js
   ```

## Supabase Setup

1. Create a new project on [Supabase](https://supabase.io/)
2. Create a new table named `tasks` with the following schema:
   - `id`: uuid (primary key)
   - `title`: text
   - `completed`: boolean
   - `created_at`: timestamp with time zone

## Deployment

This application can be deployed to platforms like Vercel, Netlify, or Heroku.

## License

MIT
