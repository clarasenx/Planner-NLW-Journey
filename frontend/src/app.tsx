import { MapPin, Calendar, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function App() {
  const [isGuestInputOpen, setIsGuestsInputOpen] = useState(false)
  
  function openGuestInput() {
    setIsGuestsInputOpen(true)
  }

  return (
    <div className='bg-pattern bg-no-repeat bg-center h-screen flex items-center justify-center'>

      <div className='max-w-3xl w-full px-6 text-center space-y-10'>
        <div className='flex flex-col items-center'>
          <img src="/logo.svg" alt="plann.er" />
          <p className='text-zinc-500 text-lg'>Convide seus amigos e planeje sua própria viagem!</p>
        </div>
        
        <div className='flex items-center gap-3 px-5 h-16 bg-zinc-900 rounded-xl shadow-shape'>

          <div className='flex items-center gap-2 flex-1'>  
            <MapPin className="size-5 text-zinc-400 flex gap-2"/>
            <input className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1' type="text" placeholder='Para onde você vai?'/>
          </div>

          <div className='flex items-center gap-2 min-w-'>  
            <Calendar className="size-5 text-zinc-400"/>
            <input className='bg-transparent text-lg placeholder-zinc-400 flex-1 w-40 outline-none' type="text" placeholder='Quando?'/>
          </div>
          <div className='w-px h-6 bg-zinc-800'/>
            <button onClick={openGuestInput} className='flex items-center gap-2  bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium'>Continuar <ArrowRight className='size-5'/></button>
          </div>

          {isGuestInputOpen ? (


          ) : 'fechada'}

          <p className='text-sm text-zinc-500'>Ao planejar sua viagem pela plann.er você automaticamente concorda <br />com nossos <a className='text-zinc-300 underline' href="#" target='_blank'>Termos de Uso</a> e <a className='text-zinc-300 underline' href="#" target="_blank">Políticas de privacidade</a>.</p>
      </div>
    </div>
  )
}