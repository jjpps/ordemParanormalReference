import Image from "next/image";

export default function Home() {
  return (
    <main>
      <br></br>
      <div className="container mx-auto">
        <div className="grid grid-rows-1 grid-flow-col gap-1">
          <div>
            <div className="box-border h-48 w-48 rounded hover:rounded-md border-4 hover:border-sky-200  ">
              <div className="h-full w-full "></div>
            </div>
          </div>
          <div>
            <div className="box-border h-48 w-48 rounded hover:rounded-md border-4 hover:border-sky-200  ">
              <div className="h-full w-full "></div>
            </div>
          </div>
          <div>
            <div className="box-border h-48 w-48 rounded hover:rounded-md border-4 hover:border-sky-200  ">
              <div className="h-full w-full "></div>
            </div>
          </div>
          <div>
            <div className="box-border h-48 w-48 rounded hover:rounded-md border-4 hover:border-sky-200  ">
              <div className="h-full w-full "></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
