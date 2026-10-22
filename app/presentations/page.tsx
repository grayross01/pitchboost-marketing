import { permanentRedirect } from "next/navigation";

// The family's hub is the AI presentation maker page.
export default function PresentationsHub() {
  permanentRedirect("/ai-presentation-maker");
}
