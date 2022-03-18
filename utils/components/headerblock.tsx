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
          className="flex sm:grid-cols-2 gap-4 bg-center bg-cover bg-no-repeat p-5 rounded-md"
        >
          <div
            style={{
              backgroundImage: `url(${icon})`,
              width: `${iconWidth}rem`,
            }}
            // TODO: find a way to replace ml-12 to be half of the width of the parent OR just make it the center somehow
            className="ml-12 sm:ml-0 h-6 bg-center bg-cover"
          />
          <div className="truncate invisible w-0 sm:visible sm:w-auto">
            {title}
          </div>
        </div>
      </div>
    </a>
  );
};

export default HeaderBlock;
