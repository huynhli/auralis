import { Route, Outlet, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Landing.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import { useScroll } from 'framer-motion'
import { ScrollContext } from './components/ScrollContext.tsx'
import { useWindowSize, WindowSizeContext } from './components/WindowSizeContext.tsx'
import ErrorPage from './pages/ErrorPage.tsx'

export default function App() {
  // defining default layout
  
  const { scrollYProgress } = useScroll()
  const size = useWindowSize()

  const Layout = () => {
    return (
      <div>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  )

  return (
    <div>
      <WindowSizeContext.Provider value={size}>
        <ScrollContext.Provider value={scrollYProgress}>
          <RouterProvider router={router}/>
        </ScrollContext.Provider>
      </WindowSizeContext.Provider>
    </div>
  );
}
