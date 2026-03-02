type CardPreviewProps =
  | {
      type: "image";
      src: string;
      alt: string;
    }
  | {
      type: "iframe";
      src: string;
      title?: string;
    };

export default function CardPreview(props: CardPreviewProps) {
  if (props.type === "iframe") {
    return (
      <div className="overflow-hidden">
        <iframe
          src={props.src}
          title={props.title ?? "Embedded preview"}
          className="w-full h-[220px]"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <img
        src={props.src}
        alt={props.alt}
        className="w-full h-[220px] object-cover transition duration-500 group-hover:scale-105"
      />
    </div>
  );
}