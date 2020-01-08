import React from 'react';

const HizmetYonetimi = React.lazy(() => import('./views/IcerikYonetimi/HizmetYonetimi/HizmetYonetimi'));
const AnaSayfaHtmlAlan = React.lazy(() => import('./views/IcerikYonetimi/AnaSayfaHtmlAlan/AnaSayfaHtmlAlan'));
//const Carousels = React.lazy(() => import('./views/IcerikYonetimi/Carousels'));
const BlogYonetimi = React.lazy(() => import('./views/IcerikYonetimi/BlogYonetimi/BlogYonetimi'));
const SayfaYonetimi = React.lazy(() => import('./views/IcerikYonetimi/SayfaYonetimi/SayfaYonetimi'));
// const Forms = React.lazy(() => import('./views/IcerikYonetimi/Forms/Forms'));
// const Jumbotrons = React.lazy(() => import('./views/IcerikYonetimi/YorumYonetimi/Jumbotrons'));
// const ListGroups = React.lazy(() => import('./views/IcerikYonetimi/ListGroups'));
// const Navbars = React.lazy(() => import('./views/IcerikYonetimi/Navbars'));
// const Navs = React.lazy(() => import('./views/IcerikYonetimi/Navs'));
// const Paginations = React.lazy(() => import('./views/IcerikYonetimi/Paginations'));
// const Popovers = React.lazy(() => import('./views/IcerikYonetimi/Popovers'));
// const ProgressBar = React.lazy(() => import('./views/IcerikYonetimi/ProgressBar'));
// const Switches = React.lazy(() => import('./views/IcerikYonetimi/Switches'));
// const Tables = React.lazy(() => import('./views/IcerikYonetimi/Tables'));
// const Tabs = React.lazy(() => import('./views/IcerikYonetimi/Tabs'));
// const Tooltips = React.lazy(() => import('./views/IcerikYonetimi/Tooltips'));
// const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
// const ButtonSayfaYonetimi = React.lazy(() => import('./views/Buttons/ButtonSayfaYonetimi'));
// const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
// const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
// const Charts = React.lazy(() => import('./views/Charts'));
const YonetimPaneli = React.lazy(() => import('./views/YonetimPaneli/YonetimPaneli'));
// const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
// const Flags = React.lazy(() => import('./views/Icons/Flags'));
// const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
// const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
// const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
// const Badges = React.lazy(() => import('./views/Notifications/Badges'));
// const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const SayfayaGit = React.lazy(() => import('./views/Menu/SayfayaGit'));
const UrunYonetimi = React.lazy(() => import('./views/Menu/UrunYonetimi'));
// const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/yonetimpaneli', name: 'YonetimPaneli', component: YonetimPaneli },
  { path: '/menu', exact: true, name: 'Menu', component: SayfayaGit },
  { path: '/menu/sayfayagit', name: 'SayfayaGit', component: SayfayaGit },
  { path: '/menu/urunyonetimi', name: 'UrunYonetimi', component: UrunYonetimi },
  { path: '/icerikyonetimi', exact: true, name: 'IcerikYonetimi', component: AnaSayfaHtmlAlan },
  { path: '/icerikyonetimi/anasayfahtmlalan', name: 'AnaSayfaHtmlAlan', component: AnaSayfaHtmlAlan },
  // { path: '/icerikyonetimi/forms', name: 'Forms', component: Forms },
  // { path: '/icerikyonetimi/switches', name: 'Switches', component: Switches },
  // { path: '/icerikyonetimi/tables', name: 'Tables', component: Tables },
  // { path: '/icerikyonetimi/tabs', name: 'Tabs', component: Tabs },
  { path: '/icerikyonetimi/hizmetyonetimi', name: 'HizmetYonetimi', component: HizmetYonetimi },
  //{ path: '/icerikyonetimi/carousels', name: 'Carousel', component: Carousels },
  { path: '/icerikyonetimi/blogyonetimi', name: 'BlogYonetimi', component: BlogYonetimi },
  { path: '/icerikyonetimi/sayfayonetimi', name: 'SayfaYonetimi', component: SayfaYonetimi },
  // { path: '/icerikyonetimi/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  // { path: '/icerikyonetimi/list-groups', name: 'List Groups', component: ListGroups },
  // { path: '/icerikyonetimi/navbars', name: 'Navbars', component: Navbars },
  // { path: '/icerikyonetimi/navs', name: 'Navs', component: Navs },
  // { path: '/icerikyonetimi/paginations', name: 'Paginations', component: Paginations },
  // { path: '/icerikyonetimi/popovers', name: 'Popovers', component: Popovers },
  // { path: '/icerikyonetimi/progress-bar', name: 'Progress Bar', component: ProgressBar },
  // { path: '/icerikyonetimi/tooltips', name: 'Tooltips', component: Tooltips },
  // { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  // { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  // { path: '/buttons/button-sayfayonetimi', name: 'Button SayfaYonetimi', component: ButtonSayfaYonetimi },
  // { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  // { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  // { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  // { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  // { path: '/icons/flags', name: 'Flags', component: Flags },
  // { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  // { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  // { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  // { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  // { path: '/notifications/badges', name: 'Badges', component: Badges },
  // { path: '/notifications/modals', name: 'Modals', component: Modals },
  // { path: '/widgets', name: 'Widgets', component: Widgets },
  // { path: '/charts', name: 'Charts', component: Charts },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
