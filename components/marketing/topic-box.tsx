/**
 * "What is your presentation about?" A plain GET form (no JavaScript) to the
 * app's signup with the present intent: the app keeps the topic through
 * signup and opens the builder with it already typed in (app PR #382).
 * `forLabel` tells the app what kind of deck it is ("a class presentation").
 */
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";

export function presentSignupUrl(prompt: string, forLabel?: string): string {
  const q = new URLSearchParams({ intent: "present", prompt });
  if (forLabel) q.set("for", forLabel);
  return `${APP_URL}/signup?${q.toString()}`;
}

export default function TopicBox({
  placeholder,
  forLabel,
  label = "What is your presentation about?",
  buttonLabel = "Make my presentation",
  dark = false,
  id = "topic",
}: {
  placeholder: string;
  forLabel?: string;
  label?: string;
  buttonLabel?: string;
  dark?: boolean;
  id?: string;
}) {
  return (
    <form
      action={`${APP_URL}/signup`}
      method="get"
      style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", maxWidth: 680, margin: "0 auto" }}
    >
      <input type="hidden" name="intent" value="present" />
      {forLabel && <input type="hidden" name="for" value={forLabel} />}
      <label htmlFor={id} style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap" }}>
        {label}
      </label>
      <input
        id={id}
        name="prompt"
        type="text"
        required
        maxLength={300}
        autoComplete="off"
        placeholder={placeholder}
        className={dark ? "topic-input topic-input-dark" : "topic-input"}
        style={{
          flex: "1 1 320px",
          minWidth: 0,
          padding: "14px 18px",
          fontSize: 16,
          borderRadius: 999,
          border: dark ? "1px solid rgba(255,255,255,.25)" : "1px solid var(--ds-border)",
          background: dark ? "rgba(255,255,255,.08)" : "var(--ds-bg)",
          color: dark ? "#fff" : "var(--ds-text-primary)",
          outlineColor: "#1F6B6B",
        }}
      />
      <button type="submit" className="btn btn-primary btn-lg" style={{ flex: "0 0 auto" }}>
        {buttonLabel}
      </button>
    </form>
  );
}
