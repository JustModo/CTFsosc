import React,{useState} from "react";
import BackButton from "../components/BackButton";
import IncorrectModal from "../components/IncorrectModal"

export default function Challenge4() {
  const[userFlag,setUserFlag]=useState("");
  const [showModal, setShowModal] = useState(false);
  const answer = " soscCTF{byte}";
  function handleClick(){
     if(userFlag.trim().toLowerCase()===answer.toLowerCase())
      {
        progress=progress+1;
      }
      else{
        setShowModal(true);
      }
  }
 
  return (
    <>
     <div className="flex flex-col justify-start items-start w-full h-full ml-3" >
      <BackButton />
      <h1 className=" mb-10">Challenge 4</h1>
    <div>
    <p className="text-xl pb-5">Julius Caesar was a great king but did he have a cipher named after him? Decrypt the given message :<span className="text-red-400"> fbfpPGS{'{byq_vf_tbyq}'}</span></p>
    <p className="text-sm"><span className="text-green-400">Hint </span>: Try finding ROT13 decryptors online and use shift 13</p>
    </div>
    <div>
      <input
        id="flag-input"
        value={userFlag}
        className="rounded-lg bg-slate-900 outline-none pl-3 mt-5 w-64"
        placeholder="Enter Flag"
        style={{ fontSize: "0.9rem" }}
        onChange={(e) => setUserFlag(e.target.value)}
      />
      </div>
      <div>
      <button
        className="outline outline-white mt-10 px-2 rounded-lg text-center"
        style={{ fontSize: "0.9rem" }} onClick={handleClick}> submit
      </button>
      </div>
    </div>
    <IncorrectModal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Incorrect"
        message="The flag you entered is incorrect. Please try again."
      />
    </>
  );
}
