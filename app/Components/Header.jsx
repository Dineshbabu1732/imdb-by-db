import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import {BsInfoCircleFill} from "react-icons/bs"
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
export default function Header() {
  return (
    <div className="flex items-center justify-between mx-2 max-w-6xl sm:mx-auto py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsInfoCircleFill} />
      </div>
      <div className="text-2xl flex items-center space-x-5">
        <DarkModeSwitch/>
        <Link href='/'>
<h2><span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">IM_Db</span><span className="text-xl hidden sm:inline">Clone</span></h2>
        </Link>
      </div>
    </div>
  );
}
