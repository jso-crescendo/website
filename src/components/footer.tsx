import {Button} from './button';
import {Email} from '../icons/email';
import {Facebook} from '@/icons/facebook';
import {Instagram} from '@/icons/instagram';
import {LinkButton} from './link-button';
import {Text} from './text';
import {Youtube} from '@/icons/youtube';

const FooterSection: React.FC<{title: string; children: React.ReactNode}> = ({
  title,
  children,
}) => (
  <div className="flex w-full md:w-1/3 flex-col place-items-start gap-2">
    <h4 className="mb-2 font-serif text-xl">{title}</h4>
    {children}
  </div>
);

const IconLink: React.FC<{
  icon: React.ReactNode;
  text: string;
  href: string;
}> = ({icon, href, text}) => (
  <a href={href} className="flex flex-row items-center gap-2">
    {icon}
    {text}
  </a>
);

const CurveSVG: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
    className="relative block h-20 w-[175%]"
  >
    <path
      d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
      opacity=".25"
      fill="currentColor"
    ></path>
    <path
      d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
      opacity=".5"
      fill="currentColor"
    ></path>
    <path
      d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
      fill="currentColor"
    ></path>
  </svg>
);

export const Footer: React.FC = () => (
  <footer className="bg-accent-main p-4 text-background relative pt-4 md:pt-24">
    <div className='absolute w-full overflow-hidden top-0 left-0 text-background hidden md:block' aria-hidden="true">
      <CurveSVG/>
    </div>
    <div className="container mx-auto mb-4 flex flex-col gap-8 md:flex-row md:justify-start">
      <FooterSection title="Kontakt">
        <IconLink
          icon={<Email className="h-8 w-8" />}
          text="kontakt@jso-crescendo.ch"
          href="mailto:kontakt@jso-crescendo.ch"
        />
        <span className="w-full text-center text-sm">oder</span>
        <LinkButton text="Zum Kontaktformular" type="primary" href="/kontakt" />
      </FooterSection>
      <FooterSection title="Folge uns">
        <IconLink
          icon={<Instagram className="h-8 w-8" />}
          text="Instagram"
          href="mailto:kontakt@jso-crescendo.ch"
        />
        <IconLink
          icon={<Facebook className="h-8 w-8" />}
          text="Facebook"
          href="mailto:kontakt@jso-crescendo.ch"
        />
        <IconLink
          icon={<Youtube className="h-8 w-8" />}
          text="Youtube"
          href="mailto:kontakt@jso-crescendo.ch"
        />
      </FooterSection>
    </div>
    <div className="text-center text-sm">
      © {new Date().getFullYear()} Alle Rechte vorbehalten JSO Crescendo
    </div>
  </footer>
);
