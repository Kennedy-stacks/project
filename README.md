# Shopping Site with Stripe Payment Integration

This is a modern React shopping site built with Vite that includes Stripe payment processing, professional icons, and enhanced UI/UX.

## Features

- **Modern Design**: Clean, professional interface with gradient backgrounds and smooth animations
- **Icon Integration**: Professional icons from React Icons library replacing emojis
- **Shopping Cart**: Full cart functionality with add/remove items, quantity management, and persistence
- **Product Catalog**: Featured products carousel, category browsing, and best-selling items
- **Stripe Payment**: Secure payment processing with Stripe Elements
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Navigation**: React Router for seamless page transitions
- **State Management**: React Context for cart state with localStorage persistence

## Pages

- **Home (/)**: Main shopping page with products, categories, and featured items
- **Cart (/cart)**: Shopping cart with item management, quantity controls, and checkout
- **Payment (/payment)**: Stripe-powered checkout page with dynamic order summary

## Tech Stack

- React 19
- Vite
- React Router DOM
- React Icons
- Stripe Elements
- CSS3 with modern features

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. For Stripe payment functionality:
   - Sign up for a Stripe account at https://stripe.com
   - Get your test publishable key from the Stripe dashboard
   - Replace `pk_test_YOUR_STRIPE_PUBLISHABLE_KEY_HERE` in `src/components/Payment.jsx` with your actual key

3. Start the development server:
   ```bash
   npm run dev
   ```

## Stripe Payment Setup

The payment page uses Stripe Elements for secure card processing. For production use, you'll need:

1. A server-side component to create PaymentIntents
2. Proper webhook handling for payment confirmation
3. PCI compliance considerations

This demo uses client-side only processing for illustration purposes.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
