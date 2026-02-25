import Image from "next/image";

type SkillIconProps = {
    src: string;
    alt: string;
    size?: number;
};

export default function Icon({
    src,
    alt,
    size = 24,
}: SkillIconProps) {
    return (
        <Image
            src={src}
            alt={alt}
            width={size}
            height={size}
            priority
        />
    );
}