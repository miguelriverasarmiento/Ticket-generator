const Ticket = () => {
  return (
    <div className="flex flex-col justify-between h-40 p-4 bg-[url(/assets/images/pattern-ticket.svg)]">
        <div>
            <img src="/assets/images/logo-full.svg" alt="Logo" />
            <p>Jan 31, 2025 / Austin, TX</p>
        </div>
        <div className="flex gap-3">
            <img 
                src="/assets/images/image-avatar.jpg" 
                alt="Image avatar" 
                className="size-[45px] rounded-lg"    
            />
            <div>
                <p className="text-xl font-medium">Jonathan Kirstof</p>
                <p className="flex">
                    <img src="/assets/images/icon-github.svg" alt="icon github"/>
                    <p>@jonathankirstof0101</p>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Ticket