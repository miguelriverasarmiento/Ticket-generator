import { useUserStore } from "../../store/user"

const Ticket = () => {

    const store = useUserStore()
    const { fullName, githubUser } = store;
  return (
    <div className="flex flex-col justify-between h-40 w-85.5 p-4 bg-[url(/assets/images/pattern-ticket.svg)] bg-contain bg-no-repeat relative">
        <div>
            <img src="/assets/images/logo-full.svg" alt="Logo" />
            <p>Jan 31, 2025 / Austin, TX</p>
        </div>
        <div className="flex gap-3">
            <img 
                src="/assets/images/image-avatar.jpg" 
                alt="Image avatar" 
                className="size-11.25 rounded-lg"    
            />
            <div>
                <p className="text-xl font-medium">{fullName}</p>
                <div className="flex">
                    <img src="/assets/images/icon-github.svg" alt="icon github"/>
                    <p>{githubUser}</p>
                </div>
            </div>
        </div>
        <p className="text-2xl absolute top-1/2 right-0 transform -translate-y-1/2 rotate-90 text-Neutral-500">#01609</p>
    </div>
  )
}

export default Ticket