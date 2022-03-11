import { URL } from "url";

// https://docs.microsoft.com/en-us/javascript/api/@azure/keyvault-certificates/requireatleastone
type RequireAtLeastOne<T> = {
  [K in keyof T]-?: Required<Pick<T, K>> &
    Partial<Pick<T, Exclude<keyof T, K>>>;
}[keyof T];

// export default function Block(
//   img: URL,
//   title: string,
//   link: URL,
//   description: RequireAtLeastOne<{ notItalic: string; italic: string }>
// ): JSX.Element {
//   return (
//     <a href={link.href}>
//       <div className="h-[18.5rem] bg-slate-900 rounded-md border border-slate-700 hover:border-slate-600 hover:cursor-pointer">
//         <div
//           className={`h-[7.5rem] bg-center bg-cover bg-no-repeat bg-[url('${img.href}')]`}
//         ></div>
//         <div className="p-5">
//           <h2 className="truncate">rsource redirect</h2>
//           <h3 className="text-slate-400 text-xs pb-3 truncate">
//             <a href="" className="hover:underline">
//               {title}
//             </a>
//           </h3>
//           <p className="italic text-sm line-clamp-4">
//             <span className="not-italic">{description.notItalic}</span>
//             {description.italic}
//           </p>
//         </div>
//       </div>
//     </a>
//   );
// }

interface BlockProps {
  img: string;
  title: string;
  link: string;
  notItalic?: string;
  italic?: string;
}

const Block: React.FC<BlockProps> = ({
  img,
  title,
  link,
  notItalic,
  italic,
}) => {
  const j = `h-[7.5rem] bg-center bg-cover bg-no-repeat bg-[url('${img}')]`;
  return (
    <a href={link}>
      <div className="h-[18.5rem] bg-slate-900 rounded-md border border-slate-700 hover:border-slate-600 hover:cursor-pointer">
        <div className={j}></div>
        <div className="p-5">
          <h2 className="truncate">rsource redirect</h2>
          <h3 className="text-slate-400 text-xs pb-3 truncate">
            <p className="hover:underline">{title}</p>
          </h3>
          <p className="italic text-sm line-clamp-4">
            <span className="not-italic">{notItalic}</span>
            {italic}
          </p>
        </div>
      </div>
    </a>
  );
};

export default Block;
