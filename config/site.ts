type ShopLinks = {
  line: string;
  googleForm: string;
  instagram: string;
  googleMap: string;
};

export type SiteConfig = {
  shop: {
    name: string;
    tagline: string;
    description: string;
    heroNote: string;
  };
  links: ShopLinks;
  services: {
    title: string;
    text: string;
  }[];
  menu: {
    name: string;
    price: string;
    time: string;
    description: string;
  }[];
  reservationMethods: {
    title: string;
    description: string;
    linkKey: keyof ShopLinks;
    label: string;
  }[];
  shopInfo: {
    hours: string[];
    address: string;
    access: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const siteConfig: SiteConfig = {
  shop: {
    name: "mori nail & care",
    tagline: "日常に、少しだけ深呼吸できる指先を。",
    description:
      "完全予約制の小さなプライベートサロンです。ネイル、まつ毛、ヘア、整体などの個人店向けテンプレートとして、内容を差し替えて使えます。",
    heroNote: "初めての方もお気軽にご相談ください",
  },
  links: {
    line: "https://line.me/R/ti/p/@sample",
    googleForm: "https://forms.google.com/",
    instagram: "https://www.instagram.com/",
    googleMap: "https://maps.google.com/",
  },
  services: [
    {
      title: "丁寧なカウンセリング",
      text: "お悩みやご希望を伺い、生活に馴染むデザインやケアをご提案します。",
    },
    {
      title: "一人ひとりに合わせた施術",
      text: "爪や肌、まつ毛、髪、身体の状態に合わせて無理のないメニューを選びます。",
    },
    {
      title: "落ち着ける予約制サロン",
      text: "周りを気にせず過ごせる、個人店らしいやわらかな時間をご用意しています。",
    },
  ],
  menu: [
    {
      name: "シンプルケアコース",
      price: "5,500円",
      time: "60分",
      description: "初めての方や定期ケアにおすすめの基本メニューです。",
    },
    {
      name: "デザインコース",
      price: "7,700円",
      time: "90分",
      description: "季節感やお好みに合わせて、少し華やかに仕上げます。",
    },
    {
      name: "リラックス集中コース",
      price: "9,900円",
      time: "120分",
      description: "カウンセリングから仕上げまで、ゆったり受けたい方向けです。",
    },
  ],
  reservationMethods: [
    {
      title: "LINEで予約",
      description: "希望日時とメニューを送るだけ。空き状況を返信します。",
      linkKey: "line",
      label: "LINEで予約する",
    },
    {
      title: "Googleフォームで予約",
      description: "必要事項を入力して送信。営業時間内に折り返します。",
      linkKey: "googleForm",
      label: "フォームを開く",
    },
    {
      title: "Instagram DMで相談",
      description: "メニュー選びやデザイン相談だけでも大丈夫です。",
      linkKey: "instagram",
      label: "DMで相談する",
    },
  ],
  shopInfo: {
    hours: ["平日 10:00 - 19:00", "土日 10:00 - 17:00", "定休日 火曜・不定休"],
    address: "東京都渋谷区サンプル 1-2-3",
    access: "渋谷駅から徒歩5分",
  },
  faqs: [
    {
      question: "当日予約はできますか？",
      answer: "空きがあれば可能です。LINEまたはInstagram DMでお問い合わせください。",
    },
    {
      question: "支払い方法は何が使えますか？",
      answer: "現金、クレジットカード、各種キャッシュレス決済に対応しています。",
    },
    {
      question: "メニューに迷っています。",
      answer: "予約前のご相談も歓迎です。状態やご希望に合わせてご提案します。",
    },
    {
      question: "キャンセルはいつまで可能ですか？",
      answer: "前日までにご連絡ください。当日の変更はできるだけ早めにご相談ください。",
    },
  ],
};
