import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";

export function BreadcrumbBar() {
  return (
    <div className="mt-[var(--main-nav-height)] flex h-10 w-full items-center bg-neutral-100">
      <div className="mx-auto w-full max-w-7xl px-4 xl:px-0">
        <DynamicBreadcrumb />
      </div>
    </div>
  );
}
