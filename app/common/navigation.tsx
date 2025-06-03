import { Link } from "react-router-dom";

export default function Navigation(){
    return <nav className=" flex px-20  h-16 items-center justify-between backgroup-blur fixed
    top-0 left-0 right-0 z-5- bg-red-500/50">
        <div>
            <Link to="/" className="font-bold tracking-tight text-lg">Makers</Link>
        </div>
    </nav>
}