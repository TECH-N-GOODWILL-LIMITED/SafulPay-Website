// ABOUT US
export interface AboutUsData {
  title: string;
  subtitle: string;
  text: string;
}

// TEAM
export interface TeamMember {
  img: string;
  name: string;
  role: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface TeamData {
  title: string;
  subtitle: string;
  text: string;
  members: TeamMember[];
}

// ABOUT US
export const aboutUsData: AboutUsData = {
  title: "About SafulPay",
  subtitle: "Empowering Seamless Digital Payments",
  text: "SafulPay is a cutting-edge payment solution designed to make financial transactions fast, secure, and hassle-free. Our platform allows users to send and receive money, pay bills, and shop online with ease. We are committed to enhancing financial inclusivity by providing a user-friendly and reliable digital payment experience.",
};

// TEAM
export const teamData: TeamData = {
  title: "Meet Our Team",
  subtitle: "The Passionate Minds Behind SafulPay",
  text: "Our team is made up of dedicated professionals committed to revolutionizing digital payments. From UI/UX designers to software engineers, we work together to bring you the best experience possible.",
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
};
