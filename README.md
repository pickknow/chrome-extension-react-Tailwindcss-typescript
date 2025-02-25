# chrome-extension-react-Tailwindcss-typescript

This is a Chrome extension development template built with modern frontend technologies, designed to help developers quickly create powerful Chrome extensions. The project integrates **React**, **TypeScript**, **Tailwind CSS**, and **Webpack**, with a built-in React Hook for interacting with `chrome.storage` and support for communication between `popup` and `options` pages.

## Features

- **React**: Build dynamic UIs with a component-based approach.
- **TypeScript**: Ensure type safety and improve code maintainability.
- **Tailwind CSS**: Rapidly create beautiful, responsive interfaces.
- **Webpack**: Modular bundling for development and production environments.
- **Chrome Storage Hook**: A custom React Hook to simplify `chrome.storage` interactions.
- **Popup & Options Interaction**: Enable communication between the extension’s `popup` and `options` pages.
- **Modular Design**: Easily extensible, ideal for rapid prototyping.

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Webpack
- Chrome Extension APIs
- DaisyUI

## Installation

1. **Clone the Repository**
   ```bash
   git clone git@github.com:pickknow/chrome-extension-react-Tailwindcss-typescript.git
   cd [repo-name]

2. Install Dependencies
   ```bash
npm install

3. Run in Development Mode
   ```bash
   npm run dev
  
This starts the development environment, watching for changes and generating unminified builds.


4. Build for Production
   ```bash
   npm run build

Generates optimized extension files in the dist directory.

5. Load into Chrome
Open Chrome and navigate to chrome://extensions/.
Enable “Developer mode.”
Click “Load unpacked” and select the dist folder from the project root.


## Usage
1. Project Structure
```
├── src/
│   ├── popup.tsx/html   # Popup page code
│   ├── options.tsx/html # Options page code
│   ├── tools/           # Custom React Hooks (e.g., chrome.storage)
│   ├── assets/          # Static assets (images, styles, etc.)
│   ├── compontments/    # Reusable React components
│   ├── manifest.json    # Chrome extension configuration file
│   └── ...
├── dist/                # Build output directory
├── webpack.config.js    # Webpack configuration file
└── ...
```

2. Customize the Extension 
 Edit src/manifest.json to configure basic extension details (name, version, permissions, etc.).
Write your logic in src/popup and src/options.
Use tools/useChromeStorage.ts to interact with Chrome storage.

3. Example: Storing Data
```
export default function App() {
  const [count1, setCount1] = useChromeStorageLocal<number>("count1", 0);
  return (
    <div className='flex gap-10 items-center'>
      <p>Stored Count1: {count1}</p>
      <button className="btn btn-primary" onClick={() => setCount1(count1 + 1)}>Increment</button>
      <button className="btn btn-primary" onClick={() => setCount1(0)}>Reset</button>
    </div>
  );
};
```

## Contributing

Contributions are welcome! Feel free to submit Issues or Pull Requests to improve this project. Follow these steps:
1. Fork this repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Commit your changes (git commit -m "Add new feature").
4. Push to the branch (git push origin feature/your-feature).
5. Create a Pull Request.

## License
This project is licensed under the MIT License (LICENSE).
