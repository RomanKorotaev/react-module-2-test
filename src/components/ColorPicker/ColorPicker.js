import React, { Component } from 'react';
// import s from  './ColorPicker.module.css';
import  './ColorPicker.css';

class ColorPicker extends Component {
    state = {
        actveOptionIdx: 2,
    }

    setActiveIndex = index => {
        this.setState({ actveOptionIdx: index})
    }

    makeOptionClassName = index => {
        const optionClasses = ['ColorPicker__option']

        if (index === this.state.actveOptionIdx) {
            optionClasses.push('ColorPicker__option__active')
        }
        return optionClasses.join(' ');
    }

    render() {
        const { actveOptionIdx } = this.state;
        const { options } = this.props;

        const { label } = options[actveOptionIdx];
        
        return (
            <div className="ColorPicker">
                <h2 className="ColorPicker__title">Color Picker</h2>
                <p>Выбран цвет: {label}</p>
      <div>
                    {options.map(({ label, color }, index) => (
                       
                        
                            <button
                            key={label}
                            className={this.makeOptionClassName(index) }
                            style={{
                                backgroundColor: color
                            }}
                            onClick={  ()=>this.setActiveIndex(index) }
                            ></button>
                        
          
                    ))}
      </div>
    </div> 
        )
    }
    
}


export default ColorPicker;

// class ColorPicker extends Component {
//   state = {
//     activeOptionIdx: 0,
//   };

//   setActiveIdx = index => {
//     this.setState({ activeOptionIdx: index });
//   };

//   makeOptionClassName = index => {
//       const optionClasses = ['ColorPicker__option'];

//     if (index === this.state.activeOptionIdx) {
//       optionClasses.push('ColorPicker__option--active');
//     }

//     return optionClasses.join(' ');
//   };

//   render() {
//     const { activeOptionIdx } = this.state;
//     const { options } = this.props;
//     const { label } = options[activeOptionIdx];

//     return (
//         <div className="ColorPicker">
//             <h2 className="ColorPicker__title">Color Picker</h2>
//         <p>Выбран цвет: {label}</p>
//         <div>
//           {options.map(({ label, color }, index) => (
//             <button
//               key={label}
//               className="this.makeOptionClassName(index)"
//               style={{ backgroundColor: color }}
//               onClick={() => this.setActiveIdx(index)}
//             ></button>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default ColorPicker;