import { PluginOptions } from "./types";

const DEFAULT_PLUGIN_OPTIONS: PluginOptions = {
  id: "reference",
  docsRoot: "docs",
  out: "reference",
  cleanOutputDir: true,
  sidebar: {
    fullNames: false,
    categoryLabel: "Reference",
    indexLabel: undefined,
    readmeLabel: "SQL",
    position: null,
    autoConfiguration: true,
    usedSidebar: "docs",
  },
  hideInPageTOC: true,
  hideBreadcrumbs: true,
  hidePageTitle: true,
  hideMembersSymbol: false,
  entryDocument: "sql.md",
  plugin: ["none"],
  watch: false,
  includeExtension: true,
  indexSlug: undefined,
  theme: "docusaurus",
  frontmatter: undefined,
};

export const getPluginOptions = (
  opts: Partial<PluginOptions>
): PluginOptions => {
  const options = {
    ...DEFAULT_PLUGIN_OPTIONS,
    ...opts,
    sidebar: {
      ...DEFAULT_PLUGIN_OPTIONS.sidebar,
      ...opts.sidebar,
    },
  };
  return options;
};
