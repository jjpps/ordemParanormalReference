import Link from "next/link";

export function CharacterPage({ personagem }) {
  const p: Personagem = personagem;
  return (
    <Link
      href={{
        pathname: "/CharacterData",
      }}
    >
      <div
        className="bg-scroll h-[500px] w-[500px] bg-center bg-[length:298px] bg-no-repeat grayscale hover:grayscale-0 transition duration-[1000ms]  "
        style={{
          backgroundImage: `url(${p.imagem})`,
        }}
      ></div>
    </Link>
  );
}
