import {
  CalendarCheck,
  ChevronRight,
  Clock,
  Heart,
  Instagram,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const reservationIcons = [MessageCircle, Send, Instagram];
const serviceColors = ["#dfead8", "#f4ead9", "#e9eee0"];

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto max-w-[30rem] text-center">
      <p className="text-sm font-bold tracking-[0.18em] text-[#64785e] uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold leading-tight text-[#34322e] sm:text-4xl">
        {title}
      </h2>
      {text ? <p className="mt-3 text-base leading-7 text-[#69645c]">{text}</p> : null}
    </div>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#536d55] px-7 py-4 text-lg font-bold text-white shadow-lg shadow-[#536d55]/20 transition hover:bg-[#435a46] sm:w-auto"
    >
      {children}
      <ChevronRight className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  const { shop, links, services, menu, reservationMethods, shopInfo, faqs } =
    siteConfig;

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffdf8]">
      <section className="relative px-5 pb-12 pt-6 sm:px-8 lg:px-10">
        <div className="absolute inset-x-0 top-0 h-[32rem] bg-[linear-gradient(180deg,#f4ead9_0%,#fffdf8_100%)]" />
        <div className="relative mx-auto max-w-5xl">
          <nav className="flex items-center justify-between py-3">
            <a href="#top" className="text-lg font-bold text-[#3f3a33]">
              {shop.name}
            </a>
            <a
              href={links.instagram}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d9cab3] bg-white/70 text-[#536d55]"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </nav>

          <div
            id="top"
            className="grid gap-7 pb-4 pt-7 sm:pt-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
          >
            <div>
              <p className="inline-flex rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-[#64785e] shadow-sm ring-1 ring-[#eadfcd]">
                {shop.heroNote}
              </p>
              <h1 className="mt-5 text-4xl font-bold leading-[1.12] text-[#34322e] sm:text-6xl">
                {shop.name}
              </h1>
              <p className="mt-4 text-2xl font-bold leading-snug text-[#536d55] sm:text-3xl">
                {shop.tagline}
              </p>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#69645c] sm:text-lg">
                {shop.description}
              </p>
              <div className="mt-7">
                <PrimaryButton href={links.line}>
                  <CalendarCheck className="h-6 w-6" aria-hidden="true" />
                  予約する
                </PrimaryButton>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg bg-[#e7dac6] shadow-2xl shadow-[#d8c3a1]/30">
              {shop.heroImage ? (
                <img
                  src={shop.heroImage}
                  alt={`${shop.name}のイメージ`}
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              ) : (
                <div className="grid aspect-[4/3] place-items-center bg-[#f4ead9] p-8 text-center">
                  <div>
                    <p className="text-sm font-bold tracking-[0.18em] text-[#64785e]">
                      PHOTO
                    </p>
                    <p className="mt-3 text-2xl font-bold text-[#34322e]">
                      ここに店舗写真を表示
                    </p>
                    <p className="mt-3 text-base leading-7 text-[#69645c]">
                      config/site.ts の heroImage に画像URLを入れてください。
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            eyebrow="Service"
            title="サービス"
            text="写真と短い説明で、雰囲気が伝わります。"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-[#eadfcd]"
              >
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="aspect-[4/3] w-full object-cover"
                  />
                ) : (
                  <div
                    className="grid aspect-[4/3] place-items-center"
                    style={{ backgroundColor: serviceColors[index % serviceColors.length] }}
                  >
                    <div className="text-center text-[#536d55]">
                      <Heart className="mx-auto h-8 w-8" />
                      <p className="mt-3 text-sm font-bold tracking-[0.18em]">
                        SERVICE PHOTO
                      </p>
                    </div>
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#34322e]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-[#69645c]">
                    {service.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8efe1] px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionTitle eyebrow="Menu" title="メニュー" />
          <div className="mt-8 space-y-4">
            {menu.map((item) => (
              <article
                key={item.name}
                className="rounded-lg bg-[#fffdf8] p-5 shadow-sm ring-1 ring-[#e7d7bf] sm:flex sm:items-center sm:justify-between sm:gap-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#34322e]">{item.name}</h3>
                  <p className="mt-2 text-base leading-7 text-[#69645c]">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 flex shrink-0 items-center gap-3 sm:mt-0">
                  <span className="rounded-full bg-[#eef4e9] px-4 py-2 text-base font-bold text-[#536d55]">
                    {item.time}
                  </span>
                  <span className="text-2xl font-bold text-[#34322e]">
                    {item.price}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionTitle eyebrow="Reserve" title="予約方法" />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {reservationMethods.map((method, index) => {
              const Icon = reservationIcons[index] ?? MessageCircle;
              return (
                <a
                  key={method.title}
                  href={links[method.linkKey]}
                  className="group rounded-lg bg-white p-5 shadow-sm ring-1 ring-[#eadfcd] transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#d8c3a1]/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-[#536d55] text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#34322e]">
                        {method.title}
                      </h3>
                      <p className="mt-2 text-base leading-7 text-[#69645c]">
                        {method.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex min-h-12 items-center justify-center rounded-full bg-[#eef4e9] px-5 text-base font-bold text-[#536d55] group-hover:bg-[#dfead8]">
                    {method.label}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#eef4e9] px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionTitle eyebrow="Shop" title="店舗情報" />
          <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-[#d9e4d1]">
            <dl className="space-y-6">
              <div>
                <dt className="flex items-center gap-2 text-lg font-bold text-[#34322e]">
                  <Clock className="h-5 w-5 text-[#536d55]" />
                  営業時間
                </dt>
                <dd className="mt-3 space-y-1 text-lg leading-8 text-[#69645c]">
                  {shopInfo.hours.map((hour) => (
                    <p key={hour}>{hour}</p>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-lg font-bold text-[#34322e]">
                  <MapPin className="h-5 w-5 text-[#536d55]" />
                  住所
                </dt>
                <dd className="mt-3 text-lg leading-8 text-[#69645c]">
                  <p>{shopInfo.address}</p>
                  <p>{shopInfo.access}</p>
                </dd>
              </div>
            </dl>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <a
                href={links.googleMap}
                className="flex min-h-13 items-center justify-center rounded-full border border-[#c7d5be] px-5 text-base font-bold text-[#536d55]"
              >
                Google Map
              </a>
              <a
                href={links.instagram}
                className="flex min-h-13 items-center justify-center rounded-full border border-[#c7d5be] px-5 text-base font-bold text-[#536d55]"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <SectionTitle eyebrow="FAQ" title="よくある質問" />
          <div className="mt-8 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg bg-white p-5 shadow-sm ring-1 ring-[#eadfcd]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-[#34322e]">
                  {faq.question}
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#eef4e9] text-[#536d55] transition group-open:rotate-90">
                    <ChevronRight className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-4 text-base leading-7 text-[#69645c]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-lg bg-[#536d55] px-6 py-9 text-center text-white shadow-2xl shadow-[#536d55]/20 sm:px-10 sm:py-12">
          <p className="text-sm font-bold tracking-[0.18em] text-[#e8f0e2] uppercase">
            Reservation
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl">
            ご予約はこちら
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#f8efe1]">
            空き状況やメニュー相談もお気軽にどうぞ。
          </p>
          <div className="mx-auto mt-7 max-w-md">
            <a
              href={links.line}
              className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-lg font-bold text-[#536d55] transition hover:bg-[#f8efe1]"
            >
              <MessageCircle className="h-6 w-6" />
              LINEで予約する
            </a>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-[#e2d6c3] bg-[#fffdf8]/95 p-3 shadow-[0_-10px_30px_rgba(83,109,85,0.12)] backdrop-blur sm:hidden">
        <a
          href={links.line}
          className="flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#536d55] px-5 text-base font-bold text-white"
        >
          <MessageCircle className="h-5 w-5" />
          LINEで予約
        </a>
      </div>
    </main>
  );
}
