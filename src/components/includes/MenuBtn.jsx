import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react'

function MenuBtn({menuStat}) {
    const menu = menuStat;
  return (
    <button className="p-3 block md:hidden transition-all duration-300 ease-out">
      {menu ? (
        <XMarkIcon className="w-6 h-6 text-on-surface-variant dark:text-on-surface-variant-dark" />
      ) : (
        <Bars3Icon className="w-6 h-6 text-on-surface-variant dark:text-on-surface-variant-dark" />
      )}
    </button>
  );
}

export default MenuBtn