# Setup Instructions for Notebookr_2

## Quick Setup

All files have been downloaded. To complete the setup and start working:

### Step 1: Install Required Tools

You need to install `git` and `Node.js` first. Run these commands:

```bash
sudo apt update
sudo apt install -y git nodejs npm
```

### Step 2: Run the Setup Script

Once git and Node.js are installed, run:

```bash
cd /home/aaroh/Notebookr_2
./setup.sh
```

This will:
- ✅ Initialize the git repository
- ✅ Set up the GitHub remote
- ✅ Install all project dependencies
- ✅ Create an initial commit

### Step 3: Test the Project

After setup completes, you can test it:

```bash
npm run dev
```

This will start the development server.

## Working with Git

### Making Changes and Pushing to GitHub

1. **Make your changes** to the code
2. **Stage your changes:**
   ```bash
   git add .
   ```
3. **Commit your changes:**
   ```bash
   git commit -m "Description of your changes"
   ```
4. **Push to GitHub:**
   ```bash
   git push origin main
   ```

### Pulling Latest Changes from GitHub

```bash
git pull origin main
```

## Project Structure

- `client/` - React frontend application
- `server/` - Express backend server
- `api/` - API route handlers
- `shared/` - Shared TypeScript types and schemas

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run check` - Type check TypeScript
- `npm run db:push` - Push database schema changes

## Notes

- The git repository is already configured with the remote: `https://github.com/idkwhatitshouldbeman/Notebookr_2.git`
- All files from GitHub have been copied to this directory
- You may need to set up environment variables (see `.env.example`)

