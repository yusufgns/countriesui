import { IButtonProps } from '@/types'
import { Button as ShadcnButton } from "@/components/ui/button"

export default function Button({ text }: IButtonProps) {
    return (
        <ShadcnButton>
            {text}
        </ShadcnButton>
    )
}
