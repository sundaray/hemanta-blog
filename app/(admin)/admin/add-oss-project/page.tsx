import { AddOssProjectForm } from "@/components/forms/add-oss-project-form";

export default function AddOssProjectPage() {
  return (
    <div>
      <h1 className="text-4xl font-semibold tracking-tight">
        Add New OSS Project
      </h1>
      <p className="mt-4 text-pretty text-neutral-600">
        Enter a GitHub repository URL to add it to your list.
      </p>
      <AddOssProjectForm className="mt-12" />
    </div>
  );
}
