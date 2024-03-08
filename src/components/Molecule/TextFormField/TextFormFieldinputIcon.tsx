import { TextFormFieldInput } from './TextFormFieldinput'

interface TextFormFieldInputIconProps {
  type?: 'text' | 'number'
  placeHolder?: string
  Icon: React.ComponentType<{ className?: string }>
}

export function TextFormFieldInputIcon({
  placeHolder,
  type = 'text',
  Icon,
}: TextFormFieldInputIconProps) {
  return (
    <div className="relative">
      <Icon className="absolute left-[10px] top-[18px] h-[1.8rem] w-[1.8rem]" />
      <TextFormFieldInput
        className="pl-[3rem]"
        placeHolder={placeHolder}
        type={type}
      />
    </div>
  )
}
