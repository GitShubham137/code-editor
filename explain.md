NEXT JS & SHADCN INSTALLATION
Go to Nextjs website copy the snippet npx create-next-app@latest -> paste in the terminal
Import a UI liabrary shadcn via its official website and copy he command for nextjs npx shadcn@latest init -> paste in terminal
Install all the components from shadcn via npx shadcn@latest add
_______________________________________________________________________________________________________________________________

PRISMA & MONGODB
Go to prisma official website -> docs -> installation guide -> install via CLI -> npm install prisma --save-dev -> npx prisma
-> npm install @prisma/client -> npx prisma init 
Connect to mongodb atlas using the compass connection method -> create a db.ts folder inside lib folder
After we write models or users in the schema.prisma file -> enter npx prisma generate in terminal(this will generate a mongodb fiel in 
the node modules) -> npx prisma db push to puush our data into mongodb atlas
_______________________________________________________________________________________________________________________________
AUTHENTICATION SETUP(Auth.js is an open-source, runtime-agnostic library designed to simplify authentication in modern JavaScript applications)
go to Auth.js website -> nextjs installation npm install next-auth@beta -> npx auth secret (this will create a .env.loacl file ->
copy its content paste it into the .env file and delete it)

Create auth.ts at the root directory -> write the authentication code there
Go to app folder -> create api -> create auth -> create [...nextauth] & routes.ts files
Install prisma adapter via npm i @auth/prisma-adapter

Create auth.config.ts in root directory(This file = list of login methods (providers) + their credentials)
_______________________________________________________________________________________________________________________________

Creat routes.ts file at the root directory(this files is the main routes file)
Create a middleware.ts file in the root directory
At root level create modules folder -> create auth folder & test file -> inside auth folder -> create actions, components & hooks 
folder & types file -> inside actions create index.js file
At root level create next-auth.d.ts
_______________________________________________________________________________________________________________________________
Create (auth) inside app -> inside create auth folder -> create sign-in folder and layout.jsx file



__________________________________________________________________________________________________________________________
On landing page when user clicks o the get started button he is directed to his dashboard.
The main file responsible to render this dashboard is inside the app folder.
The file which takes out user data from the database is /modules/dashboard/actions/index.ts
