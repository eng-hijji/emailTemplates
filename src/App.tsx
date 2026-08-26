import { useState } from "react";
import Email_Form from "./components/Form";
import Professional from "./components/professtional";
import Casual from "./components/casual";
import Formal from "./components/formal";
import Friendly from "./components/friendly";

function App() {
  const [formInfo, setFormInfo] = useState({
    firstName: "",
    lastName: "",
    receiverFirstName: "",
    receiverLastName: "",
    email: "",
    reeciverEmail: "",
    subject: "",
    content: "",
  });

const [hidden,setVisible]=useState({status:false,template:""});
  return (
    <div className="py-10 max-w-7xl mx-auto grid grid-cols-[40%_60%] gap-6 px-6 items-start">
    {  !hidden.status&&<Email_Form setFormInfo={setFormInfo} formInfo={formInfo} />}
      <div className={`border rounded-xl border-gray-300  px-6 py-4 ${hidden.status ? "fixed inset-0 flex items-center justify-center bg-white z-50" : "grid gap-4 lg:grid-cols-2 grid-cols-1"}`}>
      {  <Formal formInfo={formInfo} hidden={hidden} setVisible={setVisible} />}

        <Professional formInfo={formInfo} hidden={hidden} setVisible={setVisible}  />
        <Casual formInfo={formInfo} hidden={hidden} setVisible={setVisible}  />
        <Friendly formInfo={formInfo} hidden={hidden} setVisible={setVisible}  />
      </div>
    </div>
  );
}

export default App;
