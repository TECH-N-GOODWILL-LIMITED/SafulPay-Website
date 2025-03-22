// "use client";

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { useSession } from "next-auth/react";
// import CurrentPlanCard from "../current-plan/current-plan";

// export interface Plan {
//   title: string;
//   price: {
//     monthly: number;
//     annually: number;
//   };
//   features: string[];
//   urls?: {
//     monthly: string;
//     annually: string;
//   };
//   popular?: boolean;
// }

// function BillingSettings() {
//   const { data: session } = useSession();
//   const user = session?.user;
//   const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">(
//     "monthly"
//   );
//   const [activePlan, setActivePlan] = useState<string | null>(
//     user?.plan || "Basic"
//   );
//   const [showPlans, setShowPlans] = useState(false);

//   const plans: Plan[] = [
//     {
//       title: "Free",
//       price: {
//         monthly: 0,
//         annually: 0,
//       },
//       features: [
//         "Up to 20 votes",
//         "Basic Poll Creation",
//         "Email Support",
//         "Basic result analytics",
//         "❌ Basic reporting",
//         "❌ 1 poll at a time",
//         "❌ Custom branding",
//         "❌ CSV export",
//       ],
//     },
//     {
//       title: "Basic",
//       price: {
//         monthly: 10,
//         annually: 108,
//       },
//       features: [
//         "Up to 100 votes",
//         "Basic Poll Creation",
//         "Email Support",
//         "Basic result analytics",
//         "Basic reporting",
//         "CSV export of results",
//         "❌ Advanced Analytics",
//         "❌ Advanced integrations",
//       ],
//       urls: {
//         monthly: "https://buy.stripe.com/eVa2c70FygOM6ac00z",
//         annually: "https://buy.stripe.com/bIY2c7ag8dCA1TW6oY",
//       },
//       popular: true,
//     },
//     {
//       title: "Business",
//       price: {
//         monthly: 25,
//         annually: 270,
//       },
//       features: [
//         "Unlimited votes",
//         "Unlimited polls",
//         "Standard question types",
//         "Basic result analytics",
//         "Advanced analytics dashboard",
//         "Custom integrations",
//         "White-label solution",
//         "24/7 premium support",
//       ],
//       urls: {
//         monthly: "https://buy.stripe.com/dR6g2Xag82XWgOQ6oZ",
//         annually: "https://buy.stripe.com/dR603Zag88iggOQ9Bc",
//       },
//     },
//   ];

//   const cycleLabels = {
//     monthly: "/Month",
//     annually: "/Year",
//   };

//   const handlePlanClick = (planTitle: string) => {
//     setActivePlan(planTitle);
//   };

//   const handlePaymentClick = (url: string) => {
//     window.open(url, "_blank");
//   };

//   const matchedPlan = plans.find(
//     (plan) => plan.title.toUpperCase() === user?.plan?.toUpperCase()
//   );

//   const handleChangePlanClick = () => {
//     setShowPlans(true);
//   };

//   const shouldShowPlans = user?.plan === "FREE" || showPlans;

//   return (
//     <main>
//       {shouldShowPlans ? (
//         <section className="mx-auto flex max-w-6xl flex-col">
//           <div className="font-afacad flex flex-col gap-1 leading-6 font-normal">
//             <h2 className="text-2xl">Plans & billing</h2>
//             <p className="text-lg leading-5 text-[#80828D]">
//               Manage your plan & billing history.
//             </p>
//           </div>
//           <div className="mx-auto mt-8 flex max-w-fit flex-wrap justify-center gap-3 rounded-md border border-[#C3D0D9] p-1">
//             {Object.entries(cycleLabels).map(([cycle]) => (
//               <button
//                 key={cycle}
//                 onClick={() => setBillingCycle(cycle as typeof billingCycle)}
//                 className={`cursor-pointer rounded-md px-4 py-2 text-[12px] font-bold transition-colors md:text-[16px] ${
//                   billingCycle === cycle
//                     ? "bg-[#FD7702] text-white"
//                     : "text-[#111827] hover:bg-gray-200"
//                 }`}
//               >
//                 {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
//               </button>
//             ))}
//           </div>
//           <div className="font-outfit mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
//             {plans.map((plan) => (
//               <div
//                 key={plan.title}
//                 onClick={() => handlePlanClick(plan.title)}
//                 className={`relative flex flex-col justify-between rounded-lg border-[0.5px] bg-white p-6 md:p-8 ${
//                   activePlan === plan.title
//                     ? "border border-[#16395F]"
//                     : plan.popular
//                     ? "border border-[#F16A00]"
//                     : "border-[#D2D5DA]"
//                 }`}
//               >
//                 <div>
//                   <div className="flex flex-wrap items-start justify-between gap-x-4">
//                     <h3 className="text-xl font-normal text-gray-900">
//                       {plan.title} plan
//                     </h3>
//                   </div>
//                   <p className="mt-4 text-start text-3xl font-medium lg:text-[48px]">
//                     ${plan.price[billingCycle]}&nbsp;
//                     <span className="text-[16px] font-normal">
//                       {cycleLabels[billingCycle]}
//                     </span>
//                   </p>
//                   <ul className="mt-6 space-y-2 text-left text-lg text-gray-600">
//                     <p>Features Include</p>
//                     {plan.features.map((feature, index) => (
//                       <li key={index} className="flex items-center gap-2">
//                         {feature.startsWith("❌") ? (
//                           <>
//                             <span className="text-[#DB2525]">✕</span>
//                             <span className="">{feature.slice(2)}</span>
//                           </>
//                         ) : (
//                           <>
//                             <span className="text-[#19A45B]">✓</span>
//                             <span>{feature}</span>
//                           </>
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <Button
//                   onClick={() =>
//                     plan.urls && handlePaymentClick(plan.urls[billingCycle])
//                   }
//                   disabled={matchedPlan?.title === plan.title}
//                   className={`mt-8 w-full cursor-pointer self-end justify-self-end rounded-md py-3 font-semibold transition-colors hover:bg-[#16395F] hover:text-[#F8FAFB]`}
//                 >
//                   {matchedPlan?.title === plan.title
//                     ? "Current Plan"
//                     : `Upgrade to ${plan.title}`}
//                 </Button>
//               </div>
//             ))}
//           </div>
//         </section>
//       ) : (
//         <CurrentPlanCard
//           planName={user?.plan?.toLowerCase()}
//           price={
//             user?.billing_interval === "monthly"
//               ? matchedPlan?.price.monthly
//               : matchedPlan?.price.annually
//           }
//           billingFrequency={user?.billing_interval}
//           onChangePlan={handleChangePlanClick}
//         />
//       )}
//     </main>
//   );
// }

// export default BillingSettings;

// // CURRENT PLAN
// ("use client");

// import { cn } from "@/lib/utils";
// import React from "react";

// interface CurrentPlanCardProps {
//   planName?: string;
//   price?: number;
//   billingFrequency?: string;
//   description?: string;
//   isPlanFree?: boolean;
//   onChangePlan?: () => void;
//   className?: string;
// }

// const CurrentPlanCard: React.FC<CurrentPlanCardProps> = ({
//   planName,
//   price,
//   billingFrequency,
//   description,
//   isPlanFree = false,
//   onChangePlan,
//   className = "",
// }) => {
//   return (
//     <div
//       className={cn(
//         "font-outfit mx-auto h-[267px] w-full rounded-xl border bg-[#FCFCFD] p-6",
//         className
//       )}
//     >
//       <h2 className="mb-4 text-[24px] font-semibold text-gray-800">
//         Current Plan
//       </h2>

//       <div className="flex max-h-[179px] items-center justify-between rounded-lg border-[1px] bg-white p-6">
//         <div>
//           <h3 className="mb-3 text-lg font-medium text-gray-800 capitalize">
//             {planName}
//           </h3>

//           <div className="flex flex-col space-y-2">
//             {isPlanFree && (
//               <span className="w-fit rounded-full bg-gray-900 px-3 py-[2.5px] text-xs text-white">
//                 Free
//               </span>
//             )}

//             <div className="flex items-baseline">
//               <span className="text-4xl font-semibold text-gray-900">
//                 ${price}
//               </span>
//               <span className="ml-1 text-[20px] text-[#80828D]">
//                 /{billingFrequency}
//               </span>
//               <span className="ml-1 text-[20px] text-[#CDCED7]">
//                 ({` ${billingFrequency}`})
//               </span>
//             </div>

//             <p className="text-gray-500">{description}</p>
//           </div>
//         </div>

//         <div className="mt-4 flex justify-end">
//           <button
//             onClick={onChangePlan}
//             className="cursor-pointer rounded-lg bg-[#002347] px-6 py-2 text-white transition-colors hover:bg-gray-800"
//           >
//             Change Plan
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CurrentPlanCard;

// ("use client");

// import { useSearchParams } from "next/navigation";

// function PaymentSuccess() {
//   const searchParams = useSearchParams();
//   const type = searchParams.get("type");
//   const plan = searchParams.get("plan");
//   return (
//     <div>
//       PAYMENT SUCCESSFUL
//       {plan}
//       {type}
//     </div>
//   );
// }

// export default PaymentSuccess;

// import PaymentSuccess from "./PaymentSuccess";

// function page() {
//   return (
//     <div>
//       <PaymentSuccess />
//     </div>
//   );
// }

// export default page;

// // ADMIN NAVBAR
// ("use client");

// import {
//   ChevronDown,
//   Bell,
//   Settings2,
//   CircleHelp,
//   Phone,
//   MessageCircle,
// } from "lucide-react";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import {
//   Menubar,
//   MenubarContent,
//   MenubarItem,
//   MenubarMenu,
//   MenubarSeparator,
//   MenubarTrigger,
// } from "@/components/ui/menubar";
// import { useSession } from "next-auth/react";
// import { handleLogout } from "@/lib/utils";
// import Link from "next/link";

// const AdminNavbar = () => {
//   const { data: session } = useSession();
//   const user = session?.user;
//   const [avatarContent, setAvatarContent] = useState("");

//   useEffect(() => {
//     if (user) {
//       if (user.profile_picture) {
//         setAvatarContent(user.profile_picture);
//       } else if (user.first_name && user.last_name) {
//         setAvatarContent(`${user.first_name[0]}${user.last_name[0]}`);
//       } else if (user.email) {
//         setAvatarContent(`${user.email[0]}${user.email[1]}`);
//       }
//     }
//   }, [user]);

//   const MenuItems = [
//     {
//       title: "Settings",
//       path: "/settings",
//       icon: Settings2,
//     },
//     {
//       title: "Help Center",
//       path: "/contact-us",
//       icon: CircleHelp,
//     },
//     // {
//     //   title: "Billing",
//     //   path: "/billing",
//     //   icon: CreditCard,
//     // },
//     {
//       title: "+234 712 309 8045",
//       path: "/contact-us",
//       icon: Phone,
//     },
//     {
//       title: "support@resolve.com",
//       path: "/contact-us",
//       icon: MessageCircle,
//     },
//   ];

//   return (
//     <section className="flex items-center justify-between border-b px-5 lg:px-20">
//       <Link href="/" className="flex gap-2">
//         <Image
//           src={"/assets/svgs/Logo.svg"}
//           width={30}
//           height={30}
//           alt="resolve icon"
//           className="h-auto w-full"
//         />
//       </Link>
//       <nav className="flex h-[80px] items-center justify-end bg-white px-5">
//         <div className="flex items-center gap-3">
//           <Bell className="h-6 w-6 cursor-pointer text-[#616A75]" />
//           <div className="ml-2 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#D8D9E0] text-white">
//             {user?.profile_picture ? (
//               <Image
//                 src={user.profile_picture}
//                 alt="User avatar"
//                 width={40}
//                 height={40}
//                 className="h-[40px] w-[40px] flex-shrink-0 rounded-full object-cover"
//               />
//             ) : (
//               <span className="text-lg font-medium">{avatarContent}</span>
//             )}
//           </div>
//           <Menubar className="border-none !bg-transparent shadow-none ring-0">
//             <MenubarMenu>
//               <MenubarTrigger className="!border-0 !bg-transparent !p-0">
//                 <div className="flex cursor-pointer items-center rounded-md text-left !shadow-none">
//                   <ChevronDown className="ml-1 h-6 w-6 text-[#616A75]" />
//                 </div>
//               </MenubarTrigger>
//               <MenubarContent className="!mr-5">
//                 <MenubarItem>
//                   <div className="mr-2 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#D8D9E0] text-black">
//                     {user?.profile_picture ? (
//                       <Image
//                         src={user.profile_picture}
//                         alt="User avatar"
//                         width={40}
//                         height={40}
//                         className="h-[40px] w-[40px] flex-shrink-0 rounded-full object-cover"
//                       />
//                     ) : (
//                       <span className="text-lg font-medium">
//                         {avatarContent}
//                       </span>
//                     )}
//                   </div>
//                   <div>
//                     <p className="flex items-center gap-[10px] font-semibold capitalize">
//                       {user?.first_name ?? user?.email?.split("@")[0]}
//                       <span className="rounded bg-[#CCDDF9] px-1 py-0.5 text-[11px] font-light text-[#002347]">
//                         {user?.plan ?? "Basic"}
//                       </span>
//                     </p>
//                     <span>{user?.email}</span>
//                   </div>
//                 </MenubarItem>
//                 <MenubarSeparator />
//                 {MenuItems.map((item) => (
//                   <MenubarItem key={item.title}>
//                     <Link
//                       href={item.path}
//                       className="flex items-center gap-3 px-[10px] py-2 font-medium text-black"
//                     >
//                       <item.icon className="menubar-icon" />
//                       <span>{item.title}</span>
//                     </Link>
//                   </MenubarItem>
//                 ))}
//                 <MenubarSeparator />
//                 <MenubarItem
//                   onClick={() => handleLogout()}
//                   className="cursor-pointer"
//                 >
//                   <div className="flex items-center gap-3 font-medium text-red-600">
//                     <span>Logout</span>
//                   </div>
//                 </MenubarItem>
//               </MenubarContent>
//             </MenubarMenu>
//           </Menubar>
//         </div>
//       </nav>
//     </section>
//   );
// };

// export default AdminNavbar;
