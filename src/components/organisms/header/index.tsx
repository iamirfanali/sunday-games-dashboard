import { Links } from '../../../types/shared';
import BreadCrumbs from '../../molecules/breadcrumbs';
import { AppBar } from './styles';

export default function Header({ links }: Links) {
  return (
    <AppBar position="static">
      <BreadCrumbs links={links} />
    </AppBar>
  );
}
