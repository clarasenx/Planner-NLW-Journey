import { Mail, Plus, User, X } from 'lucide-react'
import { FormEvent } from 'react'
import { Button } from '../../components/button'

interface ConfirmTripModalProps{
  closeConfirmTripModal: () => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void
  setOwnerName: (name: string) => void
  setOwnerMail: (mail: string) => void
}

export function ConfirmTripModal({closeConfirmTripModal, createTrip, setOwnerMail, setOwnerName}: ConfirmTripModalProps) {
  return (
    <div className= 'fixed inset-8 bg-black/60 flex items-center justify-center' >
      <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5' >
        <div className='space-y-2' >
          <div className='flex items-center justify-between' >
            <h2 className='text-lg font-semibold' > Confirmar criação de viagem </h2>
            <button>
              <X onClick={closeConfirmTripModal} className = 'size-5 text-zinc-400' />
            </button>
          </div>
              <p className = 'text-sm text-zinc-400' > Para concluir a criação da viagem para <span className = 'font-semibold text-zinc-100' > Florianópolis, Brasil </span> nas datas de <span className='font-semibold text-zinc-100'>16 a 27 de agosto de 2024</span > preencha os dados a seguir: </p>
        </div>

        <form onSubmit={createTrip} className = 'space-y-3' >
            <div className='px-2.5 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center flex-1 gap-2' >
              <User className='text-zinc-400 size-5' />
              <input 
              onChange={event => setOwnerName(event.target.value)}
              name='nome' 
              className = 'bg-transparent text-lg placeholder-zinc-400 flex-1 w-40 outline-none' placeholder = 'Seu nome completo'/>
            </div>
            <div className = 'px-2.5 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center flex-1 gap-2' >
              <Mail className='text-zinc-400 size-5' />
              <input 
              onChange={event => setOwnerMail(event.target.value)}
              type='email' 
              name = 'email' 
              className = 'bg-transparent text-lg placeholder-zinc-400 flex-1 w-40 outline-none' placeholder = 'Seu e-mail pessoal' />
            </div>

          <Button type='submit' size='full'> 
            Confirmar criação da viagem
            <Plus className = 'size-5'/> 
          </Button>
        </form>
      </div>
    </div>
  )
}