import { PluginOptions } from "./types";
export default function pluginDocusaurus(context: any, opts: Partial<PluginOptions>): {
    name: string;
    loadContent(): Promise<void>;
};
