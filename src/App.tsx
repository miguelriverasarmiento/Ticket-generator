import TicketFormPage from './components/ticketFormPage/TicketFormPage'
import MainLayout from "./components/layouts/MainLayout"
import ConfirmationPage from './components/confirmationPage/ConfirmationPage'
import { useShowTicket } from './hooks/useShowTicket'

function App() {

  const context = useShowTicket()
  
  return (
    
      <MainLayout>
        <main className='max-w-3xl mx-auto'>
          {
            context.showTicket
            ? <ConfirmationPage />
            : <TicketFormPage />
          }
        </main>
      </MainLayout>
  )
}

export default App
