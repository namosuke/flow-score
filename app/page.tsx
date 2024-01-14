"use client";

import { useEffect, useState } from "react";
import { score } from "./scores/humoreske";

function pitchToFrequency(pitch: string) {
  const pitches = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];
  const octave = parseInt(pitch[pitch.length - 1]);
  const keyNumber = pitches.indexOf(pitch.slice(0, -1));

  if (keyNumber === -1) {
    throw new Error("Invalid pitch name");
  }

  const a4KeyNumber = 9;
  const a4Octave = 4;
  const a4Key = 12 * a4Octave + a4KeyNumber;

  // 対象の音のキー番号を計算する
  const targetKey = 12 * octave + keyNumber;

  // A4からの半音の差を計算する
  const semitoneDiff = targetKey - a4Key;

  // 周波数を計算する
  return 442 * Math.pow(2, semitoneDiff / 12);
}

const timeExtend = 6;

export default function Home() {
  const [audioCtx, setAudioCtx] = useState<AudioContext>();
  useEffect(() => {
    return () => {
      audioCtx?.close();
    };
  }, [audioCtx]);

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg m-3"
        onClick={() => {
          const audioCtx = new AudioContext();
          setAudioCtx(audioCtx);
          const time = audioCtx.currentTime;
          const gainNode = new GainNode(audioCtx, { gain: 0.1 });
          score.measures.forEach((measure, measureIndex) => {
            const measureOffset = measureIndex * score.timeSignature;
            measure.notes.forEach((note) => {
              const oscillator = new OscillatorNode(audioCtx, {
                type: "square",
                frequency: pitchToFrequency(note.pitch),
              });
              oscillator.connect(gainNode).connect(audioCtx.destination);
              oscillator.start(
                time + (measureOffset + note.offset) * timeExtend
              );
              oscillator.stop(
                time +
                  (measureOffset + note.offset + note.duration) * timeExtend
              );
            });
          });
        }}
      >
        再生
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg m-3"
        onClick={() => {
          audioCtx?.suspend();
        }}
      >
        一時停止
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg m-3"
        onClick={() => {
          audioCtx?.resume();
        }}
      >
        再開
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg m-3"
        onClick={() => {
          audioCtx?.close();
        }}
      >
        終了
      </button>
    </div>
  );
}
