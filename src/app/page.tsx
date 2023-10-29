import { CharacterPage } from "./CharacterPage";
export default function Home() {
  return (
    <main>
      <br></br>
      <div className="container mx-auto">
        <div className="grid grid-rows-2 grid-flow-col gap-1">
          <div>
            <div className="box-border h-[500px] w-[500px] rounded hover:rounded-md border-4  ">
              <div className="h-full h-full">
                <CharacterPage />
              </div>
            </div>
          </div>
          <div>
            <div className="box-border h-[500px] w-[500px] rounded hover:rounded-md border-4  ">
              <div className="h-full h-full">
                <CharacterPage />
              </div>
            </div>
          </div>
          <div>
            <div className="box-border h-[500px] w-[500px] rounded hover:rounded-md border-4  ">
              <div className="h-full h-full">
                <CharacterPage />
              </div>
            </div>
          </div>
          <div>
            <div className="box-border h-[500px] w-[500px] rounded hover:rounded-md border-4  ">
              <div className="h-full h-full">
                <CharacterPage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
