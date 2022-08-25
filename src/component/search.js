import React, { Component } from 'react'

export class SearchBar extends Component {
    state = { term: '' }

    onInputChange = (e) => {
        this.setState({ term: e.target.value })
    }

    // handler function ni cya - pdi ra ilisan ang name
    onFormSubmit = (e) => {
        e.preventDefault()

        // props ni cya
        // g pasa nato ang onTermSubmit callback sa this.props.onFormSubmit prop 
        // so onTermSubmit is eqaul to this.props.onFormSubmit
        // inig submit nato sa onFormSubmit(ang function) kato atong ge type sa input field e search or e refer nya kato ato g type solud and sa atong onChange na onInputChange naka set this.setState({ term: e.target.value }) mao iya g return or g basihan
        this.props.onFormSubmit(this.state.term)
    }
        
    render() {
        return (
            <div className="search-bar ui segment">
                <form 
                    className="ui form"
                    onSubmit={this.onFormSubmit}
                >
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.value}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar