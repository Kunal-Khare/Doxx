import react, { useState } from "react";
import Card from "./Card";

function Forground() {
  const  data = [
    {
      id: 1,
      title: "ドキュメント",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      filesize : ".8mb",
      close : true,
      tag : {isOpen : false, text : "今すぐダウンロード", tagcolor : "bg-cyan-200"},
    }
  ];
  return (
    <div className="fixed top-0 lef-0   w-full h-full">
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
}

export default Forground;
