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
    heroImage: string;
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
    tagline: "指先から、ここちよく。",
    description: "完全予約制の小さなプライベートサロン。予約や相談はこちらからどうぞ。",
    heroNote: "初めての方も歓迎",
    heroImage: "",
  },
  links: {
    line: "https://line.me/R/ti/p/@sample",
    googleForm: "https://forms.google.com/",
    instagram: "https://www.instagram.com/",
    googleMap: "https://maps.google.com/",
  },
  services: [
    {
      title: "丁寧な相談",
      text: "ご希望を伺い、似合う内容をご提案します。",
    },
    {
      title: "やさしい施術",
      text: "状態に合わせて無理なく進めます。",
    },
    {
      title: "予約制サロン",
      text: "落ち着いた時間をお過ごしいただけます。",
    },
  ],
  menu: [
    {
      name: "シンプルケア",
      price: "5,500円",
      time: "60分",
      description: "初めての方にもおすすめです。",
    },
    {
      name: "デザインコース",
      price: "7,700円",
      time: "90分",
      description: "季節や好みに合わせて仕上げます。",
    },
    {
      name: "ゆったりコース",
      price: "9,900円",
      time: "120分",
      description: "相談から仕上げまで丁寧に。",
    },
  ],
  reservationMethods: [
    {
      title: "LINEで予約",
      description: "希望日時を送るだけ。",
      linkKey: "line",
      label: "LINEを開く",
    },
    {
      title: "フォーム予約",
      description: "必要事項を入力して送信。",
      linkKey: "googleForm",
      label: "フォームを開く",
    },
    {
      title: "DMで相談",
      description: "メニュー相談もできます。",
      linkKey: "instagram",
      label: "Instagramへ",
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
      answer: "空きがあれば可能です。LINEでお問い合わせください。",
    },
    {
      question: "支払い方法は？",
      answer: "現金、カード、各種キャッシュレス決済に対応しています。",
    },
    {
      question: "メニューに迷っています。",
      answer: "予約前のご相談も歓迎です。",
    },
  ],
};
