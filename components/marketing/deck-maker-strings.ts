/**
 * The words around the box that makes a deck (components/marketing/deck-maker).
 * Kept apart from the box itself, which runs in the browser: a page rendered
 * on the server can read these and hand a language's own set to the box.
 */
/** English unless a page passes its own. */
export interface DeckMakerStrings {
  examplesLabel: string;
  sending: string;
  progress: string;
  openFull: string;
  linkLife: string;
  keep: string;
  another: string;
  keepNote: string;
  frameTitle: string;
  failed: string;
  unreachable: string;
  /** Shown when the box holds all it takes, so a paste that was cut short is not a mystery. */
  full: string;
  /** Shown when the button is pressed with nothing in the box. */
  empty: string;
  /** The app answers a refusal in English. A page in another language says these instead: `limit` when the day's
   *  free decks are used up, `busy` when the free tools cannot take a request just now. */
  limit?: string;
  busy?: string;
}

export const DECK_MAKER_STRINGS: DeckMakerStrings = {
  examplesLabel: "Or start from one of these",
  sending: "Starting...",
  progress: "It takes about two minutes, and the deck appears above when it is done.",
  openFull: "Open it full screen",
  linkLife: "The link works for 7 days.",
  keep: "Keep it, edit it, make more",
  another: "Make another",
  keepNote: "A free account builds the full version in your brand: your first deck each month is free.",
  frameTitle: "Your presentation",
  failed: "That did not work. Try again in a minute, or sign up free and make it there.",
  unreachable: "We could not reach PitchBoost just now. Try again in a minute.",
  full: "This box is full. A free account takes much longer text.",
  empty: "Add a line or two in the box first.",
};
