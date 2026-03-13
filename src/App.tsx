import TicketFormPage from './components/ticketFormPage/TicketFormPage'
import MainLayout from "./components/layouts/MainLayout"
import ConfirmationPage from './components/confirmationPage/ConfirmationPage'
import { useShowTicket } from './hooks/useShowTicket'

function App() {

  const context = useShowTicket()
  
  return (
    
      <MainLayout>
        {
          context.showTicket
          ? <ConfirmationPage />
          : <TicketFormPage />
        }
      </MainLayout>
  )
}

export default App
