export interface FormInfo {
  firstName: string;
  lastName: string;
  receiverFirstName: string;
  receiverLastName: string;
  email: string;
  reeciverEmail: string;
  subject: string;
  content: string;
}
interface hidden {
  status: boolean;
  template: string;
}
interface Props {
  formInfo: FormInfo;
  hidden: hidden;
  setVisible: React.Dispatch<React.SetStateAction<hidden>>;
}
export default function Casual({ formInfo, hidden, setVisible }: Props) {
  function set() {
    if (Object.values(formInfo).some(val => val.trim() !== "")) {
      setVisible({ status: true, template: "Casual" });
    }
  }
  return (
    <div className={`border rounded-xl p-3 grid gap-3 cursor-pointer hover:bg-slate-100 hover:scale-105 transition duration-300 ease ${hidden.status ? hidden.template === "Casual" ? "block" : "hidden" : ""} `} onClick={set}>
      <h1 className="text-lg font-semibold border-b border-gray-300 pb-3">
        {formInfo.subject}
      </h1>
      <div className="grid gap-3">
        <div className="grid gap-1">
          <div className="font-medium tracking-wide">
            <span className="font-bold">From:</span> {formInfo.firstName} {formInfo.lastName} &lt;{formInfo.email}&gt;
          </div>
          <div className="font-medium tracking-wide">
            <span className="font-bold">To:</span> {formInfo.receiverFirstName} {formInfo.receiverLastName} &lt;{formInfo.reeciverEmail}&gt;
          </div>
        </div>
        <div>
          <span className="font-semibold">Subject:</span> {formInfo.subject}
        </div>
        <div className="font-medium">
          Hey {formInfo.receiverFirstName},
        </div>
        <div className="font-medium text-[14px]">{formInfo.content}</div>
        <div className="grid gap-1">
          <div>Thanks!</div>
          <div>
            {formInfo.firstName}
          </div>
        </div>
      </div>
         <div className="text-center font-bold text-lg">Casual</div>
    </div>
  );
}
