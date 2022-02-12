import figlet from "figlet";

//@ts-ignore
import slant from "figlet/importable-fonts/Slant";
() => {
  const fs = require("fs");

  console.log(fs);

  // fs.readdir("figlet/importable-fonts", (err, files) => {
  //   if (err) throw err;
  //   for (const file of files) {
  //     import(`figlet/importable-fonts/${file}`).then((font) => {
  //       console.log(font);
  //     });
  //   }
  // });
};

export default function generateTitle(title: string): string {
  figlet.parseFont("Slant", slant);

  let returnthis: string = "";
  figlet.text(
    "rsource.commnunity",
    {
      font: "Slant",
    },
    (err, data) => {
      if (err) throw err;
      console.log(data);
      if (data) returnthis = data;
    }
  );
  if (returnthis === "") console.log("fucktard");
  return returnthis;
}
