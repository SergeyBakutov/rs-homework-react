import { ErrorBoundary } from "../../components/ErrorBoundary"

export const Home: React.FC = () => {
  return (
    <ErrorBoundary>
      <h1>Home</h1>
      <p>
        Welcome to the Universe of Rick and Morty. Here you can find information about characters, locations and episodes
      </p>
    </ErrorBoundary>
  )
}