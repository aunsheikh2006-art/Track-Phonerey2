import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
export const metadata={title:"PhoneGuard India",description:"Privacy-first authorized lost or stolen phone recovery assistance."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}<SpeedInsights /></body></html>}