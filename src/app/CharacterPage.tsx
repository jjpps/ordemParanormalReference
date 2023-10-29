import Link from "next/link";

export function CharacterPage() {
  return (
    <div>
      <Link href="/CharacterData">Link para Charecter</Link>
      <div
        className="bg-scroll h-[500px] w-[500px] bg-center bg-[length:298px] bg-no-repeat grayscale hover:grayscale-0 transition duration-[1000ms]  "
        style={{
          backgroundImage: `url("miriam.png")`,
        }}
      ></div>
    </div>
  );
}
