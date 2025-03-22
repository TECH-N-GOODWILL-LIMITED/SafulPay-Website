// import { motion } from "framer-motion";
// // import { Facebook, Twitter } from "lucide-react";

// const teamMembers = [
//   {
//     name: "Adams Olikewe",
//     role: "Chief Executive Officer",
//     image: "/teams/adewale.png",
//     social: {
//       facebook: "https://facebook.com",
//       twitter: "https://twitter.com",
//     },
//   },
//   {
//     name: "Maxwell Adebayo",
//     role: "CTO",
//     image: "/teams/Tolu.png",
//     social: {
//       facebook: "https://facebook.com",
//       twitter: "https://twitter.com",
//     },
//   },
//   {
//     name: "Thomas Massaquoi",
//     role: "COO",
//     image: "/teams/oyinlola.png",
//     social: {
//       facebook: "https://facebook.com",
//       twitter: "https://twitter.com",
//     },
//   },
//   {
//     name: "Chrislin Johnson",
//     role: "Chief Marketing Officer",
//     image: "/teams/chrislin.png",
//     social: {
//       facebook: "https://facebook.com",
//       twitter: "https://twitter.com",
//     },
//   },
//   {
//     name: "Ogbebor Lawel",
//     role: "Technical Director",
//     image: "/teams/name.png",
//     social: {
//       facebook: "https://facebook.com",
//       twitter: "https://twitter.com",
//     },
//   },
//   {
//     name: "Adaora Judith",
//     role: "Business Analyst",
//     image: "/teams/team.png",
//     social: {
//       facebook: "https://facebook.com",
//       twitter: "https://twitter.com",
//     },
//   },
//   {
//     name: "Simeon Olamilekan",
//     role: "Head of Operations",
//     image: "/teams/test.png",
//     social: {
//       facebook: "https://facebook.com",
//       twitter: "https://twitter.com",
//     },
//   },
// ];

// export default function AboutUs() {
//   return (
//     <div className="min-h-screen bg-white font-['Outfit']">
//       {/* Main Content */}
//       <main className="pt-16">
//         {/* Hero Section */}
//         <section id="about-hero" className="relative">
//           {/* Background Pattern */}
//           <div className="absolute inset-0 opacity-[0.03] overflow-hidden">
//             <div className="grid grid-cols-12 gap-4">
//               {Array.from({ length: 240 }).map((_, i) => (
//                 <img
//                   key={i}
//                   src="/logo-pattern.svg"
//                   alt=""
//                   className="w-8 h-8"
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Content */}
//           <div className="relative z-10 container mx-auto px-6 pt-16 pb-16">
//             {/* <div className="max-w-7xl mx-auto text-center"> */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="max-w-7xl mx-auto text-center"
//             >
//               <h1 className="text-[56px] font-bold font-['Outfit'] mb-30">
//                 About <span className="text-[#126100]">SafulPay</span>
//               </h1>

//               <h2 className="text-[32px] font-bold font-['Outfit'] mb-2">
//                 Empowering Financial Freedom
//               </h2>
//               <h2 className="text-[32px] font-bold font-['Outfit'] mb-8">
//                 with Innovation
//               </h2>

//               <div className="flex justify-center items-center gap-3 mb-8 text-[15px] font-medium">
//                 <span className="text-[#126100]">User-friendly</span>
//                 <span className="text-gray-400">•</span>
//                 <span className="text-[#FF7B7B]">Security</span>
//                 <span className="text-gray-400">•</span>
//                 <span className="text-[#FFD700]">Privacy</span>
//               </div>

//               <p className="text-gray-600 font-['Outfit'] mb-6 text-lg leading-relaxed">
//                 At SafulPay, we believe in transforming the way people manage,
//                 move, and interact with their money. Our mission is to make
//                 financial services secure, accessible, and user-friendly for
//                 everyone, no matter where they are.
//               </p>

//               <p className="text-gray-600 font-['Outfit'] mb-16 text-lg leading-relaxed">
//                 Our team is dedicated to breaking barriers in financial services
//                 through innovation. By blending transparency with top-tier
//                 security (including encryption and fraud detection), SafulPay
//                 delivers a financial experience you can trust.
//               </p>
//             </motion.div>
//             {/* </div> */}
//           </div>
//         </section>

//         {/* Team Section */}
//         <section className="bg-gray-50 py-15">
//           <div className="container mx-auto px-6">
//             {/* <div className="text-center mb-16"> */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-[40px] font-bold font-['Outfit'] mb-4">
//                 Meet Our Team of <br />{" "}
//                 <span className="text-[#126100]">Experts</span>
//               </h2>
//               <p className="text-xl font-medium font-['Outfit'] mb-6">
//                 Innovators Driving Financial Transformation
//               </p>
//               <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
//                 At SafulPay, our team is comprised of dedicated professionals
//                 with deep expertise in their respective fields. We bring
//                 together diverse experience to deliver an exceptional financial
//                 experience. The SAFULPAY team has a shared vision: to make
//                 financial services accessible to everyone. We are united by our
//                 values of integrity, innovation, and customer-centricity.
//               </p>
//               {/* </div> */}
//             </motion.div>

//             {/* Team Grid */}
//             {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"> */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
//             >
//               {teamMembers.map((member, index) => (
//                 // <div
//                 //   className="group relative bg-white rounded-xl overflow-hidden"
//                 //   key={index}
//                 // >
//                 <motion.div
//                   key={member.name}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
//                   className="group relative bg-white rounded-xl overflow-hidden"
//                 >
//                   {/* Image */}
//                   <div className="aspect-square overflow-hidden">
//                     <img
//                       src={member.image || "/placeholder.svg"}
//                       alt={member.name}
//                       className="w-full h-full object-cover grayscale transition-all duration-300"
//                     />
//                     {/* Overlay */}
//                     <div className="absolute inset-0 bg-[#126100]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
//                       <h3 className="text-white text-xl font-bold mb-1">
//                         {member.name}
//                       </h3>
//                       <p className="text-white/80 mb-4">{member.role}</p>
//                       {/* Social Icons */}
//                       <div className="flex gap-3">
//                         <a
//                           href={member.social.facebook}
//                           className="text-white hover:text-white/80 transition-colors"
//                         >
//                           {/* <Facebook size={20} /> */}
//                         </a>
//                         <a
//                           href={member.social.twitter}
//                           className="text-white hover:text-white/80 transition-colors"
//                         >
//                           {/* <Twitter size={20} /> */}
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//                 // </div>
//               ))}
//             </motion.div>
//             {/* </div> */}
//           </div>
//         </section>

//         {/* Download Section */}
//         <section className=" py-10">
//           <div className="container bg-black rounded-4xl mx-auto px-6">
//             <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
//               <div className="md:w-1/2 mb-12 md:mb-0">
//                 <h2 className="text-[#126100] text-3xl font-bold mb-4">
//                   Download SafulPay Today
//                 </h2>
//                 <h3 className="text-white text-xl font-semibold mb-6">
//                   Secure, Fast, and Easy Financial Management
//                 </h3>
//                 <p className="text-gray-400 text-lg mb-8 leading-relaxed">
//                   Experience the future of financial management with SafulPay.
//                   We're revolutionizing how you handle your money with a
//                   platform that's secure, intuitive, and designed for everyone.
//                 </p>
//                 <div className="flex space-x-4">
//                   <button className="bg-white rounded-lg py-3 px-6 flex items-center hover:bg-gray-100 transition-colors">
//                     <img
//                       src="/google.jpg"
//                       alt="Google Play"
//                       className="w-6 h-6 mr-3"
//                     />
//                     <div>
//                       <p className="text-xs text-gray-600">GET IT ON</p>
//                       <p className="text-sm font-medium">Google Play</p>
//                     </div>
//                   </button>

//                   <button className="bg-white rounded-lg py-3 px-6 flex items-center hover:bg-gray-100 transition-colors">
//                     <img
//                       src="/apple.jpg"
//                       alt="App Store"
//                       className="w-6 h-6 mr-3"
//                     />
//                     <div>
//                       <p className="text-xs text-gray-600">Download on the</p>
//                       <p className="text-sm font-medium">App Store</p>
//                     </div>
//                   </button>
//                 </div>
//               </div>
//               <div className="md:w-1/2 flex justify-center">
//                 <img
//                   src="/iPhone13.png"
//                   alt="SafulPay App"
//                   className="max-w-[300px] drop-shadow-2xl"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
function AboutUs() {
  return <div className="z-99 bg-amber-500">ABOUT US</div>;
}

export default AboutUs;
