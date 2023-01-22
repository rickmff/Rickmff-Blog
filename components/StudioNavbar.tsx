import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

export default function StudioNavbar(props: any) {
  return (
    <>
      <Link href="/" className="text-[#FF530A] flex items-center p-6">
        <ArrowUturnLeftIcon className="h-5 w-5 text-[#FF530A] mr-2" />
        Voltar para o Blog
      </Link>
      {props.renderDefault(props)}
    </>
  );
}
