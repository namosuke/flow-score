"use client";

import { useEffect, useState } from "react";
import { ViolinString, score } from "./scores/humoreske";

function pitchToNoteNumber(pitch: string) {
  const keys = [
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
  const keyIndex = keys.indexOf(pitch.slice(0, -1));

  if (keyIndex === -1) {
    throw new Error("Invalid pitch name");
  }

  return 12 * octave + keyIndex;
}

function pitchToFrequency(pitch: string) {
  // A4のキー番号を計算する
  const a4NoteNumber = pitchToNoteNumber("A4");

  // 対象の音のキー番号を計算する
  const targetNoteNumber = pitchToNoteNumber(pitch);

  // A4からの半音の差を計算する
  const semitoneDiff = targetNoteNumber - a4NoteNumber;

  // 周波数を計算する
  return 442 * Math.pow(2, semitoneDiff / 12);
}

function getDefaultString(pitch: string): ViolinString {
  const noteNumber = pitchToNoteNumber(pitch);
  if (noteNumber <= pitchToNoteNumber("C4")) {
    return "G";
  } else if (noteNumber <= pitchToNoteNumber("G4")) {
    return "D";
  } else if (noteNumber <= pitchToNoteNumber("D5")) {
    return "A";
  } else {
    return "E";
  }
}

function getFretPosition(pitch: string, string: ViolinString) {
  const noteNumber = pitchToNoteNumber(pitch);
  const stringNoteNumber = pitchToNoteNumber(
    string === "G" ? "G3" : string === "D" ? "D4" : string === "A" ? "A4" : "E5"
  );
  return noteNumber - stringNoteNumber;
}

const timeExtend = 6.5;
const rectExtend = 1000;

export default function Home() {
  const [audioCtx, setAudioCtx] = useState<AudioContext>();
  useEffect(() => {
    return () => {
      audioCtx?.close();
    };
  }, [audioCtx]);

  const [playingStatus, setPlayingStatus] = useState<
    "unstarted" | "playing" | "paused"
  >("unstarted");

  const [time, setTime] = useState(0);

  useEffect(() => {
    if (playingStatus === "playing") {
      const loop = setInterval(() => {
        const time = audioCtx?.currentTime || 0;
        setTime(time);
        if (time > score.measures.length * score.timeSignature * timeExtend) {
          setPlayingStatus("unstarted");
          audioCtx?.close();
        }
      }, 16);
      return () => clearInterval(loop);
    }
  }, [playingStatus, audioCtx]);

  const [gainNode, setGainNode] = useState<GainNode>();
  const [mute, setMute] = useState(false);
  const [volume, setVolume] = useState(0.1);

  return (
    <div>
      <div>
        {playingStatus === "unstarted" && (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg m-3"
            onClick={() => {
              setPlayingStatus("playing");
              const audioCtx = new AudioContext();
              setAudioCtx(audioCtx);
              const time = audioCtx.currentTime;
              const gainNode = new GainNode(audioCtx, {
                gain: mute ? 0 : volume,
              });
              setGainNode(gainNode);
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
        )}
        {playingStatus === "playing" && (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg m-3"
            onClick={() => {
              setPlayingStatus("paused");
              audioCtx?.suspend();
            }}
          >
            一時停止
          </button>
        )}
        {playingStatus === "paused" && (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg m-3"
            onClick={() => {
              setPlayingStatus("playing");
              audioCtx?.resume();
            }}
          >
            再開
          </button>
        )}
        {(playingStatus === "playing" || playingStatus === "paused") && (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg m-3"
            onClick={() => {
              setPlayingStatus("unstarted");
              setTime(0);
              audioCtx?.close();
            }}
          >
            終了
          </button>
        )}
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg m-3"
          onClick={() => {
            setMute(!mute);
            if (gainNode) {
              gainNode.gain.value = mute ? volume : 0;
            }
          }}
        >
          {mute ? "ミュート解除" : "ミュート"}
        </button>
      </div>
      <div className="bg-slate-100 w-full h-[500px] relative overflow-hidden">
        <div className="w-[200px] h-full absolute border-r-2 border-slate-400" />
        {["0", "1", "", "3", "", "5", "", "", "", ""].map((label, index) => (
          <div
            key={index}
            className="w-full h-[50px] flex items-center absolute"
            style={{
              top: `${[0, 50, 75, 125, 175, 200, 250, 300, 325, 375][index]}px`,
            }}
          >
            <div className="w-6 text-center text-slate-600">{label}</div>
            <div
              className={`w-full h-0 border-t-2 ${
                label === "0"
                  ? "border-transparent"
                  : label === ""
                  ? "border-slate-300"
                  : "border-slate-400"
              }`}
            />
          </div>
        ))}
        {score.measures.map((measure, measureIndex) => {
          const measureOffset = measureIndex * score.timeSignature;
          return measure.notes.map((note, noteIndex) => {
            const string = note.string ?? getDefaultString(note.pitch);
            return (
              <div
                key={noteIndex}
                className="h-[50px] absolute top-0 left-[200px] flex items-center"
                style={{
                  width: `${note.duration * rectExtend}px`,
                  transform: `translate(${
                    (measureOffset + note.offset) * rectExtend -
                    (time / timeExtend) * rectExtend
                  }px, ${getFretPosition(note.pitch, string) * 25}px)`,
                }}
              >
                <div
                  className={`h-[25px] w-full rounded-md pl-1 flex ${
                    string === "G"
                      ? "bg-blue-400"
                      : string === "D"
                      ? "bg-orange-400"
                      : string === "A"
                      ? "bg-red-400"
                      : "bg-lime-400"
                  }`}
                >
                  <div className="relative right-4 w-0">{note.finger}</div>
                  <div>{string}</div>
                </div>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}
