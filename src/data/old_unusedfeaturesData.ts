export interface MoreFeature {
  title: string;
  image: string;
}

export interface FeaturesProp {
  mainFeatures: string[];
  featuresText: string[];
  moreFeatures: MoreFeature[];
}

export interface SecurityFeature {
  title: string;
  description: string;
  image: string;
}

export interface SecurityData {
  title: string;
  intro: string;
  securityFeatures: SecurityFeature[];
}

// FEATURES
export const featuresData: FeaturesProp = {
  mainFeatures: ["User-friendly", "Security", "Privacy"],
  featuresText: [
    "SafulPay provides a fast and secure way to manage your money, ensuring your transactions are always smooth. You can easily handle multiple wallets, pay bills, and top up services with just a few taps. Our transparent fees keep you informed, so there are no surprises. Whether you're sending money locally or across borders, SafulPay makes it simple and reliable. Plus, our 24/7 support is always available to assist whenever you need help.",
    "SafulPay offers a variety of exciting tools to make managing your money even easier. From instant QR code payments to sending personalized gift cards in seconds, we've got you covered. Need to request money? Our easy request feature allows you to get funds from anyone, anywhere. Plus, with secure virtual cards, you can shop online with confidence. Discover all the ways SafulPay enhances your financial experience!",
  ],
  moreFeatures: [
    {
      title: "Send personalized gift cards in seconds",
      image: "path/to/gift-card-image.png",
    },
    {
      title: "Instant payment with a simple scan",
      image: "path/to/qr-code-image.png",
    },
    {
      title: "Secure online shopping with virtual cards",
      image: "path/to/virtual-card-image.png",
    },
  ],
};

export const securityData: SecurityData = {
  title: "Your Security is Our Priority",
  intro:
    "SafulPay ensures your transactions are protected with the highest security standards. From encryption to fraud detection, we prioritize your safety at every step.",
  securityFeatures: [
    {
      title: "End-to-End Encryption",
      description:
        "All transactions and user data are encrypted using state-of-the-art security protocols, ensuring your information stays confidential and safe from cyber threats.",
      image: "/assets/security/encryption.png",
    },
    {
      title: "Multi-Factor Authentication",
      description:
        "We provide multi-factor authentication (MFA) to enhance account security, ensuring that only you have access to your funds.",
      image: "/assets/security/mfa.png",
    },
    {
      title: "Real-Time Fraud Detection",
      description:
        "Our AI-powered fraud detection system monitors transactions in real-time, identifying suspicious activities to keep your funds secure.",
      image: "/assets/security/fraud-detection.png",
    },
    {
      title: "Regulatory Compliance",
      description:
        "We comply with international financial regulations and anti-money laundering (AML) policies to ensure a safe and compliant environment for our users.",
      image: "/assets/security/compliance.png",
    },
  ],
};
