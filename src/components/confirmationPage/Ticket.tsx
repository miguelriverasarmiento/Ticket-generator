import { useUserStore } from "../../store/user"

const Ticket = () => {

    const store = useUserStore()
    const { fullName, githubUser, url } = store;
  return (
    <div className="flex flex-col justify-between h-40 w-85.5 p-4 bg-[url(/assets/images/pattern-ticket.svg)] 
    bg-contain bg-no-repeat relative sm:h-50 sm:w-[420px] md:h-[260px] md:w-[560px] mx-auto">
        <div>
            <img src="/assets/images/logo-full.svg" alt="Logo" />
            <p className="md:text-2xl">Jan 31, 2025 / Austin, TX</p>
        </div>
        <div className="flex gap-3 items-center">
            <img 
                src={url} 
                alt="Image avatar" 
                className="size-11.25 rounded-lg"    
            />
            <div>
                <p className="text-xl font-medium md:text-2xl">{fullName}</p>
                <div className="flex">
                    <img src="/assets/images/icon-github.svg" alt="icon github"/>
                    <p className="md:text-2xl">{githubUser}</p>
                </div>
            </div>
        </div>
        <p className="text-2xl absolute top-1/2 right-0 transform -translate-y-1/2 rotate-90 text-Neutral-500">#01609</p>
    </div>
  )
}

export default Ticket