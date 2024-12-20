
import { Search, BellRing } from "lucide-react"
import { Avatar } from '@mantine/core';
import AvatarImg from "../assets/avatar.png";

function Topbar() {
    return (
        <div className='p-5 mb-5'>
            <div className="flex gap-10 justify-between items-center">
                <div className="w-[80%] border border-1 flex gap-2 items-center px-2 shadow-sm">
                    <div className="align-center flex ps-2"><Search className="text-slate-400" /></div>
                    <input type='text' className='outline-none w-full py-3 px-1' placeholder='search something' />
                </div>

                <div className="flex gap-4 justify-center items-center">
                    <BellRing className="text-slate-400" />
                    <Avatar src={AvatarImg} alt="it's me" />
                </div>
            </div>
        </div>
    )
}

export default Topbar