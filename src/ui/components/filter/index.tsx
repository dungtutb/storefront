import { Suspense } from 'react';
import { FilterItemDropdown } from './dropdown';
import { FilterItem, type ListItem } from './item';

function FilterItemList({ list }: { list: ListItem[] | undefined }) {
  return (
    <>
      {list?.map((item: ListItem, i) => (
        <FilterItem key={i} item={item} />
      ))}
    </>
  );
}

export function FilterList({ list, title }: { list: ListItem[] | undefined; title?: string }) {
  return (
    <>
      <nav>
        {title ? (
          <h3 className="hidden text-xs text-neutral-500 md:block dark:text-neutral-400">
            {title}
          </h3>
        ) : null}
        <ul className="hidden md:block">
          <Suspense fallback={null}>
            <FilterItemList list={list} />
          </Suspense>
        </ul>
        <ul className="md:hidden">
          <Suspense fallback={null}>
            <FilterItemDropdown list={list} />
          </Suspense>
        </ul>
      </nav>
    </>
  );
}
