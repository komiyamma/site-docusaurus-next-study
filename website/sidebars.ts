import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import {getModuleSidebarId, getNextStudyId, nextModules} from './src/data/nextModules';

function generateModuleDocs(start: number, end: number) {
  return Array.from({length: end - start + 1}, (_, index) => ({
    type: 'doc' as const,
    id: getNextStudyId(start + index),
  }));
}

const moduleSidebars = Object.fromEntries(
  nextModules.map((module, index) => [
    getModuleSidebarId(index),
    [
      {
        type: 'category' as const,
        label: module.title,
        collapsible: false,
        collapsed: false,
        items: generateModuleDocs(module.start, module.end),
      },
    ],
  ]),
);

const sidebars: SidebarsConfig = {
  nextIndexSidebar: [{type: 'doc', id: 'next_index'}],
  ...moduleSidebars,
};

export default sidebars;
