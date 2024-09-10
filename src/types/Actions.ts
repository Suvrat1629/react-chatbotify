import { Flow } from "./Flow";

/**
 * Defines the accessible actions for use in events.
 */
export type Actions = {
	goToPath: (pathToGo: keyof Flow) => void;
	injectMessage: (content: string | JSX.Element, sender?: string) => Promise<string | null>;
	streamMessage: (content: string | JSX.Element, sender?: string) => Promise<void>;
}