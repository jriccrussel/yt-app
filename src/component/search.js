import React, { Component, useState } from 'react'


export const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');
    
    const onInputChange = (e) => {
        setTerm(e.target.value)
    }

    // handler function ni cya - pdi ra ilisan ang name
    const onSubmit = (e) => {
        e.preventDefault()

        // props ni cya
        // g pasa nato ang onTermSubmit callback sa onFormSubmit prop 
        // so onTermSubmit is eqaul to onFormSubmit
        // inig submit nato sa onFormSubmit(ang function) kato atong ge type sa input field e search or e refer nya kato ato g type solud and sa atong onChange na onInputChange naka set this.setState({ term: e.target.value }) mao iya g return or g basihan
        onFormSubmit(term)
    }
        
    return (
        <div className="search-bar ui segment">
            <form 
                className="ui form"
                onSubmit={onSubmit}
            >
                <div className="field">
                    <label>Video Search</label>
                    <input 
                        type="text" 
                        value={term}
                        onChange={onInputChange}
                    />
                </div>
            </form>
        </div>
    )
}
export default SearchBar

// export class SearchBar extends Component {
//     state = { term: '' }

//     onInputChange = (e) => {
//         this.setState({ term: e.target.value })
//     }

//     // handler function ni cya - pdi ra ilisan ang name
//     onFormSubmit = (e) => {
//         e.preventDefault()

        // props ni cya
        // g pasa nato ang onTermSubmit callback sa this.props.onFormSubmit prop 
        // so onTermSubmit is eqaul to this.props.onFormSubmit
        // inig submit nato sa onFormSubmit(ang function) kato atong ge type sa input field e search or e refer nya kato ato g type solud and sa atong onChange na onInputChange naka set this.setState({ term: e.target.value }) mao iya g return or g basihan
//         this.props.onFormSubmit(this.state.term)
//     }
        
//     render() {
//         return (
//             <div className="search-bar ui segment">
//                 <form 
//                     className="ui form"
//                     onSubmit={this.onFormSubmit}
//                 >
//                     <div className="field">
//                         <label>Video Search</label>
//                         <input 
//                             type="text" 
//                             value={this.state.value}
//                             onChange={this.onInputChange}
//                         />
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

// export default SearchBar