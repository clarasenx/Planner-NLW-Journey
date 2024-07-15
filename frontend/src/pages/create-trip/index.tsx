import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, Plus, User,  Mail } from 'lucide-react'
import { FormEvent, useState } from 'react'

export default function CreateTripPage() {
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
    return
  }
  function openConfirmTripModal() {
    return
  }

  return (
    <div className='bg-pattern bg-no-repeat bg-center h-screen flex items-center justify-center'>

      <div className='max-w-3xl w-full px-6 text-center space-y-10'>
        <div className='flex flex-col items-center'>
          <img src="/logo.svg" alt="plann.er" />
          <p className='text-zinc-500 text-lg'>Convide seus amigos e planeje sua própria viagem!</p>
        </div>
        
        <div className='space-y-4'>
          <div className='flex items-center gap-3 px-5 h-16 bg-zinc-900 rounded-xl shadow-shape'>

            <div className='flex items-center gap-2 flex-1'>  
              <MapPin className="size-5 text-zinc-400 flex gap-2"/>
              <input disabled={isGuestInputOpen} className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1' type="text" placeholder='Para onde você vai?'/>
            </div>

            <div className='flex items-center gap-2 min-w-'>  
              <Calendar className="size-5 text-zinc-400"/>
              <input disabled={isGuestInputOpen} className='bg-transparent text-lg placeholder-zinc-400 flex-1 w-40 outline-none' type="text" placeholder='Quando?'/>
            </div>

            <div className='w-px h-6 bg-zinc-800'/>

              {isGuestInputOpen ? (
                <button onClick={closeGuestInput} className='flex items-center gap-2  bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium hover:bg-zinc-700'>Alterar local/data
                <Settings2 className='size-5' />
                </button>
              ) : (
                <button onClick={openGuestInput} className='flex items-center gap-2  bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400'>Continuar <ArrowRight className='size-5'/></button>
              )}

          </div>
        
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
        <div className='fixed inset-8 bg-black/60 flex items-center justify-center'>
          <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
            <div className='space-y-2'>
              <div className='flex items-center justify-between'>
                <h2 className='text-lg font-semibold'>Selecionar convidados</h2>
                <button>
                <X onClick={closeGuestsModal} className='size-5 text-zinc-400'/>
                </button>
              </div>
              <p className='text-sm text-zinc-400'>Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
            </div>

            <div className='flex flex-wrap gap-2'>
              {emailsToInvite.map(email => {
                return (
                  <div key={email} className='py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2'>
                <span className='text-zinc-300'>{email}</span>
                <button onClick={() => removeEmailFromInvite(email)} type='button'>
                <X className='size-4 text-zinc-400'/>
                </button>
              </div>
                )
              })

              }
            </div>

            <div className='bg-zinc-800 w-full h-px'/>

            <form onSubmit={addNewEmailToInvite} className='flex items-center gap-2 p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg'>
              <div className='px-2 flex items-center flex-1 gap-2'>
                <AtSign className='text-zinc-400 size-5'/>

                <input type='email' name='email' className='bg-transparent text-lg placeholder-zinc-400 flex-1 w-40 outline-none' placeholder='Digite o e-mail do convidado'/>
              </div>

              <button type='submit' className='flex items-center gap-2  bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400'>Convidar<Plus className='size-5'/></button>
            </form>
          </div>
        </div>
      )
      }

      {isConfirmTripModalOpen && (
         <div className='fixed inset-8 bg-black/60 flex items-center justify-center'>
          <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
            <div className='space-y-2'>
              <div className='flex items-center justify-between'>
                <h2 className='text-lg font-semibold'>Confirmar criação de viagem</h2>
                <button>
                <X onClick={closeConfirmTripModal} className='size-5 text-zinc-400'/>
                </button>
              </div>
              <p className='text-sm text-zinc-400'>Para concluir a criação da viagem para <span className='font-semibold text-zinc-100'>Florianópolis, Brasil</span> nas datas de <span className='font-semibold text-zinc-100'>16 a 27 de agosto de 2024</span> preencha os dados a seguir:</p>
            </div>

            <form onSubmit={addNewEmailToInvite} className='space-y-3'>
              <div className='px-2.5 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center flex-1 gap-2'>
                <User className='text-zinc-400 size-5'/>
                <input
                  name='nome' 
                  className='bg-transparent text-lg placeholder-zinc-400 flex-1 w-40 outline-none' 
                  placeholder='Seu nome completo'/>
              </div>
              <div className='px-2.5 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center flex-1 gap-2'>
                <Mail className='text-zinc-400 size-5'/>
                <input
                  type='email' 
                  name='email' 
                  className='bg-transparent text-lg placeholder-zinc-400 flex-1 w-40 outline-none' 
                  placeholder='Seu e-mail pessoal'/>
              </div>

              <button 
                type='submit' 
                className='flex items-center gap-2 w-full justify-center bg-lime-300 text-lime-950 rounded-lg px-5 h-11 font-medium hover:bg-lime-400'>Confirmar criação da viagem
                <Plus className='size-5'/></button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}