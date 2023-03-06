Frontend Coding Challenge for Entando

# Candidate Francesco Stallo

## Solution details

I bootrapped the application via [ViteJS](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

I've used node version `14.19.1` and Yarn as package manager.

The solution it is implemented with React 18
I've added some libraries to achive the requirements

- [Chakra UI](https://chakra-ui.com/): A UI component library that made it easy to build and style the interface.
- [Zustand](https://github.com/pmndrs/zustand): A store manager that allows for "Transient updates" without forcing a component re-render, resulting in a better performance. Additionally, it's lightweight compared to other store managers for React applications. ([https://bundlephobia.com/package/zustand@4.3.5](https://bundlephobia.com/package/zustand@4.3.5))
- [React Icons](https://react-icons.github.io/react-icons): A library of icons that were useful for enhancing the user interface.

Overall, I chose to use Zustand because it provided better performance and was more lightweight than other store managers like Redux. Chakra UI was also a great choice because of its ease of use, which allowed me to quickly and easily style the application.

## Start the application locally

Install the dependecies via
`yarn` or `npm i`

Run dev environment via
`yarn dev` or `npm run dev`
