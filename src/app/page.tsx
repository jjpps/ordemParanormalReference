import { CharacterPage } from "./CharacterPage";

const listaPersonagem: Array<Personagem> = [
  { id: 1, nome: "joao", imagem: "miriam.png", historia: "joao.historia" },
];

export default function Home() {
  return (
    <div>
      <br></br>
      <div className="container mx-auto">
        <div className="grid grid-rows-2 grid-flow-col gap-1">
          {listaPersonagem.map((personagem) => (
            <div key={personagem.id}>
              <div className="box-border h-[500px] w-[500px] rounded hover:rounded-md border-4  ">
                <div className="h-full h-full">
                  <CharacterPage personagem={personagem} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
