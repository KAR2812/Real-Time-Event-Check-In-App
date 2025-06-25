# Real-Time Event Check-In App

A modern, real-time event check-in application built using **React Native (Expo)** on the frontend and **Node.js + GraphQL + Prisma + Socket.io** on the backend. This project demonstrates a strong understanding of full-stack development, real-time communication, and clean architectural practices — ideal for collaborative product environments.

---

## ✨ Overview

The application allows users to:

* View a list of upcoming events
* Log in using a simple token
* Join any event instantly
* See real-time updates of attendees via WebSockets

It serves as a functional prototype of a live event engagement tool — like those used in hackathons, college fests, open mics, and tech meetups.

---

## 🔧 Tech Stack

| Layer    | Technology                                                           |
| -------- | -------------------------------------------------------------------- |
| Language | TypeScript                                                           |
| Backend  | Node.js, GraphQL (Apollo), Prisma ORM, Socket.io                     |
| Database | PostgreSQL                                                           |
| Frontend | React Native (Expo), Zustand (state), TanStack Query (data fetching) |

---

## 📁 Folder Structure

```
RealTimeCheckInApp_Full/
├── backend/
│   ├── src/
│   │   ├── index.ts          # Main server entry (Apollo + Socket.io)
│   │   ├── schema.ts         # GraphQL schema definitions
│   │   ├── resolvers.ts      # GraphQL resolvers
│   │   └── prisma/           # Prisma schema + migrations
│   └── package.json
├── frontend/my-app/
│   ├── App.tsx               # Navigation setup
│   ├── screens/
│   │   ├── LoginScreen.tsx   # Mock login screen
│   │   └── EventsScreen.tsx  # Event list and live attendance
│   ├── state/useStore.ts     # Zustand global store
│   └── utils/graphql.ts      # TanStack Query config
```

---

## 🤝 Mock Authentication

This project uses static token-based login for simplicity:

* You can enter **any token** on the login screen.
* The token is emitted to the server on login and used to track users in events.

---

## 🚀 Features

* ✔️ **Login Screen** (mocked with token)
* ✔️ **Event List** fetched from GraphQL (TanStack Query)
* ✔️ **Event Join** button
* ✔️ **Real-time Updates** of attendees via Socket.io
* ✔️ **Global State** handled by Zustand

---

## 💡 How Real-Time Works

* When a user joins an event, the client emits a `joinEvent` via Socket.io.
* The backend broadcasts this join to all connected clients.
* Attendee lists update instantly across devices without refresh.

---

## 📄 Prisma Schema

```ts
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
```

---

## 📝 Installation & Setup

### 👉 Backend

1. Go to backend directory:

   ```bash
   cd backend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Setup `.env` with PostgreSQL:

   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/realtime_checkin"
   ```
4. Run Prisma migrations:

   ```bash
   npx prisma migrate dev --name init
   ```
5. Start the server:

   ```bash
   node --loader ts-node/esm src/index.ts
   ```

> Server will be running on `http://localhost:4000/graphql`

---

### 📱 Frontend

1. Go to frontend directory:

   ```bash
   cd frontend/my-app
   ```
2. Install Expo and deps:

   ```bash
   npm install
   ```
3. Start the app:

   ```bash
   npx expo start
   ```
4. Scan QR using **Expo Go** on your phone.

---

## 💼 Deliverables Checklist

| Task                                     | Status |
| ---------------------------------------- | ------ |
| TypeScript used across codebase          | ✅      |
| Prisma + PostgreSQL database integration | ✅      |
| GraphQL Queries + Mutation               | ✅      |
| Mock Login + Token-based session         | ✅      |
| Zustand for global auth/join state       | ✅      |
| TanStack Query for data fetching         | ✅      |
| Real-time join updates via WebSocket     | ✅      |
| Clean file structure & modularity        | ✅      |
| Complete README with setup instructions  | ✅      |

---
