import { Crimson_Text, Open_Sans, Poppins } from 'next/font/google';
import localFont from 'next/font/local';

export const crimson_text = Crimson_Text({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-crimson-text',
  weight: ['400', '600', '700'],
})

export const open_sans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
})

export const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const tablet_gothic = localFont({
  src: './TabletGothicNarrowW02SmBd.ttf',
  display: 'swap',
  variable: '--font-tablet-gothic',
})

