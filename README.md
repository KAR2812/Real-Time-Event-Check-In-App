# Real-Time Event Check-In App

A full-stack real-time event check-in platform built with React Native (Expo) for the frontend and Node.js + GraphQL + Prisma + Socket.io for the backend. The app allows users to view events, check in, and see live attendee updates using WebSockets.

✅ Built with TypeScript, Zustand, TanStack Query, Prisma, and PostgreSQL — combining real-time tech and type-safe APIs.

📸 Demo


🚀 Features
🔐 Mock login with static token

📅 View list of upcoming events

👥 Join an event with one tap

🌐 Real-time attendee updates using WebSockets

⚡️ GraphQL API with Prisma PostgreSQL backend

📦 State managed via Zustand + TanStack Query

💬 Socket.io-based live user join notifications

🛠️ Tech Stack
Layer	Tech
Language	TypeScript
Backend	Node.js, GraphQL (Apollo Server), Prisma, Socket.io
Database	PostgreSQL
Frontend	React Native (Expo), Zustand, TanStack Query
Protocols	GraphQL (API), Socket.io (WebSocket real-time communication)

🧱 Folder Structure
bash
Copy
Edit
RealTimeCheckInApp_Full/
├── backend/
│   ├── src/
│   │   ├── index.ts           # Entry point
│   │   ├── schema.ts          # GraphQL schema
│   │   ├── resolvers.ts       # GraphQL resolvers
│   │   └── prisma/            # Prisma schema and migrations
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   └── my-app/
│       ├── App.tsx            # Root app file with Navigation
│       ├── screens/
│       │   ├── LoginScreen.tsx
│       │   └── EventsScreen.tsx
│       ├── state/
│       │   └── useStore.ts    # Zustand store
│       └── utils/
│           └── graphql.ts     # TanStack Query client setup
🧑‍💻 Installation & Setup
🔙 Backend
Clone the repo:

bash
Copy
Edit
git clone https://github.com/yourusername/RealTimeCheckInApp_Full.git
cd RealTimeCheckInApp_Full/backend
Install dependencies:

bash
Copy
Edit
npm install
Setup PostgreSQL DB:

Ensure PostgreSQL is running.

Create a .env file with your database URL:

env
Copy
Edit
DATABASE_URL="postgresql://user:password@localhost:5432/realtime_checkin"
Migrate the DB:

bash
Copy
Edit
npx prisma migrate dev --name init
Run the server:

bash
Copy
Edit
node --loader ts-node/esm src/index.ts
Server will be live at: http://localhost:4000/graphql

📱 Frontend
Go to frontend:

bash
Copy
Edit
cd ../frontend/my-app
Install dependencies:

bash
Copy
Edit
npm install
Run Expo project:

bash
Copy
Edit
npx expo start
Scan the QR with Expo Go app on your phone.

🔑 Example Credentials (Mocked)
You can enter any token on the login screen. This is a mock login for demonstration.

The token is used to simulate user sessions when emitting Socket.io events.

🔁 Real-time with WebSocket (Socket.io)
When a user joins an event, all connected clients receive a live update with the new attendee.

Socket connection established from React Native frontend on login.

Backend listens for 'joinEvent' and broadcasts the attendee list.

🧠 State Management
Zustand
Used to store the authToken, current user, and event state globally.

Example: useStore((state) => state.token)

TanStack Query
Used to fetch the list of events and attendees.

Example: useQuery(['events'], fetchEvents)

📜 Prisma Schema
ts
Copy
Edit
model User {
  id       String   @id @default(cuid())
  name     String
  email    String   @unique
  events   Event[]  @relation("UserEvents")
}

model Event {
  id        String   @id @default(cuid())
  name      String
  location  String
  startTime DateTime
  attendees User[]   @relation("UserEvents")
}
✅ Assignment Checklist
Requirement	Status
Well-structured frontend & backend	✅ Done
GraphQL API with Prisma	✅ Done
Real-time updates using Socket.io	✅ Done
TanStack Query used	✅ Done
Zustand used	✅ Done
TypeScript used everywhere	✅ Done
Login screen (mocked)	✅ Done
Events page + Join event	✅ Done
Real-time attendee updates	✅ Done
Clean README with setup instructions	✅ Done

💡 Possible Improvements
These features were considered optional but can be added:

👤 Show avatars or initials of attendees

🔁 Leave event functionality

📊 Show live participant count

🧼 Add further UI polish (animations, responsive layout)

