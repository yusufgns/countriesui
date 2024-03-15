## Countries UI
The version of libphonenumber-js library with shadcn UI support.


## Example
```js
import CountriesSelect from "./components/countries-select"
import Input from "./components/input"

<CountriesSelect />
<Input />
```

## Methods
```js
getCountries()
getPhoneCode()
```

## Props
```js
### CountriesSelect
TriggerClassName?: string;
FlagWidth?: number;
FlagHeight?: number;
FlagAlt?: string;
FlagListClassName?: string;
Placeholder?: string;
onValueChange?: (e: string) => void;
notSelectFlag?: boolean;
selectItemRef?: React.RefObject<HTMLDivElement>;

### Input
placeholder?: string;
type?: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
onChangeValue?: (e: string) => void;
```