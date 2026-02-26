export interface NavItemType {
  label: string;
  to: string;
}

export const navData: NavItemType[] = [
  {
    label: "Ana Sayfa",
    to: "/",
  },
  {
    label: "Hakkımda",
    to: "/about",
  },
  {
    label: "Deneyimler",
    to: "/experiences",
  },
  {
    label: "Projeler",
    to: "/projects",
  },
  {
    label: "Sertifikalar",
    to: "/certificates",
  },
  {
    label: "İletişim",
    to: "/contact",
  },
];
