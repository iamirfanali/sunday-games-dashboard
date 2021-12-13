import { Breadcrumbs as MuiBreadcrumbs } from '@mui/material';

import { Links } from '../../../types/shared';
import Link from '../../atoms/link';

export default function BreadCrumbs({ links }: Links) {
  return (
    <MuiBreadcrumbs aria-label="breadcrumb">
      {links.map((el) => {
        return <Link key={el.id} {...el} />;
      })}
    </MuiBreadcrumbs>
  );
}
