import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function HeroBanner() {
    return (
        <div className="
            relative w-full overflow-hidden rounded-2xl 
            bg-gradient-to-r from-black to-zinc-900 
            text-white
            [@media(prefers-color-scheme:light)]:bg-gradient-to-r
            [@media(prefers-color-scheme:light)]:from-pink-300
            [@media(prefers-color-scheme:light)]:to-rose-100
            [@media(prefers-color-scheme:light)]:text-black
            px-8 py-16
        ">

            {/* Content */}
            <div className="relative z-10 grid items-center gap-10 md:grid-cols-[1fr_auto]">
                <div>
                    <h1
                        className={`${lusitana.className} text-4xl font-bold tracking-tight text-white md:text-5xl [@media(prefers-color-scheme:light)]:text-black`}
                    >
                        Sofie Kirk Nielsen
                    </h1>
                    <p className="mt-3 max-w-2xl text-lg text-indigo-100/90 md:text-xl [@media(prefers-color-scheme:light)]:text-black/70">
                        Frontend Developer | UX/UI-Focused Engineer & Designer
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <a
                            href="#projects"
                            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-100 [@media(prefers-color-scheme:light)]:text-pink-300"
                        >
                            View Projects
                        </a>
                        <a
                            href="#endBanner"
                            className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white/95 transition hover:bg-white/10 [@media(prefers-color-scheme:light)]:text-black [@media(prefers-color-scheme:light)]:border-black/30"
                        >
                            Contact
                        </a>
                    </div>
                </div>

                {/* Profile image cutout */}
                <div className="justify-self-start md:justify-self-end">
                    <div className="relative h-36 w-36 overflow-hidden rounded-full ring-2 ring-white/25 md:h-44 md:w-44">
                        <Image
                            src="/my-cv/profile.jpg"
                            alt="Portrait of Sofie Kirk Nielsen"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="mt-3 text-center text-xs text-white/70 [@media(prefers-color-scheme:light)]:text-black/70">
                        Aarhus • Open to opportunities
                    </div>
                </div>
            </div>
        </div>
    );
}
