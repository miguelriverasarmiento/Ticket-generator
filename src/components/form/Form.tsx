import UploadInput from "./UploadInput"
import TextInput from "./TextInput"
import Button from "./Button"

const Form = () => {
  return (
    <div>
        <UploadInput />
        <div className="flex flex-col gap-6">
          <TextInput label="Full Name" placeholder="Jonathan Kirstof"/>
          <TextInput label="Email Address" placeholder="jonathan@email.com" type="email"/>
          <TextInput label="Github Username" placeholder="@jonathankirstof0101"/>
          <Button />
        </div>
    </div>
  )
}

export default Form