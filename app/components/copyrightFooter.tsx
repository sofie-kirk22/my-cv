import FooterLink from "./footerLink";

export default function CopyrightFooter() {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-16 py-8 text-center text-xs text-black/50 dark:text-white/50">
            <div className="mx-auto max-w-6xl border-t border-black/10 dark:border-white/10 pt-6 space-y-3">

                <p>
                    © {year} Sofie Kirk Nielsen. All rights reserved.
                </p>

                <p className="opacity-70">
                    Icons by{" "}
                    <FooterLink href="https://www.freepik.com">
                        Freepik
                    </FooterLink>{" "}
                    &{" "}
                    <FooterLink href="https://www.flaticon.com/authors/lafs">
                        LAFS
                    </FooterLink>{" "}
                    via{" "}
                    <FooterLink href="https://www.flaticon.com/">
                        Flaticon
                    </FooterLink>
                </p>

            </div>
        </footer>
    );
}