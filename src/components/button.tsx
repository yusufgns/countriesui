import { IButtonProps } from '../types/index'
import { Button as Buttons } from "countriesui"
export function Button({ text }: IButtonProps) {
    return (
        <div>
            Test Button {text || 'default'}
            <Buttons text='asdasadad' />
        </div>
    )
}
