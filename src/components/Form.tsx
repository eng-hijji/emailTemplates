import React from 'react';

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

interface FormProps {
  setFormInfo: React.Dispatch<React.SetStateAction<FormInfo>>;
  formInfo: FormInfo;
}

export default function Email_Form({ setFormInfo, formInfo }: FormProps) {
  
  function update(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;


    setFormInfo((prev: FormInfo) => {
      return {
        ...prev,        
        [name]: value,    
      };
    });
  }

  return (
    <form className="px-6 py-4 grid gap-3 bg-slate-200 rounded-xl border border-gray-400">
      <div className="grid gap-2">
        <label htmlFor="firstName" className="font-semibold text-xl text-gray-700">enter your first name</label>
     
        <input value={formInfo.firstName} onChange={update} type="text" name="firstName" id="firstName" className="bg-white border border-gray-400 rounded-lg w-full px-3 py-1.5 text-lg font-medium "  />
      </div>
       <div className="grid gap-2">
        <label htmlFor="lastName" className="font-semibold text-xl text-gray-700">enter your last name</label>
        <input value={formInfo.lastName} onChange={update} type="text" name="lastName" id="lastName" className="bg-white border border-gray-400 rounded-lg w-full px-3 py-1.5 text-lg font-medium "  />
      </div>
       <div className="grid gap-2">
        <label htmlFor="receiverFirstName" className="font-semibold text-xl text-gray-700">enter receiver first name</label>
        <input value={formInfo.receiverFirstName} onChange={update} type="text" name="receiverFirstName" id="receiverFirstName" className="bg-white border border-gray-400 rounded-lg w-full px-3 py-1.5 text-lg font-medium "  />
      </div>
       <div className="grid gap-2">
        <label htmlFor="receiverLastName" className="font-semibold text-xl text-gray-700">enter receiver last name</label>
        <input value={formInfo.receiverLastName} onChange={update} type="text" name="receiverLastName" id="receiverLastName" className="bg-white border border-gray-400 rounded-lg w-full px-3 py-1.5 text-lg font-medium "  />
      </div>
        <div className="grid gap-2">
        <label htmlFor="email" className="font-semibold text-xl text-gray-700">enter your email</label>
        <input value={formInfo.email} onChange={update} type="email" name="email" id="email" className="bg-white border border-gray-400 rounded-lg w-full px-3 py-1.5 text-lg font-medium " />
      </div>
        <div className="grid gap-2">
        <label htmlFor="reeciverEmail" className="font-semibold text-xl text-gray-700">enter reeciver email</label>
        <input value={formInfo.reeciverEmail} onChange={update} type="email" name="reeciverEmail" id="reeciverEmail" className="bg-white border border-gray-400 rounded-lg w-full px-3 py-1.5 text-lg font-medium " />
      </div>
       <div className="grid gap-2">
        <label htmlFor="subject" className="font-semibold text-xl text-gray-700">enter subject</label>
        <input value={formInfo.subject} onChange={update} type="text" name="subject" id="subject" className="bg-white border border-gray-400 rounded-lg w-full px-3 py-1.5 text-lg font-medium " />
      </div>
        <div className="grid gap-2">
        <label htmlFor="content" className="font-semibold text-xl text-gray-700">enter email content</label>
      
        <textarea value={formInfo.content} onChange={update} name="content" id="content" className="bg-white border border-gray-400 rounded-lg w-full px-3 py-1.5 text-lg font-medium "></textarea>
      </div>
    </form>
  );
}
