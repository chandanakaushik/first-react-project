import React from 'react';

function HelloWorld({ text, i }) {
  return (
    <>
      <div>
        <h1>
          Hello {text} {i}
        </h1>
      </div>
    </>
  );
}

// class ComponaName extends React.Component {
//   render() {
//     return (
//       <>
//         <div id="container" className="12345">
//           <h1>Hello world! abc</h1>
//         </div>
//       </>
//     );
//   }
// }

// export default ComponaName;
export default HelloWorld;
//Default export

export const HelloWorld1 = () => {
  const abc = '12356';
  return (
    <>
      <div id={abc} className="12345">
        <h1>Hello world!</h1>
      </div>
    </>
  );
};

//Named export
