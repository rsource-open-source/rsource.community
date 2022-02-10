export default function mapMetadata(
  title: string,
  url: string,
  description: string,
  image: string
): JSX.Element {
  return (
    <>
      <title title={title}></title>
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
    </>
  );
}
