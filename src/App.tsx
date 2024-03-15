import CountriesSelect from "./components/countries-select"
import Input from "./components/input"

export default function App() {

  return (
    <div className="flex items-center gap-2 justify-center w-full h-screen">
      <CountriesSelect />
      <Input placeholder="Number" />
    </div>
  );
}
