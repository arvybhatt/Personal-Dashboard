# Azure Setup Guide

This guide helps you set up the necessary Azure resources for deploying the backend API and connecting it to Cosmos DB.

## 1. Create a Cosmos DB Account

1. Sign in to the [Azure Portal](https://portal.azure.com)
2. Search for "Azure Cosmos DB" and select it
3. Click "Create"
4. Choose "Core (SQL)" as the API
5. Fill in the required details:
   - Subscription: Your Azure subscription
   - Resource Group: Create new or use existing
   - Account Name: Choose a unique name
   - Location: Choose a region close to your users
   - Capacity mode: Provisioned throughput
   - Apply Free Tier Discount: Apply if available
6. Click "Review + create" then "Create"

## 2. Create Database and Container

1. Once your Cosmos DB account is created, navigate to it
2. Go to "Data Explorer" in the left menu
3. Click "New Container"
4. Fill in the details:
   - Database ID: `MySiteDb` (create new)
   - Container ID: `GetInTouchTable`
   - Partition Key: `/id`
   - Throughput: 400 RU/s (minimum)
5. Click "OK"

## 3. Create an App Service for Backend API

1. In the Azure Portal, search for "App Services" and select it
2. Click "Create"
3. Select "Web App"
4. Fill in the required details:
   - Subscription: Your Azure subscription
   - Resource Group: Use the same as your Cosmos DB
   - Name: Choose a unique name for your API
   - Runtime stack: .NET 8 (LTS)
   - Region: Choose the same region as your Cosmos DB
   - App Service Plan: Create new or select existing
5. Click "Review + create" then "Create"

## 4. Configure App Service Settings

1. Once your App Service is created, navigate to it
2. Go to "Configuration" in the left menu
3. Under "Application settings", click "New application setting"
4. Add the following settings (one by one):
   - `CosmosDb:AccountEndpoint`: Your Cosmos DB endpoint URL (from Cosmos DB account > Keys)
   - `CosmosDb:AccountKey`: Your primary key (from Cosmos DB account > Keys)
   - `CosmosDb:DatabaseName`: `MySiteDb`
   - `CosmosDb:ContainerName`: `GetInTouchTable`
5. Click "Save" after adding all settings

## 5. Get the Publish Profile for GitHub Actions

1. In your App Service, go to "Overview"
2. Click on "Get publish profile"
3. This will download a file - keep this file safe as it contains credentials
4. The contents of this file will be used as the value for the `AZURE_WEBAPP_PUBLISH_PROFILE` secret in GitHub

## 6. Configure GitHub Repository Secrets

1. Go to your GitHub repository
2. Navigate to "Settings" > "Secrets and variables" > "Actions"
3. Click "New repository secret"
4. Add the following secrets:
   - `AZURE_WEBAPP_NAME`: The name of your App Service
   - `AZURE_WEBAPP_PUBLISH_PROFILE`: Paste the entire content of the downloaded publish profile
   - `AZURE_WEBAPP_URL`: The URL of your App Service (https://your-app-name.azurewebsites.net)

## 7. Deploy Your Application

1. Push your code to the master branch
2. Go to the "Actions" tab in your GitHub repository to monitor the deployment
3. Once deployment is complete, your backend API will be running on your App Service

## 8. Configure CORS in App Service (if needed)

If you experience CORS issues:

1. In your App Service, go to "CORS" in the left menu
2. Add the URL of your frontend application
3. Click "Save"
