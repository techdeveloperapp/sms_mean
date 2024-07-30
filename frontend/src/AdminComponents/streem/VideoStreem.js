import React, { useState, useRef, useEffect } from "react";
import axios from "../../store/axios";
import io from 'socket.io-client';
import SimplePeer from 'simple-peer';

const socket = io();

function VideoStreem() {
  const [users, setusers] = useState([]);
  const [loadingData, setloadingData] = useState(false);

  const [stream, setStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();
  const peerRef = useRef();



  const [restrictions, setrestrictions] = useState({
    Students: [
      { name: "New Registration", value: false },
      { name: "View Student Details", value: false },
      { name: "Edit Student", value: false },
      { name: "Student List", value: false },
      { name: "Manage Scholarships", value: false },
      { name: "Record Attendance", value: false },
      { name: "Manage Section", value: false },
      { name: "Manage Campuses", value: false },
      { name: "Manage Dormitories", value: false },
      { name: "Promotions/Demotions", value: false },
      { name: "Prefects", value: false },
      { name: "View Past Students", value: false },
      { name: "View Withdrawn Students", value: false },
      { name: "Delete Student", value: false },
      { name: "Withdraw Student", value: false },
      { name: "Re-enroll withdrawn Student", value: false },
    ],
    Academics: [
      { name: "Manage Divisions", value: false },
      { name: "Manage Classes", value: false },
      { name: "Manage Subjects", value: false },
      { name: "Manage Calendar", value: false },
      { name: "Notes", value: false },
      { name: "SBA", value: false },
      { name: "Year Groups", value: false },
      { name: "Terminal Reports", value: false },
      { name: "Manage Letters / Correspondences", value: false },
    ],
    HR: [
      { name: "Manage Departments", value: false },
      { name: "Add Staff", value: false },
      { name: "View Staff List/Details", value: false },
      { name: "Edit Staff Details", value: false },
      { name: "Staff Payroll", value: false },
      { name: "PAYE Deductions", value: false },
      { name: "Trustee", value: false },
      { name: "SSNIT Contributions", value: false },
      { name: "Staff Bank Details", value: false },
      { name: "PAYE Calculator", value: false },
      { name: "Delete/Archive Staff", value: false },
    ],
    Library: [
      { name: "Books categories", value: false },
      { name: "Books", value: false },
    ],
    Finance: [
      { name: "View Set fees", value: false },
      { name: "Set/Delete Fees", value: false },
      { name: "Prepare Bill", value: false },
      { name: "Bill Payment", value: false },
      { name: "Initiate e-Payment Request", value: false },
      { name: "Non-billable items payment", value: false },
      { name: "View Payments", value: false },
      { name: "Debtors Inventory module (View only)", value: false },
    ],
    VideoStream: [
        { name: "View Set fees", value: false },
      ],
  });

  useEffect(() => {
    setloadingData(true);
    async function getUserMedia() {
        const localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        setStream(localStream);
        localVideoRef.current.srcObject = localStream;
      }
      getUserMedia();
  
      socket.on('joined', id => {
        if (socket.id === id) {
          createPeer(true);
        } else {
          createPeer(false);
        }
      });
  
      socket.on('signal', data => {
        peerRef.current.signal(data.signal);
      });
  
      socket.emit('join', 'room1');
  }, []);

  function createPeer(isInitiator) {
    peerRef.current = new SimplePeer({ initiator: isInitiator, stream, trickle: false });

    peerRef.current.on('signal', data => {
      socket.emit('signal', { to: 'room1', signal: data });
    });

    peerRef.current.on('stream', remoteStream => {
      setRemoteStream(remoteStream);
      remoteVideoRef.current.srcObject = remoteStream;
    });
  }

  async function startScreenShare() {
    const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
    const screenTrack = screenStream.getVideoTracks()[0];
    peerRef.current.replaceTrack(stream.getVideoTracks()[0], screenTrack, stream);
    screenTrack.onended = () => {
      peerRef.current.replaceTrack(screenTrack, stream.getVideoTracks()[0], stream);
    };
  }

//   const handleCheckRole = (e, name) => {
//     console.log(e, name);

//     setrestrictions(
//       Object.entries(restrictions).map((val, arr) =>
//         val === e
//           ? (restrictions[val] = arr.map((obj) =>
//               obj.name === name ? { name, value: !obj.value } : obj
//             ))
//           : (restrictions[val] = arr)
//       )
//     );
//   };

  return (
    <div>
      {/* <div className=" mb-5">
        {loadingData ? (
          <>
            <div className="d-flex justify-content-center content__container">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </>
        ) : (
            <h1>LLLLL</h1>
        )}
      </div> */}

      
<div>
      <video ref={localVideoRef} autoPlay muted style={{ width: '300px', marginRight: '20px' }} />
      <video ref={remoteVideoRef} autoPlay style={{ width: '300px' }} />
      <button onClick={startScreenShare}>Share Screen</button>
    </div>
      
    </div>
  );
}

export default VideoStreem;
