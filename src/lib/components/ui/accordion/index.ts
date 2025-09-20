// Simple high-level component for 90% of use cases
export { default as Accordion } from './Accordion.svelte';

// Re-export primitives for advanced usage
export { Accordion as AccordionPrimitive } from 'bits-ui';

// Types
export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}