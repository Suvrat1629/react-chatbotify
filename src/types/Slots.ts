import React from "react";

/**
 * Defines the structure for custom components (e.g. header) that can be passed to the ChatBot.
 * Each property is optional and corresponds to a major section of the ChatBot UI.
 * If a component is provided, it will be rendered in place of the default component.
 */
export type Slots = {
	/** Custom component to render the header of the ChatBot. */
	chatBotHeader?: React.ElementType;
	/** Custom component to render the body/content area of the ChatBot. */
	chatBotBody?: React.ElementType;
	/** Custom component to render the input area of the ChatBot. */
	chatBotInput?: React.ElementType;
	/** Custom component to render the footer of the ChatBot. */
	chatBotFooter?: React.ElementType;
}
