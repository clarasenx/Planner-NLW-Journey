import { UserRoundPlus, ArrowRight } from 'lucide-react';
import { Button } from '../../components/button'

interface InviteGuestStepProps {
  openGuestsModal: () => void
  emailsToInvite: string[]
  openConfirmTripModal: () => void
}

export function InviteGuestStep({openConfirmTripModal,emailsToInvite,openGuestsModal} : InviteGuestStepProps) {
  return (
    <div className='flex items-center gap-3 px-4 h-16 bg-zinc-900 rounded-xl shadow-shape'>
      <div className='flex items-center gap-2 flex-1'>
        <Button onClick={openGuestsModal} variant='secondary' size='full'>
          <UserRoundPlus className="size-5 text-zinc-400 flex gap-2"/>{emailsToInvite.length > 0 ? (
                  <span className='text-zinc-100'>{emailsToInvite.length} pessoa(s) convidada(s)
                  </span>
                ) : (
                  <span className='text-lg text-zinc-400 flex-1 text-left'>Quem estará na viagem?</span>
                )}
        </Button>
      </div>

      <div className='w-px h-6 bg-zinc-800'/>
      
      <Button type='submit' onClick={openConfirmTripModal}>
        Confirmar viagem?
        <ArrowRight className='size-5'/>
      </Button>
    </div>
  )
}