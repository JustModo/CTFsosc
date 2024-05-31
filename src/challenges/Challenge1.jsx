import React from "react";
import BackButton from "../components/BackButton";
import Bluetooth from "../assets/bluetooth.png";
import Youtube from "../assets/youtube.png";
import Terminal from "../assets/terminal.png";
import Edge from "../assets/edge.png";

export default function Challenge1() {
  return (
    <div className="flex flex-col w-full h-full justify-between">
      <BackButton />

      <div className="flex flex-col w-full p-4 justify-between items-center ">
        <h1 className="mb-10">Challenge 1</h1>
        <p className="text-base text-justify">
          Find the flag in the characters of the words represented by the
          letters of the following images:
        </p>
        <div className="flex w-11/12 justify-center items-center gap-5 my-5">
          <div className="flex-1 flex justify-center">
            <img
              className="max-w-full h-auto"
              src={Bluetooth}
              alt="Bluetooth"
            />
          </div>
          <div className="flex-1 flex justify-center">
            <img className="max-w-full h-auto" src={Youtube} alt="Youtube" />
          </div>
          <div className="flex-1 flex justify-center">
            <img className="max-w-full h-auto" src={Terminal} alt="Terminal" />
          </div>
          <div className="flex-1 flex justify-center">
            <img className="max-w-full h-auto" src={Edge} alt="Edge" />
          </div>
        </div>
        <p className="text-sm text-justify px-3 mt-5">
          {`Use the word as the flag in the format:`}
        </p>
        <p className="text-sm text-justify px-3 text-teal-500">{`soscCTF{XXXX}`}</p>
      </div>
      <div className="flex flex-col w-full p-4 justify-center items-center ">
        <input
          id="answer"
          className="rounded-lg bg-slate-900 outline-none pl-3 mt-3 w-full py-1"
          placeholder="Answer"
          style={{ fontSize: "0.9rem" }}
          // onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="outline outline-white mt-5 px-2 rounded-lg text-center w-full btn bg-black text-white"
          style={{ fontSize: "0.9rem" }}
          // onClick={handleNext}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
