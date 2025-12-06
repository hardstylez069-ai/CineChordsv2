import { Mood } from './types';

export const MOOD_PRESETS = [
  { id: Mood.EPIC, label: 'Epic Trailer', icon: 'Sword' },
  { id: Mood.TRIUMPHANT, label: 'Victory', icon: 'Trophy' },
  { id: Mood.HOPEFUL, label: 'Hopeful', icon: 'Sun' },
  { id: Mood.FANTASY, label: 'Fantasy', icon: 'Wand2' },
  { id: Mood.ROMANTIC, label: 'Romance', icon: 'Heart' },
  { id: Mood.NOSTALGIC, label: 'Nostalgia', icon: 'Clock' },
  { id: Mood.SAD, label: 'Sadness', icon: 'CloudRain' },
  { id: Mood.INTROSPECTIVE, label: 'Lyrical/NF', icon: 'Mic' },
  { id: Mood.DREAMY, label: 'Ethereal', icon: 'Cloud' },
  { id: Mood.MYSTERIOUS, label: 'Mystery', icon: 'Moon' },
  { id: Mood.TENSION, label: 'Tension', icon: 'Zap' },
  { id: Mood.CYBERPUNK, label: 'Cyberpunk', icon: 'Cpu' },
  { id: Mood.ACTION, label: 'Action', icon: 'Activity' },
  { id: Mood.GRITTY, label: 'Gritty', icon: 'Skull' },
  { id: Mood.HORROR, label: 'Horror', icon: 'Ghost' },
];

export const INITIAL_PROGRESSION = {
  title: "Welcome to CineChords",
  description: "Select a mood or describe your scene to generate a custom progression.",
  theoryAnalysis: {
    summary: "This progression uses a classic 'i - VI - iv - V7' movement. Note the use of the Harmonic Minor V7 (G7) in C Minor, which creates a strong gravitational pull back to the tonic (Cm) due to the leading tone (B natural).",
    voiceLeading: "The bass line moves strongly by skips (C -> Ab -> F -> G), outlining the tonal center. The inner voices move smoothly, with the Eb in Cm connecting to Eb in Ab, then shifting to C in Fm.",
    hyperMeter: "Bars 1 (Cm) and 3 (Fm) serve as strong metric pillars, establishing stability. Bars 2 (Ab) and 4 (G7) act as transitional harmonies, pushing the momentum forward."
  },
  bpm: 80,
  key: "C Minor",
  chords: [
    { name: "Cm", roman: "i", notes: ["C3", "G3", "C4", "Eb4", "G4"], melodyNotes: ["C5", "G4"], duration: 4, description: "The foundation (Tonic)" },
    { name: "Ab", roman: "VI", notes: ["Ab2", "Eb3", "Ab3", "C4", "Eb4"], melodyNotes: ["C5", "Eb5"], duration: 4, description: "Major lift (Submediant)" },
    { name: "Fm", roman: "iv", notes: ["F2", "C3", "F3", "Ab3", "C4"], melodyNotes: ["F5", "C5", "Ab4"], duration: 4, description: "Emotional turn (Subdominant)" },
    { name: "G7", roman: "V7", notes: ["G2", "D3", "G3", "B3", "F4"], melodyNotes: ["G4", "B4", "D5"], duration: 4, description: "Tension resolution (Dominant)" }
  ]
};