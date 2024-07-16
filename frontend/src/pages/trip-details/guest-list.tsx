import { CircleDashed, CircleCheck, UserCog } from 'lucide-react';

export function GuestList() {
  return (
    <div className='space-y-6'>
      <h2 className='font-semibold text-xl'>Convidados</h2>
      <div className='space-y-5'>
        {/* links */}
        <div className='flex items-center justify-between'>
          <div className='space-y-1.5'>
            <span className='block font-medium text-zinc-100'>Nome do usuário</span>
            <span className='block text-sm text-zinc-400 truncate'>Email do usuário</span>
          </div>
          <CircleDashed className='size-5 text-zinc-400 shrink-0'/>
        </div>
              
        <div className='flex items-center justify-between'>
          <div className='space-y-1.5'>
            <span className='block font-medium text-zinc-100'>Nome do usuário</span>
             <span className='block text-sm text-zinc-400 truncate'>Email do usuário</span>
          </div>
          <CircleCheck className='size-5 text-lime-300 shrink-0'/>
        </div>
      </div>

      <button className='bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center justify-center gap-2 w-full'>
      <UserCog className='size-5'/>Gerenciar convidados</button>
    </div>
  )
}