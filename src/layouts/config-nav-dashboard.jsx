import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/${name}.svg`} />;

const ICONS = {
  job: icon('ic-job'),
  blog: icon('ic-blog'),
  chat: icon('ic-chat'),
  mail: icon('ic-mail'),
  user: icon('ic-user'),
  file: icon('ic-file'),
  lock: icon('ic-lock'),
  tour: icon('ic-tour'),
  order: icon('ic-order'),
  label: icon('ic-label'),
  blank: icon('ic-blank'),
  kanban: icon('ic-kanban'),
  folder: icon('ic-folder'),
  course: icon('ic-course'),
  banking: icon('ic-banking'),
  booking: icon('ic-booking'),
  invoice: icon('ic-invoice'),
  product: icon('ic-product'),
  calendar: icon('ic-calendar'),
  disabled: icon('ic-disabled'),
  external: icon('ic-external'),
  menuItem: icon('ic-menu-item'),
  ecommerce: icon('ic-ecommerce'),
  analytics: icon('ic-analytics'),
  dashboard: icon('ic-dashboard'),
  parameter: icon('ic-parameter'),
  Dashboard2: icon('ic-Dashboard2'),
  inbox:icon('ic-inbox'),
  Contacts2: icon('ic-Contacts2'),
  aggent: icon('ic-aggent'), 
  templates: icon('ic-templates'),
  Boardcast: icon('ic-Boardcast'),
  flows: icon ('ic-flows'),
  settings: icon('ic-settings')
};

// ----------------------------------------------------------------------

export const navData = [
  /**
   * Overview
   */
  {
    subheader: 'Overview 6.0.0',
    items: [
      { title: 'DashBoard', path: paths.dashboard.root, icon: ICONS.Dashboard2 },
      { title: 'Inbox', path: paths.dashboard.two, icon: ICONS.inbox },
      { title: 'Contacts', path: paths.dashboard.three, icon: ICONS.Contacts2 },
      { title: 'Aggent Queues', path: paths.dashboard.four, icon: ICONS.aggent },
      { title: 'Templates', path: paths.dashboard.seven, icon: ICONS.templates },
      { title: 'Boardcast', path: paths.dashboard.eight, icon: ICONS.Boardcast },
      { title: 'Flows', path: paths.dashboard.nine, icon: ICONS.flows },
    ],
  },
  /**
   * Management
   */
  {
    subheader: 'Management',
    items: [
      {
        title: 'Settings',
        path: paths.dashboard.group.root,
        icon: ICONS.settings,
        children: [
          { title: 'Four', path: paths.dashboard.group.root },
          { title: 'Five', path: paths.dashboard.group.five },
          { title: 'Six', path: paths.dashboard.group.six },
        ],
      },
    ],
  },
];
