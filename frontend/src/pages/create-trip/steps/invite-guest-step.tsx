import { UserRoundPlus, ArrowRight } from 'lucide-react';

interface InviteGuestStepProps {
  openGuestsModal: () => void
  emailsToInvite: string[]
  openConfirmTripModal: () => void
}

export function InviteGuestStep({openConfirmTripModal,emailsToInvite,openGuestsModal} : InviteGuestStepProps) {
  return (
    <div className='flex items-center gap-3 px-4 h-16 bg-zinc-900 rounded-xl shadow-shape'>
      <div className='flex items-center gap-2 flex-1'>
        <button type='button' onClick={openGuestsModal} className='flex items-center gap-2 flex-1'>
          <UserRoundPlus className="size-5 text-zinc-400 flex gap-2"/>{emailsToInvite.length > 0 ? (
                  <span className='text-zinc-100'>{emailsToInvite.length} pessoa(s) convidada(s)
                  </span>
                ) : (
                  <span className='text-lg text-zinc-400 flex-1 text-left'>Quem estará na viagem?</span>
                )}
        </button>
      </div>

      <div className='w-px h-6 bg-zinc-800'/>
      
      <button onClick={openConfirmTripModal} className='flex items-center gap-2  bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400'>Confirmar viagem?
        <ArrowRight className='size-5'/>
      </button>
    </div>
  )
}