import React, { useState } from 'react'
import './App.css'
import { tabs } from './Data/tabs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

  let [activeTab, setActiveTab] = useState(0);
  let [activeTabContent, setActiveTabContent] = useState(tabs[0]);

  let changeData = (index) => {
    setActiveTab(index);
    setActiveTabContent(tabs[index]);
  }

  let [formData, setFormData] = useState({
    uname: '',
    uemail: '',
    uphone: '',
    umessage: '',
    index: '',
  })



  let getValue = (event) => {
    let oldData = { ...formData };
    let CurrentInputName = event.target.name;
    let CurrentInputValue = event.target.value;
    // oldData[event.target.name]=event.target.value

    oldData[CurrentInputName] = CurrentInputValue;
    setFormData(oldData);
  }


  // let getValue = (event) => {
  //   let CurrentInputName = event.target.name;
  //   let CurrentInputValue = event.target.value;

  //   // Spread the old object, not array
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [CurrentInputName] : CurrentInputValue,
  //   }));
  // };

  let [userData, setUserData] = useState([]);

  let handleSubmit = (event) => {

    // if (formData.index !== '' && formData.index !== undefined) {
    //   // update
    //   let updatedData = [...userData];
    //   updatedData[formData.index] = currentUserFormData;
    //   setUserData(updatedData);
    // } else {
    //   // new
    //   setUserData([...userData, currentUserFormData]);
    // }


    let currentUserFormData = {
      uname: formData.uname,
      uemail: formData.uemail,
      uphone: formData.uphone,
      umessage: formData.umessage,
    }

    if (formData.index === '') {
      let checkFilterUser = userData.filter((v) => v.uemail === formData.uemail || v.uphone === formData.uphone);


      if (checkFilterUser.length === 1) {

        toast.error("Email or Phone already Exist...");

        // alert("Email or Phone already Exist...");

      } else {

        let oldData = [...userData, currentUserFormData]// old Array + New Array Elements(Data)
        console.log(oldData);

        setUserData(oldData);

        //reset
        setFormData({
          uname: '',
          uemail: '',
          uphone: '',
          umessage: '',
          index: '',
        });


      }
    } else {

      let editIndex = parseInt(formData.index);
      let oldData = userData;

      //doubtful my method 
      // let checkFilterUser = userData.filter((v,i)=> v.uemail === formData.uemail || v.uphone ===     formData.uphone &&  i !== editIndex);

      //chatgpt
      let checkFilterUser = userData.filter((v, i) => i !== editIndex &&
        (v.uemail === formData.uemail || v.uphone === formData.uphone)
      );



      if (checkFilterUser.length === 0) {

        oldData[editIndex]['uname'] = formData.uname;
        oldData[editIndex]['uemail'] = formData.uemail;
        oldData[editIndex]['uphone'] = formData.uphone;
        oldData[editIndex]['umessage'] = formData.umessage;

        setUserData(oldData);

        setFormData({
          uname: '',
          uemail: '',
          uphone: '',
          umessage: '',
          index: '',
        });
      }
      else {
        toast.error("Email or Phone already Exist...");
      }

    }

    event.preventDefault();
  }

  let deleteRow = (indexLoop) => {

    let filterDataAfteDelete = userData.filter((v, i) => i !== indexLoop);

    toast.success("deleted row successfully...        ");
    setUserData(filterDataAfteDelete);

  }

  let editRow = (indexNumber) => {

    let editData = userData.filter((v, i) => i === indexNumber)[0];
    // console.log(editData);
    editData['index'] = indexNumber;
    setFormData(editData);

  }



  // let handleDelete = (index) => {
  //   let updatedUsers = [...userData];
  //   updatedUsers.splice(index, 1);
  //   setUserData(updatedUsers);
  // };



  // let handleEdit = (index) => {
  //   let userToEdit = userData[index];
  //   setFormData({ ...userToEdit, index }); 
  // };




  return (
    <>
      <ToastContainer />
      <p className='text-start md:text-4xl font-bold-sm p-5 pb-10 pt-8'>Enquiry Now</p>



      <div className='flex w-full  '>


        <form onSubmit={handleSubmit} className='w-1/2 mx-[20px] border-[3px] rounded-md p-5 mb-10'>
          <p className='pb-1'>Name</p>
          <input type="text" onChange={getValue} value={formData.uname} className='border-2 rounded-md p-2 md:w-full' name='uname' ></input>

          <p className='pb-1 pt-10'>Email</p>
          <input type="email" onChange={getValue} value={formData.uemail} className='border-2 rounded-md p-2 md:w-full' name='uemail' ></input>

          <p className='pb-1 pt-10'>Phone</p>
          <input type="phone" onChange={getValue} value={formData.uphone} className='border-2 rounded-md p-2 md:w-full' name='uphone' ></input>

          <p className='pb-1 pt-10'>Message</p>
          <input type="text" onChange={getValue} value={formData.umessage} className='border-2 ring-2 ring-sky-500/100 rounded-md p-2 pb-[90px] md:w-full' name='umessage' placeholder='Type Here..' ></input>

          <button className='bg-sky-500/100 mt-6  text-white rounded-md py-2  w-1/6 '>
            {
              formData.index === '' ? 'Save' : 'Update'
            }
          </button>

        </form>

        <div className='border-2 w-1/2 mx-5 mb-10'>
          <table className="table-auto w-full border-collapse border">
            <thead>
              <tr className='bg-gray-200'>
                <th className='border px-4 py-2'>Id</th>
                <th className='border px-4 py-2'>Name</th>
                <th className='border px-4 py-2'>Email</th>
                <th className='border px-4 py-2'>Phone</th>
                <th className='border px-4 py-2'>Message</th>
                <th className='border px-4 py-2'>Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.length === 0 ?
                (
                  <tr>
                    <td colSpan="6" className="text-center py-4">No Data Found!</td>
                  </tr>
                ) : (
                  userData.map((user, index) => (
                    <tr key={index}>
                      <td className='border px-4 py-2'>{index + 1}</td>
                      <td className='border px-4 py-2'>{user.uname}</td>
                      <td className='border px-4 py-2'>{user.uemail}</td>
                      <td className='border px-4 py-2'>{user.uphone}</td>
                      <td className='border px-4 py-2'>{user.umessage}</td>
                      <td className='border px-4 py-2 space-x-2'>
                        <button className='bg-red-500 text-white rounded-md py-1 px-3'
                          //  onClick={() => handleDelete(index)}
                          onClick={() => deleteRow(index)}
                        >Delete</button>
                        <button className='bg-sky-500 text-white rounded-md py-1 px-3'
                          //  onClick={() => handleEdit(index)}
                          onClick={() => editRow(index)}
                        >Edit</button>
                      </td>
                    </tr>
                  ))
                )}
            </tbody>

          </table>

        </div>

      </div>

      <hr class="border-t-2 border-gray-300 my-4" />



      <h1 className='md:text-3xl text-center p-3 pb-10  '>Simple Tabbing of  Vision Mission and Values</h1>


      <div className='ring-2 ring-red-500 rounded shadow-md  pt-5 pb-5 ml-5 mr-[500px] mb-10 '>

        <ul className='flex  justify-start gap-8 pl-10'>
          {tabs.map((tabItem, index) => {
            return (
              <button key={index} onClick={() => { changeData(index) }} className={activeTab === index ? ' text-white bg-red-500 border-none py-2 px-4 rounded' : 'bg-slate-300 text-black border-none py-2 px-4 rounded'}>{tabItem.title}</button>
            )
          })}



        </ul>

        {activeTabContent.title !== undefined ?

          <div className='flex w-auto mx-10 pt-5  items-center align-center '>
            <p className='border-2  py-5' >
              {activeTabContent.description}
            </p>
          </div>

          :

          ''

        }

      </div>

    </>
  )
}
