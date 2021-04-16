import { NavItem } from '../../atoms';

export default function Nav() {
  return (
    <ul className="flex space-x-10 items-center justify-center">
      <NavItem>Profile</NavItem>
      <NavItem>Skills</NavItem>
      <NavItem>Project</NavItem>
    </ul>
  );
}
