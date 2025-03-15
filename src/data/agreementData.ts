// PRIVACY
export interface PolicySection {
  title: string;
  content: string[];
}

export interface PolicyData {
  title: string;
  lastUpdated: string;
  sections: PolicySection[];
}

// TERMS & CONDITIONS
export interface TermsData {
  title: string;
  lastUpdated: string;
  sections: PolicySection[];
}

/** Privacy Policy Data */
export const privacyPolicyData: PolicyData = {
  title: "Privacy Policy",
  lastUpdated: "Last Updated: November 2023",
  sections: [
    {
      title: "Privacy Statement",
      content: [
        `Welcome to "SafulPay", a fintech product committed to safeguarding your privacy and providing secure financial services. This Privacy Policy aims to explain how we collect, use, disclose, and protect your personal information. By using "SafulPay," you consent to the practices described in this policy.`,
      ],
    },
    {
      title: "Information We Collect",
      content: [
        "Personal Information",
        "For Personal, Joint, Agent, and Merchant Accounts, we may collect the following:",
        "• Full Name • Contact Information(Email Address, • Phone Number • Date of Birth • Residential Address • Identification Information(e.g., Passport, ID card)",
        "Financial Information",
        "For Bank Transfer, Top-up, P2P Payment, and Bill Payment services, we collect:",
        "• Bank Account • Details Transaction History",
      ],
    },

    {
      title: "How We Use Your Information",
      content: [
        "To provide and improve our services.",
        "To process transactions securely.",
        "To comply with legal and regulatory requirements.",
        "To personalize user experiences and offer relevant features.",
      ],
    },
    {
      title: "Data Protection & Security",
      content: [
        "We implement industry-standard encryption and security measures to protect your personal data.",
        "Your information is never shared with third parties without your consent, except when required by law.",
      ],
    },
    {
      title: "Your Rights",
      content: [
        "You can request access, correction, or deletion of your personal data.",
        "You have the right to withdraw consent for data processing at any time.",
      ],
    },
    {
      title: "Changes to This Policy",
      content: [
        "We may update this Privacy Policy from time to time.",
        "We will notify users of any significant changes via email or app notifications.",
      ],
    },
  ],
};

// TERMS & CONDITIONS
export const termsAndConditionsData: TermsData = {
  title: "Terms & Conditions",
  lastUpdated: "Last Updated: November 2023",
  sections: [
    {
      title: "Introduction",
      content: [
        "These Terms and Conditions govern your use of SafulPay and outline your rights and responsibilities.",
        "By accessing or using our services, you agree to be bound by these terms.",
      ],
    },
    {
      title: "User Eligibility",
      content: [
        "You must be at least 18 years old to use SafulPay.",
        "By creating an account, you confirm that all provided information is accurate and up-to-date.",
      ],
    },
    {
      title: "Account Security",
      content: [
        "You are responsible for maintaining the confidentiality of your account credentials.",
        "SafulPay is not liable for unauthorized access to your account due to negligence on your part.",
      ],
    },
    {
      title: "Prohibited Activities",
      content: [
        "You may not use SafulPay for fraudulent, illegal, or unauthorized transactions.",
        "Violations may result in account suspension or legal action.",
      ],
    },
    {
      title: "Liability & Disclaimers",
      content: [
        "SafulPay is not responsible for third-party service failures or transaction delays caused by external factors.",
        "We do not guarantee uninterrupted access to our platform due to potential technical issues.",
      ],
    },
    {
      title: "Termination of Service",
      content: [
        "We reserve the right to suspend or terminate your account if you violate these terms.",
        "Users can close their accounts at any time by contacting customer support.",
      ],
    },
    {
      title: "Changes to Terms",
      content: [
        "SafulPay may update these Terms & Conditions periodically.",
        "Continued use of our services after changes indicates acceptance of the updated terms.",
      ],
    },
    {
      title: "Changes to Terms",
      content: [
        "SafulPay may update these Terms & Conditions periodically.",
        "Continued use of our services after changes indicates acceptance of the updated terms.",
      ],
    },
    // WEBSITE ENTRIEs
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing and using the SafulPay application, you acknowledge and agree to these terms and conditions.",
        "If you do not agree with any part of these terms, you should refrain from using our services. Your use of the SafulPay application constitutes your acceptance of these terms and creates a binding legal agreement between you and SafulPay.",
      ],
    },
    {
      title: "Changes to Terms",
      content: [
        "SafulPay may update these Terms & Conditions periodically.",
        "Continued use of our services after changes indicates acceptance of the updated terms.",
      ],
    },
  ],
};
