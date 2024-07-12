export default function App() {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='max-w-3xl w-full px-6 text-center space-y-10'>
          <p className='text-zinc-500 text-lg'>Convide seus amigos e planeje sua própria viagem!</p>
        <div className='h-16 bg-zinc-900 rounded-xl flex items-center shadow-shape'>
          <input className='bg-transparent text-lg placeholder-zinc-400' type="text" placeholder='Para onde você vai?'/>
          <input className='bg-transparent text-lg placeholder-zinc-400' type="text" placeholder='Quando?'/>

          <button>Continuar</button>
        </div>
          <p className='text-sm text-zinc-500'>Ao planejar sua viagem pela plann.er você automaticamente concorda <br />com nossos <a className='text-zinc-300 underline' href="#" target='_blank'>Termos de Uso</a> e <a className='text-zinc-300 underline' href="#" target="_blank">Políticas de privacidade</a>.</p>
      </div>
    </div>
  )
}