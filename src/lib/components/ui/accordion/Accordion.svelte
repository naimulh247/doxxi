<script lang="ts">
  import { Accordion as AccordionPrimitive } from "bits-ui";
  import { CaretDown } from "phosphor-svelte";

  export let title: string;
  export let value: string = crypto.randomUUID();
  export let className: string = "";
  export let type: "single" | "multiple" = "single";

  let combinedClass = `border-dark-10 group border rounded-2xl ${className}`;
</script>

<AccordionPrimitive.Root class="w-full sm:max-w-[70%] my-4" type={type}>
  <AccordionPrimitive.Item {value} class={combinedClass}>
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        class="flex w-full flex-1 select-none items-center justify-between py-5 text-[15px] font-medium transition-all [&[data-state=open]>span>svg]:rotate-180 hover:cursor-pointer hover:bg-gray-300 hover:rounded-2xl"
      >
        <span
          class="hover:bg-dark-10 inline-flex size-8 items-center justify-center rounded-[7px] bg-transparent"
        >
          <CaretDown class="size-[18px] transition-transform duration-200" />
        </span>
        <span class="w-full text-left">
          {title}
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
    <AccordionPrimitive.Content
      class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm tracking-[-0.01em]"
    >
      <div class="pb-[25px] px-5">
        <slot />
      </div>
    </AccordionPrimitive.Content>
  </AccordionPrimitive.Item>
</AccordionPrimitive.Root>