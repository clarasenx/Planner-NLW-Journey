import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestsModal } from './invite-guests-modal'
import { ConfirmTripModal } from './confirm-trip-modal'
import { DestinationDateSteps } from './steps/destination-date-steps'
import { InviteGuestStep } from './steps/invite-guest-step'
import { DateRange } from 'react-day-picker'

export default function CreateTripPage() {
  const navigate = useNavigate()

  const [isGuestInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

  const [destination, setDestination] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [ownerMail, setOwnerMail] = useState('')
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<DateRange | undefined>()

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
          setDestination={setDestination}
          eventStartAndEndDates={eventStartAndEndDates}
          setEventStartAndEndDates={setEventStartAndEndDates}
          />
        
            {isGuestInputOpen && (
             <InviteGuestStep 
             openConfirmTripModal={openConfirmTripModal}
             openGuestsModal={openGuestsModal}
             emailsToInvite={emailsToInvite}/>

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
        setOwnerName={setOwnerName}
        setOwnerMail={setOwnerMail}
        />

      )}
    </div>
  )
}