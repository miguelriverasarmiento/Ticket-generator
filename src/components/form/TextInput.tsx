interface Props {
  label: string;
  placeholder: string;
  type?: "text" | "email";
}

const TextInput = ({ label, placeholder, type="text" }: Props) => {
  return (
    <div className="flex flex-col">
      <label className="mb-3 text-xl" htmlFor={label}>{label}</label>
      <input 
        id={label}
        type={type} 
        placeholder={placeholder}
        className="border border-Neutral-300 rounded-xl h-[54px] px-4"
      />
    </div>
  )
}

export default TextInput