interface HeaderBlockProps {
  backgroundImg: string;
  icon: string;
  title: string;
  link: string;
  iconWidth: number;
}

const HeaderBlock = ({
  backgroundImg,
  title,
  link,
  icon,
  iconWidth,
}: HeaderBlockProps) => {
  return (
    <a href={link}>
      <div className="bg-slate-900 rounded-md border border-slate-700 hover:border-slate-600 hover:cursor-pointer h-max mb-4">
        <div
          style={{ backgroundImage: `url(${backgroundImg})` }}
          className="flex grid-cols-2 sm:grid-cols-1 gap-4 bg-center bg-cover bg-no-repeat truncate p-5 rounded-md"
        >
          <div
            style={{
              backgroundImage: `url(${icon})`,
              width: `${iconWidth}rem`,
            }}
            className="h-6 bg-center bg-cover"
          />
          <div>{title}</div>
        </div>
      </div>
    </a>
  );
};

export default HeaderBlock;
