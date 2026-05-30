import {
  CalendarCheck,
  ChevronRight,
  Clock,
  Heart,
  Instagram,
  Leaf,
  MapPin,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const reservationIcons = [MessageCircle, Send, Instagram];

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
    <div className="mx-auto max-w-[34rem] text-center">
      <p className="text-sm font-bold tracking-[0.18em] text-[#64785e] uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold leading-tight text-[#34322e] sm:text-4xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-lg leading-8 text-[#69645c]">{text}</p> : null}
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
      <section className="relative px-5 pb-14 pt-8 sm:px-8 lg:px-10">
        <div className="absolute inset-x-0 top-0 h-[34rem] bg-[linear-gradient(180deg,#f4ead9_0%,#fffdf8_100%)]" />
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
            className="grid gap-8 pb-4 pt-10 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-[#64785e] shadow-sm ring-1 ring-[#eadfcd]">
                <Leaf className="h-4 w-4" />
                {shop.heroNote}
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-[1.15] text-[#34322e] sm:text-6xl">
                {shop.name}
              </h1>
              <p className="mt-5 text-2xl font-bold leading-snug text-[#536d55] sm:text-3xl">
                {shop.tagline}
              </p>
              <p className="mt-5 text-lg leading-8 text-[#69645c]">
                {shop.description}
              </p>
              <div className="mt-8">
                <PrimaryButton href={links.line}>
                  <CalendarCheck className="h-6 w-6" aria-hidden="true" />
                  予約する
                </PrimaryButton>
              </div>
            </div>

            <div className="relative min-h-[22rem] rounded-lg bg-[#e7dac6] p-4 shadow-2xl shadow-[#d8c3a1]/30">
              <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-[#b7c8a7]" />
              <div className="absolute -bottom-5 -left-5 h-24 w-24 rounded-full bg-[#f3e7d1]" />
              <div className="relative flex h-full min-h-[20rem] flex-col justify-between rounded-lg bg-[#fffaf1] p-6 ring-1 ring-white/70">
                <div className="flex items-center justify-between">
                  <div className="rounded-full bg-[#536d55] p-3 text-white">
                    <Sparkles className="h-7 w-7" />
                  </div>
                  <p className="text-right text-sm font-bold leading-6 text-[#64785e]">
                    Private Salon
                    <br />
                    Reservation Page
                  </p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-[#34322e]">1 page</p>
                  <p className="mt-3 text-xl font-bold leading-8 text-[#536d55]">
                    Instagramから迷わず予約へ。
                  </p>
                  <p className="mt-4 text-base leading-7 text-[#69645c]">
                    メニュー、予約方法、店舗情報をひとつにまとめた個人サロン向けLPです。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            eyebrow="Service"
            title="はじめてでも選びやすいサービス"
            text="お店の強みや施術の特徴を、短く分かりやすく伝えます。"
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-[#eadfcd]"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#eef4e9] text-[#536d55]">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-[#34322e]">{service.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#69645c]">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8efe1] px-5 py-14 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            eyebrow="Menu"
            title="メニュー"
            text="価格・所要時間・内容を並べて、予約前の不安を減らします。"
          />
          <div className="mt-9 space-y-4">
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

      <section className="px-5 py-14 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            eyebrow="Reserve"
            title="予約方法"
            text="お客様が使いやすい連絡手段を選べるよう、予約導線を大きく配置します。"
          />
          <div className="mt-9 grid gap-4 lg:grid-cols-3">
            {reservationMethods.map((method, index) => {
              const Icon = reservationIcons[index] ?? MessageCircle;
              return (
                <a
                  key={method.title}
                  href={links[method.linkKey]}
                  className="group rounded-lg bg-white p-6 shadow-sm ring-1 ring-[#eadfcd] transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#d8c3a1]/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#536d55] text-white">
                      <Icon className="h-7 w-7" />
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

      <section className="bg-[#eef4e9] px-5 py-14 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionTitle
            eyebrow="Shop"
            title="店舗情報"
            text="営業時間・住所・SNSへのリンクをまとめます。"
          />
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

      <section className="px-5 py-14 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <SectionTitle
            eyebrow="FAQ"
            title="よくある質問"
            text="予約前に気になりやすい内容をまとめておけます。"
          />
          <div className="mt-9 space-y-3">
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

      <section className="px-5 pb-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-lg bg-[#536d55] px-6 py-10 text-center text-white shadow-2xl shadow-[#536d55]/20 sm:px-10 sm:py-14">
          <p className="text-sm font-bold tracking-[0.18em] text-[#e8f0e2] uppercase">
            Reservation
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl">
            ご希望日時が決まったら、
            <br className="hidden sm:block" />
            そのまま予約へ。
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f8efe1]">
            空き状況やメニューの相談も受け付けています。まずはお気軽にご連絡ください。
          </p>
          <div className="mx-auto mt-8 max-w-md">
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
    </main>
  );
}
