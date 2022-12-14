import { DeclarationReflection, PageEvent, ReflectionKind, Renderer, RendererEvent } from "typedoc";
import { MarkdownTheme } from "./lib/theme";
import { FrontMatter, SidebarOptions } from "./types";
export declare class DocusaurusTheme extends MarkdownTheme {
    sidebar: SidebarOptions;
    readmeTitle: string;
    indexSlug: string;
    includeExtension: string;
    frontmatter: FrontMatter;
    constructor(renderer: Renderer);
    getRelativeUrl(url: string): string;
    onPageEnd(page: PageEvent<DeclarationReflection>): void;
    onRendererEnd(renderer: RendererEvent): void;
    getYamlItems(page: PageEvent<DeclarationReflection>): FrontMatter;
    getSidebarLabel(page: PageEvent<DeclarationReflection>): string | undefined;
    getSidebarPosition(page: PageEvent<DeclarationReflection>): "0" | "0.5" | null;
    getId(page: PageEvent): string;
    getTitle(page: PageEvent): any;
    get mappings(): {
        kind: ReflectionKind[];
        isLeaf: boolean;
        directory: string;
        template: (pageEvent: PageEvent<import("typedoc").ContainerReflection>) => string;
    }[];
    get globalsFile(): string;
}
