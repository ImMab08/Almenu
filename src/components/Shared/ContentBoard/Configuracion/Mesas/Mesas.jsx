import { IconTableTwo, IconTableFour, IconTableSix, IconTableHeight } from "./icons"
import { mesas } from "./config";

const iconMap = {
  IconTableTwo: IconTableTwo,
  IconTableFour: IconTableFour,
  IconTableSix: IconTableSix,
  IconTableHeight: IconTableHeight
};

export function Mesas () {

  const Mesas = mesas.map(({title, icon}) => {
    const IconComponent = iconMap[icon];
    return (
      <div key={title} className=" w-[110px] h-[110px] p-2 flex flex-col items-center bg-slate-300 rounded-lg cursor-pointer my-1">
        <p className="text-sm font-semibold">{title}</p>
        <IconComponent/>
      </div>
    )
  });

  return (
    <section className="w-full h-full p-5 flex">
      <div className="w-[86%] h-auto bg-primary rounded-lg p-4">
        <div className=" w-[100px] h-[100px] p-2 flex flex-col items-center bg-slate-300 rounded-lg cursor-pointer">
          <p>Mesa 1</p>
          <IconTableTwo />
        </div>
      </div>
      <div className="w-[14%] h-auto flex flex-col items-center bg-primary rounded-lg p-2 ml-3 overflow-auto">
        {Mesas}
      </div>
    </section>
  )
}