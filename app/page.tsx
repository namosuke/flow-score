"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ViolinString, score } from "./scores/humoreske";
import Image from "next/image";

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
  const endTime = useMemo(
    () => score.measures.length * score.timeSignature * timeExtend,
    []
  );
  const [seekTime, setSeekTime] = useState(0);

  useEffect(() => {
    if (playingStatus === "playing") {
      const loop = setInterval(() => {
        const time = audioCtx?.currentTime ?? 0;
        setTime(time);
        if (seekTime + time > endTime) {
          setPlayingStatus("unstarted");
          audioCtx?.close();
        }
      }, 16);
      return () => clearInterval(loop);
    }
  }, [playingStatus, audioCtx, endTime, seekTime]);

  const [gainNode, setGainNode] = useState<GainNode>();
  const [mute, setMute] = useState(false);
  const [volume, setVolume] = useState(0.1);

  const play = useCallback(
    (seekTime: number) => {
      setTime(0);
      setSeekTime(seekTime);
      setPlayingStatus("playing");
      const audioCtx = new AudioContext();
      setAudioCtx(audioCtx);
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
          const startTime =
            (measureOffset + note.offset) * timeExtend - seekTime;
          const stopTime =
            (measureOffset + note.offset + note.duration) * timeExtend -
            seekTime;
          if (
            startTime >= 0 &&
            startTime <= endTime &&
            stopTime >= 0 &&
            stopTime <= endTime
          ) {
            oscillator.start(startTime);
            oscillator.stop(stopTime);
          }
        });
      });
    },
    [mute, volume, endTime]
  );

  return (
    <div>
      <div>
        {playingStatus === "unstarted" && (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg m-3"
            onClick={() => play(0)}
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
              setSeekTime(0);
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
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg m-3"
          onClick={() => {
            play(Math.max(seekTime + time - 5, 0));
          }}
        >
          5秒戻す
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg m-3"
          onClick={() => {
            play(Math.min(seekTime + time + 5, endTime));
          }}
        >
          5秒進める
        </button>
      </div>
      <div className="bg-slate-100 w-full h-[500px] relative overflow-hidden">
        <Image
          src={"/指板.png"}
          alt="指板"
          width={1351}
          height={2664}
          className="h-[600px] w-auto absolute opacity-30 top-[-150px] left-[48px]"
          priority
        />
        {[
          "0",
          "",
          "1",
          "",
          "",
          "3",
          "",
          "",
          "",
          "5",
          "",
          "",
          "",
          "",
          "",
          "",
        ].map((label, index) => (
          <div
            key={index}
            className="w-full h-[50px] flex items-center absolute"
            style={{
              top: `${25 * index}px`,
            }}
          >
            <div className="w-6 text-center text-slate-600">{label}</div>
            <div
              className={`w-full h-0 border-t-2 ${
                label === "0"
                  ? "border-transparent"
                  : label === ""
                  ? "border-slate-200"
                  : "border-slate-400"
              }`}
            />
          </div>
        ))}
        {score.measures.map((measure, measureIndex) => {
          const measureOffset = measureIndex * score.timeSignature;
          return (
            <React.Fragment key={measureIndex}>
              <div
                className="w-0 h-full absolute border-r-2 border-slate-200"
                style={{
                  transform: `translate(${
                    200 +
                    measureOffset * rectExtend -
                    ((seekTime + time) / timeExtend) * rectExtend
                  }px, 0px)`,
                }}
              />
              {measure.notes.map((note, noteIndex) => {
                const string = note.string ?? getDefaultString(note.pitch);
                const offsetPx =
                  (measureOffset + note.offset) * rectExtend -
                  ((seekTime + time) / timeExtend) * rectExtend;
                const durationPx = note.duration * rectExtend;
                return (
                  <div
                    key={noteIndex}
                    className="h-[50px] absolute top-0 left-[200px] flex items-center"
                    style={{
                      width: `${durationPx}px`,
                      transform: `translate(${offsetPx}px, ${
                        getFretPosition(note.pitch, string) * 25
                      }px)`,
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
                      } ${
                        offsetPx <= 0 && offsetPx + durationPx >= 0
                          ? string === "G"
                            ? "bg-blue-300"
                            : string === "D"
                            ? "bg-orange-300"
                            : string === "A"
                            ? "bg-red-300"
                            : "bg-lime-300"
                          : ""
                      }`}
                    >
                      <div className="relative right-4 w-0">{note.finger}</div>
                      <div>{string}</div>
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          );
        })}
        <div className="w-[200px] h-full absolute border-r-2 border-red-500" />
      </div>
    </div>
  );
}
