import React from 'react';

export type MenuLink = {
  label: string;
  href: string;
};

const links: MenuLink[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Todos',
    href: '/todos',
  },
];

const Header: React.FC = () => {
  return (
    <div>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
