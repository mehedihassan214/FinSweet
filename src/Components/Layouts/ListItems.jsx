import React from 'react'

const ListItems = ({className,link,title, ...attributes}) => {
  return (
    <li className={className} >
        <a href={link} {...attributes}>{title}</a>
    </li>
  )
}

export default ListItems

// import React from 'react'

// const Listitems = ({className,link,linkClassName,title}) => {
//   return (
//     <li className={className}><a href={link} className={linkClassName}>{title}</a></li>
//   )
// }

// export default Listitems