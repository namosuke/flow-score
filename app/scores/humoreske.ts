type Score = {
  title: string;
  composer: string;
  timeSignature: number;
  measures: Measure[];
};

type Measure = {
  notes: Note[];
  positions?: Position[];
};

type Note = {
  pitch: string;
  duration: number;
  offset: number;
  string?: ViolinString;
  finger?: number;
  flageolet?: boolean;
};

export type ViolinString = "G" | "D" | "A" | "E";

export type Position = {
  /** 半音を1とした開放弦からの距離 */
  distance: number;
  /** 表示上のポジション番号 */
  label: number;
  /** ポジションの開始位置 */
  offset: number;
};

export const score: Score = {
  title: "Humoreske",
  composer: "Antonín Dvořák",
  timeSignature: 2 / 4,
  measures: [
    {
      notes: [],
    },
    {
      positions: [
        { distance: 2, label: 1, offset: 0 },
        { distance: 5, label: 3, offset: 1 / 128 },
      ],
      notes: [
        { pitch: "B3", duration: 1 / 128, offset: 0, finger: 2 },
        {
          pitch: "G4",
          duration: 1 / 16 - 1 / 128,
          offset: 1 / 128,
          finger: 4,
          string: "G",
          flageolet: true,
        },
        {
          pitch: "A4",
          duration: 1 / 32,
          offset: 3 / 32,
          string: "D",
          finger: 2,
        },
        { pitch: "G4", duration: 1 / 16, offset: 2 / 16, finger: 1 },
        {
          pitch: "A4",
          duration: 1 / 32,
          offset: 3 / 16 + 1 / 32,
          string: "D",
          finger: 2,
        },
        {
          pitch: "B4",
          duration: 1 / 16,
          offset: 1 / 4,
          string: "D",
          finger: 3,
        },
        {
          pitch: "D5",
          duration: 1 / 32,
          offset: 1 / 4 + 3 / 32,
          string: "A",
          finger: 1,
        },
        {
          pitch: "E5",
          duration: 1 / 16,
          offset: 3 / 8,
          string: "A",
          finger: 2,
        },
        {
          pitch: "D5",
          duration: 1 / 32,
          offset: 3 / 8 + 3 / 32,
          string: "A",
          finger: 1,
        },
      ],
    },
    {
      notes: [
        { pitch: "G5", duration: 1 / 16, offset: 0, string: "A", finger: 4 },
        {
          pitch: "F#5",
          duration: 1 / 32,
          offset: 3 / 32,
          string: "A",
          finger: 3,
        },
        {
          pitch: "A5",
          duration: 1 / 16,
          offset: 2 / 16,
          string: "A",
          finger: 4,
          flageolet: true,
        },
        {
          pitch: "G5",
          duration: 1 / 32,
          offset: 3 / 16 + 1 / 32,
          string: "A",
          finger: 4,
        },
        {
          pitch: "F#5",
          duration: 1 / 16,
          offset: 1 / 4,
          string: "A",
          finger: 3,
        },
        {
          pitch: "A5",
          duration: 1 / 32,
          offset: 1 / 4 + 3 / 32,
          string: "A",
          finger: 4,
          flageolet: true,
        },
        {
          pitch: "G5",
          duration: 1 / 16,
          offset: 3 / 8,
          string: "A",
          finger: 4,
        },
        {
          pitch: "E5",
          duration: 1 / 32,
          offset: 3 / 8 + 3 / 32,
          string: "A",
          finger: 2,
        },
      ],
    },
    {
      notes: [
        { pitch: "D5", duration: 1 / 16, offset: 0, string: "A", finger: 1 },
        {
          pitch: "D5",
          duration: 1 / 32,
          offset: 3 / 32,
          string: "A",
          finger: 1,
        },
        {
          pitch: "E5",
          duration: 1 / 16,
          offset: 2 / 16,
          string: "A",
          finger: 2,
        },
        {
          pitch: "D5",
          duration: 1 / 32,
          offset: 3 / 16 + 1 / 32,
          string: "A",
          finger: 1,
        },
        {
          pitch: "G5",
          duration: 1 / 16,
          offset: 1 / 4,
          string: "A",
          finger: 4,
        },
        {
          pitch: "E5",
          duration: 1 / 32,
          offset: 1 / 4 + 3 / 32,
          string: "A",
          finger: 2,
        },
        {
          pitch: "D5",
          duration: 1 / 16,
          offset: 3 / 8,
          string: "A",
          finger: 1,
        },
        {
          pitch: "B4",
          duration: 1 / 32,
          offset: 3 / 8 + 3 / 32,
          string: "D",
          finger: 3,
        },
      ],
    },
    {
      notes: [
        { pitch: "A4", duration: 2 / 4, offset: 0, string: "D", finger: 2 },
      ],
    },
    {
      notes: [
        { pitch: "G4", duration: 1 / 16, offset: 0, string: "D", finger: 1 },
        {
          pitch: "A4",
          duration: 1 / 32,
          offset: 3 / 32,
          string: "D",
          finger: 2,
        },
        {
          pitch: "G4",
          duration: 1 / 16,
          offset: 2 / 16,
          string: "D",
          finger: 1,
        },
        {
          pitch: "A4",
          duration: 1 / 32,
          offset: 3 / 16 + 1 / 32,
          string: "D",
          finger: 2,
        },
        {
          pitch: "B4",
          duration: 1 / 16,
          offset: 1 / 4,
          string: "D",
          finger: 3,
        },
        {
          pitch: "D5",
          duration: 1 / 32,
          offset: 1 / 4 + 3 / 32,
          string: "A",
          finger: 1,
        },
        {
          pitch: "E5",
          duration: 1 / 16,
          offset: 3 / 8,
          string: "A",
          finger: 2,
        },
        {
          pitch: "D5",
          duration: 1 / 32,
          offset: 3 / 8 + 3 / 32,
          string: "A",
          finger: 1,
        },
      ],
    },
    {
      notes: [
        { pitch: "E5", duration: 1 / 16, offset: 0, string: "A", finger: 2 },
        {
          pitch: "F#5",
          duration: 1 / 32,
          offset: 3 / 32,
          string: "A",
          finger: 3,
        },
        {
          pitch: "A5",
          duration: 1 / 16,
          offset: 2 / 16,
          string: "A",
          finger: 4,
          flageolet: true,
        },
        {
          pitch: "G5",
          duration: 1 / 32,
          offset: 3 / 16 + 1 / 32,
          string: "A",
          finger: 4,
        },
        {
          pitch: "F#5",
          duration: 1 / 16,
          offset: 1 / 4,
          string: "A",
          finger: 3,
        },
        {
          pitch: "A5",
          duration: 1 / 32,
          offset: 1 / 4 + 3 / 32,
          string: "A",
          finger: 4,
          flageolet: true,
        },
        {
          pitch: "G5",
          duration: 1 / 16,
          offset: 3 / 8,
          string: "A",
          finger: 4,
        },
        {
          pitch: "E5",
          duration: 1 / 32,
          offset: 3 / 8 + 3 / 32,
          string: "A",
          finger: 2,
        },
      ],
    },
    {
      notes: [
        { pitch: "D5", duration: 1 / 16, offset: 0, string: "A", finger: 1 },
        {
          pitch: "D5",
          duration: 1 / 32,
          offset: 3 / 32,
          string: "A",
          finger: 1,
        },
        {
          pitch: "G5",
          duration: 1 / 16,
          offset: 2 / 16,
          string: "A",
          finger: 4,
        },
        {
          pitch: "G4",
          duration: 1 / 32,
          offset: 3 / 16 + 1 / 32,
          string: "D",
          finger: 1,
        },
        { pitch: "A4", duration: 1 / 8, offset: 1 / 4, string: "D", finger: 2 },
        {
          pitch: "D5",
          duration: 1 / 8,
          offset: 1 / 4 + 1 / 8,
          string: "D",
          finger: 4,
          flageolet: true,
        },
      ],
    },
    {
      notes: [
        {
          pitch: "G4",
          duration: 3 / 8,
          offset: 0,
          string: "G",
          finger: 4,
          flageolet: true,
        },
      ],
    },
    {
      positions: [
        { distance: 2, label: 1, offset: 0 },
        { distance: 5, label: 3, offset: 1 / 8 },
      ],
      notes: [
        { pitch: "G3", duration: 1 / 8, offset: 0, string: "G", finger: 0 },
        { pitch: "D4", duration: 1 / 8, offset: 0, string: "D", finger: 0 },
        { pitch: "B4", duration: 1 / 8, offset: 0, string: "A", finger: 1 },
        {
          pitch: "G5",
          duration: 1 / 16,
          offset: 1 / 8,
          string: "A",
          finger: 4,
        },
        {
          pitch: "B5",
          duration: 1 / 16,
          offset: 1 / 8,
          string: "E",
          finger: 2,
        },
        {
          pitch: "F#5",
          duration: 1 / 32,
          offset: 1 / 8 + 1 / 16 + 1 / 32,
          string: "A",
          finger: 3,
        },
        {
          pitch: "A5",
          duration: 1 / 32,
          offset: 1 / 8 + 1 / 16 + 1 / 32,
          string: "E",
          finger: 1,
        },
        {
          pitch: "F#5",
          duration: 1 / 8,
          offset: 1 / 4,
          string: "A",
          finger: 3,
        },
        { pitch: "A5", duration: 1 / 8, offset: 1 / 4, string: "E", finger: 1 },
        { pitch: "E5", duration: 1 / 8, offset: 3 / 8, string: "E", finger: 0 },
        { pitch: "G5", duration: 1 / 8, offset: 3 / 8, string: "A", finger: 4 },
      ],
    },
    {
      positions: [
        { distance: 2, label: 1, offset: 1 / 8 },
        { distance: 5, label: 3, offset: 3 / 8 },
      ],
      notes: [
        { pitch: "E5", duration: 1 / 8, offset: 0, string: "E", finger: 0 },
        { pitch: "G5", duration: 1 / 8, offset: 0, string: "A", finger: 4 },
        {
          pitch: "D5",
          duration: 1 / 16,
          offset: 1 / 8,
          string: "A",
          finger: 3,
        },
        {
          pitch: "F#5",
          duration: 1 / 16,
          offset: 1 / 8,
          string: "E",
          finger: 1,
        },
        {
          pitch: "C5",
          duration: 1 / 32,
          offset: 1 / 8 + 1 / 16 + 1 / 32,
          string: "A",
          finger: 2,
        },
        {
          pitch: "E5",
          duration: 1 / 32,
          offset: 1 / 8 + 1 / 16 + 1 / 32,
          string: "E",
          finger: 0,
        },
        { pitch: "C5", duration: 1 / 8, offset: 1 / 4, string: "A", finger: 2 },
        { pitch: "E5", duration: 1 / 8, offset: 1 / 4, string: "E", finger: 0 },
        { pitch: "B4", duration: 1 / 8, offset: 3 / 8, string: "D", finger: 3 },
        { pitch: "D5", duration: 1 / 8, offset: 3 / 8, string: "A", finger: 1 },
      ],
    },
    {
      positions: [
        { distance: 3, label: 2, offset: 1 / 8 },
        { distance: 2, label: 1, offset: 3 / 8 },
      ],
      notes: [
        { pitch: "B4", duration: 1 / 8, offset: 0, string: "D", finger: 3 },
        { pitch: "D5", duration: 1 / 8, offset: 0, string: "A", finger: 1 },
        {
          pitch: "A4",
          duration: 1 / 16,
          offset: 1 / 8,
          string: "D",
          finger: 3,
        },
        {
          pitch: "C5",
          duration: 1 / 16,
          offset: 1 / 8,
          string: "A",
          finger: 1,
        },
        {
          pitch: "G4",
          duration: 1 / 16,
          offset: 1 / 8 + 1 / 16,
          string: "D",
          finger: 2,
        },
        {
          pitch: "E5",
          duration: 1 / 16,
          offset: 1 / 8 + 1 / 16,
          string: "A",
          finger: 3,
        },
        { pitch: "D5", duration: 1 / 8, offset: 1 / 4, string: "A", finger: 2 },
        {
          pitch: "C5",
          duration: 1 / 8,
          offset: 1 / 4 + 1 / 8,
          string: "A",
          finger: 2,
        },
        {
          pitch: "F#4",
          duration: 1 / 16,
          offset: 1 / 4,
          string: "D",
          finger: 1,
        },
        {
          pitch: "D4",
          duration: 1 / 16,
          offset: 1 / 4 + 1 / 16,
          string: "D",
          finger: 0,
        },
        {
          pitch: "E4",
          duration: 1 / 16,
          offset: 1 / 4 + 2 / 16,
          string: "D",
          finger: 1,
        },
        {
          pitch: "F#4",
          duration: 1 / 16,
          offset: 1 / 4 + 3 / 16,
          string: "D",
          finger: 3,
        },
      ],
    },
    {
      notes: [
        { pitch: "G4", duration: 1 / 16, offset: 0, string: "D", finger: 3 },
        { pitch: "B4", duration: 1 / 16, offset: 0, string: "A", finger: 1 },
        {
          pitch: "D4",
          duration: 1 / 16,
          offset: 1 / 16,
          string: "D",
          finger: 0,
        },
        {
          pitch: "A4",
          duration: 1 / 16,
          offset: 1 / 16,
          string: "A",
          finger: 0,
        },
        { pitch: "B3", duration: 1 / 4, offset: 1 / 8, string: "G", finger: 2 },
        { pitch: "G4", duration: 1 / 4, offset: 1 / 8, string: "D", finger: 3 },
        {
          pitch: "G4",
          duration: 1 / 16,
          offset: 3 / 8,
          string: "D",
          finger: 3,
        },
        {
          pitch: "A4",
          duration: 1 / 16,
          offset: 3 / 8 + 1 / 16,
          string: "D",
          finger: 4,
        },
      ],
    },
    {
      positions: [{ distance: 5, label: 3, offset: 1 / 8 }],
      notes: [
        { pitch: "G3", duration: 1 / 128, offset: 0, string: "G", finger: 0 },
        {
          pitch: "D4",
          duration: 1 / 128,
          offset: 1 / 128,
          string: "D",
          finger: 0,
        },
        {
          pitch: "B4",
          duration: 1 / 8 - 2 / 128,
          offset: 2 / 128,
          string: "A",
          finger: 1,
        },
        {
          pitch: "G5",
          duration: 1 / 16,
          offset: 1 / 8,
          string: "A",
          finger: 4,
        },
        {
          pitch: "B5",
          duration: 1 / 16,
          offset: 1 / 8,
          string: "E",
          finger: 2,
        },
        {
          pitch: "F#5",
          duration: 1 / 32,
          offset: 1 / 8 + 1 / 16 + 1 / 32,
          string: "A",
          finger: 3,
        },
        {
          pitch: "A5",
          duration: 1 / 32,
          offset: 1 / 8 + 1 / 16 + 1 / 32,
          string: "E",
          finger: 1,
        },
        {
          pitch: "F#5",
          duration: 1 / 128,
          offset: 1 / 4,
          string: "A",
          finger: 3,
        },
        {
          pitch: "A5",
          duration: 1 / 128,
          offset: 1 / 4,
          string: "E",
          finger: 1,
        },
        {
          pitch: "G5",
          duration: 1 / 128,
          offset: 1 / 4 + 1 / 128,
          string: "A",
          finger: 4,
        },
        {
          pitch: "B5",
          duration: 1 / 128,
          offset: 1 / 4 + 1 / 128,
          string: "E",
          finger: 2,
        },
        {
          pitch: "F#5",
          duration: 1 / 8 - 2 / 128,
          offset: 1 / 4 + 2 / 128,
          string: "A",
          finger: 3,
        },
        {
          pitch: "A5",
          duration: 1 / 8 - 2 / 128,
          offset: 1 / 4 + 2 / 128,
          string: "E",
          finger: 1,
        },
        { pitch: "E5", duration: 1 / 8, offset: 3 / 8, string: "E", finger: 0 },
        { pitch: "G5", duration: 1 / 8, offset: 3 / 8, string: "A", finger: 4 },
      ],
    },
    {
      positions: [
        { distance: 2, label: 1, offset: 1 / 8 },
        { distance: 5, label: 3, offset: 3 / 8 },
      ],
      notes: [
        { pitch: "E5", duration: 1 / 8, offset: 0, string: "E", finger: 0 },
        { pitch: "G5", duration: 1 / 8, offset: 0, string: "A", finger: 4 },
        {
          pitch: "D5",
          duration: 1 / 16,
          offset: 1 / 8,
          string: "A",
          finger: 3,
        },
        {
          pitch: "F#5",
          duration: 1 / 16,
          offset: 1 / 8,
          string: "E",
          finger: 1,
        },
        {
          pitch: "C5",
          duration: 1 / 32,
          offset: 1 / 8 + 1 / 16 + 1 / 32,
          string: "A",
          finger: 2,
        },
        {
          pitch: "E5",
          duration: 1 / 32,
          offset: 1 / 8 + 1 / 16 + 1 / 32,
          string: "E",
          finger: 0,
        },
        {
          pitch: "C5",
          duration: 1 / 128,
          offset: 1 / 4,
          string: "A",
          finger: 2,
        },
        {
          pitch: "E5",
          duration: 1 / 128,
          offset: 1 / 4,
          string: "E",
          finger: 0,
        },
        {
          pitch: "D5",
          duration: 1 / 128,
          offset: 1 / 4 + 1 / 128,
          string: "A",
          finger: 3,
        },
        {
          pitch: "F#5",
          duration: 1 / 128,
          offset: 1 / 4 + 1 / 128,
          string: "E",
          finger: 1,
        },
        {
          pitch: "C5",
          duration: 1 / 8 - 2 / 128,
          offset: 1 / 4 + 2 / 128,
          string: "A",
          finger: 2,
        },
        {
          pitch: "E5",
          duration: 1 / 8 - 2 / 128,
          offset: 1 / 4 + 2 / 128,
          string: "E",
          finger: 0,
        },
        { pitch: "B4", duration: 1 / 8, offset: 3 / 8, string: "D", finger: 3 },
        { pitch: "D5", duration: 1 / 8, offset: 3 / 8, string: "A", finger: 1 },
      ],
    },
    {
      positions: [
        { distance: 9, label: 5, offset: 0 },
        { distance: 7, label: 4, offset: 2 / 8 },
      ],
      notes: [
        { pitch: "D5", duration: 1 / 16, offset: 0, string: "D", finger: 3 },
        {
          pitch: "C5",
          duration: 1 / 16,
          offset: 1 / 16,
          string: "D",
          finger: 2,
        },
        {
          pitch: "D5",
          duration: 1 / 16,
          offset: 2 / 16,
          string: "D",
          finger: 3,
        },
        {
          pitch: "E5",
          duration: 1 / 16,
          offset: 3 / 16,
          string: "D",
          finger: 4,
        },
        {
          pitch: "B4",
          duration: 1 / 16,
          offset: 4 / 16,
          string: "D",
          finger: 2,
        },
        {
          pitch: "A4",
          duration: 1 / 16,
          offset: 5 / 16,
          string: "D",
          finger: 1,
        },
        {
          pitch: "B4",
          duration: 1 / 16,
          offset: 6 / 16,
          string: "D",
          finger: 2,
        },
        {
          pitch: "D5",
          duration: 1 / 128,
          offset: 7 / 16,
          string: "D",
          finger: 4,
        },
        {
          pitch: "C5",
          duration: 1 / 16 - 1 / 128,
          offset: 7 / 16 + 1 / 128,
          string: "D",
          finger: 3,
        },
      ],
    },
    {
      positions: [{ distance: 5, label: 3, offset: 1 / 8 }],
      notes: [
        { pitch: "B4", duration: 1 / 8, offset: 0, string: "D", finger: 2 },
        {
          pitch: "A#4",
          duration: 1 / 4,
          offset: 1 / 8,
          string: "D",
          finger: 3,
        },
        { pitch: "A4", duration: 1 / 8, offset: 3 / 8, string: "D", finger: 2 },
      ],
    },
    // 最初のメロディに戻る部分
    {
      notes: [
        { pitch: "G4", duration: 1 / 16, offset: 0, string: "D", finger: 1 },
        {
          pitch: "A4",
          duration: 1 / 32,
          offset: 3 / 32,
          string: "D",
          finger: 2,
        },
        {
          pitch: "G4",
          duration: 1 / 16,
          offset: 2 / 16,
          string: "D",
          finger: 1,
        },
        {
          pitch: "A4",
          duration: 1 / 32,
          offset: 3 / 16 + 1 / 32,
          string: "D",
          finger: 2,
        },
        {
          pitch: "B4",
          duration: 1 / 16,
          offset: 1 / 4,
          string: "D",
          finger: 3,
        },
        {
          pitch: "D5",
          duration: 1 / 32,
          offset: 1 / 4 + 3 / 32,
          string: "A",
          finger: 1,
        },
        {
          pitch: "E5",
          duration: 1 / 16,
          offset: 3 / 8,
          string: "A",
          finger: 2,
        },
        {
          pitch: "D5",
          duration: 1 / 32,
          offset: 3 / 8 + 3 / 32,
          string: "A",
          finger: 1,
        },
      ],
    },
    {
      notes: [
        { pitch: "G5", duration: 1 / 16, offset: 0, string: "A", finger: 4 },
        {
          pitch: "F#5",
          duration: 1 / 32,
          offset: 3 / 32,
          string: "A",
          finger: 3,
        },
        {
          pitch: "A5",
          duration: 1 / 16,
          offset: 2 / 16,
          string: "A",
          finger: 4,
          flageolet: true,
        },
        {
          pitch: "G5",
          duration: 1 / 32,
          offset: 3 / 16 + 1 / 32,
          string: "A",
          finger: 4,
        },
        {
          pitch: "F#5",
          duration: 1 / 16,
          offset: 1 / 4,
          string: "A",
          finger: 3,
        },
        {
          pitch: "A5",
          duration: 1 / 32,
          offset: 1 / 4 + 3 / 32,
          string: "A",
          finger: 4,
          flageolet: true,
        },
        {
          pitch: "G5",
          duration: 1 / 16,
          offset: 3 / 8,
          string: "A",
          finger: 4,
        },
        {
          pitch: "E5",
          duration: 1 / 32,
          offset: 3 / 8 + 3 / 32,
          string: "A",
          finger: 2,
        },
      ],
    },
    {
      notes: [
        { pitch: "D5", duration: 1 / 16, offset: 0, string: "A", finger: 1 },
        {
          pitch: "D5",
          duration: 1 / 32,
          offset: 3 / 32,
          string: "A",
          finger: 1,
        },
        {
          pitch: "E5",
          duration: 1 / 16,
          offset: 2 / 16,
          string: "A",
          finger: 2,
        },
        {
          pitch: "D5",
          duration: 1 / 32,
          offset: 3 / 16 + 1 / 32,
          string: "A",
          finger: 1,
        },
        {
          pitch: "G5",
          duration: 1 / 16,
          offset: 1 / 4,
          string: "A",
          finger: 4,
        },
        {
          pitch: "E5",
          duration: 1 / 32,
          offset: 1 / 4 + 3 / 32,
          string: "A",
          finger: 2,
        },
        {
          pitch: "D5",
          duration: 1 / 16,
          offset: 3 / 8,
          string: "A",
          finger: 1,
        },
        {
          pitch: "B4",
          duration: 1 / 32,
          offset: 3 / 8 + 3 / 32,
          string: "D",
          finger: 3,
        },
      ],
    },
    {
      notes: [
        { pitch: "A4", duration: 2 / 4, offset: 0, string: "D", finger: 2 },
      ],
    },
    {
      notes: [
        { pitch: "G4", duration: 1 / 16, offset: 0, string: "D", finger: 1 },
        {
          pitch: "A4",
          duration: 1 / 32,
          offset: 3 / 32,
          string: "D",
          finger: 2,
        },
        {
          pitch: "G4",
          duration: 1 / 16,
          offset: 2 / 16,
          string: "D",
          finger: 1,
        },
        {
          pitch: "A4",
          duration: 1 / 32,
          offset: 3 / 16 + 1 / 32,
          string: "D",
          finger: 2,
        },
        {
          pitch: "B4",
          duration: 1 / 16,
          offset: 1 / 4,
          string: "D",
          finger: 3,
        },
        {
          pitch: "D5",
          duration: 1 / 32,
          offset: 1 / 4 + 3 / 32,
          string: "A",
          finger: 1,
        },
        {
          pitch: "E5",
          duration: 1 / 16,
          offset: 3 / 8,
          string: "A",
          finger: 2,
        },
        {
          pitch: "D5",
          duration: 1 / 32,
          offset: 3 / 8 + 3 / 32,
          string: "A",
          finger: 1,
        },
      ],
    },
    {
      notes: [
        { pitch: "G5", duration: 1 / 16, offset: 0, string: "A", finger: 4 },
        {
          pitch: "F#5",
          duration: 1 / 32,
          offset: 3 / 32,
          string: "A",
          finger: 3,
        },
        {
          pitch: "A5",
          duration: 1 / 16,
          offset: 2 / 16,
          string: "A",
          finger: 4,
          flageolet: true,
        },
        {
          pitch: "G5",
          duration: 1 / 32,
          offset: 3 / 16 + 1 / 32,
          string: "A",
          finger: 4,
        },
        {
          pitch: "F#5",
          duration: 1 / 16,
          offset: 1 / 4,
          string: "A",
          finger: 3,
        },
        {
          pitch: "A5",
          duration: 1 / 32,
          offset: 1 / 4 + 3 / 32,
          string: "A",
          finger: 4,
          flageolet: true,
        },
        {
          pitch: "G5",
          duration: 1 / 16,
          offset: 3 / 8,
          string: "A",
          finger: 4,
        },
        {
          pitch: "E5",
          duration: 1 / 32,
          offset: 3 / 8 + 3 / 32,
          string: "A",
          finger: 2,
        },
      ],
    },
    {
      positions: [
        { distance: 9, label: 5, offset: 1 / 8 },
        { distance: 5, label: 3, offset: 15 / 32 },
      ],
      notes: [
        { pitch: "D5", duration: 1 / 16, offset: 0, string: "A", finger: 1 },
        {
          pitch: "D5",
          duration: 1 / 32,
          offset: 3 / 32,
          string: "A",
          finger: 1,
        },
        {
          pitch: "A#5",
          duration: 1 / 16,
          offset: 2 / 16,
          string: "A",
          finger: 4,
        },
        {
          pitch: "D5",
          duration: 1 / 32,
          offset: 3 / 16 + 1 / 32,
          string: "D",
          finger: 3,
        },
        {
          pitch: "C#5",
          duration: 1 / 16,
          offset: 1 / 4,
          string: "D",
          finger: 2,
        },
        {
          pitch: "A#5",
          duration: 1 / 32,
          offset: 1 / 4 + 3 / 32,
          string: "A",
          finger: 4,
        },
        {
          pitch: "A5",
          duration: 1 / 16,
          offset: 3 / 8,
          string: "A",
          finger: 3,
        },
        {
          pitch: "E5",
          duration: 1 / 32,
          offset: 3 / 8 + 3 / 32,
          string: "A",
          finger: 2,
        },
      ],
    },
    {
      notes: [
        { pitch: "D5", duration: 1 / 128, offset: 0, string: "A", finger: 1 },
        {
          pitch: "G5",
          duration: 3 / 8 - 1 / 128,
          offset: 1 / 128,
          string: "A",
          finger: 4,
        },
      ],
    },
  ],
};
