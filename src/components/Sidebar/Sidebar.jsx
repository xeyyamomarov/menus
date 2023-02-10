import { Link } from "../Link/Link"
export const Sidebar=()=>{
    const links=[
        {label:"Dropdown",path:"/"},
        {label:"Accordion",path:"/accordion"},
        {label:"Buttons",path:"/buttons"},
        {label:"Modal",path:"/modal"},
        {label:"Table",path:"/table"}
    ];
    const renderedLink=links.map((link)=>{
        return <Link className="mb-3"
         key={link.label}
          to={link.path}
          activeClassName="font-bold border-l-4 border-blue-500 pl-2"

          >{link.label}</Link>
    })
    return (
        <div className="sticky top-0 overflow-hidden flex flex-col items-start">
        {/*  <div className="sticky top-0 overflow-y-scroll flex flex-col items-start"> */}
            {renderedLink}
        </div>
    )
}