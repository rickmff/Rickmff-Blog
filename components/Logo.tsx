import Image from "next/image";

export default function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <>
      <Image
        className="rounded-full object-cover ml-4"
        height={50}
        width={50}
        src="/logo.jpg"
        alt={title}
      />
      <>{renderDefault(props)}</>
    </>
  );
}
