import { tw } from "twind";

interface HeaderBlockProps {
  backgroundImg: string;
  /**
   * Must be an svg.
   */
  icon: string;
  title: string;
  link: string;
}

const HeaderBlock: React.FC<HeaderBlockProps> = ({
  backgroundImg,
  title,
  link,
  icon,
}) => {
  return (
    <a href={link}>
      <div className="bg-slate-900 rounded-md border border-slate-700 hover:border-slate-600 hover:cursor-pointer h-max mb-4">
        <div
          className={`flex grid-cols-2 gap-4 bg-center bg-cover bg-no-repeat truncate p-5 rounded-md bg-[url('${backgroundImg}')]`}
        >
          <div
            className={`flex-none border border-gray-500 w-6 h-6 bg-[url('${icon}')]`}
          ></div>
          <div className="grow invisible sm:visible">{title}</div>
        </div>
      </div>
    </a>
  );
};

export default HeaderBlock;
