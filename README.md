# TodoApp
TodoApp is a simple web application for managing your tasks. It allows you to create, read, update, and delete tasks conveniently.

## Features
Task Management: Create, read, update, and delete tasks.
Technologies Used
### Frontend:
Angular
Angular Material
TypeScript
### Backend:
ASP.NET Core Web API
Entity Framework Core
Database:
SQL Server (LocalDB)


## Installation
Prerequisites
Node.js and npm installed
.NET 7 SDK installed
SQL Server or LocalDB installed (optional if you want to use a different database)
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/AboubakrNasef/TodoApp.git
Navigate to the project directory:

```bash
Copy code
cd TodoApp
```
Install frontend dependencies:

```bash
Copy code
cd ClientApp
npm install
```
Install backend dependencies:


```bash
cd ..
dotnet restore
```
### Set up the database:

Update the connection string in appsettings.json if necessary.

Run EF migrations to create the database schema:

bash
Copy code
dotnet ef database update
Run the application:

```bash
dotnet run
```

```bash
cd TaskApp-Client
ng serve -o
```
## ScreenShots
### FrontEnd
![image](https://github.com/AboubakrNasef/TodoApp/assets/105270767/22c8dc2d-3211-4b73-b6be-9bc09ad29da6)
![image](https://github.com/AboubakrNasef/TodoApp/assets/105270767/e64320c7-a309-4981-bc98-4039f5540042)

### Swagger Documentation 
![image](https://github.com/AboubakrNasef/TodoApp/assets/105270767/791ee6ea-9e9c-4ec3-b2ab-ded7ee5c0708)
