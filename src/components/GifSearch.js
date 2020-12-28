import React, { Component } from 'react';

class GifSearch extends Component{
    render(){
        return(
            <div>
                <form align="right" >
                    <label>Enter a Search Term:</label><br></br>
                    <input type="text" name="search" /><br></br>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default GifSearch