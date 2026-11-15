import { RootShell, rootMetadata } from "../root-shell";

export const metadata = rootMetadata;

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="pt">{children}</RootShell>;
}
