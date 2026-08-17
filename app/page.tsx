"use client";

import { useEffect, useState } from "react";

type Language = "tr" | "en";

const translations = {
  tr: {
    nav: ["Hakkımda", "Projeler", "Yetenekler"],
    navAria: "Ana navigasyon",
    homeAria: "Ana sayfa",
    hero: ["Fikirleri çalışan", "dijital ürünlere", "dönüştürüyorum."],
    introBefore: "Ben",
    introAfter: "Web deneyimleri, Java uygulamaları ve veritabanı odaklı sistemler geliştiren bir yazılım geliştiricisiyim.",
    explore: "Projelerimi keşfet",
    portraitAria: "Tibet Derebağ portresi",
    aboutLabel: "HAKKIMDA",
    aboutTitle: ["Kodun ötesinde,", "iyi deneyimler", "tasarlıyorum."],
    aboutOne: "Yaşar Üniversitesi'nde eğitimime devam ederken fikirlerimi çalışan, incelenebilir ürünlere dönüştürüyorum. İlgi alanım yalnızca bir arayüzün nasıl göründüğü değil; arka planda nasıl çalıştığı ve kullanıcıya nasıl hissettirdiği.",
    aboutTwo: "Frontend geliştirmeden mikroservislere, veritabanı tasarımından yazılım testine kadar farklı katmanlarda çalışıyorum. Her projede daha temiz bir yapı kurmaya, hızlı öğrenmeye ve işi gerçekten bitirmeye odaklanıyorum.",
    stats: ["Açık kaynak proje", "Teknoloji alanı", "Öğrenme isteği"],
    projectsLabel: "SEÇİLİ PROJELER",
    projectsTitle: "Yaptıklarım",
    projectsIntro: "Farklı problemler, farklı teknolojiler; aynı merak ve üretme isteği.",
    source: "Kaynak kod",
    demo: "Canlı demo",
    techAria: "teknolojileri",
    more: "DİĞER ÇALIŞMALAR",
    skillsLabel: "ARAÇ ÇANTAM",
    skillsTitle: ["Doğru problem için", "doğru teknoloji."],
    skillsIntro: "Projeyi uçtan uca düşünebilmek için arayüz, sunucu, veritabanı ve geliştirme araçlarını birlikte kullanıyorum.",
    principleLabel: "ÇALIŞMA PRENSİBİ / 001",
    principle: ["Önce çalışanı yap.", "Sonra", "iyileştir.", "Her zaman paylaş."],
    footerEyebrow: "BİRLİKTE BİR ŞEYLER ÜRETELİM",
    footerTitle: ["Bir fikrin mi var?", "Konuşalım."],
    footerCta: "GitHub'da buluşalım",
    copyright: "© 2026 Tibet Derebağ. İzmir'de tasarlandı ve geliştirildi.",
    top: "Yukarı",
    whatsappStatus: "Genellikle kısa sürede yanıtlarım",
    whatsappGreeting: "Merhaba! Bir proje veya fikir hakkında konuşmak ister misin?",
    whatsappButton: "WhatsApp'tan yaz",
    whatsappOpen: "WhatsApp iletişim penceresini aç",
    whatsappClose: "WhatsApp iletişim penceresini kapat",
  },
  en: {
    nav: ["About", "Projects", "Skills"],
    navAria: "Main navigation",
    homeAria: "Home",
    hero: ["I turn ideas into", "digital products", "that actually work."],
    introBefore: "I'm",
    introAfter: "A software developer building web experiences, Java applications, and database-driven systems.",
    explore: "Explore my work",
    portraitAria: "Portrait of Tibet Derebağ",
    aboutLabel: "ABOUT ME",
    aboutTitle: ["Beyond code,", "I design great", "experiences."],
    aboutOne: "While continuing my studies at Yaşar University, I turn ideas into working, inspectable products. I care not only about how an interface looks, but also how it works behind the scenes and how it feels to use.",
    aboutTwo: "I work across different layers, from frontend development and microservices to database design and software testing. With every project, I focus on cleaner structures, learning quickly, and actually finishing the work.",
    stats: ["Open-source projects", "Technology areas", "Drive to learn"],
    projectsLabel: "SELECTED PROJECTS",
    projectsTitle: "My work",
    projectsIntro: "Different problems, different technologies; the same curiosity and drive to build.",
    source: "Source code",
    demo: "Live demo",
    techAria: "technologies",
    more: "MORE PROJECTS",
    skillsLabel: "MY TOOLKIT",
    skillsTitle: ["The right technology", "for the right problem."],
    skillsIntro: "I combine interface, server, database, and development tools to think through a product from end to end.",
    principleLabel: "WORKING PRINCIPLE / 001",
    principle: ["Make it work first.", "Then", "make it better.", "Always share it."],
    footerEyebrow: "LET'S BUILD SOMETHING TOGETHER",
    footerTitle: ["Have an idea?", "Let's talk."],
    footerCta: "Find me on GitHub",
    copyright: "© 2026 Tibet Derebağ. Designed and built in İzmir.",
    top: "Back to top",
    whatsappStatus: "I usually reply shortly",
    whatsappGreeting: "Hi! Would you like to talk about a project or an idea?",
    whatsappButton: "Message on WhatsApp",
    whatsappOpen: "Open WhatsApp contact window",
    whatsappClose: "Close WhatsApp contact window",
  },
} as const;

const projectData = {
  tr: [
    ["CityLore", "Full-stack · Kültürel keşif", "Türkiye'nin kültürel mirasını interaktif harita, rota planlama, canlı etkinlikler ve yapay zekâ ile keşfetmeyi sağlayan tam kapsamlı platform."],
    ["StuMap", "Frontend · Öğrenci platformu", "Öğrenci odaklı bir harita platformu için ölçeklenebilir, hareketli ve piksel hassasiyetinde hazırlanmış modern arayüz."],
    ["F1 Database Manager", "Masaüstü · Veritabanı sistemleri", "2021–2024 Formula 1 sezon verilerini yöneten; sorgu, analiz ve güvenli CRUD işlemleri sunan Java masaüstü uygulaması."],
    ["Migros Product System", "Backend · Mikroservisler", "Ürün, kategori ve barkod servislerini OpenFeign ile konuşturan, Docker tabanlı envanter yönetim sistemi."],
  ],
  en: [
    ["CityLore", "Full-stack · Cultural discovery", "A full-scale platform for exploring Türkiye's cultural heritage through an interactive map, route planning, live events, and AI-powered features."],
    ["StuMap", "Frontend · Student platform", "A scalable, animated, pixel-precise modern interface built for a student-focused mapping platform."],
    ["F1 Database Manager", "Desktop · Database systems", "A Java desktop application for managing 2021–2024 Formula 1 season data with queries, analytics, and safe CRUD operations."],
    ["Migros Product System", "Backend · Microservices", "A Docker-based inventory management system connecting product, category, and barcode services through OpenFeign."],
  ],
} as const;

const projectMeta = [
  { index: "01", stack: ["React", "Node.js", "MongoDB", "Leaflet"], github: "https://github.com/derebagtibet/CityLore", demo: "https://interactive-map-platform-one.vercel.app", className: "projectOrange", mark: "CL" },
  { index: "02", stack: ["React", "TypeScript", "Tailwind", "Framer Motion"], github: "https://github.com/derebagtibet/StuMapWebsite", demo: "https://stu-map-website.vercel.app", className: "projectBlue", mark: "SM" },
  { index: "03", stack: ["Java", "Swing", "MySQL", "JDBC"], github: "https://github.com/derebagtibet/F1-Database-Manager", demo: null, className: "projectRed", mark: "F1" },
  { index: "04", stack: ["Java 21", "Spring Boot", "PostgreSQL", "Docker"], github: "https://github.com/derebagtibet/Migros-ProductSystem", demo: null, className: "projectGreen", mark: "MS" },
];

const moreProjectData = {
  tr: [
    ["Hogwarts Archives", "React ile 400+ karakter, kitap, büyü ve ev içeren kapsamlı Harry Potter bilgi deneyimi."],
    ["GamePlayer", "Web arayüzü ile uygulama mantığını bir araya getiren TypeScript ağırlıklı interaktif proje."],
    ["Trendyol Test", "Gerçek bir ürün deneyimi üzerine hazırlanmış Java tabanlı yazılım test projesi."],
  ],
  en: [
    ["Hogwarts Archives", "A comprehensive Harry Potter experience with 400+ characters, books, spells, and houses, built with React."],
    ["GamePlayer", "An interactive TypeScript-heavy project combining a web interface with application logic."],
    ["Trendyol Test", "A Java-based software testing project created around a real-world product experience."],
  ],
} as const;

const moreMeta = [
  ["JavaScript · React", "https://github.com/derebagtibet/Harry-Potter-Information-Page", "https://harry-potter-information-page.vercel.app"],
  ["TypeScript", "https://github.com/derebagtibet/GamePlayer", null],
  ["Java · Testing", "https://github.com/derebagtibet/Trendyol-Test", null],
] as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("tr");
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-language");
    if (saved === "tr" || saved === "en") setLanguage(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === "tr"
      ? "Tibet Derebağ — Yazılım Geliştirici"
      : "Tibet Derebağ — Software Developer";
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute(
      "content",
      language === "tr"
        ? "İzmir'de web deneyimleri, Java uygulamaları ve veritabanı odaklı sistemler geliştiren Tibet Derebağ'ın kişisel portföyü."
        : "The personal portfolio of Tibet Derebağ, a software developer in İzmir building web experiences, Java applications, and database-driven systems.",
    );
  }, [language]);

  const changeLanguage = (next: Language) => {
    setLanguage(next);
    window.localStorage.setItem("portfolio-language", next);
  };

  const whatsappMessage = language === "tr"
    ? "Merhaba Tibet, web siten üzerinden ulaşıyorum."
    : "Hi Tibet, I'm reaching out through your website.";
  const whatsappUrl = `https://wa.me/905549692030?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <main>
      <nav className="nav" aria-label={t.navAria}>
        <a className="brand" href="#top" aria-label={t.homeAria}>TD<span>.</span></a>
        <div className="navLinks">
          <a href="#hakkimda">{t.nav[0]}</a><a href="#projeler">{t.nav[1]}</a><a href="#yetenekler">{t.nav[2]}</a>
        </div>
        <div className="navActions">
          <div className="languageSwitch" role="group" aria-label="Language / Dil">
            <button className={language === "tr" ? "active" : ""} onClick={() => changeLanguage("tr")} aria-pressed={language === "tr"}>TR</button>
            <span>/</span>
            <button className={language === "en" ? "active" : ""} onClick={() => changeLanguage("en")} aria-pressed={language === "en"}>EN</button>
          </div>
          <a className="navCta" href="https://github.com/derebagtibet" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="heroCopy">
          <h1>{t.hero[0]}<br /><em>{t.hero[1]}</em><br />{t.hero[2]}</h1>
          <p className="intro">{t.introBefore} <strong>Tibet Derebağ</strong>. {t.introAfter}</p>
          <div className="heroActions">
            <a className="primaryButton" href="#projeler">{t.explore} <span>↓</span></a>
            <a className="textLink" href="https://github.com/derebagtibet" target="_blank" rel="noreferrer">github.com/derebagtibet ↗</a>
          </div>
        </div>
        <div className="portraitWrap" aria-label={t.portraitAria}>
          <div className="orbit orbitOne" /><div className="orbit orbitTwo" />
          <div className="portraitCard"><img src="/tibet-profile.jpg" alt="Tibet Derebağ" /><div className="portraitTag"><span>01</span> SOFTWARE<br />DEVELOPER</div></div>
          <span className="codeTag codeTagOne">&lt;build /&gt;</span><span className="codeTag codeTagTwo">Java · TypeScript</span>
        </div>
      </section>

      <div className="ticker" aria-hidden="true"><div>BUILD · LEARN · SHIP · IMPROVE · BUILD · LEARN · SHIP · IMPROVE ·</div></div>

      <section className="about sectionShell" id="hakkimda">
        <div className="sectionLabel"><span>01</span> {t.aboutLabel}</div>
        <div className="aboutGrid">
          <h2>{t.aboutTitle[0]}<br /><em>{t.aboutTitle[1]}</em><br />{t.aboutTitle[2]}</h2>
          <div className="aboutCopy">
            <p>{t.aboutOne}</p><p>{t.aboutTwo}</p>
            <div className="stats"><div><strong>10</strong><span>{t.stats[0]}</span></div><div><strong>5+</strong><span>{t.stats[1]}</span></div><div><strong>∞</strong><span>{t.stats[2]}</span></div></div>
          </div>
        </div>
      </section>

      <section className="projects" id="projeler">
        <div className="sectionShell projectsHeader">
          <div className="sectionLabel light"><span>02</span> {t.projectsLabel}</div>
          <div><h2>{t.projectsTitle}<span>.</span></h2><p>{t.projectsIntro}</p></div>
        </div>
        <div className="projectGrid sectionShell">
          {projectMeta.map((meta, index) => {
            const [title, type, description] = projectData[language][index];
            return <article className="projectCard" key={title}>
              <div className={`projectVisual ${meta.className}`}><span className="projectIndex">{meta.index}</span><span className="projectMark">{meta.mark}</span><div className="visualLines"><i /><i /><i /></div></div>
              <div className="projectInfo">
                <p className="projectType">{type}</p><h3>{title}</h3><p className="projectDescription">{description}</p>
                <ul aria-label={`${title} ${t.techAria}`}>{meta.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className="projectLinks">
                  <a href={meta.github} target="_blank" rel="noreferrer">{t.source} ↗</a>
                  {meta.demo && <a href={meta.demo} target="_blank" rel="noreferrer">{t.demo} ↗</a>}
                </div>
              </div>
            </article>;
          })}
        </div>
        <div className="moreProjects sectionShell">
          <p className="moreLabel">{t.more}</p>
          {moreMeta.map(([stack, github, demo], index) => {
            const [title, description] = moreProjectData[language][index];
            return <article className="moreRow" key={title}>
              <span>0{index + 5}</span><div><h3>{title}</h3><p>{description}</p></div><strong>{stack}</strong>
              <div className="moreLinks">{demo && <a href={demo} target="_blank" rel="noreferrer" aria-label={`${title} ${t.demo}`}>◎</a>}<a href={github} target="_blank" rel="noreferrer" aria-label={`${title} GitHub`}>↗</a></div>
            </article>;
          })}
        </div>
      </section>

      <section className="skills sectionShell" id="yetenekler">
        <div className="sectionLabel"><span>03</span> {t.skillsLabel}</div>
        <div className="skillsIntro"><h2>{t.skillsTitle[0]}<br /><em>{t.skillsTitle[1]}</em></h2><p>{t.skillsIntro}</p></div>
        <div className="skillGrid">
          <article><span>01</span><h3>Frontend</h3><p>TypeScript · JavaScript · React · HTML · CSS · Tailwind · Vite</p></article>
          <article><span>02</span><h3>Backend</h3><p>Java · Spring Boot · Node.js · Express · REST APIs · OpenFeign</p></article>
          <article><span>03</span><h3>Data</h3><p>PostgreSQL · MySQL · MongoDB · Mongoose · JDBC · SQL</p></article>
          <article><span>04</span><h3>Workflow</h3><p>Git · GitHub · Docker · Swagger · Testing · Responsive UI</p></article>
        </div>
      </section>

      <section className="principle">
        <p>{t.principleLabel}</p>
        <blockquote>“{t.principle[0]}<br />{t.principle[1]} <em>{t.principle[2]}</em><br />{t.principle[3]}”</blockquote>
        <span>— SHIP FIRST, IMPROVE FAST</span>
      </section>

      <aside className={`whatsappWidget ${whatsappOpen ? "isOpen" : ""}`} aria-label="WhatsApp">
        <div className="whatsappPopup" aria-hidden={!whatsappOpen}>
          <div className="whatsappHeader">
            <div className="whatsappAvatar">TD<span className="onlineDot" /></div>
            <div><strong>Tibet Derebağ</strong><span>{t.whatsappStatus}</span></div>
            <button type="button" onClick={() => setWhatsappOpen(false)} aria-label={t.whatsappClose}>×</button>
          </div>
          <div className="whatsappBody">
            <div className="whatsappBubble"><span>Tibet</span><p>{t.whatsappGreeting}</p><time>now</time></div>
            <a className="whatsappLink" href={whatsappUrl} target="_blank" rel="noreferrer">{t.whatsappButton} <span>↗</span></a>
          </div>
        </div>
        <button className="whatsappToggle" type="button" onClick={() => setWhatsappOpen((current) => !current)} aria-label={whatsappOpen ? t.whatsappClose : t.whatsappOpen} aria-expanded={whatsappOpen}>
          <span className="whatsappIcon">WA</span><span className="whatsappNotification">1</span>
        </button>
      </aside>

      <footer id="iletisim">
        <div className="footerMain sectionShell"><p className="footerEyebrow">{t.footerEyebrow}</p><h2>{t.footerTitle[0]}<br /><em>{t.footerTitle[1]}</em></h2><a className="footerCta" href="https://github.com/derebagtibet" target="_blank" rel="noreferrer">{t.footerCta} <span>↗</span></a></div>
        <div className="footerBottom sectionShell"><a className="brand footerBrand" href="#top">TD<span>.</span></a><p>{t.copyright}</p><div><a href="#top">{t.top} ↑</a><a href="https://github.com/derebagtibet" target="_blank" rel="noreferrer">GitHub ↗</a></div></div>
      </footer>
    </main>
  );
}
