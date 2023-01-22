import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-60 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="/logo.jpg"
            width={50}
            height={50}
            alt="logo rickmff"
          />
        </Link>
        <h1>Rickmff</h1>
      </div>
      <div>
        <Link href="/">
          <FontAwesomeIcon icon={faCoffee} width={30} height={30}/>
        </Link>
      </div>
    </header>
  );
}
