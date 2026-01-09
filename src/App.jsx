import { useState } from 'react'
import ReportProblem from './pages/ReportProblem'
import MyReports from './pages/MyReports'

function App() {
  const [view, setView] = useState('report')

  return (
    <div className="app-container">
      <header>
        <h1>Sistema de Tickets</h1>

        <nav>
          <button onClick={() => setView('report')}>
            Reportar problema
          </button>
          <button onClick={() => setView('list')}>
            Mis reportes
          </button>
        </nav>
      </header>

      <main>
        {view === 'report' && <ReportProblem />}
        {view === 'list' && <MyReports />}
      </main>
    </div>
  )
}

export default App
