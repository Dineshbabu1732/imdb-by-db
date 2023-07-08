import Image from "next/image";


export default function loading() {
  return (
    <div className="flex justify-center">
        <Image src="spinner.svg" alt="loading..." srcset="" className="h-10"/>
    </div>
  )
}
