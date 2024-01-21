"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ViolinString, score } from "./scores/humoreske";
import Image from "next/image";
import { BackwardIcon, PauseIcon, PlayIcon, SpeakerIcon } from "./icons";
import { useWindowSize } from "./lib";

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
const leftMargin = 250;
const topMargin = 50;
const lookAheadTime = 0.7;

export default function Home() {
  const [audioCtx, setAudioCtx] = useState<AudioContext>();
  useEffect(() => {
    return () => {
      audioCtx?.close();
    };
  }, [audioCtx]);

  const [playingStatus, setPlayingStatus] = useState<"paused" | "playing">(
    "paused"
  );

  const [time, setTime] = useState(0);
  const endTime = useMemo(
    () => score.measures.length * score.timeSignature * timeExtend,
    []
  );
  const [seekTime, setSeekTime] = useState(0);

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
          } else if (startTime < 0 && stopTime > 0) {
            oscillator.start(0);
            oscillator.stop(stopTime);
          }
        });
      });
    },
    [mute, volume, endTime]
  );

  const pause = useCallback(
    (seekTime: number) => {
      setPlayingStatus("paused");
      setTime(0);
      setSeekTime(seekTime);
      audioCtx?.close();
    },
    [audioCtx]
  );

  useEffect(() => {
    if (playingStatus === "playing") {
      const loop = setInterval(() => {
        const time = audioCtx?.currentTime ?? 0;
        setTime(time);
        if (seekTime + time > endTime) {
          pause(endTime);
        }
      }, 16.66);
      return () => clearInterval(loop);
    }
  }, [playingStatus, audioCtx, endTime, seekTime, pause]);

  const onPointerDown = useCallback(
    (event: React.PointerEvent) => {
      if (playingStatus === "playing") {
        return;
      }
      const startX = event.clientX;
      const onPointerMove = (event: PointerEvent) => {
        const offsetX = startX - event.clientX;
        setSeekTime(
          Math.min(
            Math.max(seekTime + (offsetX / rectExtend) * timeExtend, 0),
            endTime
          )
        );
      };
      const onPointerUp = () => {
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", onPointerUp);
      };
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
    },
    [playingStatus, seekTime, endTime]
  );

  const { width: windowWidth } = useWindowSize();

  return (
    <div>
      <div className="flex">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg m-3"
          onClick={() => {
            if (playingStatus === "playing") {
              play(0);
            } else {
              pause(0);
            }
          }}
        >
          <BackwardIcon />
        </button>
        {playingStatus === "paused" ? (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg m-3"
            onClick={() => play(seekTime)}
          >
            <PlayIcon />
          </button>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg m-3"
            onClick={() => pause(seekTime + time)}
          >
            <PauseIcon />
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
          <SpeakerIcon isMuted={mute} />
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg m-3"
          onClick={() => {
            if (playingStatus === "playing") {
              play(Math.max(seekTime + time - 5, 0));
            } else {
              pause(Math.max(seekTime + time - 5, 0));
            }
          }}
        >
          5秒戻る
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg m-3"
          onClick={() => {
            if (playingStatus === "playing") {
              play(Math.min(seekTime + time + 5, endTime));
            } else {
              pause(Math.min(seekTime + time + 5, endTime));
            }
          }}
        >
          5秒進む
        </button>
      </div>
      <div
        className={`bg-slate-100 w-full h-[500px] relative overflow-hidden select-none ${
          playingStatus === "paused"
            ? "cursor-grab active:cursor-grabbing touch-none"
            : ""
        }`}
        onPointerDown={onPointerDown}
      >
        <Image
          src={"/指板.png"}
          alt="指板"
          width={1351}
          height={2664}
          className="h-[600px] w-auto absolute opacity-30"
          style={{
            top: `${topMargin - 150}px`,
            left: "-50px",
          }}
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
              top: `${topMargin + 25 * index}px`,
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
                    leftMargin +
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
                if (
                  offsetPx + durationPx < -(leftMargin + 20) ||
                  offsetPx > windowWidth - (leftMargin - 20)
                ) {
                  return null;
                }
                return (
                  <div
                    key={noteIndex}
                    className="h-[50px] absolute top-0 flex items-center"
                    style={{
                      left: `${leftMargin}px`,
                      width: `${durationPx}px`,
                      transform: `translate(${offsetPx}px, ${
                        topMargin + getFretPosition(note.pitch, string) * 25
                      }px)`,
                    }}
                  >
                    <div
                      className={`h-[25px] w-full rounded-md pl-1 flex items-center ${
                        offsetPx <= 0 && offsetPx + durationPx >= 0
                          ? note.finger === 0 || note.flageolet
                            ? string === "G"
                              ? "border-4 border-blue-300"
                              : string === "D"
                              ? "border-4 border-amber-300"
                              : string === "A"
                              ? "border-4 border-red-300"
                              : "border-4 border-lime-300"
                            : string === "G"
                            ? "bg-blue-300"
                            : string === "D"
                            ? "bg-amber-300"
                            : string === "A"
                            ? "bg-red-300"
                            : "bg-lime-300"
                          : note.finger === 0 || note.flageolet
                          ? string === "G"
                            ? "border-4 border-blue-400"
                            : string === "D"
                            ? "border-4 border-amber-400"
                            : string === "A"
                            ? "border-4 border-red-400"
                            : "border-4 border-lime-400"
                          : string === "G"
                          ? "bg-blue-400"
                          : string === "D"
                          ? "bg-amber-400"
                          : string === "A"
                          ? "bg-red-400"
                          : "bg-lime-400"
                      }`}
                    >
                      <div
                        className={`relative w-0 ${
                          note.finger === 0 || note.flageolet
                            ? "right-5"
                            : "right-4"
                        }`}
                      >
                        {note.finger}
                      </div>
                      <div>{string}</div>
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          );
        })}
        <div
          className="h-full absolute border-r-2 border-red-500"
          style={{ width: `${leftMargin}px` }}
        />
        <div className="h-full w-[110px] absolute bg-gray-800 left-[40px] px-[5px]">
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
              className="w-full h-[50px] flex items-center absolute left-0"
              style={{
                top: `${topMargin + 25 * index}px`,
              }}
            >
              <div
                className={`w-full h-0 border-t-2 ${
                  label === "0"
                    ? "border-transparent"
                    : label === ""
                    ? "border-transparent"
                    : "border-slate-500"
                }`}
              />
            </div>
          ))}
          {["G", "D", "A", "E"].map((string, index) => (
            <div
              key={string}
              className={`h-full absolute -translate-x-1/2 ${
                string === "G"
                  ? "bg-blue-400"
                  : string === "D"
                  ? "bg-amber-400"
                  : string === "A"
                  ? "bg-red-400"
                  : "bg-lime-400"
              }`}
              style={{
                left: `${17.5 + index * 25}px`,
                width: `${
                  score.measures.some((measure, measureIndex) => {
                    const measureOffset = measureIndex * score.timeSignature;
                    return measure.notes.some(
                      (note) =>
                        (note.string ?? getDefaultString(note.pitch)) ===
                          string &&
                        (measureOffset + note.offset) * timeExtend <=
                          seekTime + time &&
                        (measureOffset + note.offset + note.duration) *
                          timeExtend >=
                          seekTime + time
                    );
                  })
                    ? 3
                    : 1
                }px`,
              }}
            />
          ))}
          {score.measures.map((measure, measureIndex) => {
            const measureOffset = measureIndex * score.timeSignature;
            return measure.notes.map((note, noteIndex) => {
              const string = note.string ?? getDefaultString(note.pitch);
              const noteStart = (measureOffset + note.offset) * timeExtend;
              const noteEnd =
                (measureOffset + note.offset + note.duration) * timeExtend;
              const currentTime = seekTime + time;
              if (
                noteStart - lookAheadTime > currentTime ||
                noteEnd < currentTime
              ) {
                return null;
              }
              return (
                <div
                  key={`${measureIndex}-${noteIndex}`}
                  className={`w-[25px] h-[25px] rounded-full absolute text-center ${
                    noteStart > currentTime
                      ? "border-2 bg-gray-800 text-white z-0"
                      : " text-black z-10"
                  } ${
                    noteStart > currentTime
                      ? string === "G"
                        ? "border-blue-400"
                        : string === "D"
                        ? "border-amber-400"
                        : string === "A"
                        ? "border-red-400"
                        : "border-lime-400"
                      : string === "G"
                      ? "bg-blue-300"
                      : string === "D"
                      ? "bg-amber-300"
                      : string === "A"
                      ? "bg-red-300"
                      : "bg-lime-300"
                  }
              }`}
                  style={{
                    transform: `translate(${
                      12.5 + ["G", "D", "A", "E"].indexOf(string) * 25
                    }px, ${
                      topMargin + 25 + getFretPosition(note.pitch, string) * 25
                    }px) translate(-50%, -50%)`,
                  }}
                >
                  {noteStart - currentTime > 0 && (
                    <div
                      className={`absolute -translate-x-1/2 -translate-y-1/2 top-[10.5px] left-[10.5px] rounded-full opacity-70 ${
                        string === "G"
                          ? "bg-blue-400"
                          : string === "D"
                          ? "bg-amber-400"
                          : string === "A"
                          ? "bg-red-400"
                          : "bg-lime-400"
                      }`}
                      style={{
                        width: `${
                          (1 - (noteStart - currentTime) / lookAheadTime) * 21
                        }px`,
                        height: `${
                          (1 - (noteStart - currentTime) / lookAheadTime) * 21
                        }px`,
                      }}
                    />
                  )}
                  <div
                    className={
                      noteStart > currentTime ? "mt-[-2px] relative" : ""
                    }
                  >
                    {note.finger}
                  </div>
                </div>
              );
            });
          })}
        </div>
      </div>
    </div>
  );
}
