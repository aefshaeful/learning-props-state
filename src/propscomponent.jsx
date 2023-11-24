// export default function Button({title, color, children}) {

//     const ButtonStyle = {
//         backgroundColor: color,
//     };
//     return (
//         <div>
//             <button className="button" style={ButtonStyle}>
//                 {title}
//             </button>
//             {children}
//         </div>
//     );
// }

export default function Button(props) {
  const { title, color, children } = props;

  const ButtonStyle = {
    backgroundColor: color,
  };
  return (
    <div>
      <button className="button" style={ButtonStyle}>
        {title}
      </button>
      {children}
    </div>
  );
}
