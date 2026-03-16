import UploadInput from "./UploadInput"
import TextInput from "./TextInput"
import Button from "./Button"
import { useForm, type SubmitHandler } from "react-hook-form"
import { useShowTicket } from "../../hooks/useShowTicket"
import { useUserStore } from "../../store/user"

type Inputs = {
  fullName: string;
  email: string;
  githubUser: string;
}

const Form = () => {

  const { 
    register,
    formState: { errors },
    handleSubmit
   } = useForm<Inputs>()

   const context = useShowTicket()
   const userStore = useUserStore()

   const sendForm: SubmitHandler<Inputs> = (data: Inputs) => {
    
    const { fullName, email, githubUser } = data
    
    context.setShowTicket(true)
    userStore.setUser({
      fullName: fullName,
      email: email,
      githubUser: githubUser
    })
   }

  return (
    <form onSubmit={handleSubmit(sendForm)}>
        <UploadInput />
        <div className="flex flex-col gap-6">
          <TextInput 
            {...register("fullName", { required: "Full name is required" })} 
            label="Full Name" 
            placeholder="Jonathan Kirstof"
            isError={errors.fullName?.type === "required"}
            errorMessage={errors.fullName?.message}
          />
          <TextInput 
            {...register("email", { required: "Email is required", pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g })} 
            label="Email Address" 
            placeholder="jonathan@email.com" 
            type="email"
            isError={errors.email?.type === "required" || errors.email?.type === "pattern"}
            errorMessage={errors.email?.message || "Please enter a valid email address"}
          />
          <TextInput 
            {...register("githubUser")} 
            label="Github Username" 
            placeholder="@jonathankirstof0101"
          />
          <Button />
        </div>
    </form>
  )
}

export default Form