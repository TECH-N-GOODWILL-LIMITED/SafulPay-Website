// PR TEMPLATE



# **Description**
This PR modifies NavBar component styling ensuring it is updated with the Figma design and Signup form validation error handling.
1. Added padding, active and hover states to nav links, align navlinks for mobile view to column instead of row as updated in the figma design
2.  and Signup form component validation error handling using state management

# **Changes Proposed**
Fix NavBar styling to be updated with Figma styling

## **What were you told to do?**
Fix NavBar component styling
Fix client side error handling for Signup form component

## **What did you do?**
1. Added padding, active and hover states to nav links, align navlinks for mobile view to column instead of row as updated in the figma design
2.  Fixed client side error handling  for Signup form component using state management

## Types of changes
<!--- What types of changes does your code introduce? Put an `x` in all the boxes that apply: -->

- [x] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to change)
- [ ] Chore (changes that do not relate to a fix or feature and don't modify src or test files)

# **Check List**
<!--- Go over all the following points, and put an `x` in all the boxes that apply. -->
<!--- If you're unsure about any of these, don't hesitate to ask. We're here to help! -->

- [x] My code follows the code style of this project.
- [x] This PR does not contain plagiarized content.
- [x] The title and description of the PR are clear and explain the approach.
- [x] I am making a pull request against the **dev branch** (left side).
- [x] My commit message style matches our requested structure.
- [x] My code additions will not fail code linting checks or unit tests.
- [x] I am only making changes to files I was requested to.

---
# Images
- The live component worked on
<img width="583" alt="Screenshot 2025-03-09 at 08 02 36" src="https://github.com/user-attachments/assets/ff686833-3338-4fc3-acd6-9fe68641668a" />
<img width="407" alt="Screenshot 2025-03-09 at 08 01 18" src="https://github.com/user-attachments/assets/8b2cadd1-4719-4ffd-9956-d1a0dc8652a6" />

- Build check (run pnpm build)
<img width="1111" alt="Screenshot 2025-03-09 at 08 00 46" src="https://github.com/user-attachments/assets/345a1164-52bd-4efd-a6b6-c75dfa11417b" />

- Linting check (run pnpm format)
<img width="1440" alt="Screenshot 2025-03-09 at 07 59 39" src="https://github.com/user-attachments/assets/458f3648-f85c-4754-8099-2cc007d5a9d7" />




// NOTIFICATIONS
// SETTINGS
import { Button } from "@/components/ui/button";
// import Image from "next/image";
import heroBg from "@/assets/hero-bg.png";
// import infoIcon from "@/assets/icon-info-circled.svg";

function NotificationSettings() {
  return (
    <section
      className="font-outfit flex min-h-screen items-center justify-center bg-cover bg-left bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg.src})` }}
    >
      {/* <div className="mx-2.5 flex max-w-200 flex-col gap-8 text-[20px] leading-[150%] font-normal"> */}
      <div className="mx-2.5 flex w-full max-w-221 flex-col gap-9.5 rounded-[12px] border border-[#EAEAEA] bg-white pt-8.5 pr-10 pb-23 pl-13.25 text-[20px] leading-[150%] text-[#1E1F24] shadow-[0px_0px_24px_6px_rgba(54,66,79,0.10)]">
        <div className="grid grid-cols-[1fr_auto] gap-x-6">
          <h2 className="text-[34px] leading-normal font-medium">
            Email Notifications Settings
          </h2>

          {/* Non-functional Switch Icon */}
          <label className="relative inline-block h-[24px] w-[38.4px]">
            {/* Hidden Checkbox */}
            <input type="checkbox" className="peer sr-only" />

            {/* Switch Track */}
            <span className="absolute top-0 right-0 bottom-0 left-0 rounded-full bg-gray-300 transition-colors duration-300 peer-checked:bg-[#16395F]"></span>

            {/* Switch Thumb */}
            <span className="absolute top-[2px] left-[2px] h-[20px] w-[20px] rounded-full bg-white shadow-md transition-transform duration-300 peer-checked:translate-x-[14.4px]"></span>
          </label>

          <p className="font-normal text-[#62636C]">
            Keep voters informed with automated email updates for key election
            events
          </p>
        </div>

        <div className="flex flex-col gap-3.25">
          <h3 className="font-bold">Notification Types</h3>

          <div className="flex flex-col gap-3">
            <label
              htmlFor=""
              className="flex gap-2.5 text-[14px] leading-[20px] font-[450] text-[#16395F]"
            >
              <input
                type="checkbox"
                className="h-5 w-5 appearance-none rounded border border-[##CDCED7] bg-transparent checked:border-[#34679F] checked:bg-[#34679F]"
              />

              <span>Election Start Email</span>
            </label>
            <label
              htmlFor=""
              className="flex gap-2.5 text-[14px] leading-[20px] font-[450] text-[#16395F]"
            >
              <input
                type="checkbox"
                className="h-5 w-5 appearance-none rounded border border-[##CDCED7] bg-transparent checked:border-[#34679F] checked:bg-[#34679F]"
              />

              <span>Reminder for Non-Voters</span>
            </label>
            <label
              htmlFor=""
              className="flex gap-2.5 text-[14px] leading-[20px] font-[450] text-[#16395F]"
            >
              <input
                type="checkbox"
                className="h-5 w-5 appearance-none rounded border border-[##CDCED7] bg-transparent checked:border-[#34679F] checked:bg-[#34679F]"
              />

              <span>Results Announcement Email</span>
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-3.25">
          <h3 className="font-bold">Advanced Settings (Optional)</h3>

          <div className="flex flex-col gap-3">
            <label
              htmlFor=""
              className="flex gap-2.5 text-[14px] leading-[20px] font-[450] text-[#16395F]"
            >
              <input
                type="checkbox"
                className="h-5 w-5 appearance-none rounded border border-[##CDCED7] bg-transparent checked:border-[#34679F] checked:bg-[#34679F]"
              />

              <span>Custom Email Subject & Content Editing</span>
            </label>
            <label
              htmlFor=""
              className="flex gap-2.5 text-[14px] leading-[20px] font-[450] text-[#16395F]"
            >
              <input
                type="checkbox"
                className="h-5 w-5 appearance-none rounded border border-[##CDCED7] bg-transparent checked:border-[#34679F] checked:bg-[#34679F]"
              />

              <span>Custom Reminder Timing</span>
            </label>
            <label
              htmlFor=""
              className="flex gap-2.5 text-[14px] leading-[20px] font-[450] text-[#16395F]"
            >
              <input
                type="checkbox"
                className="h-5 w-5 appearance-none rounded border border-[##CDCED7] bg-transparent checked:border-[#34679F] checked:bg-[#34679F]"
              />

              <span>Email Delivery Status</span>
            </label>
          </div>
        </div>
        <Button
          type="submit"
          className="mt-5 h-12 w-35 cursor-pointer bg-[#002855] text-white hover:bg-[#003366]"
          title="Save Changes"
        >
          Save Changes
        </Button>
      </div>

      {/* </div> */}
    </section>
  );
}

export default NotificationSettings;

// OPEN
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroBg from "@/assets/hero-bg.png";
import clockIcon from "@/assets/icon-clock.svg";
import calenderIcon from "@/assets/icon-calender.svg";
import infoIcon from "@/assets/icon-info-circled.svg";

function OpenNotification() {
  return (
    <section
      className="font-outfit flex min-h-screen items-center justify-center bg-cover bg-left bg-no-repeat text-[#1E1F24]"
      style={{ backgroundImage: `url(${heroBg.src})` }}
    >
      <div className="mx-2.5 flex max-w-200 flex-col gap-8 text-[20px] leading-[150%] font-normal">
        <div className="flex flex-col gap-4">
          <h2 className="text-[34px] leading-normal font-medium">
            Voting is now open!
          </h2>
          <p className="text-[#62636C]">Cast your vote today.</p>
        </div>
        <div className="flex w-full flex-col gap-1 rounded-[12px] border border-[#EAEAEA] bg-white p-6 shadow-[0px_0px_24px_6px_rgba(54,66,79,0.10)]">
          <h3>Email Notice</h3>
          <div className="flex flex-col gap-6.25 rounded-[8px] border border-[#D0D5DD] p-4 pr-8.5 pb-6">
            <div className="font-afacad flex flex-col gap-6 rounded-[8px] border border-[#CBD5E1] bg-[#FCFCFC] px-5 py-4 text-[16px] leading-normal text-[#292C2F]">
              <p>
                Hello Chioma, The election for HNG Mentors is now live! Your
                vote matters, and we encourage you to participate.
              </p>
              <div className="flex flex-col gap-6">
                <h4 className="font-bold">Election Details</h4>
                <div className="flex flex-col gap-4">
                  <p>Election Name; HNG Mentors Election</p>
                  <p>Organizer: HNG Elections</p>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="flex gap-2.25">
                    <Image src={calenderIcon} alt="calendar icon" width={24} />
                    Date: 13-02-2025
                  </p>
                  <p className="flex gap-2.25">
                    <Image src={clockIcon} alt="clock icon" width={24} />
                    Time: <span className="text-[#8F0808]">20 mins</span>
                  </p>
                </div>
              </div>
              <div className="text-[#4F3422 flex gap-3 rounded-[8px] border border-[##eab5008c] bg-[#f4d10017] p-4">
                <Image src={infoIcon} alt="calendar icon" width={16} />
                <p>You can only vote once.</p>
              </div>
            </div>
          </div>
        </div>
        <Button
          type="submit"
          className="w-40 cursor-pointer self-end bg-[#002855] text-white hover:bg-[#003366]"
          title="Vote Now"
        >
          Vote Now
        </Button>
      </div>
    </section>
  );
}

export default OpenNotification;


// REMINDER
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroBg from "@/assets/hero-bg.png";
import hourGlassIcon from "@/assets/icon-hourglass.svg";
import clockIcon from "@/assets/icon-clock.svg";
import calenderIcon from "@/assets/icon-calender.svg";
import infoIcon from "@/assets/icon-info-circled.svg";

function ReminderNotification() {
  return (
    <section
      className="font-outfit flex min-h-screen items-center justify-center bg-cover bg-left bg-no-repeat text-[#1E1F24]"
      style={{ backgroundImage: `url(${heroBg.src})` }}
    >
      <div className="mx-2.5 flex max-w-200 flex-col gap-8 text-[20px] leading-[150%] font-normal">
        <div className="flex flex-col gap-4">
          <h2 className="text-[34px] leading-normal font-medium">
            Reminder: Time is running out! Don’t forget to vote
          </h2>
          <p className="flex gap-4 text-[#62636C]">
            <Image src={hourGlassIcon} alt="hourglass icon" width={24} /> Hello,
            Chioma, Cast your vote today.
          </p>
        </div>
        <div className="flex w-full flex-col gap-1 rounded-[12px] border border-[#EAEAEA] bg-white p-6 shadow-[0px_0px_24px_6px_rgba(54,66,79,0.10)]">
          <h3>Email Notice</h3>
          <div className="flex flex-col gap-6.25 rounded-[8px] border border-[#D0D5DD] p-4 pr-8.5 pb-6 text-[#292C2F]">
            <div className="rounded-[4px] border border-[#CBD5E1] px-4 py-3.25 text-[#B7B8B9]">
              Your chance to vote is almost over
            </div>
            <div className="font-afacad flex flex-col gap-6 rounded-[8px] border border-[#CBD5E1] bg-[#FCFCFC] px-5 py-4 text-[16px] leading-normal">
              <p>
                Dear Chioma, We noticed that you haven’t cast your vote yet for
                HNG Mentors. Time is running out, and we want to ensure your
                voice is heard!
              </p>
              <div className="flex flex-col gap-6">
                <h4 className="font-bold">Election Details</h4>
                <div className="flex flex-col gap-4">
                  <p>Election Name; HNG Mentors Election</p>
                  <p>Organizer: HNG Elections</p>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="flex gap-2.25">
                    <Image src={calenderIcon} alt="calendar icon" width={24} />
                    Date: 13-02-2025
                  </p>
                  <p className="flex gap-2.25">
                    <Image src={clockIcon} alt="clock icon" width={24} />
                    Time: <span className="text-[#8F0808]">20 mins</span>
                  </p>
                </div>
              </div>
              <div className="text-[#4F3422 flex gap-3 rounded-[8px] border border-[##eab5008c] bg-[#f4d10017] p-4">
                <Image src={infoIcon} alt="calendar icon" width={16} />
                <p>You must submit your vote before 13-02-2025, 11:59pm</p>
              </div>
            </div>
          </div>
        </div>
        <Button
          type="submit"
          className="w-40 cursor-pointer self-end bg-[#002855] text-white hover:bg-[#003366]"
          title="Vote Now"
        >
          Vote Now
        </Button>
      </div>
    </section>
  );
}

export default ReminderNotification;


// RESULT
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroBg from "@/assets/hero-bg.png";
import infoIcon from "@/assets/icon-info-circled.svg";

function ResultNotification() {
  return (
    <section
      className="font-outfit flex min-h-screen items-center justify-center bg-cover bg-left bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg.src})` }}
    >
      <div className="mx-2.5 flex max-w-200 flex-col gap-8 text-[20px] leading-[150%] font-normal text-[#1E1F24]">
        <div className="flex flex-col gap-4">
          <h2 className="text-[34px] leading-normal font-medium">
            Results Announcement Email
          </h2>
          <p className="text-[#62636C]">
            Hello, Chioma, The results are in! See who won the election.
          </p>
        </div>
        <div className="flex w-full flex-col gap-1 rounded-[12px] border border-[#EAEAEA] bg-white p-6 shadow-[0px_0px_24px_6px_rgba(54,66,79,0.10)]">
          <h3>Email Notice</h3>
          <div className="flex flex-col gap-6.25 rounded-[8px] border border-[#D0D5DD] p-4 pr-8.5 pb-6 text-[#292C2F]">
            <div className="rounded-[4px] border border-[#CBD5E1] px-4 py-3.25 text-[#B7B8B9]">
              The election has ended. View the results now
            </div>
            <div className="font-afacad flex flex-col gap-6 rounded-[8px] border border-[#CBD5E1] bg-[#FCFCFC] px-5 py-4 text-[16px] leading-normal">
              <p>
                Dear Chioma, The votes have been counted, and the results for
                HNG Mentors Election are now available! Thank you for
                participating and making your voice heard
              </p>
              <div className="flex flex-col gap-6">
                <h4 className="font-bold">Election Details</h4>
                <div className="flex flex-col gap-4">
                  <p>Election Name; HNG Mentors Election</p>
                  <p>Organizer: HNG Elections</p>
                  <p>Total Votes Cast: 1,090 votes</p>
                  <p>Winning Candidate: Michael Abu</p>
                </div>
              </div>
              <div className="flex gap-3 rounded-[8px] border border-[#00f41c80] bg-[#00f41c17] p-4 text-[#062A4F]">
                <Image src={infoIcon} alt="calendar icon" width={16} />
                <p>View the full election results by clicking below</p>
              </div>
            </div>
          </div>
        </div>
        <Button
          type="submit"
          className="w-40 cursor-pointer self-end bg-[#002855] text-white hover:bg-[#003366]"
          title="View Results"
        >
          View Results
        </Button>
      </div>
    </section>
  );
}

export default ResultNotification;


// SIGN
("use client");

import { Button } from "@/components/ui/button";
import { CreateAccountData, signUpSchema } from "@/lib/schema";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { FormInput } from "./FormInput";
import { adminSignUpAction } from "@/actions/auth.action";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<CreateAccountData>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof CreateAccountData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof CreateAccountData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    toast.promise(
      new Promise(async (resolve, reject) => {
        try {
          signUpSchema.parse(formData);

          // Make the API call
          const response = await adminSignUpAction(formData);

          // Check if the response indicates failure
          if (!response.success) {
            reject(response.message);
            return;
          }

          router.push("/signin");
          resolve(response.data);
        } catch (err) {
          if (err instanceof z.ZodError) {
            const fieldErrors: Partial<
              Record<keyof CreateAccountData, string>
            > = {};
            err.errors.forEach((error) => {
              const field = error.path[0] as keyof CreateAccountData;
              fieldErrors[field] = error.message;
            });
            setErrors(fieldErrors);
          }
          reject(
            err instanceof z.ZodError
              ? "Validation failed. Please check your inputs."
              : err
          );
        } finally {
          setIsSubmitting(false);
        }
      }),
      {
        loading: "Creating account...",
        success: () => "Account created successfully!",
        error: (err) => `${err}`,
      }
    );
  };

  return (
    <div className="font-outfit w-full">
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-medium text-gray-800">Create Account</h1>
        <p className="mt-2 text-gray-500">Let&apos;s get you started!</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput
          label="Email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <FormInput
          label="Password"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          showPasswordToggle
        />

        <FormInput
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          showPasswordToggle
        />

        <p className="text-center text-sm text-gray-500">
          By clicking on &quot;Get Started&quot; you agree to our
          <Link href="#" className="text-blue-600 hover:underline">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </Link>
        </p>

        <Button
          type="submit"
          className="w-full bg-[#002855] hover:bg-[#003366]"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating..." : "Get Started"}
        </Button>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/signin" className="text-blue-600 hover:underline">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;


// UPDATED NAVBAR
("use client");

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/Logo.svg";
import mobileLogo from "@/assets/resolveMobileIcon.svg";
// import { useRouter } from "next/router";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  // const router = useRouter();
  // const isActive = router.pathname === href;

  const isActive = (href: string) => pathname === href;

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  const openMenu = () => {
    setIsMenuOpen(true);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`font-afacad fixed z-10 w-full border-b border-gray-300 text-[16px] font-normal ${
        isMenuOpen ? "bg-[#fff]" : "bg-transparent backdrop-blur-[10px]"
      } `}
    >
      <div
        className={`mx-auto flex max-w-[1440px] items-center justify-between px-[35px] py-4 sm:px-10 lg:px-[70px] ${
          isMenuOpen ? "border-b border-[#E0E1E6]" : ""
        } `}
      >
        {/* Logo */}
        <div className="flex items-center gap-6">
          {!isMenuOpen && (
            <button onClick={openMenu} className="block min-[900px]:hidden">
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          )}
          <Link href="/" className={`${isMenuOpen && "hidden"} `}>
            <Image
              src={logo}
              alt="e-vote-logo"
              width={121}
              className="hidden min-[900px]:block"
            />
            <Image
              src={mobileLogo}
              alt="e-vote-logo"
              width={41}
              className="block min-[900px]:hidden"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden min-[860px]:flex min-[860px]:items-center min-[1080px]:space-x-8">
          <Link
            href="/features"
            className={`p-[10px] text-[16px] text-[#62636C] hover:text-gray-900 ${
              isActive("/features")
                ? "border-b-2 border-[#CD5100] font-bold"
                : ""
            }`}
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className={`p-[10px] text-[16px] text-[#62636C] hover:text-gray-900 ${
              isActive("/pricing")
                ? "border-b-2 border-[#CD5100] font-bold"
                : ""
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/contact-us"
            className={`p-[10px] text-[16px] text-[#62636C] hover:text-gray-900 ${
              isActive("/contact-us")
                ? "border-b-2 border-[#CD5100] font-bold"
                : ""
            }`}
          >
            Contact Us
          </Link>
          <Link
            href="/how-it-works"
            className={`p-[10px] text-[16px] text-[#62636C] hover:text-gray-900 ${
              isActive("/how-it-works")
                ? "border-b-2 border-[#CD5100] font-bold"
                : ""
            }`}
          >
            How it works
          </Link>
          <Link
            href="/reviews"
            className={`p-[10px] text-[16px] text-[#62636C] hover:text-gray-900 ${
              isActive("h-2/12reviews")
                ? "border-b-2 border-[#CD5100] font-bold"
                : ""
            }`}
          >
            Reviews
          </Link>
        </nav>

        {/* Auth Buttons - Desktop */}
        {!isMenuOpen && (
          <div className="flex items-center gap-6">
            <Link
              href="/signin"
              className={`p-[10px] text-[16px] text-[#62636C] hover:text-gray-900 active:border-b-2 active:border-[#CD5100] max-[430px]:hidden`}
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="flex h-[48px] w-[160px] items-center justify-center rounded-sm bg-[#002347] px-4 py-2 text-sm font-medium text-white hover:bg-[#233044]"
            >
              Get Started
            </Link>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMenuOpen && (
          <button
            type="button"
            className="rounded-mdp-2 inline-flex cursor-pointer items-center justify-center text-[#62636C] hover:text-gray-900 min-[834px]:hidden"
            // onClick={toggleMenu}
            onClick={closeMenu}
            aria-expanded={isMenuOpen}
          >
            {/* <span className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span> */}
            <span className="sr-only">Close Menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} min-[834px]:hidden`}>
        <div className="mx-auto mb-2.5 flex h-[665px] max-w-[396px] flex-col justify-between overflow-scroll border-b border-[#E0E1E6] px-[70px] pt-5 pb-10">
          <nav className="flex flex-col gap-3 pt-5 pb-10">
            <Link
              href="/features"
              className="block rounded-md px-3 py-4 text-base text-[#62636C] hover:bg-[#002347] hover:text-white active:bg-[#002347] active:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="block rounded-md px-3 py-4 text-base text-[#62636C] hover:bg-[#002347] hover:text-white active:bg-[#002347] active:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/contact-us"
              className="block rounded-md px-3 py-4 text-base text-[#62636C] hover:bg-[#002347] hover:text-white active:bg-[#002347] active:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/how-it-works"
              className="block rounded-md px-3 py-4 text-base text-[#62636C] hover:bg-[#002347] hover:text-white active:bg-[#002347] active:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              How it works
            </Link>
            <Link
              href="/reviews"
              className="block rounded-md px-3 py-4 text-base text-[#62636C] hover:bg-[#002347] hover:text-white active:bg-[#002347] active:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </Link>
          </nav>
          <div className="mt-4 flex items-center justify-center gap-6">
            <Link
              href="/signin"
              className="block flex-1/3 rounded-md p-3 text-base text-[#62636C] hover:bg-[#002347] hover:text-white active:bg-[#002347] active:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="block flex-2/3 rounded-md bg-[#14213d] p-3 text-center text-base text-white hover:bg-[#233044]"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

// LATEST NAVBAR
// NAVBAR
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/Logo.svg";
import mobileLogo from "@/assets/resolveMobileIcon.svg";
// import { useRouter } from "next/router";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const openMenu = () => {
    setIsMenuOpen(true);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`font-afacad fixed z-10 w-full border-b border-gray-300 text-[16px] font-normal ${
        isMenuOpen ? "bg-[#fff]" : "bg-transparent backdrop-blur-[10px]"
      } `}
    >
      <div
        className={`mx-auto flex max-w-[1440px] items-center justify-between px-[35px] py-4 sm:px-10 lg:px-[70px] ${
          isMenuOpen ? "border-b border-[#E0E1E6]" : ""
        } `}
      >
        {/* Logo */}
        <div className="flex items-center gap-6">
          {!isMenuOpen && (
            <button onClick={openMenu} className="block min-[900px]:hidden">
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          )}
          <Link href="/" className={`${isMenuOpen && "hidden"} `}>
            <Image
              src={logo}
              alt="e-vote-logo"
              width={121}
              className="hidden min-[900px]:block"
            />
            <Image
              src={mobileLogo}
              alt="e-vote-logo"
              width={41}
              className="block max-[370px]:hidden min-[900px]:hidden"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden min-[860px]:flex min-[860px]:items-center min-[1080px]:space-x-8">
          <Link
            href="/features"
            className={`p-[10px] text-[16px] text-[#62636C] hover:text-gray-900 ${
              isActive("/features")
                ? "border-b-2 border-[#CD5100] font-bold"
                : ""
            }`}
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className={`p-[10px] text-[16px] text-[#62636C] hover:text-gray-900 ${
              isActive("/pricing")
                ? "border-b-2 border-[#CD5100] font-bold"
                : ""
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/contact-us"
            className={`p-[10px] text-[16px] text-[#62636C] hover:text-gray-900 ${
              isActive("/contact-us")
                ? "border-b-2 border-[#CD5100] font-bold"
                : ""
            }`}
          >
            Contact Us
          </Link>
          <Link
            href="/how-it-works"
            className={`p-[10px] text-[16px] text-[#62636C] hover:text-gray-900 ${
              isActive("/how-it-works")
                ? "border-b-2 border-[#CD5100] font-bold"
                : ""
            }`}
          >
            How it works
          </Link>
          <Link
            href="/reviews"
            className={`p-[10px] text-[16px] text-[#62636C] hover:text-gray-900 ${
              isActive("h-2/12reviews")
                ? "border-b-2 border-[#CD5100] font-bold"
                : ""
            }`}
          >
            Reviews
          </Link>
        </nav>

        {/* Auth Buttons - Desktop */}
        {!isMenuOpen && (
          <div className="flex items-center gap-6">
            <Link
              href="/signin"
              className={`p-[10px] text-[16px] text-[#62636C] hover:text-gray-900 active:border-b-2 active:border-[#CD5100] max-[430px]:hidden`}
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="flex h-[48px] w-[160px] items-center justify-center rounded-sm bg-[#002347] px-4 py-2 text-sm font-medium text-white hover:bg-[#233044]"
            >
              Get Started
            </Link>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMenuOpen && (
          <button
            type="button"
            className="rounded-mdp-2 inline-flex cursor-pointer items-center justify-center text-[#62636C] hover:text-gray-900 min-[834px]:hidden"
            // onClick={toggleMenu}
            onClick={closeMenu}
            aria-expanded={isMenuOpen}
          >
            {/* <span className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span> */}
            <span className="sr-only">Close Menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} min-[834px]:hidden`}>
        <div className="mx-auto mb-2.5 flex h-[665px] max-w-[396px] flex-col justify-between overflow-auto border-b border-[#E0E1E6] px-[70px] pt-5 pb-10">
          <nav className="flex flex-col gap-3 pt-5 pb-10">
            <Link
              href="/features"
              className="block rounded-md px-3 py-4 text-base text-[#62636C] hover:bg-[#002347] hover:text-white active:bg-[#002347] active:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="block rounded-md px-3 py-4 text-base text-[#62636C] hover:bg-[#002347] hover:text-white active:bg-[#002347] active:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/contact-us"
              className="block rounded-md px-3 py-4 text-base text-[#62636C] hover:bg-[#002347] hover:text-white active:bg-[#002347] active:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/how-it-works"
              className="block rounded-md px-3 py-4 text-base text-[#62636C] hover:bg-[#002347] hover:text-white active:bg-[#002347] active:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              How it works
            </Link>
            <Link
              href="/reviews"
              className="block rounded-md px-3 py-4 text-base text-[#62636C] hover:bg-[#002347] hover:text-white active:bg-[#002347] active:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </Link>
          </nav>
          <div className="mt-4 flex flex-col items-center justify-center gap-6 min-[361px]:flex-row">
            <Link
              href="/signin"
              className="block w-full rounded-md p-3 text-base text-[#62636C] hover:bg-[#002347] hover:text-white active:bg-[#002347] active:text-white min-[361px]:flex-1/3"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="block w-full rounded-md bg-[#14213d] p-3 text-center text-base text-white hover:bg-[#233044] min-[361px]:flex-2/3"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
