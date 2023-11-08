import Image from "next/image";
import Link from "next/link";
import LoginForm from "./login-form";

const LoginPage = () => {
  return (
    <div className="grid w-full h-[100vh] grid-cols-1 md:grid-cols-3">
      <LoginForm />
      {/* Gradient */}
      <div className="relative hidden w-full overflow-hidden md:col-span-2 rounded-l-2xl md:block">
        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-white/10 backdrop-blur-lg" />
        {/* Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-8">
          <div>
            <Image
              className="max-w-[200px]"
              width={296}
              height={77}
              src="/makr-logo-dark.svg"
              alt="makr-logo"
            />
            <div className="mt-5">
              <div className="text-3xl font-medium text-neutral-900">
                Nextgpt chat
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
