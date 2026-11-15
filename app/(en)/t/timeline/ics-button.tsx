"use client";

/** Calendar export on the client-facing shared timeline. Same .ics shape
 *  as the tool page and the app: all-day VEVENTs, one per milestone. */
export function IcsDownloadButton({
  title,
  milestones,
}: {
  title: string;
  milestones: { name: string; date: string }[];
}) {
  function download() {
    const stamp = new Date().toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z";
    const events = milestones
      .map((m, i) => {
        const day = m.date.replace(/-/g, "");
        return [
          "BEGIN:VEVENT",
          `UID:pb-timeline-${day}-${i}@pitchboost.ai`,
          `DTSTAMP:${stamp}`,
          `DTSTART;VALUE=DATE:${day}`,
          `SUMMARY:${(title ? title + ": " : "") + m.name.replace(/[\\;,]/g, " ")}`,
          "END:VEVENT",
        ].join("\r\n");
      })
      .join("\r\n");
    const ics = `BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//PitchBoost//Closing Timeline//EN\r\n${events}\r\nEND:VCALENDAR\r\n`;
    const blob = new Blob([ics], { type: "text/calendar" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${(title || "closing-timeline").replace(/[^a-z0-9-_]/gi, "-").slice(0, 60)}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
  }

  return (
    <button className="btn btn-ghost" onClick={download}>
      Add these dates to your calendar (.ics)
    </button>
  );
}
