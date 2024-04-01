import { Bar, Calendars, Contacts, Dashboard, FAQ, Geography, InputForm, Invoices, Line, Pie, SidebarMenu, Team, Topbar } from './pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@mui/material'; // reset all default css
import { ColorModeContext, useMode } from './styles/theme';
import View from './components/View';
import View2d from './components/View2d';


const App = () => {

  const [theme, coloMode] = useMode();

  return (
    <ColorModeContext.Provider value={coloMode}>
      <ThemeProvider theme={theme}>
        {/* Rest CSS */}
        <CssBaseline />

        <BrowserRouter>
          <main className="app">

           

            <SidebarMenu />
            <section className="content">
              <Topbar />

              <Routes>
                <Route path="/" element={<View/>} />

                <Route path="/View2d" element={<View2d />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />

                <Route path="/form" element={<InputForm />} />
                <Route path="/calendar" element={<Calendars />} />
                <Route path="/faq" element={<FAQ />} />
                
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/geography" element={<Geography />} />
              </Routes>

            </section>

          </main>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App