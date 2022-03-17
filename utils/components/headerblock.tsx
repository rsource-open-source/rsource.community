interface HeaderBlockProps {
  backgroundImg: string;
  /**
   * Must be an svg.
   */
  icon: string;
  title: string;
  link: string;
  iconWidth: number;
}

const HeaderBlock: React.FC<HeaderBlockProps> = ({
  backgroundImg,
  title,
  link,
  icon,
  iconWidth,
}) => {
  return (
    <a href={link}>
      <div className="bg-slate-900 rounded-md border border-slate-700 hover:border-slate-600 hover:cursor-pointer h-max mb-4">
        <div
          className={`flex grid-cols-2 gap-4 bg-center bg-cover bg-no-repeat truncate p-5 rounded-md bg-[url('${backgroundImg}')]`}
        >
          <div
            className={`w-${iconWidth} h-6 bg-center bg-cover  bg-[url('${icon}')]`}
          ></div>
          <div className="grow invisible sm:visible">{title}</div>
        </div>
      </div>
    </a>
  );
};

export default HeaderBlock;
