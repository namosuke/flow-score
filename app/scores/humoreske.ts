type Score = {
  title: string;
  timeSignature: number;
  measures: Measure[];
};

type Measure = {
  notes: Note[];
};

type Note = {
  pitch: string;
  duration: number;
  offset: number;
};

export const score: Score = {
  title: "Humoreske",
  timeSignature: 2 / 4,
  measures: [
    {
      notes: [
        { pitch: "B3", duration: 1 / 128, offset: 0 },
        { pitch: "G4", duration: 1 / 16 - 1 / 128, offset: 1 / 128 },
        { pitch: "A4", duration: 1 / 32, offset: 3 / 32 },
        { pitch: "G4", duration: 1 / 16, offset: 2 / 16 },
        { pitch: "A4", duration: 1 / 32, offset: 3 / 16 + 1 / 32 },
        { pitch: "B4", duration: 1 / 16, offset: 1 / 4 },
        { pitch: "D5", duration: 1 / 32, offset: 1 / 4 + 3 / 32 },
        { pitch: "E5", duration: 1 / 16, offset: 3 / 8 },
        { pitch: "D5", duration: 1 / 32, offset: 3 / 8 + 3 / 32 },
      ],
    },
    {
      notes: [
        { pitch: "G5", duration: 1 / 16, offset: 0 },
        { pitch: "F#5", duration: 1 / 32, offset: 3 / 32 },
        { pitch: "A5", duration: 1 / 16, offset: 2 / 16 },
        { pitch: "G5", duration: 1 / 32, offset: 3 / 16 + 1 / 32 },
        { pitch: "F#5", duration: 1 / 16, offset: 1 / 4 },
        { pitch: "A5", duration: 1 / 32, offset: 1 / 4 + 3 / 32 },
        { pitch: "G5", duration: 1 / 16, offset: 3 / 8 },
        { pitch: "E5", duration: 1 / 32, offset: 3 / 8 + 3 / 32 },
      ],
    },
    {
      notes: [
        { pitch: "D5", duration: 1 / 16, offset: 0 },
        { pitch: "D5", duration: 1 / 32, offset: 3 / 32 },
        { pitch: "E5", duration: 1 / 16, offset: 2 / 16 },
        { pitch: "D5", duration: 1 / 32, offset: 3 / 16 + 1 / 32 },
        { pitch: "G5", duration: 1 / 16, offset: 1 / 4 },
        { pitch: "E5", duration: 1 / 32, offset: 1 / 4 + 3 / 32 },
        { pitch: "D5", duration: 1 / 16, offset: 3 / 8 },
        { pitch: "B4", duration: 1 / 32, offset: 3 / 8 + 3 / 32 },
      ],
    },
    {
      notes: [{ pitch: "A4", duration: 2 / 4, offset: 0 }],
    },
    {
      notes: [
        { pitch: "G4", duration: 1 / 16, offset: 0 },
        { pitch: "A4", duration: 1 / 32, offset: 3 / 32 },
        { pitch: "G4", duration: 1 / 16, offset: 2 / 16 },
        { pitch: "A4", duration: 1 / 32, offset: 3 / 16 + 1 / 32 },
        { pitch: "B4", duration: 1 / 16, offset: 1 / 4 },
        { pitch: "D5", duration: 1 / 32, offset: 1 / 4 + 3 / 32 },
        { pitch: "E5", duration: 1 / 16, offset: 3 / 8 },
        { pitch: "D5", duration: 1 / 32, offset: 3 / 8 + 3 / 32 },
      ],
    },
    {
      notes: [
        { pitch: "E5", duration: 1 / 16, offset: 0 },
        { pitch: "F#5", duration: 1 / 32, offset: 3 / 32 },
        { pitch: "A5", duration: 1 / 16, offset: 2 / 16 },
        { pitch: "G5", duration: 1 / 32, offset: 3 / 16 + 1 / 32 },
        { pitch: "F#5", duration: 1 / 16, offset: 1 / 4 },
        { pitch: "A5", duration: 1 / 32, offset: 1 / 4 + 3 / 32 },
        { pitch: "G5", duration: 1 / 16, offset: 3 / 8 },
        { pitch: "E5", duration: 1 / 32, offset: 3 / 8 + 3 / 32 },
      ],
    },
    {
      notes: [
        { pitch: "D5", duration: 1 / 16, offset: 0 },
        { pitch: "D5", duration: 1 / 32, offset: 3 / 32 },
        { pitch: "G5", duration: 1 / 16, offset: 2 / 16 },
        { pitch: "G4", duration: 1 / 32, offset: 3 / 16 + 1 / 32 },
        { pitch: "A4", duration: 1 / 8, offset: 1 / 4 },
        { pitch: "D5", duration: 1 / 8, offset: 1 / 4 + 1 / 8 },
      ],
    },
    {
      notes: [{ pitch: "G4", duration: 3 / 8, offset: 0 }],
    },
    {
      notes: [
        { pitch: "G3", duration: 1 / 8, offset: 0 },
        { pitch: "D4", duration: 1 / 8, offset: 0 },
        { pitch: "B4", duration: 1 / 8, offset: 0 },
        { pitch: "G5", duration: 1 / 16, offset: 1 / 8 },
        { pitch: "B5", duration: 1 / 16, offset: 1 / 8 },
        { pitch: "F#5", duration: 1 / 32, offset: 1 / 8 + 1 / 16 + 1 / 32 },
        { pitch: "A5", duration: 1 / 32, offset: 1 / 8 + 1 / 16 + 1 / 32 },
        { pitch: "F#5", duration: 1 / 8, offset: 1 / 4 },
        { pitch: "A5", duration: 1 / 8, offset: 1 / 4 },
        { pitch: "E5", duration: 1 / 8, offset: 3 / 8 },
        { pitch: "G5", duration: 1 / 8, offset: 3 / 8 },
      ],
    },
    {
      notes: [
        { pitch: "E5", duration: 1 / 8, offset: 0 },
        { pitch: "G5", duration: 1 / 8, offset: 0 },
        { pitch: "D5", duration: 1 / 16, offset: 1 / 8 },
        { pitch: "F#5", duration: 1 / 16, offset: 1 / 8 },
        { pitch: "C5", duration: 1 / 32, offset: 1 / 8 + 1 / 16 + 1 / 32 },
        { pitch: "E5", duration: 1 / 32, offset: 1 / 8 + 1 / 16 + 1 / 32 },
        { pitch: "C5", duration: 1 / 8, offset: 1 / 4 },
        { pitch: "E5", duration: 1 / 8, offset: 1 / 4 },
        { pitch: "B4", duration: 1 / 8, offset: 3 / 8 },
        { pitch: "D5", duration: 1 / 8, offset: 3 / 8 },
      ],
    },
    {
      notes: [
        { pitch: "B4", duration: 1 / 8, offset: 0 },
        { pitch: "D5", duration: 1 / 8, offset: 0 },
        { pitch: "A4", duration: 1 / 16, offset: 1 / 8 },
        { pitch: "C5", duration: 1 / 16, offset: 1 / 8 },
        { pitch: "G4", duration: 1 / 16, offset: 1 / 8 + 1 / 16 },
        { pitch: "E5", duration: 1 / 16, offset: 1 / 8 + 1 / 16 },
        { pitch: "D5", duration: 1 / 8, offset: 1 / 4 },
        { pitch: "C5", duration: 1 / 8, offset: 1 / 4 + 1 / 8 },
        { pitch: "F#4", duration: 1 / 16, offset: 1 / 4 },
        { pitch: "D4", duration: 1 / 16, offset: 1 / 4 + 1 / 16 },
        { pitch: "E4", duration: 1 / 16, offset: 1 / 4 + 2 / 16 },
        { pitch: "F#4", duration: 1 / 16, offset: 1 / 4 + 3 / 16 },
      ],
    },
    {
      notes: [
        { pitch: "G4", duration: 1 / 16, offset: 0 },
        { pitch: "B4", duration: 1 / 16, offset: 0 },
        { pitch: "D4", duration: 1 / 16, offset: 1 / 16 },
        { pitch: "A4", duration: 1 / 16, offset: 1 / 16 },
        { pitch: "B3", duration: 1 / 4, offset: 1 / 8 },
        { pitch: "G4", duration: 1 / 4, offset: 1 / 8 },
        { pitch: "G4", duration: 1 / 16, offset: 3 / 8 },
        { pitch: "A4", duration: 1 / 16, offset: 3 / 8 + 1 / 16 },
      ],
    },
    {
      notes: [
        { pitch: "G3", duration: 1 / 128, offset: 0 },
        { pitch: "D4", duration: 1 / 128, offset: 1 / 128 },
        { pitch: "B4", duration: 1 / 8 - 2 / 128, offset: 2 / 128 },
        { pitch: "G5", duration: 1 / 16, offset: 1 / 8 },
        { pitch: "B5", duration: 1 / 16, offset: 1 / 8 },
        { pitch: "F#5", duration: 1 / 32, offset: 1 / 8 + 1 / 16 + 1 / 32 },
        { pitch: "A5", duration: 1 / 32, offset: 1 / 8 + 1 / 16 + 1 / 32 },
        { pitch: "F#5", duration: 1 / 128, offset: 1 / 4 },
        { pitch: "A5", duration: 1 / 128, offset: 1 / 4 },
        { pitch: "G5", duration: 1 / 128, offset: 1 / 4 + 1 / 128 },
        { pitch: "B5", duration: 1 / 128, offset: 1 / 4 + 1 / 128 },
        { pitch: "F#5", duration: 1 / 8 - 2 / 128, offset: 1 / 4 + 2 / 128 },
        { pitch: "A5", duration: 1 / 8 - 2 / 128, offset: 1 / 4 + 2 / 128 },
        { pitch: "E5", duration: 1 / 8, offset: 3 / 8 },
        { pitch: "G5", duration: 1 / 8, offset: 3 / 8 },
      ],
    },
    {
      notes: [
        { pitch: "E5", duration: 1 / 8, offset: 0 },
        { pitch: "G5", duration: 1 / 8, offset: 0 },
        { pitch: "D5", duration: 1 / 16, offset: 1 / 8 },
        { pitch: "F#5", duration: 1 / 16, offset: 1 / 8 },
        { pitch: "C5", duration: 1 / 32, offset: 1 / 8 + 1 / 16 + 1 / 32 },
        { pitch: "E5", duration: 1 / 32, offset: 1 / 8 + 1 / 16 + 1 / 32 },
        { pitch: "C5", duration: 1 / 128, offset: 1 / 4 },
        { pitch: "E5", duration: 1 / 128, offset: 1 / 4 },
        { pitch: "D5", duration: 1 / 128, offset: 1 / 4 + 1 / 128 },
        { pitch: "F#5", duration: 1 / 128, offset: 1 / 4 + 1 / 128 },
        { pitch: "C5", duration: 1 / 8 - 2 / 128, offset: 1 / 4 + 2 / 128 },
        { pitch: "E5", duration: 1 / 8 - 2 / 128, offset: 1 / 4 + 2 / 128 },
        { pitch: "B4", duration: 1 / 8, offset: 3 / 8 },
        { pitch: "D5", duration: 1 / 8, offset: 3 / 8 },
      ],
    },
    {
      notes: [
        { pitch: "D5", duration: 1 / 16, offset: 0 },
        { pitch: "C5", duration: 1 / 16, offset: 1 / 16 },
        { pitch: "D5", duration: 1 / 16, offset: 2 / 16 },
        { pitch: "E5", duration: 1 / 16, offset: 3 / 16 },
        { pitch: "B4", duration: 1 / 16, offset: 4 / 16 },
        { pitch: "A4", duration: 1 / 16, offset: 5 / 16 },
        { pitch: "B4", duration: 1 / 16, offset: 6 / 16 },
        { pitch: "D5", duration: 1 / 128, offset: 7 / 16 },
        { pitch: "C5", duration: 1 / 16 - 1 / 128, offset: 7 / 16 + 1 / 128 },
      ],
    },
    {
      notes: [
        { pitch: "B4", duration: 1 / 8, offset: 0 },
        { pitch: "A#4", duration: 1 / 4, offset: 1 / 8 },
        { pitch: "A4", duration: 1 / 8, offset: 3 / 8 },
      ],
    },
    // 最初のメロディに戻る部分
    {
      notes: [
        { pitch: "G4", duration: 1 / 16, offset: 0 },
        { pitch: "A4", duration: 1 / 32, offset: 3 / 32 },
        { pitch: "G4", duration: 1 / 16, offset: 2 / 16 },
        { pitch: "A4", duration: 1 / 32, offset: 3 / 16 + 1 / 32 },
        { pitch: "B4", duration: 1 / 16, offset: 1 / 4 },
        { pitch: "D5", duration: 1 / 32, offset: 1 / 4 + 3 / 32 },
        { pitch: "E5", duration: 1 / 16, offset: 3 / 8 },
        { pitch: "D5", duration: 1 / 32, offset: 3 / 8 + 3 / 32 },
      ],
    },
    {
      notes: [
        { pitch: "G5", duration: 1 / 16, offset: 0 },
        { pitch: "F#5", duration: 1 / 32, offset: 3 / 32 },
        { pitch: "A5", duration: 1 / 16, offset: 2 / 16 },
        { pitch: "G5", duration: 1 / 32, offset: 3 / 16 + 1 / 32 },
        { pitch: "F#5", duration: 1 / 16, offset: 1 / 4 },
        { pitch: "A5", duration: 1 / 32, offset: 1 / 4 + 3 / 32 },
        { pitch: "G5", duration: 1 / 16, offset: 3 / 8 },
        { pitch: "E5", duration: 1 / 32, offset: 3 / 8 + 3 / 32 },
      ],
    },
    {
      notes: [
        { pitch: "D5", duration: 1 / 16, offset: 0 },
        { pitch: "D5", duration: 1 / 32, offset: 3 / 32 },
        { pitch: "E5", duration: 1 / 16, offset: 2 / 16 },
        { pitch: "D5", duration: 1 / 32, offset: 3 / 16 + 1 / 32 },
        { pitch: "G5", duration: 1 / 16, offset: 1 / 4 },
        { pitch: "E5", duration: 1 / 32, offset: 1 / 4 + 3 / 32 },
        { pitch: "D5", duration: 1 / 16, offset: 3 / 8 },
        { pitch: "B4", duration: 1 / 32, offset: 3 / 8 + 3 / 32 },
      ],
    },
    {
      notes: [{ pitch: "A4", duration: 2 / 4, offset: 0 }],
    },
    {
      notes: [
        { pitch: "G4", duration: 1 / 16, offset: 0 },
        { pitch: "A4", duration: 1 / 32, offset: 3 / 32 },
        { pitch: "G4", duration: 1 / 16, offset: 2 / 16 },
        { pitch: "A4", duration: 1 / 32, offset: 3 / 16 + 1 / 32 },
        { pitch: "B4", duration: 1 / 16, offset: 1 / 4 },
        { pitch: "D5", duration: 1 / 32, offset: 1 / 4 + 3 / 32 },
        { pitch: "E5", duration: 1 / 16, offset: 3 / 8 },
        { pitch: "D5", duration: 1 / 32, offset: 3 / 8 + 3 / 32 },
      ],
    },
    {
      notes: [
        { pitch: "G5", duration: 1 / 16, offset: 0 },
        { pitch: "F#5", duration: 1 / 32, offset: 3 / 32 },
        { pitch: "A5", duration: 1 / 16, offset: 2 / 16 },
        { pitch: "G5", duration: 1 / 32, offset: 3 / 16 + 1 / 32 },
        { pitch: "F#5", duration: 1 / 16, offset: 1 / 4 },
        { pitch: "A5", duration: 1 / 32, offset: 1 / 4 + 3 / 32 },
        { pitch: "G5", duration: 1 / 16, offset: 3 / 8 },
        { pitch: "E5", duration: 1 / 32, offset: 3 / 8 + 3 / 32 },
      ],
    },
    {
      notes: [
        { pitch: "D5", duration: 1 / 16, offset: 0 },
        { pitch: "D5", duration: 1 / 32, offset: 3 / 32 },
        { pitch: "A#5", duration: 1 / 16, offset: 2 / 16 },
        { pitch: "D5", duration: 1 / 32, offset: 3 / 16 + 1 / 32 },
        { pitch: "C#5", duration: 1 / 16, offset: 1 / 4 },
        { pitch: "A#5", duration: 1 / 32, offset: 1 / 4 + 3 / 32 },
        { pitch: "A5", duration: 1 / 16, offset: 3 / 8 },
        { pitch: "E5", duration: 1 / 32, offset: 3 / 8 + 3 / 32 },
      ],
    },
    {
      notes: [
        { pitch: "D5", duration: 1 / 128, offset: 0 },
        { pitch: "G5", duration: 3 / 8 - 1 / 128, offset: 1 / 128 },
      ],
    },
  ],
};
