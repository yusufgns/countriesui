import { getCountries } from "libphonenumber-js"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
export default function CountriesSelect({
    TriggerClassName = "w-[120px]",
    FlagWidth = 24,
    FlagHeight = 30,
    FlagAlt = "United States",
    FlagListClassName = "flex items-center gap-2",
    Placeholder = "Countries",
    onValueChange,
    notSelectFlag = false,
    selectItemRef
}: {
    TriggerClassName?: string;
    FlagWidth?: number;
    FlagHeight?: number;
    FlagAlt?: string;
    FlagListClassName?: string;
    Placeholder?: string;
    onValueChange?: (e: string) => void;
    notSelectFlag?: boolean;
    selectItemRef?: React.RefObject<HTMLDivElement>;
}) {
    return (
        <Select onValueChange={onValueChange}>
            <SelectTrigger className={TriggerClassName}>
                <SelectValue placeholder={Placeholder} />
            </SelectTrigger>
            <SelectContent>
                {getCountries().map(item => (
                    <SelectItem ref={selectItemRef} key={item} value={item}>
                        <div className={FlagListClassName}>
                            {notSelectFlag ? (
                                null
                            ) : (
                                <img
                                    width={FlagWidth}
                                    height={FlagHeight}
                                    alt={FlagAlt}
                                    src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${item}.svg`} />
                            )}
                            <p>
                                {item}
                            </p>
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
