# Development Setup Guide

This guide will help you set up your development environment for this project.

## Prerequisites

### 1. Install Node Version Manager (nvm)

NVM is the recommended way to install and manage Node.js versions. It allows you to easily switch between different Node.js versions.

#### For Linux/macOS:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

#### For Windows:
Download and install [nvm-windows](https://github.com/coreybutler/nvm-windows/releases)

### 2. Install Node.js

After installing nvm, install the latest LTS version of Node.js:

```bash
nvm install --lts
nvm use --lts
```

Verify the installation:
```bash
node --version
npm --version
```

### 3. Install pnpm

Once Node.js is installed, install pnpm globally:

```bash
npm install -g pnpm
```

Verify pnpm installation:
```bash
pnpm --version
```

### 4. AWS CLI Setup

This project uses AWS services through SST. You'll need to:

1. Install the AWS CLI:
```bash
# For macOS
brew install awscli

# For Linux
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# For Windows
# Download the MSI installer from https://awscli.amazonaws.com/AWSCLIV2.msi
```

2. Configure AWS credentials:
```bash
aws configure
```
You'll need to enter:
- AWS Access Key ID
- AWS Secret Access Key
- Default region (e.g., us-east-1)
- Default output format (json)

### 5. SST Setup

1. Install SST globally:
```bash
pnpm add -g sst
```

2. Link your AWS account:
```bash
sst link
```

## Project Setup

Now that you have the prerequisites installed, you can set up the project:

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
```bash
pnpm install
```
4. Start the development server:
```bash
pnpm dev
```

## Deployment

To deploy your application:

```bash
# Deploy to production
pnpm deploy

# Remove the deployment
pnpm remove
```

## Environment Variables

Create a `.env` file in the root directory with your environment variables:

```env
NEXT_PUBLIC_SITE_URL=https://brave-dave.com
# Add other environment variables as needed
```

## Why pnpm?

This project uses pnpm as the package manager because:
- Faster installation times
- More efficient disk space usage
- Strict dependency management
- Better monorepo support

## Troubleshooting

If you encounter any issues:

1. Make sure you're using the correct Node.js version (check `.nvmrc` if present)
2. Clear pnpm store if needed: `pnpm store prune`
3. Delete `node_modules` and reinstall: `pnpm install --force`
4. If you encounter SST-specific issues:
   - Run `sst doctor` to check your setup
   - Clear SST cache: `sst clear`
   - Check AWS credentials: `aws sts get-caller-identity` 