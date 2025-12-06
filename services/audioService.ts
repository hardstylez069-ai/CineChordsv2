import * as Tone from 'tone';
import { ChordData } from '../types';

class AudioEngine {
  private sampler: Tone.Sampler | null = null;
  private reverb: Tone.Reverb | null = null;
  private isInitialized = false;

  constructor() {
    this.sampler = null;
  }

  async initialize() {
    if (this.isInitialized) return;

    await Tone.start();

    // Create a realistic acoustic space
    this.reverb = new Tone.Reverb({
      decay: 3,
      preDelay: 0.1,
      wet: 0.3
    }).toDestination();

    // Load high-quality piano samples (Salamander Grand)
    this.sampler = new Tone.Sampler({
      urls: {
        "A0": "A0.mp3",
        "C1": "C1.mp3",
        "D#1": "Ds1.mp3",
        "F#1": "Fs1.mp3",
        "A1": "A1.mp3",
        "C2": "C2.mp3",
        "D#2": "Ds2.mp3",
        "F#2": "Fs2.mp3",
        "A2": "A2.mp3",
        "C3": "C3.mp3",
        "D#3": "Ds3.mp3",
        "F#3": "Fs3.mp3",
        "A3": "A3.mp3",
        "C4": "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        "A4": "A4.mp3",
        "C5": "C5.mp3",
        "D#5": "Ds5.mp3",
        "F#5": "Fs5.mp3",
        "A5": "A5.mp3",
        "C6": "C6.mp3",
        "D#6": "Ds6.mp3",
        "F#6": "Fs6.mp3",
        "A6": "A6.mp3",
        "C7": "C7.mp3",
        "D#7": "Ds7.mp3",
        "F#7": "Fs7.mp3",
        "A7": "A7.mp3",
        "C8": "C8.mp3"
      },
      release: 1,
      baseUrl: "https://tonejs.github.io/audio/salamander/"
    }).connect(this.reverb);

    // Wait for samples to load
    await Tone.loaded();
    this.isInitialized = true;
  }

  playChord(chord: ChordData, durationInSeconds: number) {
    if (!this.sampler || !this.isInitialized) return;

    const now = Tone.now();

    // 1. Play Background Chord (Pad/Harmony)
    // We add a slight velocity variation for realism
    // Lower velocity for the backing chord to let melody shine
    const chordVelocity = 0.5 + Math.random() * 0.15;
    this.sampler.triggerAttackRelease(chord.notes, durationInSeconds, now, chordVelocity);

    // 2. Play Melody Line (if exists)
    if (chord.melodyNotes && chord.melodyNotes.length > 0) {
      const melodyCount = chord.melodyNotes.length;
      // Distribute notes evenly across the duration
      // e.g. 4 seconds, 2 notes -> play at 0s and 2s.
      // Duration of each melody note is roughly the segment length
      const segmentDuration = durationInSeconds / melodyCount;

      chord.melodyNotes.forEach((note, index) => {
        const timeOffset = index * segmentDuration;
        const melodyVelocity = 0.75 + Math.random() * 0.1; // Louder than chords
        
        // We let the melody note ring out slightly longer than its slot for legato feel
        this.sampler?.triggerAttackRelease(
          note, 
          segmentDuration * 1.1, 
          now + timeOffset, 
          melodyVelocity
        );
      });
    }
  }

  stopAll() {
    if (this.sampler) {
      this.sampler.releaseAll();
    }
  }

  getBpmDuration(bpm: number, beats: number): number {
    return (60 / bpm) * beats;
  }
}

export const audioService = new AudioEngine();