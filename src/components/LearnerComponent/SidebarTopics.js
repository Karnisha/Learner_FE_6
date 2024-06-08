import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/Learner/Navbarone.css";
// import logo from '../Images/logo.png';
import logo from "../../../src/Images/logo.png";

import { Document, Page } from "react-pdf";
import { useSelector } from "react-redux";

import { Link, Route } from "react-router-dom";
import PDFViewer from "./PDFViewer";
import PptViewerComponent from "./Pptxday";
import { CiMusicNote1 } from "react-icons/ci";
import { BsFiletypePdf, BsFiletypePpt } from "react-icons/bs";
import { FaFileAlt } from 'react-icons/fa';
import { CiYoutube } from "react-icons/ci";
import CourseDescription from "./CourseDescription";

import LearnerVideoViewer from "./LearnerVideoViewer";
import LearnerAudioViewer from "./LearnerAudioViewer";

function SidebarTopics() {
  const selectedCourse = useSelector((state) => state.enroll.selectedCourse);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const viewcourse = useSelector((state) => state.enroll.course[0]);

  const pdf = useSelector((state) => state.fetchPdf.material);
  useEffect(() => {
    console.log("selectedCourse",selectedCourse);
  }, [])
  const [folders, setFolders] = useState([
    {
      name: selectedCourse ? selectedCourse.enrolledCoursename : "Loading...",
      isOpen: false,
      // courseId:selectedCourse.enrolledCourseId,
      topics:
        selectedCourse && selectedCourse.topics
          ? selectedCourse.topics.map((topic) => ({
            name: topic.topicName,
            isOpen: false,
            topicId: topic.topicId,

            materials: topic.materials ? topic.materials.map((material) => (
              {
                materialId: material.materialId,
                materialname: material.materialName,
                materiallink: material.material,
                materialType: material.materialType

              }
            )) : <>loading...</>

          }))
          : [],
    },
  ]);
  useEffect(() => {
    console.log(folders);
  }, [])

  const [selectedComponent, setSelectedComponent] = useState(<CourseDescription course={selectedCourse} />);

  const toggleFolder = (index) => {
    const updatedFolders = [...folders];
    updatedFolders[index].isOpen = !updatedFolders[index].isOpen;
    setFolders(updatedFolders);
  };

  const toggleTopic = (folderIndex, topicIndex, e) => {
    e.stopPropagation();
    const updatedFolders = [...folders];
    if (updatedFolders[folderIndex].topics[topicIndex].isOpen) {
      updatedFolders[folderIndex].topics[topicIndex].isOpen = false;
    } else {

      updatedFolders[folderIndex].topics.forEach((topic) => {
        topic.isOpen = false;
      });
      updatedFolders[folderIndex].topics[topicIndex].isOpen = true;
    }
    setFolders(updatedFolders);
  };
  const toggleType = (folderIndex, topicIndex, typeIndex, e) => {
    e.stopPropagation();
    console.log("oo")
    const updatedFolders = [...folders];

    if (updatedFolders[folderIndex].topics[topicIndex].materialType[typeIndex].isOpen) {
      updatedFolders[folderIndex].topics[topicIndex].materialType[typeIndex].isOpen = false;
    } else {
      updatedFolders[folderIndex].topics[topicIndex].materialType.forEach((type) => {
        type.isOpen = false;
      });
      updatedFolders[folderIndex].topics[topicIndex].materialType[typeIndex].isOpen = true;
    }

    setFolders(updatedFolders);
  };
  const navigate = useNavigate();
  // const handleFileClick = (file) => {
  //   switch (file) {
  //     case "PPT":
  //       setSelectedComponent(
  //         <div style={{ width: '100%', height: '100vh' }}>
  //           <PptViewerComponent Document={materiallink}/>
  //         </div>
  //       );

  //       break;
  //     case "PDF":
  //       setSelectedComponent(<PDFViewer Document={"k"}/>);

  //       // setSelectedComponent( <a href="">{pdf.length > 0 && pdf[0].name}</a>);

  //       // navigate('/PDF');
  //       // setSelectedComponent(
  //       //   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  //       //     {/* navigate('/PDF'); */}
  //       //     {/* <Route file={'/PDF'} onLoadSuccess={onDocumentLoadSuccess}>
  //       //       <Page pageNumber={pageNumber} />
  //       //     </Route> */}
  //       //   </div>
  //       // );
  //       break;
  //     case "AssessmentEvaluation1.2":
  //       // Set the component for AssessmentEvaluation1.2
  //       break;
  //     default:
  //       setSelectedComponent(null);
  //       break;
  //   }
  // };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const opencontent = (type, materiallink,materialId) => {
    console.log("io" + type)
    console.log("link" + materiallink)
    switch (type) {
      case "PPT":
        setSelectedComponent(
          <div style={{ width: '100%', height: '100vh' }}>
            <PptViewerComponent Document={materiallink} />
            <div>oneone</div>
          </div>
        );
        break;
      case "PDF":
        setSelectedComponent(<PDFViewer material={materiallink} />);

        // setSelectedComponent( <a href="">{pdf.length > 0 && pdf[0].name}</a>);

        // navigate('/PDF');
        // setSelectedComponent(
        //   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        //     {/* navigate('/PDF'); */}
        //     {/* <Route file={'/PDF'} onLoadSuccess={onDocumentLoadSuccess}>
        //       <Page pageNumber={pageNumber} />
        //     </Route> */}
        //   </div>
        // );
        break;
      case "VIDEO":
        setSelectedComponent(<LearnerVideoViewer material={materiallink} materialId={materialId} />);
        break;
      case "AUDIO":
        setSelectedComponent(<LearnerAudioViewer material={materiallink} />)
        console.log("audio",materiallink);
        break;
      case "DOCX":
        // setSelectedComponent(<DocxViewer material={materiallink}/>);
        break;
      default:
        // setSelectedComponent(<CourseDescription course={selectedCourse}/>);         for emg
        break;
    }
  }
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div className="logo">
              <img
                src={logo}
                alt="Logo"
                style={{ width: 100, height: 25 }}
                className="rounded-pill"
              />
            </div>
          </a>
          {/* <button type="button" class="btn btn-primary">Back</button> */}

          <Link className="btn btn-primary" to={`/LearnerenrolledCourse`}>
            Back
          </Link>
        </div>

      </nav>
      <div className="d-flex">




        <div className="side">



          <ul className="tree" style={{ width: 250 }}>
            {folders.map((folder, folderIndex) => (
              <li key={folderIndex} className={`folder ${folder.isOpen ? "open" : ""}`} onClick={() => toggleFolder(folderIndex)}>
                {folder.isOpen ? "-" : "+"} {folder.name}
                {folder.isOpen && (
                  <ul>
                    {folder.topics?.map((topic, topicIndex) => (
                      <li key={topicIndex} className={`folder ${topic.isOpen ? "open" : ""}`} onClick={(e) => toggleTopic(folderIndex, topicIndex, e)}>
                        {topic.isOpen ? "-" : "+"} {topic.name}
                        {topic.isOpen && (
                          <ul type="none">
                            {topic.materials.map((content, contentIndex) => (

                              <li key={contentIndex} className="file" onClick={(e) => { opencontent(content.materialType, content.materiallink,content.materialId) }}>
                                {content.materialType === 'VIDEO' ? <><CiYoutube className="icon" style={{ color: 'blue', fontSize: '20px' }} /></> : content.materialType == 'AUDIO' ? <><CiMusicNote1 className="icon" style={{ color: 'blue' }} /></> : content.materialType == 'TEXT' ? <><FaFileAlt className="icon" style={{ color: 'red' }} /></> : content.materialType == 'PDF' ? <><BsFiletypePdf className="icon" style={{ color: 'red' }} /></> : <><BsFiletypePpt className="icon" style={{ color: 'red' }} /></>}
                                {content.materialname}
                              </li>
                            ))}

                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="content">
          {selectedComponent}
          {/* <a href="">{pdf.length > 0 && pdf[0].name}</a> */}
        </div>

        {/* <div class="scroll" style={{width:10000}}>

            <PDFViewer/>                  
        </div> */}
        <div></div>

        <a href="">{pdf.length > 0 && pdf[0].name}</a>
      </div>
    </div>
  );
}

export default SidebarTopics;