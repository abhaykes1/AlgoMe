import React from 'react'
import './css/Constraints.css'
import { Colors } from '../constants/colors'
import MathJax from 'react-mathjax2'

export default function Constraints(props) {
    const program = props.program;
    return (
        <div className="ConstraintContainer">
            <h6 style={{color:Colors.primary}}>Input</h6>
            <blockquote>
                {
                    program.input.map((v,i) => {
                        return (
                            <div key={v}><p>{i+1}. {v}<br/></p></div>
                        )
                    })
                }
            </blockquote>  
            <h6 style={{color:Colors.primary}}>Output</h6>
            <blockquote>
                {
                    program.output.map((v,i) => {
                        return (
                            <div key={v}><p>{i+1}. {v}<br/></p></div>
                        )
                    })
                }
            </blockquote> 
            <h6 style={{color:Colors.primary}}>Constraints</h6>
            <blockquote>
                {
                    program.constraints.map((v,i) => {
                        const ascii = v;
                        return (
                            <div key={v}>
                                <MathJax.Context input='ascii'>
                                    <p>{i+1}. <MathJax.Node inline>{ascii}</MathJax.Node> <br/></p>
                                </MathJax.Context>
                            </div>
                        )
                    })
                }
            </blockquote> 
        </div>
    )
}
