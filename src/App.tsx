import { Button } from "@/components"
import { getCountries, getPhoneCode } from "libphonenumber-js"
import { US } from 'country-flag-icons/string/3x2'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function App() {
  console.log(getCountries())
  console.log(getPhoneCode('US'))
  console.log(US)

  return (
    <div className="fl">
      <Button text='Bu bir test button' />
      <div className="w-6 h-6" dangerouslySetInnerHTML={{ __html: US }} />
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Countries" />
        </SelectTrigger>
        <SelectContent>
          {getCountries().map(item => (
            <SelectItem key={item} value={item}>
              <div className="flex items-center">
                <img
                  width={24}
                  height={30}
                  alt="United States"
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${item}.svg`} />

                  <span>
                    {item}
                  </span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
