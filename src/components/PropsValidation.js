import React from 'react'
import PropTypes from 'prop-types'

class PropsValidation extends React.Component {
    render() {
        return (
            <div>
                <h3>Array:{this.props.propArray}</h3>
                <h3>Bool:{this.props.propBool}</h3>
                <h3>Function:{this.props.propFunc}</h3>
                <h3>Number:{this.props.propNumber}</h3>
                <h3>String:{this.props.propString}</h3>
                <h3>Object:{this.props.propObject.objectName1}</h3>
                <h3>Object:{this.props.propObject.objectName2}</h3>
                <h3>Object:{this.props.propObject.objectName3}</h3>
                
            </div>
        );
    }
}
PropsValidation.propTypes={
                    propArray:PropTypes.array.isRequired,
                    propBool:PropTypes.bool.isRequired,
                    propFunc:PropTypes.func,
                    propNumber:PropTypes.number,
                    propString:PropTypes.string,
                    propObject:PropTypes.object    
                    }

PropsValidation.defaultProps={
    propArray:[1,2,3,4,5],
    propBool:true,
    propFunc:(e)=> {return e},
    propNumber:1,
    propString:"String value...",

    propObject:{
        objectName1:"ObjectValue1",
        objectName2:"ObjectValue2",
        objectName3:"ObjectValue3"
            }
}
export default PropsValidation