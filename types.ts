export interface ChordData {
  name: string;
  roman: string;
  notes: string[]; // e.g., ["C3", "E3", "G3"]
  melodyNotes: string[]; // e.g., ["G4", "C5"] - Top line melody notes
  duration: number; // in beats (quarter notes)
  description: string;
}

export interface TheoryAnalysis {
  summary: string;
  voiceLeading: string;
  hyperMeter: string;
}

export interface Progression {
  title: string;
  description: string;
  theoryAnalysis?: TheoryAnalysis; // Structured analysis
  bpm: number;
  key: string;
  chords: ChordData[];
}

export enum Mood {
  EPIC = 'Epic & Heroic (Trailer Music)',
  TRIUMPHANT = 'Triumphant & Victorious (Sports/Victory)',
  HOPEFUL = 'Hopeful & Uplifting (Corporate/Inspirational)',
  FANTASY = 'Magical & Wonder (Disney/Fantasy)',
  ROMANTIC = 'Romantic & Sentimental (Love Theme)',
  NOSTALGIC = 'Nostalgic & Bittersweet (Coming of Age)',
  SAD = 'Sad & Melancholic (Drama)',
  INTROSPECTIVE = 'Intense & Introspective (Storytelling Hip-Hop/NF Style)',
  DREAMY = 'Dreamy & Ambient (Ethereal)',
  MYSTERIOUS = 'Mysterious & Investigative (Crime/Thriller)',
  TENSION = 'Tense & Suspenseful (Tick Tock)',
  HORROR = 'Dark & Horror (Scary)',
  CYBERPUNK = 'Futuristic & Sci-Fi (Synthwave/Blade Runner)',
  ACTION = 'Fast & Action-Packed (Chase Scene)',
  GRITTY = 'Gritty & Urban (Crime/Street)'
}

export enum Complexity {
  BASIC = 'Basic (Triads)',
  STANDARD = 'Standard (7ths)',
  EXTENDED = 'Extended (9ths, 11ths)',
  JAZZ = 'Complex (Altered/Jazz)'
}

export enum Voicing {
  CLOSE = 'Close (Compact/Pop)',
  OPEN = 'Open (Balanced)',
  CINEMATIC = 'Cinematic (Wide/Spacious)',
  SHELL = 'Shell (Jazz/Neo-Soul)'
}

export enum Inversion {
  ROOT = 'Root Position (Stable)',
  FIRST = '1st Inversion (Melodic Bass)',
  SECOND = '2nd Inversion (Unstable/Passing)',
  MIXED = 'Mixed Inversions (Smooth Voice Leading)'
}

export enum MelodyStyle {
  LYRICAL = 'Lyrical (Long, Singing Lines)',
  RHYTHMIC = 'Rhythmic (Short, Catchy Motifs)',
  MINIMAL = 'Minimal (Sparse, Atmospheric)',
  FLOWING = 'Flowing (Arpeggiated, Constant Motion)',
  ASCENDING = 'Ascending (Building Tension/Hope)',
  DESCENDING = 'Descending (Resolving/Melancholic)',
  MOTIVIC = 'Motivic (Thematic Hook)',
  CALL_AND_RESPONSE = 'Call & Response (Conversational)'
}

export interface AudioState {
  isPlaying: boolean;
  currentChordIndex: number;
  isReady: boolean;
  playingSource: 'main' | 'custom' | null;
}