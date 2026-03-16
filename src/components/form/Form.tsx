import UploadInput from "./UploadInput"
import TextInput from "./TextInput"
import Button from "./Button"
import { useForm, type SubmitHandler } from "react-hook-form"
import { useShowTicket } from "../../hooks/useShowTicket"
import { useUserStore } from "../../store/user"
import { useState } from "react"

type Inputs = {
  fullName: string;
  email: string;
  githubUser: string;
}

const Form = () => {

  const [imageUrl, setImageUrl] = useState<string>("");

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
      githubUser: githubUser,
      url: imageUrl
    })
   }

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      console.log(file)
      console.log(url)
      setImageUrl(url);
    }
  }

  return (
    <form onSubmit={handleSubmit(sendForm)}>
        <UploadInput url={imageUrl} onChange={handleChange}/>
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