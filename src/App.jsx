import { Toaster } from 'react-hot-toast'
import Navigation from './routes/Navigation'

const App = () => {
  return (
    <>
      <Navigation />
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>

  )
}

export default App
