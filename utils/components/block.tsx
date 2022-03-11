// https://docs.microsoft.com/en-us/javascript/api/@azure/keyvault-certificates/requireatleastone
type RequireAtLeastOne<T> = {
  [K in keyof T]-?: Required<Pick<T, K>> &
    Partial<Pick<T, Exclude<keyof T, K>>>;
}[keyof T];

interface BlockProps {
  imgClass: string;
  title: string;
  link: string;
  notItalic?: string;
  italic?: string;
}

const Block: React.FC<BlockProps> = ({
  imgClass,
  title,
  link,
  notItalic,
  italic,
}) => {
  return (
    <a href={link}>
      <div className="h-[18.5rem] bg-slate-900 rounded-md border border-slate-700 hover:border-slate-600 hover:cursor-pointer">
        <div className={imgClass}></div>
        <div className="p-5">
          <h2 className="truncate">rsource redirect</h2>
          <h3 className="text-slate-400 text-xs pb-3 truncate">
            <p className="hover:underline">{title}</p>
          </h3>
          <p className="italic text-sm line-clamp-4">
            <span className="not-italic">{notItalic + " "}</span>
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
