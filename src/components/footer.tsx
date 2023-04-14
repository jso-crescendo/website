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
  <div className="flex flex-col gap-2">
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

export const Footer: React.FC = () => (
  <footer className="bg-accent-main p-4 text-background">
    <div className="container mx-auto mb-4 flex flex-col gap-8 md:flex-row md:justify-between">
      <FooterSection title="Kontakt">
        <IconLink
          icon={<Email className="h-8 w-8" />}
          text="kontakt@jso-crescendo.ch"
          href="mailto:kontakt@jso-crescendo.ch"
        />
        <span className="text-sm text-center">oder</span>
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
      <FooterSection title="Newsletter">
        <Text>jetzt abonnieren und nichts mehr verpassen</Text>
      </FooterSection>
    </div>
    <div className="text-center text-sm">
      © {new Date().getFullYear()} Alle Rechte vorbehalten JSO Crescendo
    </div>
  </footer>
);
