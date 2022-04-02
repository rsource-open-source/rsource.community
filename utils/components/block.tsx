import Image from "next/image";

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
        <div className="max-h-[7.5rem] relative h-10">
          <Image
            alt={title}
            src={bgurl}
            layout="responsive"
            width={1000}
            height={1000}
            style={{
              borderTopLeftRadius: "0.375rem",
              borderTopRightRadius: "0.375rem",
            }}
            // objectFit="scale-down"
            // objectPosition="50% bottom"
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
