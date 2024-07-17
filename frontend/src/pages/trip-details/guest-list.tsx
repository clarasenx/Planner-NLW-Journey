import { CircleCheck, CircleDashed, UserCog } from 'lucide-react';
import { Button } from '../../components/button';

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

      <Button size='full'>
        <UserCog className='size-5'/>
        Gerenciar convidados
      </Button>
    </div>
  )
}