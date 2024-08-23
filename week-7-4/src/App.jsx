import { useMemo } from 'react';
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atoms'
import { RecoilRoot, useRecoilValue } from 'recoil';


function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const messagingAtomCount= useRecoilValue(messagingAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // const totalNotificationCount = useMemo(()=>{
  //    return networkNotificationCount+jobsAtomCount+notificationAtomCount+messagingAtomCount;
  // }, [networkNotificationCount,jobsAtomCount,notificationAtomCount,messagingAtomCount])


  return (
    <>
      <button>Home</button>

      <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messages ({notificationAtomCount})</button>
      <button>Notification ({messagingAtomCount})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
