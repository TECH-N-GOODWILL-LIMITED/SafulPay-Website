// COMPANY
export interface Company {
  name: string;
  logo: string;
  slogan: string;
  description: string;
}

export interface Partner {
  name: string;
  image: string;
}

export interface Regulated {
  text: string;
  icon: string;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface DownloadLinks {
  title: string;
  subtitle: string;
  text: string;
  appStore: {
    link: string;
    image: string;
  };
  playStore: {
    link: string;
    image: string;
  };
}

export interface About {
  title: string;
  text: string;
}

export interface Member {
  img?: string;
  name: string;
  role: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    github?: string;
  };
}

export interface Team {
  title: string;
  subtitle: string;
  text: string;
  members: Member[];
}

export interface SafulPayData {
  company: Company;
  partners: Partner[];
  regulated: Regulated;
  socials: Social[];
  downloads: DownloadLinks;
  aboutus: About;
  team: Team;
}

// COMPANY
export const companyData: SafulPayData = {
  company: {
    name: "SafulPay",
    logo: "/safulpay-icon.svg",
    slogan: "Finance Just Got Better With ",
    description:
      "Our mission is to provide seamless and secure mobile money solutions, empowering users to manage their finances with ease.",
  },
  partners: [
    {
      name: "Q Money",
      image: "/qcell-logo.svg",
    },
    {
      name: "Orange Money",
      image: "/orange-logo.svg",
    },
    {
      name: "Afri Money",
      image: "/africell-logo.svg",
    },
    {
      name: "Western Union",
      image: "/wu-logo.svg",
    },
    {
      name: "Ria Money",
      image: "/ria-logo.svg",
    },
    {
      name: "MoneyGram",
      image: "/mg-logo.svg",
    },
    {
      name: "VISA & Master Card",
      image: "/visa_master-logo.svg",
    },
    {
      name: "DSTV Subscriptions",
      image: "/dstv-logo.svg",
    },
    {
      name: "EDSA Meter",
      image: "/edsa-logo.svg",
    },
  ],
  regulated: {
    text: "Licensed and Regulated by the Bank of Sierra Leone",
    icon: "/icon-bank.svg",
  },
  socials: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/safulpay",
      icon: "/icon-facebook.svg",
    },
    {
      name: "Whatsapp",
      url: "https://www.whatsapp.com/safulpay",
      icon: "/icon-whatsapp.svg",
    },
    {
      name: "Twitter",
      url: "https://www.twitter.com/safulpay",
      icon: "/icon-twitter.svg",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/safulpay",
      icon: "/icon-tik-tok.svg",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/safulpay",
      icon: "/icon-instagram.svg",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/safulpay",
      icon: "/icon-linkedin.svg",
    },
  ],
  downloads: {
    title: `Download SafulPay Today`,
    subtitle: "Secure, Fast, and Easy Financial Management",
    text: "Get started with SafulPay by downloading the app on your device. Manage your money, make payments, and access all the powerful features from anywhere, anytime. Experience the convenience and security SafulPay brings to your financial life—download now!",
    appStore: {
      link: "https://www.apple.com/app-store/safulpay",
      image: "/apple-icon.svg",
    },
    playStore: {
      link: "https://play.google.com/store/apps/details?id=safulpay",
      image: "/google-icon.svg",
    },
  },
  aboutus: {
    title: "Empowering Seamless Digital Payments",
    text: "SafulPay is a cutting-edge payment solution designed to make financial transactions fast, secure, and hassle-free. Our platform allows users to send and receive money, pay bills, and shop online with ease. We are committed to enhancing financial inclusion by providing a user-friendly and reliable digital payment experience.",
  },
  team: {
    title: "Meet Our Team",
    subtitle: "Meet Our Team",
    text: "Our team is comprised of experienced professionals who are passionate about delivering innovative solutions that meet.",
    members: [
      {
        img: "path/to/image1.jpg",
        name: "John Doe",
        role: "Founder & CEO",
        socials: {
          twitter: "https://twitter.com/johndoe",
          linkedin: "https://linkedin.com/in/johndoe",
        },
      },
      {
        img: "path/to/image2.jpg",
        name: "Jane Smith",
        role: "Chief Technology Officer",
        socials: {
          twitter: "https://twitter.com/janesmith",
          linkedin: "https://linkedin.com/in/janesmith",
          github: "https://github.com/janesmith",
        },
      },
      {
        img: "path/to/image3.jpg",
        name: "Emily Johnson",
        role: "Head of UI/UX Design",
        socials: {
          twitter: "https://twitter.com/emilyjohnson",
          linkedin: "https://linkedin.com/in/emilyjohnson",
        },
      },
      {
        img: "path/to/image4.jpg",
        name: "Michael Brown",
        role: "Lead Software Engineer",
        socials: {
          github: "https://github.com/michaelbrown",
          linkedin: "https://linkedin.com/in/michaelbrown",
        },
      },
    ],
  },
};
