import { ReactNode } from "react";

export default function CommonLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="min-h-screen">{children}</div>
      {/* <Footer /> */}
    </div>
  );
}
