# E-Shop Mobile App

The starting point of an e-commerce mobile application built with Expo and React Native. The project currently contains the app shell, a welcome (onboarding) screen and a login screen, styled with NativeWind (Tailwind CSS for React Native).

## Status

Early stage. The navigation structure, theming and first two screens are in place. Product listings, cart and checkout are not yet implemented.

## Features

- File-based routing with Expo Router
- Onboarding screen with a gradient welcome page
- Login screen with keyboard-aware layout and safe-area handling
- Tab navigation scaffold and a modal route
- Light and dark colour scheme support
- Runs on Android, iOS and the web from one code base

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Expo SDK 54, React Native 0.81, React 19 |
| Routing | Expo Router, React Navigation |
| Styling | NativeWind 4, Tailwind CSS 3 |
| Animation | React Native Reanimated, Gesture Handler |
| Language | TypeScript |
| Linting | ESLint with the Expo config |

## Project Structure

```text
.
├── app                     Routes (Expo Router)
│   ├── _layout.tsx         Root layout
│   ├── index.tsx           Entry route
│   ├── (routes)/login      Login screen
│   ├── (tabs)              Tab layout
│   └── modal.tsx
├── screens/onboarding      Welcome screen
├── components              Shared UI components
├── hooks                   Colour scheme and theme hooks
├── constants/theme.ts      Theme values
├── assets/images           Icons and images
└── scripts/reset-project.js
```

## Getting Started

### Prerequisites

- Node.js 18 or later
- The Expo Go app on a phone, or an Android emulator or iOS simulator

### Install and run

```bash
git clone https://github.com/mosesaderemi/e-shop-mobile-app.git
cd e-shop-mobile-app
npm install
npx expo start
```

Scan the QR code with Expo Go, or press `a` for Android, `i` for iOS or `w` for the web.

### Scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the Expo development server |
| `npm run android` | Start on an Android device or emulator |
| `npm run ios` | Start on an iOS simulator |
| `npm run web` | Start in the browser |
| `npm run lint` | Run ESLint |

## Author

Aderemi Moses Timileyin
GitHub: [@mosesaderemi](https://github.com/mosesaderemi)
LinkedIn: [linkedin.com/in/mosesaderemi-6a70a5405](https://www.linkedin.com/in/mosesaderemi-6a70a5405)

## License

Released under the MIT License. See the `LICENSE` file for details.
