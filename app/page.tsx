"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import bg from "../app/bg.jpg";
import avatar from "../app/avatar.png";
import {
  Mail,
  Briefcase,
  Github,
  Folder,
  Linkedin,
  Instagram,
  Send,
  HeartHandshake
} from "lucide-react";


const content = {
  en: {
    role: "Software Engineer / Creative Developer",
    about:
      "I build clean, modern interfaces focused on clarity, usability and performance.",
    contact: "Contact",
    portfolio: "Portfolio",
    support: "Support Ukraine - UNITED24"
  },
  ua: {
    role: "Software Engineer / Creative Developer",
    about:
      "Створюю сучасні інтерфейси з фокусом на зручність, продуктивність та деталі.",
    contact: "Звʼязатися",
    portfolio: "Портфоліо",
    support: "Підтримати Україну - UNITED24"
  },
  dk: {
    role: "Software Engineer / Creative Developer",
    about:
      "Jeg bygger rene og moderne interfaces med fokus på brugervenlighed.",
    contact: "Kontakt",
    portfolio: "Portefølje",
    support: "Støt Ukraine - UNITED24"
  },
  bih: {
    role: "Software Engineer / Creative Developer",
    about:
      "Gradim moderne i čiste interfejse s fokusom na upotrebljivost.",
    contact: "Kontakt",
    portfolio: "Portfolio",
    support: "Podrži Ukrajinu - UNITED24"
  },
  de: {
    role: "Software Engineer / Creative Developer",
    about:
      "Ich entwickle moderne Interfaces mit Fokus auf Klarheit und Performance.",
    contact: "Kontakt",
    portfolio: "Portfolio",
    support: "Ukraine unterstützen - UNITED24"
  }
};


export default function Home() {
  const [lang, setLang] = useState<keyof typeof content>("en");
  const t = content[lang];

  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 bg-[#0C1014] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C1014] via-[#0E1318] to-black" />
      <div className="absolute top-[-40%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#edcb4c]/10 blur-[140px]" />

      <div className="relative z-10 w-full max-w-sm rounded-[28px] bg-white/[0.05] backdrop-blur-xl border border-white/10">

        <div className="relative h-36 rounded-t-[28px] overflow-hidden">
          <Image src={bg} alt="Cover" fill className="object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1014]/80 to-transparent" />

          <div className="absolute top-4 right-4 flex gap-3 z-10">
            <SocialIcon href="https://t.me/ivan3750" icon={<Send size={16} />} />
            <SocialIcon
              href="https://www.instagram.com/ivan.kohan.ua/"
              icon={<Instagram size={16} />}
            />
          </div>
        </div>

        <div className="px-6 pb-6 -mt-12">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full overflow-hidden border border-white/15 bg-[#0C1014] z-10">
              <Image src={avatar} alt="Avatar" className="object-cover w-20 h-20" />
            </div>
          </div>

          <div className="mt-4 text-center">
            <h1 className="text-base font-medium text-white">Ivan Kohan</h1>
            <p className="text-xs text-neutral-400 mt-1">{t.role}</p>
          </div>

          <p className="mt-4 text-sm text-neutral-300 text-center leading-relaxed">
            {t.about}
          </p>


          <a
            href="kohan3750@gmail.com"
            className="
              mt-6 flex items-center justify-center gap-2 w-full
              rounded-xl py-3 text-sm font-medium text-black
              bg-gradient-to-r from-[#edcb4c] to-[#f5dc7a]
              hover:brightness-105 hover:scale-[1.01]
              active:scale-[0.98]
            "
          >
            <Mail size={18} /> {t.contact}
          </a>


          <div className="mt-4 space-y-2">
            <LinkCard
              icon={<Briefcase size={16} />}
              title="WebHjerte - web development agency"
              link="https://webhjerte.dk"
            />
            <LinkCard
              icon={<Github size={16} />}
              title="GitHub - code and projects"
              link="https://github.com/Ivan3750"
            />
            <LinkCard
              icon={<Folder size={16} />}
              title={t.portfolio}
              link="https://ivan3750.github.io/AboutMe/"
            />
            <LinkCard
              icon={<HeartHandshake size={16} />}
              title={t.support}
              link="https://u24.gov.ua/"
              
            />
          </div>

          <div className="mt-4 flex justify-center gap-2 text-xs">
            {Object.keys(content).map(l => (
              <button
                key={l}
                onClick={() => setLang(l as any)}
                className={`
                  px-2 py-1 rounded-md border
                  ${
                    lang === l
                      ? "bg-[#edcb4c] text-black border-transparent"
                      : "border-white/15 text-neutral-400 hover:border-[#edcb4c]/40"
                  }
                `}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}


function LinkCard({
  title,
  icon,
  subtle = false,
  link
}: {
  link: string;
  title: string;
  icon: React.ReactNode;
  subtle?: boolean;
}) {
  return (
    <Link href={link} target="_blank"   className="block"
>
      <div
        className={`
          group flex items-center gap-3 rounded-lg px-4 py-3 text-sm
          border bg-white/[0.03] transition-all
          hover:scale-[1.001]
          ${
            subtle
              ? "border-[#0057B7]/30 text-neutral-300 "
              : "border-white/15 text-white "
          }
        `}
      >
        <span className="text-[#edcb4c] transition">
          {icon}
        </span>
        {title}
      </div>
    </Link>
  );
}

function SocialIcon({
  href,
  icon
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="
        w-9 h-9 rounded-full flex items-center justify-center
        bg-black/40 border border-white/10 text-white
      
      "
    >
      {icon}
    </Link>
  );
}
