import { lineClamp } from "@twind/line-clamp";
import { tw } from "twind";

interface BlockProps {
  bgurl: string;
  title: string;
  link: string;
  /**
   * why jsx? ex:
   * <>steam://connect/<wbr />ip:port</>
   */
  hyperlinkText?: JSX.Element | string;
  notItalic?: string;
  italic?: string;
}

const Block: React.FC<BlockProps> = ({
  bgurl,
  title,
  link,
  notItalic,
  italic,
  hyperlinkText,
}) => {
  return (
    <a href={link}>
      <div className="h-[18.5rem] bg-slate-900 rounded-md border border-slate-700 hover:border-slate-600 hover:cursor-pointer">
        <div
          className={`h-[7.5rem] bg-center bg-cover bg-no-repeat bg-[url('${bgurl}')]`}
        ></div>
        <div className="p-5">
          <h2 className="truncate">{title}</h2>
          <h3 className="text-slate-400 text-xs pb-3 truncate">
            <p className="hover:underline">{hyperlinkText || link}</p>
          </h3>
          <p className={tw`italic text-sm ${lineClamp(4)} pt-1`}>
            <span className={tw`not-italic`}>{notItalic + " "}</span>
            {italic}
          </p>
        </div>
      </div>
    </a>
  );
};

export const putIntoimgClass = (url: string) => {
  return `h-[7.5rem] bg-center bg-cover bg-no-repeat bg-[url('${url}')]`;
};

export default Block;
