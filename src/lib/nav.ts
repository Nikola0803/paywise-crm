export type NavItem = {
  label: string;
  href: string;
  icon: string; // remixicon class name
};

export type NavGroup = {
  label: string;
  items: NavItem[];
};

export const NAV_GROUPS: NavGroup[] = [
  {
    label: "Overview",
    items: [
      { label: "Dashboard", href: "/dashboard", icon: "ri-dashboard-2-line" },
      { label: "Applications", href: "/contacts", icon: "ri-user-heart-line" },
      { label: "Consultations", href: "/bookings", icon: "ri-calendar-check-line" },
      { label: "Support", href: "/support", icon: "ri-customer-service-2-line" },
      { label: "Payments", href: "/payments", icon: "ri-bank-card-line" },
      { label: "Invoices", href: "/invoices", icon: "ri-file-list-3-line" },
      { label: "Affiliates", href: "/affiliates", icon: "ri-award-line" },
      { label: "Email", href: "/email-marketing", icon: "ri-mail-send-line" },
    ],
  },
  {
    label: "System",
    items: [
      { label: "Users", href: "/users", icon: "ri-team-line" },
      { label: "Tracking & Pixels", href: "/tracking-pixels", icon: "ri-radar-line" },
      { label: "Webhooks", href: "/webhooks", icon: "ri-plug-line" },
      { label: "Settings", href: "/settings", icon: "ri-settings-3-line" },
    ],
  },
];
