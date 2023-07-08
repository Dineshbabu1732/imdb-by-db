import Image from "next/image";


export default function loading() {
  return (
    <div className="flex justify-center">
        <Image src="spinner.svg"
        width={0} 
        height={0} alt="loading..." srcset="" className="h-10 w-10" style={{height:'20px',width:'20px'}}/>
    </div>
  )
}
