import { Input } from './ui/input'

export default function input({
    placeholder = "Phone Number",
    type = "number",
    onChangeValue = () => null,
}: {
    placeholder?: string;
    type?: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
    onChangeValue?: (e: string) => void;
}) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeValue(e.target.value);
    };

    return (
        <Input inputMode='none' onInvalidCapture={() => null} onChange={handleChange} className='w-[260px]' type={type} placeholder={placeholder} />
    )
}
