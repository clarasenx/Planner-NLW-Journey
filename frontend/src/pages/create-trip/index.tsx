import { ArrowRight, UserRoundPlus } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestsModal } from './invite-guests-modal'
import { ConfirmTripModal } from './confirm-trip-modal'
import { DestinationDateSteps } from './steps/destination-date-steps'

export default function CreateTripPage() {
  const navigate = useNavigate()
  const [isGuestInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState([
    'diego@rocketseat.com.br',
    'john@acme.com'
  ])
  
  function openGuestInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestInput() {
    setIsGuestsInputOpen(false)
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true)
  }
  
  function closeGuestsModal() {
    setIsGuestsModalOpen(false)
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if(!email) {
      return
    }

    if (emailsToInvite.includes(email)) {
      return
    }

    console.log(email)
    setEmailsToInvite([
      ...emailsToInvite,
      email
    ])

    event.currentTarget.reset()
  }

  function removeEmailFromInvite(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)
    setEmailsToInvite(newEmailList)
  }

  function closeConfirmTripModal() {
    return setIsConfirmTripModalOpen(false)
  }
  function openConfirmTripModal() {
    return setIsConfirmTripModalOpen(true)
  }

  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    navigate("/trips/123")
  }

  return (
    <div className='bg-pattern bg-no-repeat bg-center h-screen flex items-center justify-center'>

      <div className='max-w-3xl w-full px-6 text-center space-y-10'>
        <div className='flex flex-col items-center'>
          <img src="/logo.svg" alt="plann.er" />
          <p className='text-zinc-500 text-lg'>Convide seus amigos e planeje sua própria viagem!</p>
        </div>
        
        <div className='space-y-4'>
          <DestinationDateSteps
          closeGuestInput={closeGuestInput}
          isGuestInputOpen={isGuestInputOpen} 
          openGuestInput={openGuestInput}
          />
        
            {isGuestInputOpen && (
              <div className='flex items-center gap-3 px-5 h-16 bg-zinc-900 rounded-xl shadow-shape'>

            <div className='flex items-center gap-2 flex-1'>
              <button type='button' onClick={openGuestsModal} className='flex items-center gap-2 flex-1'>
                <UserRoundPlus className="size-5 text-zinc-400 flex gap-2"/>
                {emailsToInvite.length > 0 ? (
                  <span className='text-zinc-100'>{emailsToInvite.length} pessoa(s) convidada(s)</span>
                ) : (
                  <span className='text-lg text-zinc-400 flex-1 text-left'>Quem estará na viagem?</span>
                )}
              </button>
            </div>

            <div className='w-px h-6 bg-zinc-800'/>
            
              <button onClick={openConfirmTripModal} className='flex items-center gap-2  bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400'>Confirmar viagem?<ArrowRight className='size-5'/></button>
          </div>

            )}
        </div>

          <p className='text-sm text-zinc-500'>Ao planejar sua viagem pela plann.er você automaticamente concorda <br />com nossos <a className='text-zinc-300 underline' href="#" target='_blank'>Termos de Uso</a> e <a className='text-zinc-300 underline' href="#" target="_blank">Políticas de privacidade</a>.</p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal 
        emailsToInvite={emailsToInvite}
        addNewEmailToInvite={addNewEmailToInvite}
        closeGuestsModal={closeGuestsModal}
        removeEmailFromInvite={removeEmailFromInvite}
        />
      )
      }

      {isConfirmTripModalOpen && (
        <ConfirmTripModal 
        closeConfirmTripModal={closeConfirmTripModal}
        createTrip={createTrip}
        />

      )}
    </div>
  )
}