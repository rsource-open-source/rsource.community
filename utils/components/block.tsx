/**
 * about `description` and `hyperlinkText`
 *
 * why use jsx? example:
 *
 * ```jsx
 * <>steam://connect/<wbr />ip:port</>
 * ```
 */
interface BlockProps {
  bgurl: string;
  title: string;
  link: string;
  hyperlinkText?: JSX.Element | string;
  description: JSX.Element | string;
}

const Block = ({
  bgurl,
  title,
  link,
  description,
  hyperlinkText,
}: BlockProps) => {
  return (
    <a href={link}>
      <div className="h-[18.5rem] bg-slate-900 rounded-md border border-slate-700 hover:border-slate-600 hover:cursor-pointer">
        {/* <div
          style={{ backgroundImage: `url(${bgurl})` }}
          className="h-[7.5rem] bg-center bg-cover bg-no-repeat"
        /> */}
        <div className="max-h-[7.5rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={title}
            src={bgurl}
            style={{
              minHeight: "7.5rem",
              width: "auto",
              objectFit: "cover",
              objectPosition: "",
            }}
          />
        </div>
        <div className="p-5">
          <h2 className="truncate">{title}</h2>
          <h3 className="text-slate-400 text-xs pb-3 truncate">
            <p className="hover:underline">{hyperlinkText || link}</p>
          </h3>
          <p className="text-sm line-clamp-4 pt-1">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default Block;
