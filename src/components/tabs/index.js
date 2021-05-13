import React, { useEffect, useState } from "react";

// export default function Tabs({ courses }) {
//   const [activeTab, setActiveTab] = useState(0);
//   const [tabData, setTabsData] = useState(0);

//   useLayoutEffect(() => {
//     effect
//     return () => {
//       cleanup
//     };
//   }, [courses])

//   const toggle = (tab) => {
//     if (activeTab !== tab) setActiveTab(tab);
//   };
//   const renderItro = () => {
//     return Object.entries(courses).map(([propcourses,{maDanhMuc}],index) => {
//         return <div key={propcourses}>
//         <Nav tabs>
//         <NavItem>
//           <NavLink
//             className={classnames({ active: activeTab === propcourses })}
//             onClick={() => {
//               toggle(propcourses);
//             }}
//           >
//             {maDanhMuc}
//           </NavLink>
//         </NavItem>
//       </Nav>
//         </div>
//     })
//   }
//   return (
//     <div>
//      {renderItro()}
//     </div>
//   );
// }

export default function Tabs({ children, active = 0 }) {
  const isEmpty = (v) => {
    return Object.keys(v).length === 0;
  };

  const [activeTab, setActiveTab] = useState(active);
  const [tabsData, setTabsData] = useState([]);
  useEffect(() => {
    let data = [];
    if (isEmpty(children) === false) {
      React.Children.forEach(children, (element) => {
        if (!React.isValidElement(element)) return;

        const {
          props: { tab, children },
        } = element;
        data.push({ tab, children });
      });
      // console.log(children);
      // children.map((list, idx) => {
      //   // const found = courses.find(courses => courses.maDanhMuc === list.danhMucKhoaHoc.maDanhMucKhoahoc)
      //   courses.forEach((course)=> {
      //     if(course.maDanhMuc === list.danhMucKhoaHoc.maDanhMucKhoahoc){
      //       console.log(list.danhMucKhoaHoc.maDanhMucKhoahoc,children[idx])
      //       data.push({},children[idx]);
      //     }
      //   })
      // })
      // courses.map((list, idx) => {
      //   tabData.push(list.maDanhMuc);
      // })
      // data.push(child);
    }
    // console.log("data",data)

    setTabsData(data);
  }, [children]);
  // console.log("children",children);
  // console.log('tabData',tabsData);
  // console.log('activeTab',activeTab);
  
  
  return (
    <div className="w-100">
      <ul className="nav nav-tabs">
          {
            tabsData.map((list,index) => (
              <li className="nav-item" key={index}>
                  <a 
                  className={`nav-link ${index === activeTab ? "active" : ""}`}
                  onClick={() => setActiveTab(index)}
                  >
                    {/* {console.log("list",list)} */}
                    {list.tab}
                    {/* {console.log("danh sach",list)} */}
                  </a>
              </li>
            ))
          }
      </ul>
      <div className="tab-content p-3">
          {tabsData[activeTab] && tabsData[activeTab].children}
      </div>
    </div>
  );
}

const TabPanes = ({children}) => {
  return {children}
}

Tabs.TabPanes= TabPanes;
