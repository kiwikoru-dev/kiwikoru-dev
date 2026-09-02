import Image from "next/image";

export default function BrandMark({
  className,
}: {
  className?: string;
}) {
  return (
    <Image
      src="/logo.png"
      alt="KiwiKoru"
      width={284}
      height={200}
      priority
      className={className}
    />
  );
}
